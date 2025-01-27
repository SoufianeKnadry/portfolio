"use client";

import { useEffect, useRef } from "react";
import { User, GraduationCap, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP Animation for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0.6 }, // Initial position (below)
        {
          y: 0, // Final position
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start animation when the card enters 80% of the viewport
            end: "bottom 50%", // End animation when it reaches 50%
            scrub: true, // Smooth transition with scroll
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div
            className="about-card about-card-right"
            id="card1"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="about-card-content">
              <User className="about-card-icon" size={24} />
              <h3 className="about-card-title">Myself</h3>
              <p className="about-card-text">
                I am a Computer Science student at Dawson College, diving into
                the world of web development and native applications. Passionate
                about technology, I am constantly honing my skills and expanding
                my knowledge in this exciting and ever-evolving field. With a
                strong drive to learn and grow, I aim to build innovative
                solutions that make an impact.
              </p>
            </div>
          </div>
          <div
            className="about-card about-card-right"
            id="card2"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="about-card-content">
              <Briefcase className="about-card-icon" size={24} />
              <h3 className="about-card-title">Other</h3>
              <p className="about-card-text">
                Outside of my passion for technology, I’m someone who values
                staying active and living a healthy lifestyle. I love sports and
                enjoy challenging myself to stay athletic and in shape. I also
                believe in the power of technology to create a positive impact,
                whether it’s through solving everyday problems or building tools
                that improve people’s lives. My goal is to combine my drive for
                innovation with my commitment to making a difference.
              </p>
            </div>
          </div>
          <div
            className="about-card about-card-left"
            id="card3"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="about-card-content">
              <GraduationCap className="about-card-icon" size={24} />
              <h3 className="about-card-title">Education</h3>
              <p className="about-card-text">
                . DEC in Computer Science Technology - Dawson College. <br />
                . High School Diploma - Saint Luc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
