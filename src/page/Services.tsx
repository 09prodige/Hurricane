export default function Services() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-white">Nos Services</h1>
      <p className="mt-6 max-w-2xl text-base text-slate-300">
        Découvrez comment nous adaptons nos prestations à vos environnements : espaces résidentiels haut de gamme, sièges
        sociaux, commerces et résidences de standing.
      </p>
      <ul className="mt-10 space-y-4 text-sm text-slate-200">
        <li className="rounded-2xl border border-white/5 bg-white/5 px-6 py-4">Nettoyage de maisons et appartements premium</li>
        <li className="rounded-2xl border border-white/5 bg-white/5 px-6 py-4">Entretien d’immeubles, bureaux et espaces médicaux</li>
        <li className="rounded-2xl border border-white/5 bg-white/5 px-6 py-4">Remise en état après travaux ou événements</li>
        <li className="rounded-2xl border border-white/5 bg-white/5 px-6 py-4">Jardinage, lavage haute pression et services extérieurs</li>
      </ul>
    </div>
  );
}

