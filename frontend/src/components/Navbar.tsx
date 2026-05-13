import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, FileText, LogOut, User as UserIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, emitAuthChange } from "@/hooks/use-auth";
import { clearSession } from "@/lib/api";
import { toast } from "sonner";

const resourcesSubLinks = [
  { name: "Blog", path: "/blog", icon: FileText, desc: "Expert insights & articles" },
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
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    clearSession();
    emitAuthChange();
    toast.success("Signed out", { description: "You have been logged out." });
    navigate("/");
  };

  const firstName = user?.fullName?.split(" ")[0] ?? "";
  const initials = (user?.fullName ?? "U")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

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
                    isResourcesActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
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
                            <p className="text-sm font-medium text-foreground">{sub.name}</p>
                            <p className="text-xs text-muted-foreground">{sub.desc}</p>
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
                  location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/jobs"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Job Portal
          </Link>

          {isAuthenticated ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                  {initials}
                </div>
                <span className="text-sm font-medium text-foreground">Hi, {firstName}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-60 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-medium text-foreground">Welcome back, {firstName}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to="/signup"
              className="text-sm font-medium bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
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
              {isAuthenticated && (
                <div className="flex items-center gap-3 py-3 mb-2 border-b border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Welcome back, {firstName}</p>
                    <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                  </div>
                </div>
              )}

              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileResourcesOpen((o) => !o)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-muted-foreground"
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
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
                )
              )}

              <div className="flex flex-col gap-2 mt-3">
                <Link
                  to="/jobs"
                  onClick={() => setMobileOpen(false)}
                  className="text-center text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg"
                >
                  Job Portal
                </Link>
                {isAuthenticated ? (
                  <button
                    onClick={() => { setMobileOpen(false); handleLogout(); }}
                    className="flex items-center justify-center gap-2 text-sm font-medium border border-border text-foreground px-5 py-2.5 rounded-lg"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                ) : (
                  <Link
                    to="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="text-center text-sm font-medium bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
