import "./Contact.css";

function Contact() {
  // function submitForm() {
  //   const fname = document.getElementById("fname").value;
  //   const email = document.getElementById("email").value;
  //   if (!fname || !email) {
  //     showToast("⚠️ Please fill in your name and email.");
  //     return;
  //   }
  //   showToast("✅ Message sent! We'll be in touch within 24 hours.");
  // }
  // function showToast(msg) {
  //   const toast = document.getElementById("toast");
  //   toast.textContent = msg;
  //   toast.classList.add("show");
  //   setTimeout(() => toast.classList.remove("show"), 4000);
  // }
  return (
    <section id="contact">
      <div className="contact-section">
        <div class="reveal">
          <span class="section-label">Get In Touch</span>
          <h2 class="section-heading">Let's Build Something</h2>
          <p class="section-sub">
            Tell us about your project. We'll respond within one business day
            with an honest assessment and next steps.
          </p>
        </div>
        <div class="contact-grid">
          <div class="reveal">
            <ul class="contact-info-list">
              <li>
                <div class="ci-icon">📍</div>
                <div>
                  <div class="ci-label">Office</div>
                  <div class="ci-val">
                    3 Anchor House, 54 Jason Moyo Ave, Harare, Zimbabwe
                  </div>
                </div>
              </li>
              <li>
                <div class="ci-icon">📞</div>
                <div>
                  <div class="ci-label">Phone / WhatsApp</div>
                  <div class="ci-val">+263 77 257 9293</div>
                </div>
              </li>
              <li>
                <div class="ci-icon">✉️</div>
                <div>
                  <div class="ci-label">Email</div>
                  <div class="ci-val">infobytesolution.@gmail.com</div>
                </div>
              </li>
              <li>
                <div class="ci-icon">🕐</div>
                <div>
                  <div class="ci-label">Working Hours</div>
                  <div class="ci-val">Mon – Fri, 8:00 AM – 5:30 PM CAT</div>
                </div>
              </li>
            </ul>
            <div className="contact-1">
              <div className="contact-2">Free consultation</div>
              <div className="contact-3">
                Every engagement starts with a free 60-minute discovery call. No
                commitment, no pressure — just an honest conversation about what
                you need.
              </div>
            </div>
          </div>
          <div class="contact-form reveal">
            <h3 className="contact-4">Send us a message</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="fname">First name</label>
                <input type="text" id="fname" placeholder="Tendai" />
              </div>
              <div class="form-group">
                <label for="lname">Last name</label>
                <input type="text" id="lname" placeholder="Mutasa" />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="tendai@yourcompany.co.zw"
              />
            </div>
            <div class="form-group">
              <label for="service">Service needed</label>
              <select id="service">
                <option value="">Select a service...</option>
                <option>Web Application Development</option>
                <option>Mobile App Development</option>
                <option>Business System / ERP</option>
                <option>E-Commerce Solution</option>
                <option>Cloud & Infrastructure</option>
                <option>IT Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="budget">Approximate budget (USD)</label>
              <select id="budget">
                <option value="">Select a range...</option>
                <option>Under $2,000</option>
                <option>$2,000 – $10,000</option>
                <option>$10,000 – $30,000</option>
                <option>$30,000 – $80,000</option>
                <option>$80,000+</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Tell us about your project</label>
              <textarea
                id="message"
                placeholder="Describe what you're looking to build, any deadlines, and any specific requirements..."
              ></textarea>
            </div>
            <button class="btn-primary" onclick="submitForm()">
              Send message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
