import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Clients", href: "#clients" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-white/[0.08] py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center group overflow-visible">
          <img
            src="/vertexxai-logo.png"
            alt="VertexxAI"
            className="h-32 md:h-40 w-auto object-contain scale-[1.4] md:scale-[1.6] origin-left"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-bold text-white bg-gradient-to-r from-secondary to-amber-500 hover:opacity-90 px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-[0_0_18px_hsl(38_95%_55%_/_0.3)] hover:shadow-[0_0_25px_hsl(38_95%_55%_/_0.5)]"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white px-5 py-3 rounded-xl text-center font-bold mt-2"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#hero" className="flex items-center mb-6 overflow-visible">
              <img
                src="/vertexxai-logo.png"
                alt="VertexxAI"
                className="h-32 w-auto object-contain scale-[1.3] origin-left"
              />
            </a>
            <p className="text-muted-foreground max-w-sm">
              Pioneering the future of digital experiences through artificial intelligence, scalable architecture, and breathtaking design.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 VertexxAI. All rights reserved.</p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-muted-foreground hover:text-white text-sm font-medium transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
