
function App() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="text-xl font-bold">Gym Landing</div>
          <div className="flex gap-4">
            <button className="btn-ghost">Home</button>
            <button className="btn-ghost">About</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Section Dark */}
      <div className="section section-dark">
        <div className="container-page">
          <h1 className="h1">Section Dark - Typography Test</h1>
          <h2 className="h2 mt-6">Heading 2 Style</h2>
          <p className="p-lead mt-4">This is a lead paragraph with the p-lead class.</p>
          
          {/* Buttons */}
          <div className="mt-8">
            <h2 className="h2 mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-ghost">Ghost Button</button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="stat">
              <div className="stat-num">500+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Open Hours</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Charcoal */}
      <div className="section section-charcoal">
        <div className="container-page">
          <h2 className="h2">Section Charcoal - Cards & Badges</h2>
          
          {/* Cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card card-pad">
              <h3 className="h2 text-lg mb-3">Card Title</h3>
              <p className="p-lead text-sm">This is a card with card and card-pad classes applied.</p>
            </div>
            <div className="card card-pad">
              <h3 className="h2 text-lg mb-3">Another Card</h3>
              <p className="p-lead text-sm">Cards have a nice backdrop blur effect and subtle border.</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8">
            <h3 className="h2 text-lg mb-4">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="badge-olive">Olive Badge</span>
              <span className="badge border-white/40 bg-white/10 text-white">Default Badge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Light */}
      <div className="section section-light">
        <div className="container-page">
          <h2 className="h2">Section Light - All Components</h2>
          <p className="p-lead mt-4 text-base">This section uses the light background with dark text.</p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-primary">Primary on Light</button>
            <button className="btn-secondary">Secondary on Light</button>
            <button className="btn-ghost">Ghost on Light</button>
          </div>

          <div className="mt-8">
            <span className="badge-olive">Badge on Light</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;