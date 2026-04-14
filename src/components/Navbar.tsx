import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Internships", path: "/internships" },
  { name: "Programs", path: "/programs" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          Internee<span className="text-gradient">.pk</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/signin"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/jobs"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Job Portal
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-3 mt-3">
            <Link
              to="/signin"
              className="text-sm font-medium text-foreground px-4 py-2"
            >
              Sign In
            </Link>
            <Link
              to="/jobs"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg"
            >
              Job Portal
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;