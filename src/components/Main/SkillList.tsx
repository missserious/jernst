import { useState } from 'react';

import skills from '../../data/data';
import type {
  SkillSection as SkillSectionType,
  SkillGroup as SkillGroupType,
} from '../../data/data';

export function SkillList() {
  return (
    <>
      <h3>SKILLS</h3>
      <div className="skills-columns">
        <ul className="column">
          {skills
            // All even-indexed sections EXCEPT THE LAST ONE, so the last section ALWAYS goes to the right column
            .filter((_, i) => i !== skills.length - 1 && i % 2 === 0)
            .map(section => (
              <Skills key={section.title} section={section} />
            ))}
        </ul>
        <ul className="column">
          {skills
            // All odd-indexed sections PLUS THE LAST SECTION
            .filter((_, i) => i % 2 !== 0 || i === skills.length - 1)
            .map(section => (
              <Skills key={section.title} section={section} />
            ))}
        </ul>
      </div>
    </>
  );
}

interface SkillsProps {
  section: SkillSectionType;
}

function Skills({ section }: SkillsProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <li className={`skill-section ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <span className="section-title">{section.title.toUpperCase()}</span>
      <span className="icon">›</span>

      {isOpen && (
        <ul className="skill-groups">
          {section.skills.map((skill: SkillGroupType) => (
            <li key={skill.label} className="skill-group">
              <span className="skill-label">{skill.label}: </span>
              <span className="skill-items">
                {skill.items.map(item => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
