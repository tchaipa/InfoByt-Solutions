import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="test-section">
        <div class="test-reveal">
          <span class="section-label">Client Voices</span>
          <h2 class="section-heading">What Our Clients Say</h2>
        </div>
        <div class="testimonials-grid">
          <div class="tcard reveal">
            <div class="stars">★★★★★</div>
            <p class="tcard-quote">
              "InfoByte delivered our ERP on time and within budget — something
              we'd been told was impossible by other vendors. The system
              transformed how we manage our stores."
            </p>
            <div class="tcard-author">
              <div class="tcard-avatar">TM</div>
              <div>
                <div class="tcard-name">Tendai Murisa</div>
                <div class="tcard-role">CEO, Retail Chain — Harare</div>
              </div>
            </div>
          </div>
          <div class="tcard reveal">
            <div class="stars">★★★★★</div>
            <p class="tcard-quote">
              "Our microfinance portal reduced walk-ins dramatically. Clients
              love the app and our staff productivity doubled. InfoByte
              understood our compliance needs deeply."
            </p>
            <div class="tcard-author">
              <div class="tcard-avatar">CN</div>
              <div>
                <div class="tcard-name">Chipo Nzira</div>
                <div class="tcard-role">Operations Director, MFI</div>
              </div>
            </div>
          </div>
          <div class="tcard reveal">
            <div class="stars">★★★★★</div>
            <p class="tcard-quote">
              "The LogiTrack app gave us real-time visibility we never had
              before. Driver accountability went up, client complaints dropped,
              and we finally know where every truck is."
            </p>
            <div class="tcard-author">
              <div class="tcard-avatar">BK</div>
              <div>
                <div class="tcard-name">Brian Kachingwe</div>
                <div class="tcard-role">Fleet Manager, Logistics Co.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
