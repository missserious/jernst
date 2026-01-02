import happyDuck from '../assets/happy-duck.jpeg';
import juliaErnst from '../assets/julia-ernst.png';

export default function Main() {
  return (
    <>
      {/* Main Content */}
      <main>
        {/* CONTAINER */}
        <div className="welcome-education-profil-container">
          <section id="welcome">
            <h3>&gt; HELLO</h3>
            <p>
              I'm passionate about everything related to{' '}
              <strong>geospatial data</strong>, from{' '}
              <strong>programming</strong> and <strong>web development</strong>{' '}
              to <strong>databases</strong> and{' '}
              <strong>data visualizatioin</strong>.
              <br />
              <br />
              Over the past few years I’ve built a strong foundation in
              <strong>Full-Stack Development</strong>, <strong>GIS</strong>, and{' '}
              <strong>Quality Assurance</strong>.
              <br />
              <br />
              I'm always eager to learn, explore new tools, and find the most
              efficient solutions to real-world problems.
            </p>
          </section>
          <section id="education">
            <h3>&gt; EDJUCATION</h3>
            <p>
              Master of Science <br />
              <strong>Geodesy & Geoinformation Science</strong> <br />
              Bachelor of Science <br />
              <strong>Computing and Media</strong>
            </p>
          </section>
          <section id="profil">
            <img src={juliaErnst} alt="Julia Ernst" />
          </section>
        </div>
        {/* CONTAINER: END */}

        {/* Skills Section */}
        <div className="skills-container">
          <section id="skills">
            <h3>&gt; SKILLS</h3>
            <div>
              PROGRAMMING
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact">
          <h3>CONTACT ME</h3>
          <p>+49 170 555 68 38</p>

          <h3>or JUST WRITE</h3>
          <p>Julia_Ernst(at)gmx.de</p>

          <img src={happyDuck} className="duck" alt="Happy Duck" />
        </section>
      </main>
    </>
  );
}
