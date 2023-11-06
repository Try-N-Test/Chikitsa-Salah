import { Inter , Poppins } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/shared/navbar"
import Footbar from '@/components/shared/footbar'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Chikitsa सलाह',
  description: 'Health app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footbar />

        </body>
    </html>
  )
}
