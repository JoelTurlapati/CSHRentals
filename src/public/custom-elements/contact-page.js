// @ts-nocheck
class CshContact extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
csh-contact{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;color:#0d1f35;background:#eef2f7;line-height:1.6}

/* ── HEADER ── */
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 32px;display:flex;align-items:center;height:94px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:55px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:12px 23px;font-size:14px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:47px;height:47px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:20px;transition:background .2s,border-color .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}

/* ── HERO ── */
.cp-hero{background:linear-gradient(135deg,#0a1628,#0d2545);padding:72px 32px 80px;text-align:center}
.cp-hero__eyebrow{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:#c8962a;border:1px solid rgba(200,150,42,.35);padding:5px 16px;border-radius:20px;margin-bottom:24px}
.cp-hero__h1{font-size:clamp(31px,4.8vw,53px);font-weight:900;color:#fff;line-height:1.1;letter-spacing:-.02em;margin-bottom:14px}
.cp-hero__sub{font-size:18px;color:rgba(255,255,255,.65);max-width:560px;margin:0 auto}

/* ── FORM SECTION ── */
.cp-form-section{max-width:680px;margin:0 auto;padding:64px 24px 80px}
.cp-form-card{background:#fff;border-radius:14px;padding:44px 40px;box-shadow:0 4px 32px rgba(10,30,60,.1)}
.cp-form-card h2{font-size:26px;font-weight:800;color:#0d1f35;margin-bottom:6px}
.cp-form-card p{font-size:17px;color:#5a6b85;margin-bottom:28px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:540px){.form-row{grid-template-columns:1fr}}
.form-group{margin-bottom:18px}
.form-group label{display:block;margin-bottom:6px;font-size:14px;font-weight:700;color:#0d1f35;text-transform:uppercase;letter-spacing:.07em}
.form-group input,.form-group textarea,.form-group select{width:100%;padding:12px 16px;border:1.5px solid #d8e0e8;border-radius:7px;font-size:17px;font-family:'Inter',sans-serif;color:#0d1f35;background:#fff;transition:border-color .2s,box-shadow .2s;resize:vertical}
.form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#c8962a;box-shadow:0 0 0 3px rgba(200,150,42,.12)}
.form-group textarea{min-height:120px}
.cp-submit{width:100%;padding:15px;background:#c8962a;color:#0a1628;font-family:'Inter',sans-serif;font-size:16px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;border:none;border-radius:7px;cursor:pointer;transition:background .2s;margin-top:6px}
.cp-submit:hover{background:#dba83a}
.cp-submit:disabled{background:#8899bb;cursor:not-allowed}
.cp-disclaimer{margin-top:16px;font-size:14px;color:#8899bb;line-height:1.7;text-align:center}

/* ── INFO STRIP ── */
.cp-info{background:#fff;border-top:1px solid rgba(10,30,60,.08);padding:56px 32px}
.cp-info__inner{max-width:960px;margin:0 auto}
.cp-info__h2{font-size:clamp(24px,3.6vw,36px);font-weight:800;color:#0d1f35;text-align:center;margin-bottom:10px}
.cp-info__sub{font-size:17px;color:#5a6b85;text-align:center;margin-bottom:48px}
.cp-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
@media(max-width:720px){.cp-steps{grid-template-columns:1fr}}
.cp-step{background:#eef2f7;border-radius:10px;padding:28px 22px;text-align:center}
.cp-step__icon{font-size:28px;margin-bottom:12px}
.cp-step h3{font-size:18px;font-weight:800;color:#0d1f35;margin-bottom:10px}
.cp-step p{font-size:16px;color:#5a6b85;line-height:1.75}

/* ── CONTACT DETAILS ── */
.cp-details{background:#0a1628;padding:40px 32px}
.cp-details__inner{max-width:800px;margin:0 auto;display:flex;flex-wrap:wrap;gap:40px;justify-content:center}
.cp-detail-item__lbl{font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:6px}
.cp-detail-item__val{font-size:18px;font-weight:600;color:#fff;text-decoration:none}
a.cp-detail-item__val:hover{color:#c8962a}

/* ── FOOTER ── */
.footer{background:#060e1c;padding:22px 32px;text-align:center;font-size:14px;color:rgba(255,255,255,.3)}
</style>

<!-- HEADER -->
<header class="csh-hdr">
  <a href="/" class="csh-hdr__logo">
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>
    <span class="csh-hdr__logo-text">CSH RENTALS</span>
  </a>
  <nav class="csh-hdr__nav">
    <a class="csh-hdr__btn" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-hdr__btn csh-hdr__btn--gold" href="/contact">Contact</a>
    <a class="csh-hdr__email" href="mailto:scottprivate@tagplanning.com" title="Email Us">&#9993;</a>
  </nav>
</header>

<!-- HERO -->
<div class="cp-hero">
  <div class="cp-hero__eyebrow">Get in Touch &middot; CSH Rentals</div>
  <h1 class="cp-hero__h1">Let&rsquo;s Start a Conversation</h1>
  <p class="cp-hero__sub">Whether you&rsquo;re a prospective investor, a potential tenant, or just have questions &mdash; we&rsquo;d love to hear from you.</p>
</div>

<!-- FORM -->
<div class="cp-form-section">
  <div class="cp-form-card">
    <h2>Send Us a Message</h2>
    <p>Fill out the form below and we&rsquo;ll get back to you within 24 hours.</p>
    <form id="csh-contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="cp-fname">First Name</label>
          <input type="text" id="cp-fname" name="first_name" placeholder="Jane" required/>
        </div>
        <div class="form-group">
          <label for="cp-lname">Last Name</label>
          <input type="text" id="cp-lname" name="last_name" placeholder="Doe" required/>
        </div>
      </div>
      <div class="form-group">
        <label for="cp-email">Email Address</label>
        <input type="email" id="cp-email" name="email" placeholder="jane@example.com" required/>
      </div>
      <div class="form-group">
        <label for="cp-phone">Phone Number</label>
        <input type="tel" id="cp-phone" name="phone" placeholder="(330) 555-1234"/>
      </div>
      <div class="form-group">
        <label for="cp-interest">I&rsquo;m interested in</label>
        <select id="cp-interest" name="interest">
          <option value="">Select one&hellip;</option>
          <option value="investor">Investor / Portfolio Acquisition</option>
          <option value="tenant">Tenant / Rental Inquiry</option>
          <option value="individual">Individual Property Purchase</option>
          <option value="geneva">Geneva on the Lake STR</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="cp-msg">Message</label>
        <textarea id="cp-msg" name="message" placeholder="Tell us a bit about what you&rsquo;re looking for&hellip;"></textarea>
      </div>
      <button type="submit" class="cp-submit" id="cp-submit-btn">Send Message &rarr;</button>
      <p class="cp-disclaimer">We typically respond within 24 hours. Please do not share sensitive financial information through this form.</p>
    </form>
  </div>
</div>

<!-- INFO STRIP -->
<div class="cp-info">
  <div class="cp-info__inner">
    <h2 class="cp-info__h2">What Happens Next?</h2>
    <p class="cp-info__sub">Here&rsquo;s what to expect after you reach out.</p>
    <div class="cp-steps">
      <div class="cp-step">
        <div class="cp-step__icon">&#128222;</div>
        <h3>Step 1 &mdash; We Respond</h3>
        <p>You&rsquo;ll hear from us within 24 hours via email or phone to introduce ourselves and understand your needs.</p>
      </div>
      <div class="cp-step">
        <div class="cp-step__icon">&#128100;</div>
        <h3>Step 2 &mdash; Discovery Call</h3>
        <p>We&rsquo;ll set up a brief call to discuss the opportunity in detail, answer questions, and share any documents you need.</p>
      </div>
      <div class="cp-step">
        <div class="cp-step__icon">&#127968;</div>
        <h3>Step 3 &mdash; Next Steps</h3>
        <p>Whether that&rsquo;s a property walkthrough, a financial review, or a rental application &mdash; we&rsquo;ll guide you through the process.</p>
      </div>
    </div>
  </div>
</div>

<!-- CONTACT DETAILS -->
<div class="cp-details">
  <div class="cp-details__inner">
    <div class="cp-detail-item">
      <div class="cp-detail-item__lbl">Email</div>
      <a class="cp-detail-item__val" href="mailto:scottprivate@tagplanning.com">scottprivate@tagplanning.com</a>
    </div>
    <div class="cp-detail-item">
      <div class="cp-detail-item__lbl">Address</div>
      <span class="cp-detail-item__val">1428 Market Ave. N., Canton, OH 44714</span>
    </div>
  </div>
</div>

<footer class="footer">
  &copy; 2025 CSH Rentals &nbsp;&middot;&nbsp; 1428 Market Ave. N., Canton, OH 44714
</footer>
`;

    const form = this.querySelector('#csh-contact-form');
    const btn = this.querySelector('#cp-submit-btn');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        btn.textContent = 'Message Sent! We\'ll be in touch within 24 hours.';
        btn.disabled = true;
        btn.style.background = '#1a3557';
        btn.style.color = '#fff';
      });
    }

    const _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault(); e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
  }
}
customElements.define('csh-contact', CshContact);
