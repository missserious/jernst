import headerImg from '../assets/header.jpg';

export default function Header() {

  return (
    <>
      {/* Header */}
      <header 
        style=
          {{
            height: '600px',           
            width: '100%',
            backgroundImage: `url(${headerImg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <h1>GIS | Software Developer</h1>
      </header>
    </>
  )
}