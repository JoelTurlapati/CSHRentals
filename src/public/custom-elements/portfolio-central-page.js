class CshPortfolioCentral extends HTMLElement {
  connectedCallback() {
    const PORTFOLIO = 'Central — 44703';

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-central { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

.site-header { background: #fff; border-bottom: 1px solid #e0e4ea; padding: 14px 32px; display: flex; align-items: center; gap: 16px; }
.site-header img { height: 48px; width: auto; cursor: pointer; }
.site-header__back { margin-left: auto; font-size: 13px; font-weight: 600; color: #1A3557; text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s; }
.site-header__back:hover { opacity: 1; }

.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 48px 32px 44px; text-align: center; }
.hero__zip { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 14px; }
.hero__title { font-size: clamp(24px, 4vw, 40px); font-weight: 800; margin-bottom: 8px; }
.hero__sub { font-size: 15px; color: rgba(255,255,255,0.7); }

.gallery { max-width: 960px; margin: 36px auto 0; padding: 0 24px; }
.gallery h2 { font-size: 16px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
.gallery__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
.gallery__grid img { width: 100%; height: 200px; object-fit: cover; border-radius: 6px; display: block; cursor: pointer; transition: opacity 0.2s; }
.gallery__grid img:hover { opacity: 0.88; }

.properties { max-width: 960px; margin: 40px auto 60px; padding: 0 24px; }
.properties h2 { font-size: 16px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
.prop-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
.prop-card { background: #fff; border-radius: 8px; padding: 18px 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.07); border-left: 4px solid #C8962A; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.prop-card__address { font-size: 14px; font-weight: 700; color: #0D1F35; line-height: 1.3; }
.prop-card__city { font-size: 12px; color: #888; margin-top: 2px; }
.prop-card__btn { flex-shrink: 0; padding: 8px 14px; background: #1A3557; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border: none; border-radius: 5px; cursor: pointer; white-space: nowrap; transition: background 0.2s; }
.prop-card__btn:hover { background: #0D1F35; }
</style>

<header class="site-header">
  <a href="/"><img src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals" /></a>
  <a class="site-header__back" href="/investors">&larr; Investors</a>
</header>

<section class="hero">
  <div class="hero__zip">44703 &mdash; Central Canton</div>
  <h1 class="hero__title">Central Portfolio</h1>
  <p class="hero__sub">2 single-family rental homes</p>
</section>

<div class="gallery">
  <h2>Property Photos</h2>
  <div class="gallery__grid">
    <img src="https://static.wixstatic.com/media/64b604_262b6026b9d3450d8d956c2873ff0df8~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_89794c2ed62144f8b0cce53bb9bf2a23~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_6f3b13e8bbd349f08d4d4cf641557285~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_9848993bc0ac462ebc34dfaf46c27e15~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_5f5afd2ffaac449d835ef226329f2470~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_c53805e63cfc4e6ea8185865e9574cab~mv2.jpeg" alt="Property photo" />
  </div>
</div>

<div class="properties">
  <h2>Properties</h2>
  <div class="prop-list">
    <div class="prop-card"><div><div class="prop-card__address">1708 18th St NW</div><div class="prop-card__city">Canton, OH 44703</div></div><button class="prop-card__btn" data-address="1708 18th St NW">Details</button></div>
    <div class="prop-card"><div><div class="prop-card__address">1734 Woodland Ave NW</div><div class="prop-card__city">Canton, OH 44703</div></div><button class="prop-card__btn" data-address="1734 Woodland Ave NW">Details</button></div>
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
    this.querySelectorAll('.prop-card__btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        try { localStorage.setItem('csh_prop', JSON.stringify({ address: btn.dataset.address, portfolio: PORTFOLIO })); } catch(e) {}
        window.location.assign(window.location.origin + _b + '/property-detail');
      });
    });
  }
}
customElements.define('csh-portfolio-central', CshPortfolioCentral);
