export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4 text-left">
          <h3 className="text-2xl font-semibold text-white">HURRICANE</h3>
          <p className="max-w-xs text-slate-400">
            Hurricane Space Cleaner, société gabonaise de nettoyage et d'entretien d'espaces verts à Libreville. Nous
            intervenons partout : maisons, cours, chantiers, terrains et espaces publics.
          </p>
        </div>

        <div className="space-y-2 text-left">
          <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">Nous écrire</p>
          <a href="mailto:hurricanespacecleaner@gmail.com" className="text-slate-200 hover:text-white">
            hurricanespacecleaner@gmail.com
          </a>
          <p className="text-slate-400">+24177254039</p>
        </div>

        <div className="space-y-2 text-left">
          <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">Nous suivre</p>
          <div className="flex gap-4 text-slate-300">
            <a href="https://www.facebook.com/profile.php?id=61561669726059&locale=fr_FR" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/in/jeremie-akwe-95a68b28a/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-slate-600">© {currentYear} Hurricane. Tous droits réservés.</p>
    </footer>
  );
}

