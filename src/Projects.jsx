import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-section">
        <div class="reveal">
          <span class="section-label">Our Work</span>
          <h2 class="section-heading">Selected Projects</h2>
          <p class="section-sub">
            Real solutions built for real Zimbabwean businesses. Each project
            reflects our commitment to quality, performance, and measurable
            outcomes.
          </p>
        </div>
        <div class="projects-filter reveal">
          <button class="filter-btn active" data-filter="all">
            All
          </button>
          <button class="filter-btn" data-filter="web">
            Web Apps
          </button>
          <button class="filter-btn" data-filter="mobile">
            Mobile
          </button>
          <button class="filter-btn" data-filter="system">
            Systems
          </button>
          <button class="filter-btn" data-filter="erp">
            ERP
          </button>
        </div>
        <div class="projects-grid" id="projectsGrid">
          <div class="project-card reveal" data-cat="erp">
            <div class="project-thumb">🏪</div>
            <div class="project-body">
              <span class="project-tag tag-erp">ERP / POS</span>
              <h3>RetailPro — Multi-Branch Retail ERP</h3>
              <p>
                A complete point-of-sale and inventory management ERP for a
                Harare-based retail chain spanning 5 branches, with real-time
                stock sync, employee management, and detailed sales analytics.
              </p>
              <div class="project-stack">
                <span class="stack-pill">Django</span>
                <span class="stack-pill">React</span>
                <span class="stack-pill">PostgreSQL</span>
                <span class="stack-pill">Redis</span>
                <span class="stack-pill">Docker</span>
              </div>
              <button class="expand-btn" onclick="toggleDetail(this)">
                View full details ↓
              </button>
              <div class="project-detail">
                <div class="project-detail-inner">
                  <div class="detail-row">
                    <div class="detail-label">Client</div>
                    <div class="detail-val">Confidential — Retail (FMCG)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Duration</div>
                    <div class="detail-val">8 months (2023)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Scope</div>
                    <div class="detail-val">
                      POS terminals, central inventory, HR module, financial
                      reporting, WhatsApp receipt delivery
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Impact</div>
                    <div class="detail-val">
                      40% reduction in stock discrepancies; 3× faster checkout
                      process
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Team size</div>
                    <div class="detail-val">4 developers, 1 designer, 1 PM</div>
                  </div>
                </div>
              </div>
              <div class="project-meta">
                <span>📅 2023</span>
                <span>👥 5 branches</span>
                <span>⚡ 40% efficiency gain</span>
              </div>
            </div>
          </div>

          <div class="project-card reveal" data-cat="web">
            <div class="project-thumb">🏦</div>
            <div class="project-body">
              <span class="project-tag tag-web">Web App</span>
              <h3>FinEdge — Microfinance Client Portal</h3>
              <p>
                A secure, full-featured web platform for a microfinance
                institution enabling clients to apply for loans, track
                repayments, and receive statements — reducing branch visits by
                over 60%.
              </p>
              <div class="project-stack">
                <span class="stack-pill">Next.js</span>
                <span class="stack-pill">Node.js</span>
                <span class="stack-pill">MySQL</span>
                <span class="stack-pill">AWS</span>
                <span class="stack-pill">Stripe</span>
              </div>
              <button class="expand-btn" onclick="toggleDetail(this)">
                View full details ↓
              </button>
              <div class="project-detail">
                <div class="project-detail-inner">
                  <div class="detail-row">
                    <div class="detail-label">Client</div>
                    <div class="detail-val">
                      Microfinance institution, Harare
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Duration</div>
                    <div class="detail-val">6 months (2023–2024)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Scope</div>
                    <div class="detail-val">
                      Client onboarding, loan lifecycle management, USSD
                      fallback, SMS/email notifications, admin dashboard
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Impact</div>
                    <div class="detail-val">
                      62% fewer branch visits; 4× faster loan approval cycle
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Users</div>
                    <div class="detail-val">3,200+ registered clients</div>
                  </div>
                </div>
              </div>
              <div class="project-meta">
                <span>📅 2024</span>
                <span>👤 3,200+ users</span>
                <span>⚡ 62% fewer visits</span>
              </div>
            </div>
          </div>

          <div class="project-card reveal" data-cat="mobile">
            <div class="project-thumb">🚚</div>
            <div class="project-body">
              <span class="project-tag tag-mobile">Mobile App</span>
              <h3>LogiTrack — Fleet & Delivery App</h3>
              <p>
                Real-time fleet tracking and delivery management app for a
                logistics company, with driver mobile app, dispatcher dashboard,
                and automated customer ETA notifications.
              </p>
              <div class="project-stack">
                <span class="stack-pill">React Native</span>
                <span class="stack-pill">FastAPI</span>
                <span class="stack-pill">Google Maps</span>
                <span class="stack-pill">Firebase</span>
              </div>
              <button class="expand-btn" onclick="toggleDetail(this)">
                View full details ↓
              </button>
              <div class="project-detail">
                <div class="project-detail-inner">
                  <div class="detail-row">
                    <div class="detail-label">Client</div>
                    <div class="detail-val">
                      Logistics & courier company, national coverage
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Duration</div>
                    <div class="detail-val">5 months (2022)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Scope</div>
                    <div class="detail-val">
                      Driver app (iOS/Android), web dispatcher portal, live GPS
                      tracking, proof-of-delivery photos, invoicing
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Impact</div>
                    <div class="detail-val">
                      30% improvement in on-time delivery; customer complaints
                      down 55%
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Fleet size</div>
                    <div class="detail-val">80 vehicles tracked</div>
                  </div>
                </div>
              </div>
              <div class="project-meta">
                <span>📅 2022</span>
                <span>🚗 80 vehicles</span>
                <span>⚡ 30% on-time gain</span>
              </div>
            </div>
          </div>

          <div class="project-card reveal" data-cat="system">
            <div class="project-thumb">🏥</div>
            <div class="project-body">
              <span class="project-tag tag-system">System</span>
              <h3>MediCore — Hospital Management System</h3>
              <p>
                A comprehensive hospital management system covering patient
                registration, appointment scheduling, EMR, pharmacy inventory,
                and billing — deployed across a private hospital network.
              </p>
              <div class="project-stack">
                <span class="stack-pill">Laravel</span>
                <span class="stack-pill">Vue.js</span>
                <span class="stack-pill">MySQL</span>
                <span class="stack-pill">PDF reports</span>
              </div>
              <button class="expand-btn" onclick="toggleDetail(this)">
                View full details ↓
              </button>
              <div class="project-detail">
                <div class="project-detail-inner">
                  <div class="detail-row">
                    <div class="detail-label">Client</div>
                    <div class="detail-val">
                      Private hospital group, Harare & Bulawayo
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Duration</div>
                    <div class="detail-val">12 months (2021–2022)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Scope</div>
                    <div class="detail-val">
                      Patient EMR, appointment booking, ward management,
                      pharmacy POS, insurance claims module, staff scheduling
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Impact</div>
                    <div class="detail-val">
                      Paperless records for 12,000+ patients; billing errors
                      reduced by 78%
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Locations</div>
                    <div class="detail-val">3 hospital sites</div>
                  </div>
                </div>
              </div>
              <div class="project-meta">
                <span>📅 2022</span>
                <span>🏥 3 sites</span>
                <span>⚡ 12,000+ patients</span>
              </div>
            </div>
          </div>

          <div class="project-card reveal" data-cat="web">
            <div class="project-thumb">🎓</div>
            <div class="project-body">
              <span class="project-tag tag-web">Web App</span>
              <h3>EduPath — LMS & Student Portal</h3>
              <p>
                A feature-rich learning management system for a private college,
                with video lectures, online assessments, student progress
                tracking, and fee management integrated into one platform.
              </p>
              <div class="project-stack">
                <span class="stack-pill">React</span>
                <span class="stack-pill">Django REST</span>
                <span class="stack-pill">PostgreSQL</span>
                <span class="stack-pill">AWS S3</span>
              </div>
              <button class="expand-btn" onclick="toggleDetail(this)">
                View full details ↓
              </button>
              <div class="project-detail">
                <div class="project-detail-inner">
                  <div class="detail-row">
                    <div class="detail-label">Client</div>
                    <div class="detail-val">
                      Private tertiary institution, Harare
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Duration</div>
                    <div class="detail-val">7 months (2023)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Scope</div>
                    <div class="detail-val">
                      Course authoring, video hosting, quiz engine, grade book,
                      fee payment, parent portal
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Impact</div>
                    <div class="detail-val">
                      800+ active students; admin workload reduced by 50%
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Courses</div>
                    <div class="detail-val">35 active courses</div>
                  </div>
                </div>
              </div>
              <div class="project-meta">
                <span>📅 2023</span>
                <span>👨‍🎓 800+ students</span>
                <span>⚡ 50% less admin work</span>
              </div>
            </div>
          </div>

          <div class="project-card reveal" data-cat="mobile">
            <div class="project-thumb">🛍️</div>
            <div class="project-body">
              <span class="project-tag tag-mobile">Mobile App</span>
              <h3>ShopZim — Local E-Commerce App</h3>
              <p>
                A marketplace mobile app connecting Zimbabwean buyers and SME
                sellers, with EcoCash and ZimSwitch payment integration,
                delivery partner API, and vendor analytics dashboard.
              </p>
              <div class="project-stack">
                <span class="stack-pill">Flutter</span>
                <span class="stack-pill">Node.js</span>
                <span class="stack-pill">MongoDB</span>
                <span class="stack-pill">EcoCash API</span>
              </div>
              <button class="expand-btn" onclick="toggleDetail(this)">
                View full details ↓
              </button>
              <div class="project-detail">
                <div class="project-detail-inner">
                  <div class="detail-row">
                    <div class="detail-label">Client</div>
                    <div class="detail-val">E-commerce startup, Harare</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Duration</div>
                    <div class="detail-val">9 months (2022–2023)</div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Scope</div>
                    <div class="detail-val">
                      iOS + Android app, vendor CMS, EcoCash/ZimSwitch payments,
                      delivery tracking, push notifications, admin panel
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">Impact</div>
                    <div class="detail-val">
                      5,000+ downloads in first 3 months; 120 active vendors
                    </div>
                  </div>
                  <div class="detail-row">
                    <div class="detail-label">GMV</div>
                    <div class="detail-val">
                      USD 180k+ processed in year one
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-meta">
                <span>📅 2023</span>
                <span>📦 120 vendors</span>
                <span>⚡ 5k+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
