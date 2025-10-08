export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-white">Contactez-nous</h1>
      <p className="mt-6 text-base text-slate-300">
        Confiez-nous votre projet. Remplissez le formulaire ou contactez directement notre concierge dédié.
      </p>
      <form className="mt-10 grid gap-6 md:grid-cols-2">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Votre téléphone"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none md:col-span-2"
        />
        <textarea
          placeholder="Votre message"
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none md:col-span-2"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 md:col-span-2"
        >
          Envoyer ma demande
        </button>
      </form>
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
        <p className="uppercase tracking-[0.3em] text-slate-500">Conciergerie Hurricane</p>
        <p className="mt-3 text-white">contact@hurricane-clean.com</p>
        <p className="text-slate-300">+241 02 90 03 04</p>
      </div>
    </div>
  );
}
