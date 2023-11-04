import { Inter , Poppins } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/shared/navbar"
import Footbar from '@/components/shared/footbar'
import ChatbotButton from '@/components/shared/chatbotButton'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chikitsa सलाह',
  description: 'Health app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footbar />

        </body>
    </html>
  )
}
