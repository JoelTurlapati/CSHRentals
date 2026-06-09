// @ts-nocheck
class CshPortfolioPremium extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Portfolio 6 — Premium Individual Properties';
    var PROPERTIES = [
      {
        address: '5192 University Ave', city: 'Canton, OH 44703', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg'],
        note: 'STR'
      },
      {
        address: '903 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png',
        photos: ['https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png'],
        note: ''
      }
    ];

    var RENTS = {'5192 University Ave':'STR','903 23rd St NW':'$1,425'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      var rentLabel = rent === 'STR' ? 'Short-Term Rental' : (rent ? rent + '/mo' : '');
      return `<div class="prop-card" data-idx="${i}">
  <div class="prop-card__img-wrap"><img class="prop-card__img" src="${p.cover}" alt="${p.address}" loading="lazy"></div>
  <div class="prop-card__body">
    <div class="prop-card__addr">${p.address}</div>
    <div class="prop-card__city">${p.city}</div>
    <div class="prop-card__meta">${p.beds} bd &nbsp;&middot;&nbsp; ${p.baths} ba${rentLabel ? ' &nbsp;&middot;&nbsp; ' + rentLabel : ''}</div>
  </div>
</div>`;
    }).join('');

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Helvetica Neue',Arial,sans-serif}
.csh-hdr{display:flex;align-items:center;justify-content:space-between;padding:0 24px;height:64px;background:#1a1a2e;color:#fff;position:sticky;top:0;z-index:100}
.csh-hdr__logo{font-size:1.1rem;font-weight:700;color:#c9a84c;text-decoration:none;letter-spacing:.04em}
.csh-hdr__nav{display:flex;gap:24px;align-items:center}
.csh-hdr__nav a{color:#e0e0e0;text-decoration:none;font-size:.9rem;transition:color .2s}
.csh-hdr__nav a:hover{color:#c9a84c}
.csh-hdr__email{font-size:1.1rem}
.csh-hdr__burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.csh-hdr__burger span{display:block;width:24px;height:2px;background:#fff;transition:transform .3s,opacity .3s}
.csh-hdr__burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.csh-hdr__burger.open span:nth-child(2){opacity:0}
.csh-hdr__burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.csh-mob-nav{display:none;background:#1a1a2e;padding:16px 24px}
.csh-mob-nav.open{display:block}
.csh-mob-nav__inner{display:flex;flex-direction:column;gap:12px}
.csh-mob-nav__link{color:#e0e0e0;text-decoration:none;font-size:1rem;padding:8px 0;border-bottom:1px solid #2a2a4e}
.csh-mob-nav__link--gold{color:#c9a84c}
@media(max-width:640px){.csh-hdr__nav{display:none}.csh-hdr__burger{display:flex}}
.csh-back{display:inline-block;margin:20px 24px 0;color:#c9a84c;text-decoration:none;font-size:.9rem}
.csh-back:hover{text-decoration:underline}
.hero{background:linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%);color:#fff;padding:60px 24px 48px;text-align:center}
.hero__badge{display:inline-block;background:#c9a84c;color:#1a1a2e;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 14px;border-radius:20px;margin-bottom:16px}
.hero__title{font-size:clamp(1.6rem,4vw,2.4rem);font-weight:700;margin-bottom:12px}
.hero__sub{font-size:1rem;color:#a0aec0}
.section-head{display:flex;align-items:center;justify-content:space-between;padding:32px 24px 16px;max-width:1200px;margin:0 auto}
.section-head h2{font-size:1.3rem;font-weight:700;color:#1a1a2e}
.section-head span{font-size:.9rem;color:#718096}
.prop-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;padding:0 24px 48px;max-width:1200px;margin:0 auto}
.prop-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);cursor:pointer;transition:transform .2s,box-shadow .2s}
.prop-card:hover{transform:translateY(-4px);box-shadow:0 8px 24px rgba(0,0,0,.12)}
.prop-card__img-wrap{height:200px;overflow:hidden}
.prop-card__img{width:100%;height:100%;object-fit:cover;transition:transform .3s}
.prop-card:hover .prop-card__img{transform:scale(1.04)}
.prop-card__body{padding:16px}
.prop-card__addr{font-size:1rem;font-weight:700;color:#1a1a2e;margin-bottom:4px}
.prop-card__city{font-size:.85rem;color:#718096;margin-bottom:8px}
.prop-card__meta{font-size:.85rem;color:#4a5568}
</style>
<header class="csh-hdr">
  <a class="csh-hdr__logo" href="/">CSH Rentals</a>
  <nav class="csh-hdr__nav">
    <a href="/portfolios">Portfolios</a>
    <a href="/tenants">Tenant Pre-Approval</a>
    <a href="/contact">Contact</a>
    <a class="csh-hdr__email" href="mailto:customstarkhomes@gmail.com" title="Email Us">&#9993;</a>
  </nav>
  <button class="csh-hdr__burger" id="csh-burger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</header>
<div class="csh-mob-nav" id="csh-mob-nav">
  <div class="csh-mob-nav__inner">
    <a class="csh-mob-nav__link" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-mob-nav__link csh-mob-nav__link--gold" href="/contact">Contact</a>
    <a class="csh-mob-nav__link" href="mailto:customstarkhomes@gmail.com">&#9993;&nbsp; Email Us</a>
  </div>
</div>
<a class="csh-back" href="/">&larr; Back to All Portfolios</a>
<section class="hero">
  <div class="hero__badge">Portfolio 6 &mdash; Premium</div>
  <h1 class="hero__title">Portfolio 6: Premium Individual Properties</h1>
  <p class="hero__sub">2 premium properties &nbsp;&middot;&nbsp; Canton, OH</p>
</section>
<div class="section-head"><h2>Properties</h2><span>2 properties &middot; $26,880 (2025 Actual)</span></div>
<div class="prop-grid">${cardsHtml}</div>
`;

    const burger = this.querySelector('#csh-burger');
    const mobNav = this.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (link) {
        var href = link.getAttribute('href');
        if (href && href.startsWith('/')) { e.preventDefault(); e.stopPropagation(); window.location.assign(window.location.origin + _b + href); }
        return;
      }
      var card = e.target.closest('.prop-card');
      if (!card) return;
      var idx = parseInt(card.dataset.idx, 10);
      var p = PROPERTIES[idx];
      try { localStorage.setItem('csh_prop', JSON.stringify({ address: p.address, city: p.city, portfolio: PORTFOLIO, beds: p.beds, baths: p.baths, photos: p.photos })); } catch(err) {}
      window.location.assign(window.location.origin + _b + '/property-detail');
    });
  }
}
customElements.define('csh-portfolio-premium', CshPortfolioPremium);
