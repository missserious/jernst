import Footer from './components/Footer';
import Header from './components/Header';
import InstallButton from './components/InstallButton';
import Main from './components/Main/Main';

export default function App() {
  return (
    <>
      {/* header with default values */}
      {/* <Header /> */}
      <Header name="Julia Ernst" title="Geospatial Software Developer" />
      <Main />
      <InstallButton />
      <Footer />
    </>
  );
}
