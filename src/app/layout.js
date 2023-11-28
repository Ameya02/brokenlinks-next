import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Broken Links Finder',
  description: 'Any Broken Link it will be found',
  icons: {
    icon: "../../public/brokenlinks.svg",
    
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
