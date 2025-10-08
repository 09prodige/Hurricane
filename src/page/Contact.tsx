export default function Contact() {
  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Contactez-nous</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          placeholder="Votre téléphone"
          className="w-full border rounded p-2"
        />
        <textarea
          placeholder="Votre message"
          className="w-full border rounded p-2"
          rows={4}
        ></textarea>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Envoyer
        </button>
      </form>
    </div>
  );
}
