
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Maya Reynolds | Santa Monica Therapist",
  description:
    "Explore therapy for anxiety, trauma, burnout, and perfectionism with Dr. Maya Reynolds in Santa Monica, California, or through secure telehealth across California.",
  keywords: [
    "therapist Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy",
    "EMDR therapy",
    "California telehealth therapist",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
