import type React from "react"
import type { Metadata } from "next"
import { Space_Mono, Black_Ops_One } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

const blackOpsOne = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-black-ops-one",
})

export const metadata: Metadata = {
  title: "Sector PiggyBanx",
  description: "Exclusive collectibles",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${blackOpsOne.variable} font-mono`}>{children}</body>
    </html>
  )
}
