import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <span>Beacon</span>
      <Link className="underline underline-offset-2" to="/map">
        Map
      </Link>
    </main>
  );
}
