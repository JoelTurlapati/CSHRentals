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
          'https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_46a3231b3f6d489bb78c54dcebcec48e~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_6e5e64f327b943cbb61c9d41bd5cbee8~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_164e128a8f8c4de0a68646f0911fae09~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2bcaeb3dfcee4ac09e02c5ef2b9fc41d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c6daf260ec0348d588816030ac681297~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_544633d33bb641ad9c0ffa241ecac34c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a2c5527cb00c4a19bd5ce79edec4b317~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4d15ba9cccbc419eb7ce6b77d634fcb9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_13451ed4cda542c1a8f48287b551b930~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a9cddaf95ec7495e833083d74541f3ed~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1fc67972d1d84efb9e044a5abc0e9dc9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b74c87ba04534f4cbe2df8f9c403efb5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d725968b79854ca9a0fa2624f9061eac~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_24a477c321b7429eabcebd9342809140~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d78e16091412484bb05e39908fdba977~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4ce97538ba0d46a19f1ad781e86584a9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1e080b62ad954b2685be55165ccc5450~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b12cf036b893427198646967b1a20285~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f8f0a11cb1c7467fa8dc8331962c0a88~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_72f0431cf10b4593b579924de6b36c34~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9625b1b5eb004118b087c1453eabf856~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f85cca70e73f454c81e114a01400a535~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c0111508ee804ea1ad3fbcfe690b95c6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_10b0b23bc159436dac64204e2a2e02bf~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_88702235d5204eb8a2062465eceac5f9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2d0bc00fa92c4aa4aa4bb1a3bab6a374~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f9c9eedec21d4955b9423bde9c4dcaa0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_3518999290d0444dac4b4337738e20e0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2bd8cae06dfa4e2f9b1c4b454bcbeb8f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ccaf87b6733f476e81372e810e924a4b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c54592dea6684f10bed556f353837a6f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4916395697d64c599fc610663bc68a48~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_55f76086a9aa4ab3ab72c0e03c0eb5fb~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_45740064921c4ec88df2219008df6eda~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_267a37a567a54dc283a11cf9da243555~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_6f31da0b77a546b78addf3917fe24ac5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_8f277d048e404f0a818d4e257de8cd1a~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4f98d257421640a4b9c771d859eab93e~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_e73a21e2ec4c4dc9917cd65a8d3bb62b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_74162ffc3e8b431c8b14254aee25ef71~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f9b9250c154d451b8f1dbdccd42f062c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4d3bfddd5b4741adbd7396696e7d0a9a~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_7147464688fc42de96d874c72a167c6f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c59158f9271c4497a3024de73b44c9ff~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_8560fb4ea56c4b25b8551220f8b67ba5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_e6bac556c9184109a493e123efae98fa~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_795f15ea9c2442dfbd16bf06c1f743d0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_464d877f650d4a1eb025cecd0e66c08d~mv2.jpg'
        ],
        note: 'STR'
      },
      {
        address: '903 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png',
        photos: [
          'https://static.wixstatic.com/media/d9828b_64a240d942334ac684a99b3bb863c72d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_0a83680bf27642598f25c1e7a4b6338f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_70634627b8804909900f791c69e50c8c~mv2.png',
          'https://static.wixstatic.com/media/d9828b_a088bfee25054ccb8d8186ec6db601d4~mv2.png',
          'https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png',
          'https://static.wixstatic.com/media/d9828b_b6bf7c9fc5e947ec8db45274f682eca1~mv2.jpg'
        ],
        note: ''
      }
    ];

    var RENTS = {'5192 University Ave':'STR','903 23rd St NW':'$1,425'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      var rentLabel = rent === 'STR' ? 'Short-Term Rental' : (rent ? rent + '/mo' : '');
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy"/>' +
        '</div>' +
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
