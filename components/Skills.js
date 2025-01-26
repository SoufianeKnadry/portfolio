import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Skill } from "./Skill";
import { skillCategories } from "../data/skills"; // Import the data
import "../styles/Skills.css";

export function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("Programming Languages");

  useEffect(() => {
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
    );
  }, [activeSkillCategory]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <label
              key={category.name}
              className={`radio ${activeSkillCategory === category.name ? "radio-active" : ""}`}
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
