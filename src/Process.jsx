import "./Process.css";

function Process() {
  return (
    <section id="process">
      <div className="process-section">
        <div class="reveal">
          <span class="section-label">How We Work</span>
          <h2 class="section-heading">Our Delivery Process</h2>
          <p class="section-sub">
            A structured, transparent process that keeps you informed and your
            project on track at every stage.
          </p>
        </div>
        <div class="process-steps">
          <div class="process-step reveal">
            <div class="step-num">01</div>
            <h3>Discovery</h3>
            <p>
              Deep-dive into your goals, users, and constraints. We map
              requirements and define a clear project scope together.
            </p>
          </div>
          <div class="process-step reveal">
            <div class="step-num">02</div>
            <h3>Architecture</h3>
            <p>
              Technical blueprint, system design, and UX wireframes reviewed and
              approved before any code is written.
            </p>
          </div>
          <div class="process-step reveal">
            <div class="step-num">03</div>
            <h3>Build</h3>
            <p>
              Iterative sprints with weekly demos. You see progress every week,
              not just at the end.
            </p>
          </div>
          <div class="process-step reveal">
            <div class="step-num">04</div>
            <h3>QA & Test</h3>
            <p>
              Rigorous automated and manual testing. Security audits,
              performance benchmarking, and UAT sign-off.
            </p>
          </div>
          <div class="process-step reveal">
            <div class="step-num">05</div>
            <h3>Launch</h3>
            <p>
              Smooth deployment, staff training, and a hypercare period ensuring
              a stable go-live experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
