// @ts-nocheck
class CshGenevaStr extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-geneva-str { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:68px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:40px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:8px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:8px 14px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:34px;height:34px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:14px;transition:background .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}

.hero-img { position: relative; width: 100%; height: clamp(280px, 45vw, 520px); overflow: hidden; }
.hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hero-img__overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(13,31,53,0.62) 100%); display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding: 36px 24px; text-align: center; }
.hero-img__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
.hero-img__title { font-size: clamp(24px, 5vw, 46px); font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 6px; }
.hero-img__location { font-size: 15px; color: rgba(255,255,255,0.8); }

.photos { max-width: 960px; margin: 36px auto 0; padding: 0 24px; }
.photos h2 { font-size: 16px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
.photos__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
@media (max-width: 560px) { .photos__grid { grid-template-columns: 1fr; } }
.photos__grid img { width: 100%; height: 220px; object-fit: cover; border-radius: 8px; display: block; transition: opacity 0.2s; cursor: pointer; }
.photos__grid img:hover { opacity: 0.88; }

.about { max-width: 960px; margin: 40px auto 0; padding: 0 24px; }
.about__inner { background: #fff; border-radius: 10px; padding: 32px; box-shadow: 0 2px 14px rgba(0,0,0,0.07); }
.about__title { font-size: 20px; font-weight: 800; color: #0D1F35; margin-bottom: 12px; }
.about__text { font-size: 15px; color: #444; line-height: 1.75; margin-bottom: 24px; }
.highlights { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
.highlight { background: #f5f7fa; border-radius: 8px; padding: 16px; text-align: center; }
.highlight__icon { font-size: 24px; margin-bottom: 6px; }
.highlight__label { font-size: 12px; font-weight: 700; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.07em; }

.booking { max-width: 680px; margin: 40px auto 60px; padding: 0 24px; }
.booking__card { background: #fff; border-radius: 10px; padding: 36px 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); text-align: center; }
.booking__title { font-size: 22px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.booking__text { font-size: 15px; color: #555; line-height: 1.65; margin-bottom: 28px; }
.booking__actions { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media (min-width: 480px) { .booking__actions { flex-direction: row; justify-content: center; } }
.btn-primary { display: inline-block; padding: 13px 28px; background: #1A3557; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 6px; text-decoration: none; cursor: pointer; border: none; transition: background 0.2s; }
.btn-primary:hover { background: #0D1F35; }
.btn-secondary { display: inline-block; padding: 13px 28px; background: transparent; color: #1A3557; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 6px; text-decoration: none; cursor: pointer; border: 2px solid #1A3557; transition: all 0.2s; }
.btn-secondary:hover { background: #1A3557; color: #fff; }
</style>

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

<div class="hero-img">
  <img src="https://static.wixstatic.com/media/64b604_523186930e5946028762053d55f0b1ce~mv2.jpeg" alt="Geneva on the Lake vacation rental" />
  <div class="hero-img__overlay">
    <span class="hero-img__badge">Short-Term Rental</span>
    <h1 class="hero-img__title">Geneva on the Lake</h1>
    <p class="hero-img__location">Geneva-on-the-Lake, Ohio</p>
  </div>
</div>

<div class="photos">
  <h2>Photos</h2>
  <div class="photos__grid">
    <img src="https://static.wixstatic.com/media/64b604_523186930e5946028762053d55f0b1ce~mv2.jpeg" alt="Geneva property" />
    <img src="https://static.wixstatic.com/media/64b604_75503cda2c4b4ac3bb503c6a29d09021~mv2.jpeg" alt="Geneva property" />
    <img src="https://static.wixstatic.com/media/64b604_0fdb97b825944fcab5668957f3e3c78f~mv2.png" alt="Geneva property" />
  </div>
</div>

<div class="about">
  <div class="about__inner">
    <h2 class="about__title">About This Property</h2>
    <p class="about__text">Enjoy a relaxing getaway at our vacation rental in Geneva-on-the-Lake, Ohio &mdash; one of the region's most popular lakeside destinations on the shores of Lake Erie. Perfect for weekend escapes, family trips, and group stays.</p>
    <div class="highlights">
      <div class="highlight"><div class="highlight__icon">&#127958;</div><div class="highlight__label">Lake Erie Access</div></div>
      <div class="highlight"><div class="highlight__icon">&#127969;</div><div class="highlight__label">Full Home</div></div>
      <div class="highlight"><div class="highlight__icon">&#128205;</div><div class="highlight__label">Geneva-on-the-Lake, OH</div></div>
      <div class="highlight"><div class="highlight__icon">&#128197;</div><div class="highlight__label">Short-Term Stays</div></div>
    </div>
  </div>
</div>

<div class="booking">
  <div class="booking__card">
    <h2 class="booking__title">Book Your Stay</h2>
    <p class="booking__text">Contact us for availability, nightly rates, and to reserve your dates. We typically respond within one business day.</p>
    <div class="booking__actions">
      <a class="btn-primary" href="mailto:customstarkhomes@gmail.com">Email to Book</a>
      <a class="btn-secondary" href="/">Back to Home</a>
    </div>
  </div>
</div>
`;
    const _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
  }
}
customElements.define('csh-geneva-str', CshGenevaStr);
