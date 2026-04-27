import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { label: "Overview", path: "/" },
    { label: "Leasing", path: "/leasing" },
    { label: "Sponsorship", path: "/sponsorship" },
    { label: "Events", path: "/events" },
    { label: "Venues", path: "/venues" },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="max-w-md">
            <h4 className="text-lg font-medium tracking-tight text-[var(--color-text)]">
              Mall{" "}
              <span className="italic text-[var(--color-accent)] font-light">
                of
              </span>{" "}
              America
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              A premium interactive sales experience showcasing the scale,
              energy, and commercial opportunity of one of the world’s most
              iconic retail and entertainment destinations.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)] mb-5">
              Explore Opportunities
            </p>

            <nav className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-[var(--color-text)] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between gap-3 text-[11px] text-[var(--color-text-muted)]">
          <p>© {new Date().getFullYear()} Mall of America</p>

          <p className="uppercase tracking-[0.18em]">
            Interactive Commercial Presentation Experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;