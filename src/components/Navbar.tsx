import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Internships", "Programs", "Resources", "About"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="font-heading text-xl font-bold tracking-tight">
          Internee<span className="text-gradient">.pk</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
            Sign In
          </a>
          <a href="#" className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            Job Portal
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-4 pb-4"
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="block py-2.5 text-sm font-medium text-muted-foreground">
              {link}
            </a>
          ))}
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-sm font-medium text-foreground px-4 py-2">Sign In</a>
            <a href="#" className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg">Job Portal</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
