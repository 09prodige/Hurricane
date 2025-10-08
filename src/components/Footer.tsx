export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold text-white">HURRICANE</h3>
          <p className="max-w-xs text-slate-400">
            Service de nettoyage haut de gamme au Gabon. Conciergerie dédiée, équipes certifiées et protocoles maîtrisés.
          </p>
        </div>

        <div className="space-y-2 text-left">
          <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">Nous écrire</p>
          <a href="mailto:contact@hurricane-clean.com" className="text-slate-200 hover:text-white">
            contact@hurricane-clean.com
          </a>
          <p className="text-slate-400">+241 02 90 03 04</p>
        </div>

        <div className="space-y-2 text-left">
          <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">Nous suivre</p>
          <div className="flex gap-4 text-slate-300">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-slate-600">
        © {currentYear} Hurricane. Tous droits réservés.
      </p>
    </footer>
  );
}
