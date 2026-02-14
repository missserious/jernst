import { IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';

import { Education } from './Education';
import { ProfileImage } from './ProfileImage';
import { SkillList } from './SkillList';
import { Welcome } from './Welcome';

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

type ContactProps = {
  mobil?: string;
  email?: string;
};

function Contact({ mobil = '+49 170 555 6838', email = 'Julia_Ernst@gmx.de' }: ContactProps) {
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
