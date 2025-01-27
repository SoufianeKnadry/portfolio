import { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/Home.css";
import { init3DCardEffect } from "../utils/card"; 
import { gsap } from "gsap";

export function Home() {
  const cardRef = useRef(null);
  const sectionTitles = useRef([]);
  const backgroundRef = useRef(null);
  useEffect(() => {
    init3DCardEffect();

    gsap.fromTo(
      sectionTitles.current, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.3,  
        ease: "power4.out", 
        duration: 1 
      }
    );
    gsap.to(backgroundRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: "top top",  
        end: "bottom top", 
        scrub: true,      
        markers: false,    
      }
    });
  }, []);

  return (
    <section  className="home-section" ref={backgroundRef}>
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
        <h1 ref={(el) => sectionTitles.current.push(el)} className="section-title1">Hi There </h1>
        <h1 ref={(el) => sectionTitles.current.push(el)} className="section-title2">I'm </h1><span className="section-title3">Soufiane Knadry</span>
        <h1 ref={(el) => sectionTitles.current.push(el)} className="section-title4">a Software Developper</h1>
        <h1 ref={(el) => sectionTitles.current.push(el)} className="section-title5">currently focused on building user experiences that drive growth</h1>
        <a href="#about" className="cta-button">Learn More About Me</a>
      </div>
    </section>
  );
}
