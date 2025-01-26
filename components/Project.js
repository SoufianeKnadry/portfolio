import "../styles/Project.css";

export function Project({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-content">
        <span className="project-title">{project.title}</span>
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
