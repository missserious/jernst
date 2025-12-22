import happyDuck from "../assets/happy-duck.jpeg";
import juliaErnst from "../assets/julia-ernst.png";

export default function Main() {
  return (
    <>
      {/* Main Content */}
      <main>
        {/* CONTAINER */}
        <div className="welcome-education-container">
          <section id="welcome">
            <h3>HELLO</h3>
            <p>
              I'm passionate about everything related to geospatial data, from
              databases and programming to web development and data
              visualization. Over the past few years I've built a strong
              foundation in GIS, full stack development, and quality assurance.
              I'm always eager to learn, explore new tools, and find the most
              efficient solutions to real world problems.
            </p>
          </section>
          <section id="education">
            <h3>EDJUCATION</h3>
            <p>
              Master of Science <br />
              Geodesy & Geoinformation Science <br />
              Bachelor of Science <br />
              Computing and Media
            </p>
          </section>
          <section id="profil">
            <img src={juliaErnst} alt="Julia Ernst" />
          </section>
        </div>
        {/* CONTAINER: END */}

        {/* Skills Section */}
        <section id="skills">
          <h3>SKILLS</h3>
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
