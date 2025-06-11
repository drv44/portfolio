import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "SDE Portfolio | Dhruv Sarkar",
  description: "Modern portfolio of Dhruv Sarkar, an aspiring Software Engineer.",
  viewport: "width=device-width, initial-scale=1"
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
