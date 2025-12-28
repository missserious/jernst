type HeaderProps = {
  name?: string;
  title?: string;
};

export default function Header({
  name = 'Julia Ernst',
  title = 'Geospatial Software Developer',
}: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </header>
  );
}
