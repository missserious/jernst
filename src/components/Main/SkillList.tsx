import { useState } from 'react';

import skills from '../../data/data';
import type { SkillSection as SkillSectionType } from '../../data/data';
import type { SkillGroup as SkillGroupType } from '../../data/data';

export function SkillList() {
  return (
    <>
      <h3>SKILLS</h3>
      {/* TODO: Fest auf zwei Spalten aufteilen */}
      <ul className="skill-container">
        {skills.map((section: SkillSectionType) => (
          <Skills key={section.title} section={section} />
        ))}
      </ul>
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
              {/* <span className="skill-items">{skill.items.join(', ')}</span> */}
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
