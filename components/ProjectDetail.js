import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/ProjectDetail.css";
import Image from 'next/image';

export function ProjectDetail({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        ".tool-item",
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, ease: "expo.out" } 
      );
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`project-detail-overlay ${isVisible ? "visible" : ""}`}>
      <div className={`project-detail-container ${isVisible ? "visible" : ""}`}>
        <button
          className={`close-button ${isVisible ? "visible" : ""}`}
          onClick={handleClose}
          aria-label="Close project details"
        >
          <X size={24} />
        </button>
        <div className={`project-detail-content ${isVisible ? "visible" : ""}`}>
          <div className="project-video">
            <div className="video-placeholder">
              <div className="details-project-video-container">
                <video
                  
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="details-project-video"
                ></video>
                <h3 className="tools-header">Tools Used</h3>
                <div className="details-tools-div">
                  {project.tools.map((tool, index) => (
                    <div key={index} className="tool-item">
                      {tool.imgUrl ? (
                        <Image
                          src={tool.imgUrl}
                          alt={`${tool.name} icon`}
                          className="tool-icon"
                          width={20}  
                          height={20} 
                        />
                      ) : (
                        <div className="tool-icon-placeholder">🛠</div>
                      )}
                      <span className="tool-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="project-detail-divider"></div>
          <div className="project-info">
            <h2 className="project-detail-title">{project.title}</h2>
            <p className="project-detail-description">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
