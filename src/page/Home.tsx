import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="Nettoyage à domicile"
          description="Un service complet pour entretenir votre maison avec soin et rigueur."
        />
        <ServiceCard
          title="Bureaux & Commerces"
          description="Des espaces de travail toujours propres pour une meilleure productivité."
        />
        <ServiceCard
          title="Jardinage & Débroussaillage"
          description="Nous entretenons vos extérieurs avec professionnalisme."
        />
      </section>
    </>
  );
}
