type HeaderProps = {
  name?: string;
  title?: string;
};

export default function Header({
  name = 'Julia Ernst',
  title = 'Geospatial Software Developer',
}: HeaderProps) {
  return (
    <header className="header">
      <h6 className="photo-credit">Photo by Christopher Roller</h6>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </header>
  );
}
