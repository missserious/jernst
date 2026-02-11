import { useState } from 'react';

import skills from '../../data/data';
import type { SkillSection, SkillGroup } from '../../data/data';

import { IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';

import { Welcome } from './Welcome';
import { Education } from './Education';
import { ProfileImage } from './ProfileImage';

export default function Main() {
  return (
    <main>
      <div className="welcome-education-profile-container">
        <ProfileImage />
        <Welcome />
        <Education />
      </div>

      <div className="skills-container">
        <SkillList />
        <SocialLinks />
      </div>

      <Contact />
    </main>
  );
}

function SkillList() {
  return (
    <>
      <h3>SKILLS</h3>
      {/* TODO: Fest auf zwei Spalten aufteilen */}
      <ul className="skill-container">
        {skills.map((section: SkillSection) => (
          <Skills key={section.title} section={section} />
        ))}
      </ul>
    </>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/juernst/">
        <IoLogoLinkedin size={70} color="white" />
      </a>
      <a href="https://github.com/missserious/">
        <IoLogoGithub size={70} color="white" />
      </a>
    </div>
  );
}

interface SkillsProps {
  section: SkillSection;
}

function Skills({ section }: SkillsProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <li
      className={`skill-section ${isOpen ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <span className="section-title">{section.title.toUpperCase()}</span>
      <span className="icon">›</span>

      {isOpen && (
        <ul className="skill-groups">
          {section.skills.map((skill: SkillGroup) => (
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

type ContactProps = {
  mobil?: string;
  email?: string;
};

function Contact({
  mobil = '+49 170 555 6838',
  email = 'Julia_Ernst@gmx.de',
}: ContactProps) {
  // Remove spaces for tel link
  const mobilLink = `tel:${mobil.replace(/\s+/g, '')}`;
  // Replace @ with (at) for display
  const emailDisplay = email.replace('@', '(at)');
  return (
    <section className="contact">
      <h2>CONTACT ME</h2>
      <h1>
        <a href={mobilLink}>{mobil}</a>
      </h1>

      <hr />

      <h2>or JUST WRITE</h2>
      <h1>
        <a href={`mailto:${email}`}>{emailDisplay}</a>
      </h1>
    </section>
  );
}
