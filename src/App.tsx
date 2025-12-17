import duckImage from './assets/HappyDuck.jpeg'
// import './App.css'

function App() {

  return (
    <>
      {/* Header */}
      <header>
        <h1>GIS | Software Developer</h1>
      </header>

      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <section id="welcome">
          <h2>Hello</h2>
          <p>I'm passionate about everything related to geospatial data, from databases and programming to web development and data visualization.
          Over the past few years I’ve built a strong foundation in GIS, full stack development, and quality assurance.
          I'm always eager to learn, explore new tools, and find the most efficient solutions to real world problems.</p>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
          <img src={duckImage} className="duck" alt="Happy Duck" />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 JE</p>
      </footer>
    </>
  )
}

export default App
