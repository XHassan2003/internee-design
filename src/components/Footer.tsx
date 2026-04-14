import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
              Ready to Kickstart Your Career?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-md mx-auto">
              Join 200,000+ students building real skills and landing their dream jobs.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-background text-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Get Started Free <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <span className="font-heading text-lg font-bold">
                Internee<span className="text-gradient">.pk</span>
              </span>
              <p className="mt-3 text-sm text-muted-foreground max-w-62.5">
                Pakistan's largest virtual internship platform empowering students with real-world skills.
              </p>
            </div>
            {[
              { heading: "Platform", links: ["Internships", "Programs", "Job Portal", "Certificates"] },
              { heading: "Company", links: ["About Us", "Blog", "Careers", "Contact"] },
              { heading: "Support", links: ["Help Center", "Privacy Policy", "Terms of Service", "FAQ"] },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="font-semibold text-sm mb-4">{col.heading}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Internee.pk — All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;