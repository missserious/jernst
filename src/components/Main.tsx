import duckImage from "../assets/HappyDuck.jpeg";

export default function Main() {
  return (
    <>
      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <section id="welcome">
          <h3>HELLO</h3>
          <p>
            I'm passionate about everything related to geospatial data, from
            databases and programming to web development and data visualization.
            Over the past few years I’ve built a strong foundation in GIS, full
            stack development, and quality assurance. I'm always eager to learn,
            explore new tools, and find the most efficient solutions to real
            world problems.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h3>SKILLS</h3>
          <p>
            PROGRAMMING
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Git / GitHub</li>
            </ul>
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h3>CONTACT ME</h3>
          <p>+49 170 555 68 38</p>

          <h3>or JUST WRITE</h3>
          <p>Julia_Ernst(at)gmx.de</p>

          <img src={duckImage} className="duck" alt="Happy Duck" />
        </section>
      </main>
    </>
  );
}
