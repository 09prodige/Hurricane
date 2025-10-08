import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Services from "./page/Services";
import About from "./page/About";
import Contact from "./page/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#050505] text-slate-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
