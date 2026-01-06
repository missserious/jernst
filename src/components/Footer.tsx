type FooterProps = {
  name?: string;
  location?: string;
  mobil?: string;
  email?: string;
  separator?: string;
};

export default function Footer({
  name = 'Julia Ernst',
  location = 'Berlin Kreuzberg',
  mobil = '+49 170 555 6838',
  email = 'Julia_Ernst@gmx.de',
  separator = ' >> ',
}: FooterProps) {
  // Remove spaces for tel link
  const mobilLink = `tel:${mobil.replace(/\s+/g, '')}`;
  // Replace @ with (at) for display
  const emailDisplay = email.replace('@', '(at)');

  return (
    <footer className="footer">
      <p>
        {name} {separator} {location}
        {separator}
        Mobile: <a href={mobilLink}>{mobil}</a>
        {separator}
        E-Mail: <a href={`mailto:${email}`}>{emailDisplay}</a>
      </p>
    </footer>
  );
}
