import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'


export default function Home() {
  return (
    <>
      <Head>
        <title>Markbiz Digital - Transform Your Digital Presence</title>
        <meta name="description" content="Transform your business with our expert digital marketing services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <Navbar />
        <Hero />
        <LogoCarousel />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}