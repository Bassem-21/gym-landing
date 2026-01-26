export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu">
        <button
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="logo-elite mb-8">
          <span className="logo-elite-elite">ELITE</span>
          <span className="logo-elite-fit">FIT</span>
        </div>

        <nav className="mobile-nav-links">
          <a href="#about" onClick={onClose}>About</a>
          <a href="#programs" onClick={onClose}>Programs</a>
          <a href="#pricing" onClick={onClose}>Pricing</a>
          <a href="#testimonials" onClick={onClose}>Testimonials</a>
          <a href="#contact" onClick={onClose}>Contact</a>
        </nav>

        <div className="mobile-menu-cta">
          <button className="btn-primary w-full mb-4">Book a Free Trial</button>
          <button className="btn-outline w-full">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Watch Tour
          </button>
        </div>
      </div>
    </>
  );
}
