import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <Link to="/" className="text-2xl font-bold text-green-700">
        Hurricane
      </Link>
      <nav className="space-x-6">
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
