export default function Navbar({ isScrolled, onOpenMenu }) {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="logo-elite" onClick={(e) => handleScroll(e, "hero")} style={{ cursor: "pointer" }}>
          <span className="logo-elite-elite">ELITE</span>
          <span className="logo-elite-fit">FIT</span>
        </div>
       {/* <div className="logo-elite">
          <img
            src="../public/vite.svg"   // put your logo inside public/logo.png
            alt="Elite Fit Logo"
            className="h-10 w-auto object-contain"
            onClick={(e) => handleScroll(e, "hero")}
            style={{ cursor: "pointer" }}
          />
        </div> */}

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-white hover:text-(--color-brand-orange) transition-colors"
          >
            About
          </a>
          <a
            href="#schedule"
            onClick={(e) => handleScroll(e, "schedule")}
            className="text-white hover:text-(--color-brand-orange) transition-colors"
          >
            Programs
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, "pricing")}
            className="text-white hover:text-(--color-brand-orange) transition-colors"
          >
            Pricing
          </a>
          <a
            href="#stories"
            onClick={(e) => handleScroll(e, "stories")}
            className="text-white hover:text-(--color-brand-orange) transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="text-white hover:text-(--color-brand-orange) transition-colors"
          >
            Contact
          </a>
        </div>

        <button className="hidden md:inline-flex btn-primary">
          Book a Free Trial
        </button>

        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={onOpenMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}