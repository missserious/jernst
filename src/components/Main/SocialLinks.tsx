import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

export function SocialLinks() {
  const links = [
    { href: 'https://www.linkedin.com/in/juernst/', Icon: IoLogoLinkedin },
    { href: 'https://github.com/missserious/', Icon: IoLogoGithub },
  ];

  return (
    <div className="social-links">
      {links.map(({ href, Icon }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <Icon size={70} color="white" />
        </a>
      ))}
    </div>
  );
}
