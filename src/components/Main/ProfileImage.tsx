import juliaErnst from '../../assets/julia-ernst.webp';

interface ProfilImageProps {
  src?: string;
  alt?: string;
}

export function ProfileImage({
  src = juliaErnst,
  alt = 'Julia Ernst',
}: ProfilImageProps) {
  return (
    <section id="profile">
      <figure>
        <img src={src} alt={alt} className="profile-picture" />
      </figure>
    </section>
  );
}
