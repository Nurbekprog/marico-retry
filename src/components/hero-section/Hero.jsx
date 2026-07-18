import "./Hero.scss";

const Hero = () => {
  return (
    <main className="hero-section container">
      <div className="hero-copy">
        <h1>
          <span>Own your audience.</span>
          <span className="gradient-text">So you don't lose them.</span>
        </h1>

        <p>Create and sell newsletters, memberships, and digital products.</p>

        <div className="hero-actions" aria-label="Hero actions">
          <button type="button" className="primary-action">
            Get Started Now
          </button>
          <button type="button" className="secondary-action">
            View A Demo
          </button>
        </div>

        <div className="hero-proof">
          <span className="status-dot" aria-hidden="true" />
          <strong>1000+</strong>
          <span>creators have already started</span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
