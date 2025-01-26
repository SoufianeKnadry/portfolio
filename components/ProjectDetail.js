import { X } from "lucide-react"
import { useState, useEffect } from "react"
import "../styles/ProjectDetail.css"

export function ProjectDetail({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300) 
  }

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
            {/* Placeholder for video */}
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
              <div className="details-tools-div">
                
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
  )
}

