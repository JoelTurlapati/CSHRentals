// @ts-nocheck
class CshPortfolioPremium extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Individual Properties';
    var PROPERTIES = [
      {
        address: '5192 University Ave', city: 'Geneva, OH 44041', beds: 2, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_b54105f8c7654bddb2b98a8c32c498a9~mv2.png',
        photos: [
          'https://static.wixstatic.com/media/d9828b_b54105f8c7654bddb2b98a8c32c498a9~mv2.png',
          'https://static.wixstatic.com/media/d9828b_2bcaeb3dfcee4ac09e02c5ef2b9fc41d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_88702235d5204eb8a2062465eceac5f9~mv2.jpg'
        ],
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
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy"/>' +
        '<span class="prop-card__badge">' + (rent === 'STR' ? 'Short-Term Rental' : 'For Rent') + '</span></div>' +
        '<div class="prop-card__info"><div class="prop-card__address">' + p.address + '</div>' +
        '<div class="prop-card__city">' + p.city + '</div>' +
        '<div class="prop-card__meta">' + p.beds + ' bd &nbsp;&middot;&nbsp; ' + p.baths + ' ba' + (rentLabel ? ' &nbsp;&middot;&nbsp; ' + rentLabel : '') + '</div>' +
        '<button class="prop-card__btn">View Property Images &rarr;</button>' +
        '</div></div>';
    }).join('');

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
csh-portfolio-premium{display:block;font-family:'Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}
/* ── HEADER ── */
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:88px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:52px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:10px 18px;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;transition:background .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}
.csh-hdr__burger{display:none;flex-direction:column;justify-content:space-between;width:26px;height:19px;background:none;border:none;cursor:pointer;padding:0;margin-left:auto;flex-shrink:0}
.csh-hdr__burger span{display:block;width:100%;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:transform .25s,opacity .25s}
.csh-hdr__burger.open span:nth-child(1){transform:translateY(8.5px) rotate(45deg)}
.csh-hdr__burger.open span:nth-child(2){opacity:0}
.csh-hdr__burger.open span:nth-child(3){transform:translateY(-8.5px) rotate(-45deg)}
.csh-mob-nav{display:none;position:absolute;top:88px;left:0;right:0;background:#0a1628;border-top:1px solid rgba(255,255,255,.08);z-index:199;box-shadow:0 8px 32px rgba(0,0,0,.35)}
.csh-mob-nav.open{display:block}
.csh-mob-nav__inner{display:flex;flex-direction:column;padding:12px 20px 20px}
.csh-mob-nav__link{color:rgba(255,255,255,.85);text-decoration:none;font-size:15px;font-weight:600;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08)}
.csh-mob-nav__link--gold{color:#c8962a}
@media(max-width:768px){.csh-hdr{padding:0 16px}.csh-hdr__nav{display:none}.csh-hdr__burger{display:flex}}
/* ── BACK ── */
.csh-back{display:inline-flex;align-items:center;gap:6px;margin:20px 28px 0;color:#c8962a;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:.04em;transition:opacity .2s}
.csh-back:hover{opacity:.8}
/* ── HERO ── */
.hero{background:linear-gradient(135deg,#0a1628 0%,#112240 60%,#1a3a5c 100%);color:#fff;padding:60px 28px 48px;text-align:center}
.hero__badge{display:inline-block;background:#c8962a;color:#0a1628;font-size:.75rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:5px 16px;border-radius:20px;margin-bottom:16px}
.hero__title{font-size:clamp(1.6rem,4vw,2.4rem);font-weight:700;margin-bottom:12px}
.hero__sub{font-size:1rem;color:rgba(255,255,255,.65)}
/* ── SECTION HEAD ── */
.section-head{display:flex;align-items:center;justify-content:space-between;padding:32px 28px 16px;max-width:1200px;margin:0 auto}
.section-head h2{font-size:1.3rem;font-weight:700;color:#0a1628}
.section-head span{font-size:.9rem;color:#718096}
/* ── PROPERTY CARDS ── */
.prop-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:28px;padding:0 28px 60px;max-width:1200px;margin:0 auto}
.prop-card{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08);transition:transform .22s,box-shadow .22s;display:flex;flex-direction:column;cursor:pointer}
.prop-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(0,0,0,.16)}
.prop-card__img-wrap{position:relative;height:240px;overflow:hidden}
.prop-card__cover{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s}
.prop-card:hover .prop-card__cover{transform:scale(1.06)}
.prop-card__badge{position:absolute;top:14px;left:14px;background:rgba(10,22,40,.72);color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:4px;backdrop-filter:blur(4px)}
.prop-card__info{padding:22px 24px 26px;display:flex;flex-direction:column;flex:1}
.prop-card__address{font-size:1.05rem;font-weight:700;color:#0a1628;margin-bottom:3px}
.prop-card__city{font-size:.85rem;color:#718096;margin-bottom:10px}
.prop-card__meta{font-size:.85rem;color:#4a5568;margin-bottom:auto}
.prop-card__btn{margin-top:18px;padding:10px 0;background:#0a1628;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:background .2s}
.prop-card__btn:hover{background:#1a3a5c}
</style>
<header class="csh-hdr">
  <a href="/" class="csh-hdr__logo">
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>
    <span class="csh-hdr__logo-text">CSH RENTALS</span>
  </a>
  <nav class="csh-hdr__nav">
    <a class="csh-hdr__btn" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-hdr__btn csh-hdr__btn--gold" href="/contact">Contact</a>
    <a class="csh-hdr__email" href="mailto:customstarkhomes@gmail.com,ScottPrivate@tagplanning.com" title="Email Us">&#9993;</a>
  </nav>
  <button class="csh-hdr__burger" id="csh-burger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</header>
<div class="csh-mob-nav" id="csh-mob-nav">
  <div class="csh-mob-nav__inner">
    <a class="csh-mob-nav__link" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-mob-nav__link csh-mob-nav__link--gold" href="/contact">Contact</a>
    <a class="csh-mob-nav__link" href="mailto:customstarkhomes@gmail.com,ScottPrivate@tagplanning.com">&#9993;&nbsp; Email Us</a>
  </div>
</div>

<a class="csh-back" href="/">&larr; Back to All Portfolios</a>

<section class="hero">
  <div class="hero__badge">Individual Properties</div>
  <h1 class="hero__title">Premium Individual Properties</h1>
  <p class="hero__sub">2 premium properties &nbsp;&middot;&nbsp; Canton &amp; Geneva, OH</p>
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
      document.addEventListener('click', () => { mobNav.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }, { once: false });
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
