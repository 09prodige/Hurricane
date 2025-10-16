import { Link } from "react-router-dom";
// @ts-ignore: allow importing image assets without a type declaration
import logo from "../assets/logoo.png";

export default function Header() {
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            goTo("hero");
          }}
          className="flex items-center gap-3 text-xl font-semibold tracking-wide text-white"
        >
          <img
            src={logo}
            alt="Hurricane"
            className="h-16 w-auto shrink-0 cursor-pointer"
            onClick={(e) => {
              // Empêche le clic sur l'image de déclencher le scroll
              e.stopPropagation();
              e.preventDefault();
              // Force le rechargement du logo en contournant le cache
              const img = e.currentTarget as HTMLImageElement;
              img.src = `${logo}?t=${Date.now()}`;
            }}
          />
          <span className="inline">HURRICANE</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              goTo("services");
            }}
            className="hover:text-white"
          >
            Services
          </a>
          <a
            href="#method"
            onClick={(e) => {
              e.preventDefault();
              goTo("method");
            }}
            className="hover:text-white"
          >
            Méthode
          </a>
          <a
            href="#testimonials"
            onClick={(e) => {
              e.preventDefault();
              goTo("testimonials");
            }}
            className="hover:text-white"
          >
            Témoignages
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goTo("contact");
            }}
            className="hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
