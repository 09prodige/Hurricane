import Hero from "../components/Hero";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const services = [
  {
    title: "Sur Mesure",
    description: "On s'occupe de couper, ramasser et nettoyer votre cour ou votre terrain.",
    image: img1,
  },
  {
    title: "Nettoyage de chantiers",
    description: "Après les travaux, on aide à débarrasser les bois, le sable et les débris.",
    image: img2,
  },
  {
    title: "Entretien régulier",
    description: "On peut passer chaque semaine ou chaque mois selon votre besoin.",
    image: img3,
  },
  {
    title: "Simplicité et confiance",
    description: "Pas de formule compliquée : on discute, on agit, et vous validez à la fin.",
    image: img4,
  },
];

const steps = [
  {
    title: "Prise de contact",
    description:
      "Par appel, SMS, réseaux ou directement sur le terrain. Vous expliquez le besoin, on vous écoute.",
  },
  {
    title: "Affectation de l'équipe",
    description: "On envoie un agent ou une équipe selon le travail à faire.",
  },
  {
    title: "Vérification à la fin",
    description:
      "On fait le tour ensemble une fois le travail terminé. Si vous n'êtes pas là, on prend des photos et on vous les envoie.",
  },
];

const testimonials = [
  {
    quote:
      "Ils sont venus couper l'herbe dans ma cour. Le travail a été bien fait et ils ont tout nettoyé avant de partir.",
    author: "Larissa O.",
    role: "Résidente à Libreville",
  },
  {
    quote:
      "L'équipe passe entretenir ma cour régulièrement. C'est propre et rapide, je n'ai rien à dire.",
    author: "Philamente E.",
    role: "Cliente fidèle",
  },
  {
    quote:
      "Après nos travaux, Hurricane est venu débarrasser les déchets, les planches et le sable. Ils ont laissé le chantier nickel.",
    author: "Chef de chantier",
    role: "BTP",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="services" className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Pourquoi choisir Hurricane</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Des services simples, accessibles et efficaces</h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Nous travaillons avec sérieux et respect, pour que chaque espace soit bien entretenu, propre et sécurisé. Nos
            prestations s'adaptent à tous les besoins, particuliers comme professionnels.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/5 bg-white/5 p-4 text-left shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)]"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover grayscale md:h-48 lg:h-52"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Notre méthode</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Une manière simple de travailler</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent p-8 text-left"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">{`0${index + 1}`}</span>
              <h3 className="mt-4 text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Ils nous ont fait confiance</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Leurs retours parlent pour nous</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-white/5 p-8"
            >
              <blockquote className="text-sm text-slate-200">« {testimonial.quote} »</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
                {testimonial.author} — {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#101010] to-[#050505] p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">C&apos;est tic tac bow, on fait comment ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Discutons de vos besoins et établissons ensemble la solution qui convient à vos occupants.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hurricanespacecleaner@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Échanger par mail
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=33758864376&text=Bonjour%20Hurricane%2C%20puis-je%20avoir%20plus%20d%27informations%20sur%20vos%20offres%20%3F"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

