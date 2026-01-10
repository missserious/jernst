import juliaErnst from '../assets/julia-ernst.webp';
import skills from '../data/data';
import type { SkillSection, SkillGroup } from '../data/data';

export default function Main() {
  return (
    <main>
      <div className="welcome-education-profil-container">
        <Welcome />
        <Education />
        <ProfileImage />
      </div>

      <div className="skills-container">
        <SkillList />
      </div>

      <Contact />
    </main>
  );
}

function Welcome() {
  return (
    <section id="welcome">
      <h3>&gt; HELLO</h3>
      <p>
        I'm passionate about everything related to{' '}
        <strong>geospatial data</strong>, from <strong>programming</strong> and{' '}
        <strong>web development</strong> to <strong>databases</strong> and{' '}
        <strong>data visualizatioin</strong>.
      </p>
      <p>
        Over the past few years I've built a strong foundation in{' '}
        <strong>Full-Stack Development</strong>, <strong>GIS</strong>, and{' '}
        <strong>Quality Assurance</strong>.
      </p>
      <p>
        I'm always eager to learn, explore new tools, and find the most
        efficient solutions to real-world problems.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <h3>&gt; EDJUCATION</h3>
      <p>
        <span>Master of Science</span>
        <span>
          <strong>Geodesy & Geoinformation Science</strong>{' '}
        </span>
      </p>
      <p>
        <span>Bachelor of Science</span>
        <span>
          <strong>Computing and Media</strong>
        </span>
      </p>
    </section>
  );
}

function ProfileImage() {
  return (
    <section id="profil">
      <img src={juliaErnst} alt="Julia Ernst" />
    </section>
  );
}

function SkillList() {
  return (
    <>
      <h3>&gt; SKILLS</h3>
      <ul className="skill-container">
        {skills.map((section: SkillSection) => (
          <Skills key={section.title} section={section} />
        ))}
      </ul>
    </>
  );
}

interface SkillsProps {
  section: SkillSection;
}

function Skills({ section }: SkillsProps) {
  return (
    <li className="skill-section">
      <div className="section-title">{section.title.toUpperCase()}</div>
      <ul className="skill-groups">
        {section.skills.map((skill: SkillGroup) => (
          <li key={skill.label} className="skill-group">
            <span className="skill-label">{skill.label}: </span>
            <span className="skill-items">{skill.items.join(', ')}</span>
          </li>
        ))}
      </ul>
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
