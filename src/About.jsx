import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about-section">
        <div class="about-grid">
          <div class="about-img-block reveal">
            <div class="about-img-main">
              <div class="about-stat-card">
                <div class="about-stat-val">3+</div>
                <div class="about-stat-lbl">Years in business</div>
              </div>
              <div class="about-stat-card">
                <div class="about-stat-val">15+</div>
                <div class="about-stat-lbl">Projects shipped</div>
              </div>
              <div class="about-stat-card">
                <div class="about-stat-val">20+</div>
                <div class="about-stat-lbl">Happy clients</div>
              </div>
              <div class="about-stat-card">
                <div class="about-stat-val">5+</div>
                <div class="about-stat-lbl">Team members</div>
              </div>
            </div>
            <div class="about-badge">
              <span class="badge-dot"></span>
              <div>
                <div className="active-proj">Actively delivering</div>
                <div className="live-proj">12 live projects right now</div>
              </div>
            </div>
          </div>
          <div class="reveal">
            <span class="section-label">Who We Are</span>
            <h2 class="section-heading">Harare's Home-Grown Tech Studio</h2>
            <p className="about-story">
              Founded in 2017, InfoByte Solutions was built on a simple belief —
              that Zimbabwean businesses deserve world-class software built
              locally, by people who understand the market.
            </p>
            <p className="story-cont">
              Our multidisciplinary team of engineers, designers, and
              strategists has shipped solutions for companies across fintech,
              retail, healthcare, education, and logistics.
            </p>
            <ul class="about-list">
              <li>
                <span class="check-icon">✓</span>Agile delivery with transparent
                project management
              </li>
              <li>
                <span class="check-icon">✓</span>Scalable codebases built to
                industry standards
              </li>
              <li>
                <span class="check-icon">✓</span>Post-launch support &
                maintenance contracts
              </li>
              <li>
                <span class="check-icon">✓</span>Local presence with
                international expertise
              </li>
              <li>
                <span class="check-icon">✓</span>NDA-protected engagements as
                standard
              </li>
            </ul>
            <a href="#contact" class="about-btn">
              Meet the team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
