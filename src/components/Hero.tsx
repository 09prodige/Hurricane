import ContactButton from "./ContactButton";

const stats = [
  { value: "5/5", label: "Avis clients" },
  { value: "72h", label: "Prise en charge" },
  { value: "100%", label: "Satisfaction garantie" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-white/5 bg-gradient-to-b from-[#0d0d0d] to-[#050505] py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-10">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Service de nettoyage
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Posez le cœur, Hurricane s'occupe du reste.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Nous faisons le nettoyage et l'entretien des espaces verts à
            Libreville. Que ce soit pour une cour, un chantier ou un terrain,
            notre équipe est là pour vous aider à garder votre espace propre et
            agréable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/33758864376?text=Je%20suis%20intéressé%20par%20un%20poste%20chez%20Hurricane."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-green-400 px-6 py-3 text-sm font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
            >
              Postuler
            </a>
          </div>
          <div className="flex flex-wrap gap-8 border-t border-white/5 pt-10 text-sm text-slate-300">
            {stats.map((stat) => (
              <div key={stat.value} className="space-y-1">
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
            <div className="mb-6 space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Votre service dédié
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Tu dis seulement A
              </h2>
              <p className="text-sm text-slate-300">
                On s'adapte, on fait le point ensemble et on passe au boulot.
              </p>
            </div>
            <dl className="space-y-4 text-sm text-slate-200">
              <div className="flex justify-between rounded-2xl bg-black/40 px-4 py-3">
                <dt className="text-slate-400">Intervention</dt>
                <dd>Jeudi 9:30 — Libreville</dd>
              </div>
              <div className="flex justify-between rounded-2xl bg-black/40 px-4 py-3">
                <dt className="text-slate-400">Secteur</dt>
                <dd>Littoral &amp; Haut-Plateau</dd>
              </div>
            </dl>
            <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Besoin d&apos;aide ?
                </p>
                <p className="text-sm font-medium text-white">
                  Parlons de votre projet
                </p>
              </div>
              <ContactButton />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
