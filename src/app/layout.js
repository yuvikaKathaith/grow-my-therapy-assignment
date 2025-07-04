import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400"], 
});

export const metadata = {
  title: "Dr. Serena Blake, PsyD (Clinical Psychologist)",
  description: "Personal Website of Dr. Serena Blake",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased`}
      >
        <Toaster position="top-right" reverseOrder={true} />
        {children}
      </body>
    </html>
  );
}
