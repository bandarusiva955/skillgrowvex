import { auth, currentUser } from "@clerk/nextjs/server";
import { UserRole } from "@prisma/client";
import { db } from "./db";
import { notifyAdminNewSignup } from "./notify";

export function resolveRoleForClerkId(clerkId: string): UserRole {
  if (clerkId === process.env.SUPER_ADMIN_ID) {
    return UserRole.SUPER_ADMIN;
  }
  return UserRole.STUDENT;
}

export async function getAuthUser() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await db.user.findUnique({
    where: { clerkId: userId },
  });

  return user;
}

export async function requireAuth() {
  const user = await getAuthUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function requireRole(allowedRoles: UserRole[]) {
  const user = await requireAuth();
  if (!allowedRoles.includes(user.role)) {
    throw new Error("Forbidden");
  }
  return user;
}

export async function requireAdmin() {
  return requireRole([UserRole.ADMIN, UserRole.SUPER_ADMIN]);
}

export async function syncUserFromClerk() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const email = clerkUser.emailAddresses[0]?.emailAddress;
  if (!email) return null;

  const role = resolveRoleForClerkId(clerkUser.id);
  const existing = await db.user.findUnique({ where: { clerkId: clerkUser.id } });

  const user = await db.user.upsert({
    where: { clerkId: clerkUser.id },
    update: {
      email,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      avatarUrl: clerkUser.imageUrl,
      ...(role === UserRole.SUPER_ADMIN ? { role } : {}),
    },
    create: {
      clerkId: clerkUser.id,
      email,
      firstName: clerkUser.firstName,
      lastName: clerkUser.lastName,
      avatarUrl: clerkUser.imageUrl,
      role,
    },
  });

  if (!existing) {
    await notifyAdminNewSignup({
      name: [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || email,
      email,
      clerkId: clerkUser.id,
    }).catch(() => {});
  }

  return user;
}
