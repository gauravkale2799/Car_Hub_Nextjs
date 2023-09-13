import './globals.css'
import { Footer, Navbar } from '@/components'
export const metadata = {
  title: 'CAR_HUB',
  description: 'discovere the best cars in the world', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
          {children}
          <Footer/>
        
        {children}</body>
    </html>
  )
}
