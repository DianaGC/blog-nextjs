import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './root.component'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <div className="md:flex" >
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"><SideNav /></div>
          <div className="w-full flex none md: w-64">{children}</div>
        </div>
      </body>
    </html>
  )
}
