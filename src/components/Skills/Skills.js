import React from "react";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  if (!skills.length) return null;

  // Split skills into two arrays
  const midpoint = Math.ceil(skills.length / 2);
  const leftColumnSkills = skills.slice(0, midpoint);
  const rightColumnSkills = skills.slice(midpoint);

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__container">
        <ul className="skills__list">
          {leftColumnSkills.map((skill, index) => (
            <li key={index} className="skills__item">
              {skill}
            </li>
          ))}
        </ul>
        <ul className="skills__list">
          {rightColumnSkills.map((skill, index) => (
            <li key={index} className="skills__item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
