import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustumNavbar from "@/components/CustumNavbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer/>
        <CustumNavbar/>
        <div className="mt-2 ">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}