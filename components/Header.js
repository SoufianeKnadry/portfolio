"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../styles/Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
   
    const section = document.getElementById(sectionId)
    if (section.id == "home" ){
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    else if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header")
      if (window.scrollY > 0) {
        header.classList.add("shadow-md")
      } else {
        header.classList.remove("shadow-md")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["home", "about", "skills", "projects", "contact"]

  return (
    <header className="bg-[var(--color-background)] fixed w-full z-50 top-0 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 " id="mobile-header">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              Knadry Soufiane
            </button>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-[var(--color-background)] rounded-md p-2 inline-flex items-center justify-center text-[var(--color-text)] hover:text-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xl font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)] capitalize"

              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] w-full text-left capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

