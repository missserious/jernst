import duckImage from './assets/HappyDuck.jpeg'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h4>Hello</h4>
          <img src={duckImage} className="duck" alt="Happy Duck" />
      </div>
    </>
  )
}

export default App
