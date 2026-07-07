import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import QRCode from "qrcode";
import { generateCertificateId } from "./utils";
import { db } from "./db";
import { getAppUrl } from "./env";

const NAVY = rgb(0.04, 0.1, 0.16);
const GOLD = rgb(0.83, 0.63, 0.09);
const WHITE = rgb(1, 1, 1);
const GRAY = rgb(0.4, 0.4, 0.4);

interface CertificateData {
  studentName: string;
  programName: string;
  duration: string;
  skillsCovered: string[];
  score: number;
  certificateId: string;
  issueDate: string;
  verificationUrl: string;
}

export async function generateCertificatePDF(
  data: CertificateData
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]); // A4 landscape
  const { width, height } = page.getSize();

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  // Background
  page.drawRectangle({ x: 0, y: 0, width, height, color: WHITE });

  // Border
  page.drawRectangle({
    x: 30,
    y: 30,
    width: width - 60,
    height: height - 60,
    borderColor: GOLD,
    borderWidth: 3,
  });
  page.drawRectangle({
    x: 40,
    y: 40,
    width: width - 80,
    height: height - 80,
    borderColor: NAVY,
    borderWidth: 1,
  });

  // Header
  page.drawText("SKILLGROWVEX ACADEMY", {
    x: width / 2 - 140,
    y: height - 80,
    size: 24,
    font: helveticaBold,
    color: NAVY,
  });

  page.drawText("Empowering Talent. Building Futures.", {
    x: width / 2 - 120,
    y: height - 105,
    size: 10,
    font: helvetica,
    color: GOLD,
  });

  // Certificate title
  page.drawText("CERTIFICATE OF COMPLETION", {
    x: width / 2 - 130,
    y: height - 150,
    size: 18,
    font: helveticaBold,
    color: NAVY,
  });

  // Decorative line
  page.drawLine({
    start: { x: width / 2 - 100, y: height - 160 },
    end: { x: width / 2 + 100, y: height - 160 },
    thickness: 2,
    color: GOLD,
  });

  // Body
  page.drawText("This is to certify that", {
    x: width / 2 - 60,
    y: height - 200,
    size: 12,
    font: helvetica,
    color: GRAY,
  });

  page.drawText(data.studentName, {
    x: width / 2 - data.studentName.length * 5,
    y: height - 230,
    size: 28,
    font: timesItalic,
    color: NAVY,
  });

  page.drawText("has successfully completed the internship program", {
    x: width / 2 - 140,
    y: height - 265,
    size: 12,
    font: helvetica,
    color: GRAY,
  });

  page.drawText(data.programName, {
    x: width / 2 - data.programName.length * 4,
    y: height - 295,
    size: 20,
    font: helveticaBold,
    color: GOLD,
  });

  // Details
  const detailsY = height - 340;
  const details = [
    `Duration: ${data.duration}`,
    `Score: ${data.score}%`,
    `Skills: ${data.skillsCovered.join(", ")}`,
    `Certificate ID: ${data.certificateId}`,
    `Issue Date: ${data.issueDate}`,
  ];

  details.forEach((detail, i) => {
    page.drawText(detail, {
      x: width / 2 - 150,
      y: detailsY - i * 20,
      size: 10,
      font: helvetica,
      color: GRAY,
    });
  });

  // QR Code
  const qrDataUrl = await QRCode.toDataURL(data.verificationUrl, {
    width: 80,
    margin: 1,
    color: { dark: "#0a1929", light: "#ffffff" },
  });
  const qrImageBytes = Buffer.from(qrDataUrl.split(",")[1], "base64");
  const qrImage = await pdfDoc.embedPng(qrImageBytes);
  page.drawImage(qrImage, {
    x: width - 150,
    y: 60,
    width: 70,
    height: 70,
  });
  page.drawText("Scan to Verify", {
    x: width - 155,
    y: 50,
    size: 8,
    font: helvetica,
    color: GRAY,
  });

  // Signature
  page.drawLine({
    start: { x: 100, y: 90 },
    end: { x: 250, y: 90 },
    thickness: 1,
    color: NAVY,
  });
  page.drawText("Bandaru Siva", {
    x: 130,
    y: 75,
    size: 12,
    font: helveticaBold,
    color: NAVY,
  });
  page.drawText("Founder & Program Director", {
    x: 105,
    y: 60,
    size: 9,
    font: helvetica,
    color: GRAY,
  });

  return pdfDoc.save();
}

export async function createCertificate(params: {
  userId: string;
  internshipId: string;
  studentName: string;
  programName: string;
  duration: string;
  skillsCovered: string[];
  score: number;
  issuedBy?: string;
}) {
  const count = await db.certificate.count();
  const certificateId = generateCertificateId(count + 1);
  const verificationUrl = `${getAppUrl()}/verify?id=${certificateId}`;
  const issueDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const pdfBytes = await generateCertificatePDF({
    ...params,
    certificateId,
    issueDate,
    verificationUrl,
  });

  const qrCodeUrl = await QRCode.toDataURL(verificationUrl, {
    width: 200,
    margin: 2,
    color: { dark: "#0a1929", light: "#ffffff" },
  });

  const certificate = await db.certificate.create({
    data: {
      certificateId,
      userId: params.userId,
      internshipId: params.internshipId,
      studentName: params.studentName,
      programName: params.programName,
      duration: params.duration,
      skillsCovered: params.skillsCovered,
      score: params.score,
      verificationUrl,
      issuedBy: params.issuedBy,
      qrCodeUrl,
    },
  });

  return { certificate, pdfBytes };
}
