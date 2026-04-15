import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const resourcesSubLinks = [
  {
    name: "Blog",
    path: "/blog",
    icon: FileText,
    desc: "Expert insights & articles",
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Internships", path: "/internships" },
  { name: "Programs", path: "/programs" },
  { name: "Resources", path: "/blog", hasDropdown: true },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  const isResourcesActive =
    location.pathname === "/resources" || location.pathname === "/blog";

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          Internee<span className="text-gradient">.pk</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setResourcesOpen((o) => !o)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isResourcesActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                    >
                      {resourcesSubLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`flex items-start gap-3 px-4 py-3 hover:bg-accent transition-colors ${
                            location.pathname === sub.path ? "bg-accent" : ""
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <sub.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {sub.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {sub.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ),
          )}
        </div>

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

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileResourcesOpen((o) => !o)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-muted-foreground"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          mobileResourcesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileResourcesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {resourcesSubLinks.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              <sub.icon className="w-4 h-4" />
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm font-medium text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                ),
              )}

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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
