
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../styles/Header.css"  

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase())
    if (section.id == "home" ){
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
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

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <header className="header">
      <div className="container">
        <div className="flex">
          <div className="flex-1">
            <button
              onClick={() => scrollToSection("home")}
              className="logo"
            >
              Knadry Soufiane
            </button>
          </div>
         
          <nav className="nav-items">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
