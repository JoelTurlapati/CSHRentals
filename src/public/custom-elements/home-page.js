// @ts-nocheck
class CshHome extends HTMLElement {
  connectedCallback() {
    var SLIDES = [
      'https://static.wixstatic.com/media/64b604_0f42533432c64b84adbdfbda61fcc7e7~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_9ee44dbc31dd4d6d851071343ea0fa94~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_be845510679b49f29054081aaa6680a9~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_b071b082c3314191a292bd349728b657~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_150af085b1024681984084f74ed2ed18~mv2.jpeg'
    ];

    var slidesHtml = SLIDES.map(function(url, i) {
      return '<div class="slide' + (i === 0 ? ' active' : '') + '" style="background-image:url(\'' + url + '\')"></div>';
    }).join('');
    var dotsHtml = SLIDES.map(function(_, i) {
      return '<button class="dot' + (i === 0 ? ' active' : '') + '" aria-label="Slide ' + (i + 1) + '"></button>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-home { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

.nav { background: #fff; border-bottom: 1px solid #e0e4ea; padding: 0 32px; display: flex; align-items: center; height: 70px; gap: 24px; position: sticky; top: 0; z-index: 200; }
.nav__logo a { display: flex; align-items: center; }
.nav__logo img { height: 48px; width: auto; display: block; }
.nav__links { margin-left: auto; display: flex; align-items: center; gap: 4px; }
.nav__link { padding: 9px 16px; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1A3557; text-decoration: none; border-radius: 6px; transition: background 0.2s, color 0.2s; }
.nav__link:hover { background: #f0f4f8; }
.nav__link--cta { background: #1A3557; color: #fff; margin-left: 8px; }
.nav__link--cta:hover { background: #0D1F35; }

.hero { position: relative; width: 100%; min-height: 600px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.slide { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.2s ease; }
.slide::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(5,15,30,0.55) 0%, rgba(5,15,30,0.6) 60%, rgba(5,15,30,0.75) 100%); }
.slide.active { opacity: 1; }

.slide-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; background: rgba(255,255,255,0.14); border: 2px solid rgba(255,255,255,0.35); color: #fff; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 22px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; backdrop-filter: blur(6px); line-height: 1; }
.slide-arrow:hover { background: rgba(255,255,255,0.25); }
.slide-prev { left: 20px; }
.slide-next { right: 20px; }

.hero__body { position: relative; z-index: 2; text-align: center; padding: 90px 24px 100px; max-width: 800px; }
.hero__eyebrow { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; padding: 6px 18px; border-radius: 20px; margin-bottom: 24px; }
.hero__title { font-size: clamp(34px, 6.5vw, 66px); font-weight: 900; color: #fff; line-height: 1.06; margin-bottom: 18px; letter-spacing: -0.02em; }
.hero__sub { font-size: clamp(14px, 2vw, 17px); color: rgba(255,255,255,0.78); line-height: 1.65; margin-bottom: 0; max-width: 600px; margin-left: auto; margin-right: auto; }

.cta-strip { background: #fff; padding: 52px 32px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 28px; border-bottom: 2px solid #f0f2f5; }
.cta-strip__header { text-align: center; flex: 0 0 100%; }
.cta-strip__title { font-size: clamp(18px, 2.5vw, 24px); font-weight: 900; color: #0D1F35; margin-bottom: 6px; }
.cta-strip__sub { font-size: 14px; color: #888; }
.cta-btns { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
.cta-btn { display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 26px 60px; border-radius: 10px; text-decoration: none; transition: transform 0.18s, box-shadow 0.2s; min-width: 240px; }
.cta-btn:hover { transform: translateY(-4px); }
.cta-btn__label { font-size: 22px; font-weight: 900; letter-spacing: 0.03em; text-transform: uppercase; }
.cta-btn__sub { font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.75; }
.cta-btn--tenant { background: #1A3557; color: #fff; box-shadow: 0 8px 28px rgba(26,53,87,0.32); }
.cta-btn--tenant:hover { background: #0D1F35; box-shadow: 0 14px 40px rgba(26,53,87,0.42); }
.cta-btn--investor { background: #C8962A; color: #fff; box-shadow: 0 8px 28px rgba(200,150,42,0.42); }
.cta-btn--investor:hover { background: #b5841f; box-shadow: 0 14px 40px rgba(200,150,42,0.52); }

.slide-dots { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 3; display: flex; align-items: center; gap: 8px; }
.dot { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,0.38); border: none; cursor: pointer; padding: 0; transition: background 0.3s, transform 0.2s; }
.dot.active { background: #fff; transform: scale(1.35); }

.stats { background: #1A3557; padding: 30px 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 0; }
.stat { flex: 1 1 160px; text-align: center; padding: 16px 24px; border-right: 1px solid rgba(255,255,255,0.12); }
.stat:last-child { border-right: none; }
.stat__value { font-size: 30px; font-weight: 900; color: #C8962A; line-height: 1; margin-bottom: 6px; }
.stat__label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); }

.offerings { max-width: 980px; margin: 64px auto; padding: 0 24px; }
.offerings__heading { text-align: center; margin-bottom: 36px; }
.offerings__heading h2 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; color: #0D1F35; margin-bottom: 10px; }
.offerings__heading p { font-size: 15px; color: #666; }
.cards { display: grid; grid-template-columns: 1fr; gap: 28px; }
@media (min-width: 640px) { .cards { grid-template-columns: 1fr 1fr; } }
.card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 20px rgba(0,0,0,0.09); display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-5px); box-shadow: 0 12px 36px rgba(0,0,0,0.15); }
.card__img-wrap { position: relative; height: 250px; overflow: hidden; }
.card__img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
.card:hover .card__img { transform: scale(1.05); }
.card__body { padding: 26px; flex: 1; display: flex; flex-direction: column; }
.card__tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
.card__tag--ltr { background: #eef2f7; color: #1A3557; }
.card__tag--str { background: #fef6e4; color: #b07818; }
.card__title { font-size: 22px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.card__text { font-size: 14px; color: #555; line-height: 1.7; margin-bottom: 24px; flex: 1; }
.card__cta { display: block; width: 100%; padding: 14px; text-align: center; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border: none; border-radius: 7px; cursor: pointer; text-decoration: none; transition: background 0.2s; }
.card__cta--gold { background: #C8962A; color: #fff; }
.card__cta--gold:hover { background: #b5841f; }
.card__cta--blue { background: #1A3557; color: #fff; }
.card__cta--blue:hover { background: #0D1F35; }

.contact-strip { background: #0D1F35; padding: 52px 32px; display: flex; flex-wrap: wrap; gap: 48px; justify-content: center; align-items: center; text-align: center; }
.contact-item__label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
.contact-item__value { font-size: 16px; font-weight: 600; color: #fff; text-decoration: none; display: block; }
.contact-item__value:hover { color: #C8962A; }

.footer { background: #060f1c; padding: 20px 32px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.7; }
</style>

<nav class="nav">
  <div class="nav__logo">
    <a href="/"><img src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals" /></a>
  </div>
  <div class="nav__links">
    <a class="nav__link" href="/tenants">Tenants</a>
    <a class="nav__link" href="/investors">Investors</a>
    <a class="nav__link nav__link--cta" href="mailto:customstarkhomes@gmail.com">Contact</a>
  </div>
</nav>

<section class="hero">
  ${slidesHtml}
  <button class="slide-arrow slide-prev" aria-label="Previous">&#8249;</button>
  <button class="slide-arrow slide-next" aria-label="Next">&#8250;</button>
  <div class="hero__body">
    <span class="hero__eyebrow">Canton, Ohio &middot; CSH Rentals</span>
    <h1 class="hero__title">Quality Rentals.<br/>Proven Portfolio.</h1>
    <p class="hero__sub">45 single-family rental homes across Canton, OH &mdash; plus a lakeside short-term rental in Geneva-on-the-Lake. Serving tenants and investors across Northeast Ohio.</p>
  </div>
  <div class="slide-dots">${dotsHtml}</div>
</section>

<div class="cta-strip">
  <div class="cta-strip__header">
    <p class="cta-strip__title">How Can We Help You?</p>
    <p class="cta-strip__sub">Choose your path below to get started</p>
  </div>
  <div class="cta-btns">
    <a class="cta-btn cta-btn--tenant" href="/tenants">
      <span class="cta-btn__label">Tenants</span>
      <span class="cta-btn__sub">Apply Here</span>
    </a>
    <a class="cta-btn cta-btn--investor" href="/investors">
      <span class="cta-btn__label">Investors</span>
      <span class="cta-btn__sub">View Portfolio</span>
    </a>
  </div>
</div>

<div class="stats">
  <div class="stat"><div class="stat__value">45</div><div class="stat__label">Rental Properties</div></div>
  <div class="stat"><div class="stat__value">100%</div><div class="stat__label">Occupancy</div></div>
  <div class="stat"><div class="stat__value">$605K</div><div class="stat__label">2024 NOI</div></div>
  <div class="stat"><div class="stat__value">2</div><div class="stat__label">Ohio Markets</div></div>
</div>

<div class="offerings">
  <div class="offerings__heading">
    <h2>Our Properties</h2>
    <p>Long-term rentals in Canton and a vacation home on Lake Erie</p>
  </div>
  <div class="cards">
    <div class="card">
      <div class="card__img-wrap">
        <img class="card__img" src="https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg" alt="Canton rental portfolio" />
      </div>
      <div class="card__body">
        <span class="card__tag card__tag--ltr">Long-Term Rental &middot; Canton, OH</span>
        <h3 class="card__title">45 Property Canton Portfolio</h3>
        <p class="card__text">Single-family rental homes across four Canton neighborhoods &mdash; West (44708), Northwest Central (44709), Northeast (44714), and Central (44703). 100% occupied with proven cash flow.</p>
        <a class="card__cta card__cta--gold" href="/investors">View Portfolio</a>
      </div>
    </div>
    <div class="card">
      <div class="card__img-wrap">
        <img class="card__img" src="https://static.wixstatic.com/media/64b604_523186930e5946028762053d55f0b1ce~mv2.jpeg" alt="Geneva on the Lake vacation rental" />
      </div>
      <div class="card__body">
        <span class="card__tag card__tag--str">Short-Term Rental &middot; Geneva-on-the-Lake, OH</span>
        <h3 class="card__title">Geneva on the Lake STR</h3>
        <p class="card__text">A vacation rental on the shores of Lake Erie in Geneva-on-the-Lake, Ohio &mdash; one of the region's most popular summer destinations. Available for short-term stays.</p>
        <a class="card__cta card__cta--blue" href="/geneva-str">View Property</a>
      </div>
    </div>
  </div>
</div>

<div class="contact-strip">
  <div class="contact-item">
    <div class="contact-item__label">Email</div>
    <a class="contact-item__value" href="mailto:customstarkhomes@gmail.com">customstarkhomes@gmail.com</a>
  </div>
  <div class="contact-item">
    <div class="contact-item__label">Address</div>
    <span class="contact-item__value">1428 Market Ave. N., Canton, OH 44714</span>
  </div>
</div>

<footer class="footer">
  &copy; 2025 CSH Rents &nbsp;&middot;&nbsp; 1428 Market Ave N, Canton, OH 44714 &nbsp;&middot;&nbsp; customstarkhomes@gmail.com
</footer>
`;

    var cur = 0;
    var self = this;
    var slideEls = Array.from(self.querySelectorAll('.slide'));
    var dotEls = Array.from(self.querySelectorAll('.dot'));

    function goTo(n) {
      slideEls[cur].classList.remove('active');
      dotEls[cur].classList.remove('active');
      cur = ((n % slideEls.length) + slideEls.length) % slideEls.length;
      slideEls[cur].classList.add('active');
      dotEls[cur].classList.add('active');
    }

    self.querySelector('.slide-prev').addEventListener('click', function() { goTo(cur - 1); });
    self.querySelector('.slide-next').addEventListener('click', function() { goTo(cur + 1); });
    dotEls.forEach(function(dot, i) { dot.addEventListener('click', function() { goTo(i); }); });

    var autoPlay = setInterval(function() { goTo(cur + 1); }, 5000);
    var heroEl = self.querySelector('.hero');
    heroEl.addEventListener('mouseenter', function() { clearInterval(autoPlay); });
    heroEl.addEventListener('mouseleave', function() { autoPlay = setInterval(function() { goTo(cur + 1); }, 5000); });

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    self.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
  }
}
customElements.define('csh-home', CshHome);
