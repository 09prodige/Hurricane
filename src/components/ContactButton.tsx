export default function ContactButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=33758864376&text=Bonjour%20Hurricane%2C%20puis-je%20avoir%20plus%20d%27informations%20sur%20vos%20offres%20%3F"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-emerald-400"
    >
      WhatsApp
    </a>
  );
}
