import Image from 'next/image'
import RootLayout from './layout'
import Layout from './home/blog-details/layout'
import { Component } from 'react'
import  Dashboard  from "././home/components/home/Dashboard"

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Dashboard></Dashboard>

    </main>
  )
}
