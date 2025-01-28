import Image from 'next/image';

import "../styles/Skill.css"

export function Skill({ name,imgUrl }) {
  return (
    <div className="skill-card skill-animate" >
      <div className="skill-content">
        <div className="skill-logo">
        <Image 
            src={imgUrl}
            alt="JavaScript" 
            width={100}  
            height={100} 
          />
          
        </div>
        <p className="skill-name">{name}</p>
      </div>
    </div>
  )
}

