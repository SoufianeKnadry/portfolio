import { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/Home.css";
import { init3DCardEffect } from "../utils/card"; 
export function Home() {
  const cardRef = useRef(null);
  
  useEffect(() => {
    init3DCardEffect();
  })
  return (
    <section id="home" className="home-section">
      <div className="home-background" />
      <div className="home-content">
        <div className="card-3d" ref={cardRef}>
          <div className="content-card">
            <div className="img-container">
              <div id="container3D">
                <div className="skewed skewed-left">
                  <div className="image">
                  <div>
                    <Image
                      src="/images/soufiane.JPG"
                      alt="Knadry Soufiane"
                      width={350}
                      height={300}
                      className="object-cover image"
                    />
                  </div>
                  </div>
                </div>
                <div className="home-img-text">
             
                  <p className="profile-desc-info">
                    Computer Science student at Dawson
                  </p>
                  <h1 className="profile-desc-name">Soufiane Knadry</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-content">
        <h1  className="section-title">Welcome to My Portfolio</h1>
        <p className="intro-text">
          I'm passionate about creating beautiful, functional, and user-friendly websites. Explore my projects and get
          in touch to see how we can work together.
        </p>
        <a href="#about" className="cta-button">Learn More About Me</a>
      </div>
    </section>
  );
}
