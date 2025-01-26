"use client"

import { User, GraduationCap, Briefcase } from "lucide-react"
import "../styles/About.css"

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card about-card-right">
            <div className="about-card-content">
              <User className="about-card-icon" size={24} />
              <h3 className="about-card-title">Myself</h3>
              <p className="about-card-text">
                I'm Knadry Soufiane, a passionate web developer and designer. I love creating beautiful, functional
                websites that provide great user experiences.
              </p>
            </div>
          </div>

          <div className="about-card about-card-left">
            <div className="about-card-content">
              <GraduationCap className="about-card-icon" size={24} />
              <h3 className="about-card-title">Education</h3>
              <p className="about-card-text">
                I hold a degree in Computer Science from XYZ University. I'm constantly learning and staying up-to-date
                with the latest web technologies and design trends.
              </p>
            </div>
          </div>

          <div className="about-card about-card-right">
            <div className="about-card-content">
              <Briefcase className="about-card-icon" size={24} />
              <h3 className="about-card-title">Other</h3>
              <p className="about-card-text">
                Beyond coding, I enjoy photography, hiking, and contributing to open-source projects. I believe in
                creating a positive impact through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

