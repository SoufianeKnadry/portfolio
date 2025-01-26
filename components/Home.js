import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import "../styles/Home.css";

gsap.registerPlugin(TextPlugin);



export function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
  
    if (textElement) {
      gsap.fromTo(
        textElement,
        { text: "" },
        {
          duration: 2,
          text: "Welcome to My Portfolio",
          scrambleText: {
            text: "Welcome to My Portfolio",
            chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            revealDelay: 0.2,
          },
          delay: 1, 
        }
      );
    }
    gsap.fromTo(
      ".profile-card",
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: "expo.out", delay: 0.5 }
    )

    gsap.fromTo(
      ".intro-content",
      { y: -300, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: "expo.out", delay: 1 }
    )
  }, [])

  return (
    <section id="home" className="home-section">
      <div className="home-background" />

      <div className="home-content">
        <div className="profile-card">
          <div className="profile-image">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Knadry Soufiane"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <h2 className="profile-name">Knadry Soufiane</h2>
          <p className="profile-title">Web Developer & Designer</p>
        </div>
      </div>

      <div>
        <div className="intro-content">
          <h1 ref={textRef} className="section-title">Welcome to My Portfolio</h1>
          <p className="intro-text">
            I'm passionate about creating beautiful, functional, and user-friendly websites. Explore my projects and get
            in touch to see how we can work together.
          </p>
          <a href="#about" className="cta-button">
            Learn More About Me
          </a>
        </div>
      </div>
    </section>
  )
}
