import { Link } from 'react-router-dom';

export default function MapPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <span>Map</span>
      <Link className="underline underline-offset-2" to="/">
        Home
      </Link>
    </main>
  );
}
