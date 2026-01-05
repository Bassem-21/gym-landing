
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          {/* Logo */}
          <div className="logo-elite">
            <span className="logo-elite-elite">ELITE</span>
            <span className="logo-elite-fit">FIT</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white hover:text-[var(--color-brand-orange)] transition-colors">About</a>
            <a href="#programs" className="text-white hover:text-[var(--color-brand-orange)] transition-colors">Programs</a>
            <a href="#pricing" className="text-white hover:text-[var(--color-brand-orange)] transition-colors">Pricing</a>
            <a href="#testimonials" className="text-white hover:text-[var(--color-brand-orange)] transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-[var(--color-brand-orange)] transition-colors">Contact</a>
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden md:inline-flex btn-primary">Book a Free Trial</button>
          
          {/* Mobile Hamburger Menu */}
          <button 
            className="md:hidden text-white p-2" 
            aria-label="Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="mobile-menu">
            {/* Close Button */}
            <button 
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Logo */}
            <div className="logo-elite mb-8">
              <span className="logo-elite-elite">ELITE</span>
              <span className="logo-elite-fit">FIT</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="mobile-nav-links">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
            
            {/* CTA Buttons */}
            <div className="mobile-menu-cta">
              <button className="btn-primary w-full mb-4">Book a Free Trial</button>
              <button className="btn-outline w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch Tour
              </button>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* Badge */}
          <div className="mb-6">
            <span className="badge-green">
              <svg className="w-4 h-4" fill="var(--color-brand-orange)" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              PROFESSIONAL TRAINING FACILITY
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="hero-headline mb-6">
            <span className="text-white">TRANSFORM YOUR</span>
            <br />
            <span className="text-(--color-brand-orange)">BODY & MIND</span>
          </h1>
          
          {/* Description */}
          <p className="p-lead text-lg md:text-xl max-w-2xl mb-8">
            Experience elite-level training with certified professionals, cutting-edge equipment, and personalized programs designed for real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <button className="btn-primary w-full md:w-auto">
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn-outline w-full md:w-auto">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Watch Tour
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-row justify-center gap-6 sm:gap-8 md:gap-12">
            <div className="stat">
              <div className="stat-num">2,500+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat">
              <div className="stat-num">15+</div>
              <div className="stat-label">Expert Trainers</div>
            </div>
            <div className="stat">
              <div className="stat-num">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;