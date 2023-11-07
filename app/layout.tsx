import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> <main className='flex flex-row lg:justify-center lg:items-center md:items-center sm:items-center sm:justify-center md:justify-center items-center w-screen min-h-screen bg-[#D6DDE6]'>
        <div className='lg:w-screen sm:w-full sm:h-screen'>
          {children}
        </div>
      </main></body>
    </html>
  )
}
