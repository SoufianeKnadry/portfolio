"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Project } from "./Project"
import { ProjectDetail } from "./ProjectDetail"
import "../styles/Projects.css"

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const carouselRef = useRef(null)

  const projectsData = [...Array(10)].map((_, index) => ({
    id: index,
    title: `Project ${index + 1}`,
    description: `This is a detailed description of Project ${index + 1}. It includes information about the project's goals, technologies used, and outcomes achieved.`,
  }))

  useEffect(() => {
    const updateTotalSlides = () => {
      const isMobile = window.innerWidth < 768
      setTotalSlides(isMobile ? projectsData.length : Math.ceil(projectsData.length / 2))
    }

    updateTotalSlides()
    window.addEventListener("resize", updateTotalSlides)
    return () => window.removeEventListener("resize", updateTotalSlides)
  }, [projectsData.length])

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1))
    } else {
      setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0))
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  const handleProjectClick = (index) => {
    setSelectedProject(projectsData[index])
  }

  const closeProjectDetail = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
          <button
            onClick={() => scroll("left")}
            className="scroll-button scroll-button-left"
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="projects-carousel" ref={carouselRef}>
            {projectsData.map((project, index) => (
              <div key={project.id} className="carousel-item">
                <Project index={index} onClick={handleProjectClick} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="scroll-button scroll-button-right"
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={closeProjectDetail} />}
    </section>
  )
}

