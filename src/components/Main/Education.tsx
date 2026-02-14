interface Degree {
  level: string;
  subject: string;
}

export function Education() {
  const degrees: Degree[] = [
    { level: 'Master of Science', subject: 'Geodesy & Geoinformation Science' },
    { level: 'Bachelor of Science', subject: 'Computing and Media' },
  ];

  return (
    <section id="education">
      <h3>EDUCATION</h3>

      {degrees.map(degree => (
        <p key={`${degree.level}-${degree.subject}`}>
          <span>{degree.level}</span>
          <span>
            <strong>{degree.subject}</strong>{' '}
          </span>
        </p>
      ))}
    </section>
  );
}
