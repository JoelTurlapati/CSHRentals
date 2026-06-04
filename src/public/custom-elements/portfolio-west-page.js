// @ts-nocheck
class CshPortfolioWest extends HTMLElement {
  connectedCallback() {
    const PORTFOLIO = 'West — 44708';

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-west { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

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
.gallery__grid img { width: 100%; height: 180px; object-fit: cover; border-radius: 6px; display: block; cursor: pointer; transition: opacity 0.2s; }
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
  <div class="hero__zip">44708 &mdash; West Canton</div>
  <h1 class="hero__title">West Portfolio</h1>
  <p class="hero__sub">5 single-family rental homes</p>
</section>

<div class="gallery">
  <h2>Property Photos</h2>
  <div class="gallery__grid">
    <img src="https://static.wixstatic.com/media/64b604_952be5d06ea04a69bc9932917a74d19c~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_b0cc918ddd644adba6f403392c2cf8c6~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_18658688112848b3a375b894dc9a9761~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_2f12bc452b22496b9086d6f5a95623ad~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_932f794976474b779eaf5d47aa58498a~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_1fb223dce671438ba6e84041ec1ae218~mv2.jpeg" alt="Property photo" />
    <img src="https://static.wixstatic.com/media/64b604_acb37a36f21a43ea937a7f332c0b6169~mv2.jpeg" alt="Property photo" />
  </div>
</div>

<div class="properties">
  <h2>Properties</h2>
  <div class="prop-list">
    <div class="prop-card">
      <div><div class="prop-card__address">818 25th St NW</div><div class="prop-card__city">Canton, OH 44708</div></div>
      <button class="prop-card__btn" data-address="818 25th St NW">Details</button>
    </div>
    <div class="prop-card">
      <div><div class="prop-card__address">426 Vince Ave NW</div><div class="prop-card__city">Canton, OH 44708</div></div>
      <button class="prop-card__btn" data-address="426 Vince Ave NW">Details</button>
    </div>
    <div class="prop-card">
      <div><div class="prop-card__address">2923 Helen Pl NW</div><div class="prop-card__city">Canton, OH 44708</div></div>
      <button class="prop-card__btn" data-address="2923 Helen Pl NW">Details</button>
    </div>
    <div class="prop-card">
      <div><div class="prop-card__address">307 Bellflower Ave NW</div><div class="prop-card__city">Canton, OH 44708</div></div>
      <button class="prop-card__btn" data-address="307 Bellflower Ave NW">Details</button>
    </div>
    <div class="prop-card">
      <div><div class="prop-card__address">2945 15th St NW</div><div class="prop-card__city">Canton, OH 44708</div></div>
      <button class="prop-card__btn" data-address="2945 15th St NW">Details</button>
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
    this.querySelectorAll('.prop-card__btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        try { localStorage.setItem('csh_prop', JSON.stringify({ address: btn.dataset.address, portfolio: PORTFOLIO })); } catch(e) {}
        window.location.assign(window.location.origin + _b + '/property-detail');
      });
    });
  }
}
customElements.define('csh-portfolio-west', CshPortfolioWest);
