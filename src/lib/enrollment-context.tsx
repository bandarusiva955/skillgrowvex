"use client";

import { createContext, useContext, useState } from "react";

interface EnrollmentContextType {
  isOpen: boolean;
  courseTitle?: string;
  openEnrollment: (course?: string) => void;
  closeEnrollment: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function EnrollmentProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState<string>();

  const openEnrollment = (course?: string) => {
    setCourseTitle(course);
    setIsOpen(true);
  };

  const closeEnrollment = () => {
    setIsOpen(false);
    setCourseTitle(undefined);
  };

  return (
    <EnrollmentContext.Provider value={{ isOpen, courseTitle, openEnrollment, closeEnrollment }}>
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within EnrollmentProvider");
  }
  return context;
}
