import Hero from "../components/Hero";

const services = [
  {
    title: "Sur mesure",
    description:
      "Planifiez votre propre formule et adaptez la fréquence à vos enjeux, du quotidien aux opérations spéciales.",
  },
  {
    title: "Équipe certifiée",
    description:
      "Agents formés en continu, rigoureusement sélectionnés et équipés de solutions professionnelles.",
  },
  {
    title: "Qualité mesurable",
    description:
      "Reporting après chaque passage, indicateurs partagés et plan d'amélioration continue.",
  },
  {
    title: "Transparence",
    description:
      "Vous êtes informé avant, pendant et après l'intervention : check-list, photos et synthèse.",
  },
];

const steps = [
  {
    title: "Diagnostic précis",
    description:
      "Une auditrice visite vos espaces pour définir un protocole d'entretien sur mesure.",
  },
  {
    title: "Équipe dédiée",
    description:
      "Nous affectons une équipe formée à l'exigence de votre secteur, munie de produits responsables.",
  },
  {
    title: "Suivi continu",
    description:
      "Un concierge vérifie chaque prestation, reste disponible et ajuste le service en continu.",
  },
];

const testimonials = [
  {
    quote:
      "Une équipe discrète et irréprochable. Nos bureaux sont impeccables au saut des réunions.",
    author: "Inès B.",
    role: "Directrice d'agence",
  },
  {
    quote:
      "Hurricane s'adapte à nos impératifs horaires sans jamais dégrader la qualité.",
    author: "William K.",
    role: "Gestionnaire de résidence",
  },
  {
    quote:
      "La qualité est constante, avec un reporting simple à partager à la direction.",
    author: "Awa T.",
    role: "Architecte d'intérieur",
  },
];

export default function Home() {
  return (
    <div className="space-y-32 pb-24">
      <Hero />

      <section id="services" className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
            Pourquoi choisir Hurricane
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Pensé pour les espaces qui exigent l'excellence
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Chaque prestation est orchestrée avec précision : planning clair, matériel adapté et interlocuteur unique.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/5 bg-white/5 p-6 text-left shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)]"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Notre méthode</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Une expérience fluide en trois temps</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent p-8 text-left"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                {`0${index + 1}`}
              </span>
              <h3 className="mt-4 text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Ils nous font confiance</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Leurs retours parlent pour nous</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-white/5 p-8"
            >
              <blockquote className="text-sm text-slate-200">
                « {testimonial.quote} »
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
                {testimonial.author} — {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#101010] to-[#050505] p-10 text-center md:p-16">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Prêt à franchir le cap ?</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Prêt à redéfinir la propreté de vos espaces ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Discutons de vos besoins et établissons ensemble la solution qui convient à vos occupants.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@hurricane-clean.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Échanger par mail
            </a>
            <a
              href="https://wa.me/241XXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
