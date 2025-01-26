import "../styles/Project.css";

export function Project({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-content">
        <div className="video-overlay">
          <p className="overlay-text">{project.title}</p>
        </div>
        <video
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="project-video"
        ></video>
      </div>
    </div>
  );
}
