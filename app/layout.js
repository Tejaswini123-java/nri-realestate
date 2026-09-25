import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PopupForm from '@/components/PopupForm'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata = {
  title: 'Navi Mumbai NRI Homes | Invest in Panvel, Kharghar, Seawoods, Vashi & Ulwe',
  description:
    'A dedicated real-estate portal for NRIs investing in Navi Mumbai — curated RERA-registered projects across Panvel, Kharghar, Seawoods-Nerul, Vashi-Sanpada and Ulwe, with end-to-end NRI buying assistance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
        <PopupForm />
      </body>
    </html>
  )
}
