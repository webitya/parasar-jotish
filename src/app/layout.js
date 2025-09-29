import { Inter } from "next/font/google"
import "./globals.css"
import { SocketProvider } from "@/components/providers/socket-provider"
import { AuthProvider } from "@/components/providers/auth-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dr D Mahto - Connect with Expert Astrologer",
  description: "Book sessions with experienced astrologer Dr D Mahto for guidance on life, career, relationships and more.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SocketProvider>
            {children}
            <Toaster />
          </SocketProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
