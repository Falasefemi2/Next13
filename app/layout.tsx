import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Femmie Codes',
  description: 'Learning Next JS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
