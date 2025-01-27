"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Home } from "@/components/Home.js"
import { About } from "@/components/About.js"
import { Skills } from "@/components/Skills.js"
import { Projects } from "@/components/Projects.js"
import { Contact } from "@/components/Contact.js"
import { Header } from "@/components/Header.js"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const homeSectionRef = useRef(null)

  useEffect(() => {
    if (!homeSectionRef.current) return

    // GSAP animation for fading out the Home section
    gsap.to(homeSectionRef.current, {
      opacity: 0, // Fade out completely
      scrollTrigger: {
        trigger: homeSectionRef.current,
        start: "top top", 
        end: "bottom top", 
        scrub: true, 
      },
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home" ref={homeSectionRef} className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}
