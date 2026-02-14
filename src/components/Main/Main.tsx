import { Contact } from './Contact';
import { Education } from './Education';
import { ProfileImage } from './ProfileImage';
import { SkillList } from './SkillList';
import { SocialLinks } from './SocialLinks';
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
