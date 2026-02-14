import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';

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
