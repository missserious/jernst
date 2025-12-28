import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// import './App.css';

export default function App() {
  return (
    <>
      <Header name="Julia Ernst" title="Geospatial Software Developer" />
      {/* header with default values */}
      {/* <Header /> */}
      <Main />
      <Footer />
    </>
  );
}
