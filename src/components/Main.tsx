import juliaErnst from '../assets/julia-ernst.webp';

export default function Main() {
  return (
    <main>
      <div className="welcome-education-profil-container">
        <Welcome />
        <Education />
        <ProfileImage />
      </div>

      <div className="skills-container">
        <Skills />
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

function Skills() {
  return (
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
  );
}
function Contact() {
  return (
    <section className="contact">
      <h2>CONTACT ME</h2>
      <h1>+49 170 555 68 38</h1>

      <hr />

      <h2>or JUST WRITE</h2>
      <h1>Julia_Ernst(at)gmx.de</h1>
    </section>
  );
}

// export default function Main() {
//   return (
//     <>
//       {/* Main Content */}
//       <main>
//         {/* CONTAINER */}
//         <div className="welcome-education-profil-container">

//         </div>
//         {/* CONTAINER: END */}

//         {/* Skills Section */}
//         <div className="skills-container">

//         </div>

//         {/* Contact Section */}

//       </main>
//     </>
//   );
// }
