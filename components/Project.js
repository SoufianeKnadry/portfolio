
import "../styles/Project.css"

export function Project({ index, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(index)}>
      <div className="project-content">
        <span className="project-title">Project {index + 1}</span>
      </div>
    </div>
  )
}

