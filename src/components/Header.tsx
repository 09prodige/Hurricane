import { Link } from "react-router-dom";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#method", label: "Méthode" },
  { href: "/#testimonials", label: "Témoignages" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-semibold tracking-wide text-white">
          HURRICANE
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-slate-200"
        >
          Prendre RDV
        </Link>
      </div>
    </header>
  );
}
