import type React from "react"
import "./globals.css" // Adjusted path
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils" // Assuming utils.ts is in src/lib

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "SDE Portfolio | Dhruv Sarkar",
  description: "Modern portfolio of Dhruv Sarkar, an aspiring Software Engineer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
