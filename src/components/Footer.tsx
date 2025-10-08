export default function Footer() {
  return (
    <footer className="bg-gray-50 py-6 text-center text-sm text-gray-600 border-t">
      <p>
        COPYRIGHT © {new Date().getFullYear()} HURRICANE. TOUS DROITS RÉSERVÉS.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
}
