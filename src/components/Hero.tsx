import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section className="text-center py-16 bg-gradient-to-b from-green-50 to-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Moins de corvées, plus de temps libre.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Hurricane s’occupe du nettoyage, vous profitez du reste.
      </p>
      <ContactButton />
    </section>
  );
}
