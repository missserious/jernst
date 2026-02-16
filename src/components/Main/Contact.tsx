import { formatPhone } from '../../utils/formatContact';

type ContactProps = {
  mobil?: string;
  email?: string;
};

export function Contact({
  mobil = '+49 170 555 6838',
  email = 'Julia_Ernst@gmx.de',
}: ContactProps) {
  // Remove spaces for tel link
  const mobilLink = `tel:${formatPhone(mobil)}`;
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
