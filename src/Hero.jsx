import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid">
        <div>
          <div class="hero-tag">
            <span class="hero-tag-dot"></span>
            Zimbabwe's Premier IT Partner · Harare
          </div>
          <h1 class="hero-title">
            Building Digital
            <br />
            <span>Solutions</span> That
            <br />
            Drive Growth
          </h1>
          <p class="hero-desc">
            From enterprise systems to mobile apps, InfoByte Solutions
            architects and delivers software that transforms how Zimbabwean
            businesses operate and compete.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              View Our Work →
            </a>
            <a href="#contact" class="btn-outline">
              Start a Project
            </a>
          </div>
          <div class="hero-stats">
            <div>
              <div class="hstat-val">80+</div>
              <div class="hstat-label">Projects delivered</div>
            </div>
            <div>
              <div class="hstat-val">95%</div>
              <div class="hstat-label">Client retention</div>
            </div>
            <div>
              <div class="hstat-val">3+</div>
              <div class="hstat-label">Years in the market</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card-stack">
            <div class="hcard hcard-main">
              <div class="hcard-label">Project Delivery — 2024</div>
              <div class="hcard-title">On-time Delivery Rate</div>
              <div class="hcard-bar-row">
                <span class="hcard-bar-label">Web Apps</span>
                <div class="hcard-bar-bg">
                  <div class="hcard-bar-fill-1"></div>
                </div>
                <span className="hero-span">92%</span>
              </div>
              <div class="hcard-bar-row">
                <span class="hcard-bar-label">Mobile</span>
                <div class="hcard-bar-bg">
                  <div class="hcard-bar-fill-2"></div>
                </div>
                <span className="hero-span">88%</span>
              </div>
              <div class="hcard-bar-row">
                <span class="hcard-bar-label">Systems</span>
                <div class="hcard-bar-bg">
                  <div class="hcard-bar-fill-3"></div>
                </div>
                <span className="hero-span">95%</span>
              </div>
              <div class="hcard-metric">
                <div>
                  <div class="metric-big">97%</div>
                  <div class="metric-label">Overall satisfaction</div>
                </div>
                {/* <div className="hero-1">
                  <div className="hero-2">Active projects</div>
                  <div className="hero-3">12</div>
                </div> */}
              </div>
            </div>
            <div class="hcard hcard-sub">
              <div class="hcard-label">Latest milestone</div>
              <div className="hero-4">
                <div className="hero-5"></div>
                <span className="hero-6">ERP deployment live</span>
              </div>
              <div className="hero-7">
                Retailer chain — 5 branches synced in real time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
