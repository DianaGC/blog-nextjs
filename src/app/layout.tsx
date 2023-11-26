import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './root.component'
import { INFORMATION_PAGE } from './shared/constants/information'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] ">
        <header className="text-xl font-bold leading-[3rem]">{INFORMATION_PAGE.TITLE}</header>
        <main className="py-2 md:flex">
          <div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"><SideNav /></div>
          </div>
          <div>
            {children}
          </div>
        </main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} {INFORMATION_PAGE.AUTHOR}
        </footer>
      </body>
    </html>
  )
}

