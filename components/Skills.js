import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Skill } from "./Skill"
import "../styles/Skills.css"

export function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("Programming Languages")

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", imgUrl: "/images/java.png" },
        { name: "Python", imgUrl: "/images/python.png" },
        { name: "C#", imgUrl: "/images/csharp.png" },
        { name: "JavaScript", imgUrl: "/images/javascript.png" },
        { name: "Lua", imgUrl: "/images/lua.png" },
        { name: "Kotlin", imgUrl: "/images/kotlin.png" },
      ],
    },
    {
      name: "Web Development",
      skills: [
        { name: "HTML", imgUrl: "/images/html.png" },
        { name: "CSS", imgUrl: "/images/css.png" },
        { name: "React", imgUrl: "/images/react.png" },
        { name: "Tailwind", imgUrl: "/images/tailwind.png" },
        { name: "Next.js", imgUrl: "/images/nextjs.png" },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Node", imgUrl: "/images/node.png" },
        { name: "Docker", imgUrl: "/images/docker.png" },
        { name: "Sql", imgUrl: "/images/sql.png" },
        { name: "Git", imgUrl: "/images/git.png" },
        { name: "Visual Studios", imgUrl: "/images/visualstudios.png" },
        { name: "Avalonia", imgUrl: "/images/avalonia.png" },
        { name: "Linux", imgUrl: "/images/linux.png" },
        { name: "AWS", imgUrl:"/images/aws.png"},
        { name: "Flask", imgUrl:"/images/flask.png"},
        { name: "Android Studio", imgUrl:"/images/androidstudio.webp"}
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "SQL", imgUrl: "/images/sql.png" },
        { name: "MongoDb", imgUrl: "/images/mongodb.png" },
      ],
    },
  ];

  useEffect(() => {
    const skills = skillCategories.find((category) => category.name === activeSkillCategory)?.skills || []
    
    gsap.fromTo(
      ".skill", 
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, 
        duration: 0.6,
        ease: "expo.out",
      }
    )
  }, [activeSkillCategory])

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-categories">
        {skillCategories.map((category) => (
        <label
          key={category.name}
          className={`radio ${activeSkillCategory === category.name ? 'radio-active' : ''}`}
        >
          <input
            type="radio"
            name="skillCategory"
            value={category.name}
            checked={activeSkillCategory === category.name}
            onChange={() => setActiveSkillCategory(category.name)}
          />
          <span className="name">{category.name}</span>
        </label>
      ))}
      
        </div>
        <div className="skills-grid">
          {skillCategories
            .find((category) => category.name === activeSkillCategory)
            ?.skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <Skill name={skill.name} imgUrl={skill.imgUrl} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
