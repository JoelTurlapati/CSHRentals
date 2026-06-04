// @ts-nocheck
class CshPortfolioCentral extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'Central — 44703';
    var PROPERTIES = [
      {
        address: '1708 18th St NW', city: 'Canton, OH 44703', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_262b6026b9d3450d8d956c2873ff0df8~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_262b6026b9d3450d8d956c2873ff0df8~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_89794c2ed62144f8b0cce53bb9bf2a23~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_6f3b13e8bbd349f08d4d4cf641557285~mv2.jpeg'
        ]
      },
      {
        address: '1734 Woodland Ave NW', city: 'Canton, OH 44703', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_9848993bc0ac462ebc34dfaf46c27e15~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_9848993bc0ac462ebc34dfaf46c27e15~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_5f5afd2ffaac449d835ef226329f2470~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_c53805e63cfc4e6ea8185865e9574cab~mv2.jpeg'
        ]
      }
    ];

    var cardsHtml = PROPERTIES.map(function(p, i) {
      return `<div class="prop-card">
  <div class="prop-card__img-wrap">
    <img class="prop-card__cover" src="${p.cover}" alt="${p.address}" loading="lazy" />
    <span class="prop-card__badge">For Rent</span>
  </div>
  <div class="prop-card__info">
    <div class="prop-card__address">${p.address}</div>
    <div class="prop-card__city">${p.city}</div>
    <div class="prop-card__specs">${p.beds} Bed &nbsp;&middot;&nbsp; ${p.baths} Bath &nbsp;&middot;&nbsp; Single Family</div>
    <button class="prop-card__btn" data-idx="${i}">View Details</button>
  </div>
</div>`;
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-central { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

.site-header { background: #fff; border-bottom: 1px solid #e0e4ea; padding: 14px 32px; display: flex; align-items: center; gap: 16px; }
.site-header img { height: 48px; width: auto; cursor: pointer; }
.site-header__back { margin-left: auto; font-size: 12px; font-weight: 700; color: #1A3557; text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s; }
.site-header__back:hover { opacity: 1; }

.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 52px 32px 48px; text-align: center; }
.hero__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin-bottom: 16px; }
.hero__title { font-size: clamp(26px, 4.5vw, 44px); font-weight: 900; margin-bottom: 8px; }
.hero__sub { font-size: 15px; color: rgba(255,255,255,0.68); }

.section-head { max-width: 1040px; margin: 48px auto 20px; padding: 0 24px; display: flex; align-items: baseline; justify-content: space-between; }
.section-head h2 { font-size: 18px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.08em; }
.section-head span { font-size: 13px; color: #888; }

.prop-grid { max-width: 1040px; margin: 0 auto 64px; padding: 0 24px; display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 24px; }

.prop-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); transition: transform 0.22s, box-shadow 0.22s; display: flex; flex-direction: column; }
.prop-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.14); }
.prop-card__img-wrap { position: relative; height: 220px; overflow: hidden; }
.prop-card__cover { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s; }
.prop-card:hover .prop-card__cover { transform: scale(1.06); }
.prop-card__badge { position: absolute; top: 12px; left: 12px; background: #C8962A; color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 12px; }
.prop-card__info { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
.prop-card__address { font-size: 17px; font-weight: 800; color: #0D1F35; margin-bottom: 4px; line-height: 1.3; }
.prop-card__city { font-size: 12px; color: #999; margin-bottom: 10px; }
.prop-card__specs { font-size: 13px; color: #555; font-weight: 600; margin-bottom: 18px; flex: 1; }
.prop-card__btn { width: 100%; padding: 12px; background: #1A3557; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border: none; border-radius: 7px; cursor: pointer; transition: background 0.2s; }
.prop-card__btn:hover { background: #0D1F35; }
</style>

<header class="site-header">
  <a href="/"><img src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals" /></a>
  <a class="site-header__back" href="/investors">&larr; All Portfolios</a>
</header>

<section class="hero">
  <div class="hero__badge">44703 &mdash; Central Canton</div>
  <h1 class="hero__title">Central Portfolio</h1>
  <p class="hero__sub">2 single-family rental homes</p>
</section>

<div class="section-head">
  <h2>Properties</h2>
  <span>2 homes &middot; Canton, OH 44703</span>
</div>
<div class="prop-grid">${cardsHtml}</div>
`;

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
    this.querySelectorAll('.prop-card__btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var idx = parseInt(btn.dataset.idx, 10);
        var p = PROPERTIES[idx];
        try {
          localStorage.setItem('csh_prop', JSON.stringify({
            address: p.address, city: p.city, portfolio: PORTFOLIO,
            beds: p.beds, baths: p.baths, photos: p.photos
          }));
        } catch(e) {}
        window.location.assign(window.location.origin + _b + '/property-detail');
      });
    });
  }
}
customElements.define('csh-portfolio-central', CshPortfolioCentral);
