// @ts-nocheck
class CshPortfolioNw extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'Northwest Central — 44709';
    var PROPERTIES = [
      {
        address: '519 21st St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_d8710688375f47928e359dc9b936e689~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_d8710688375f47928e359dc9b936e689~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_911989f2e7ec40449e3af16ec76df729~mv2.jpeg'
        ]
      },
      {
        address: '1338 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_eba12b8701834579ba2a30b2bd122351~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_eba12b8701834579ba2a30b2bd122351~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_d85ebb0a791444d2bf066d66b56cc28d~mv2.jpeg'
        ]
      },
      {
        address: '1430 19th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_3b2ba7ecaa034316951e9df1a6c5ff74~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_3b2ba7ecaa034316951e9df1a6c5ff74~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_143fe9a153144f17965e3966f2919892~mv2.jpeg'
        ]
      },
      {
        address: '1919 Frazer Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_a8cfba711da0401491558d7b672900a3~mv2.jpeg'
        ]
      },
      {
        address: '1540 Norwood Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_33ba492a11134da4bf528511adbc6375~mv2.png',
        photos: [
          'https://static.wixstatic.com/media/64b604_33ba492a11134da4bf528511adbc6375~mv2.png',
          'https://static.wixstatic.com/media/64b604_2fadc168b10c4853b32cb35c72fc023b~mv2.jpeg'
        ]
      },
      {
        address: '1511 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_28a42e5cd1994e2a9d2c3c73d0cdbbf4~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_28a42e5cd1994e2a9d2c3c73d0cdbbf4~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_ab764bbc2bd341e593c144de14e3839a~mv2.jpeg'
        ]
      },
      {
        address: '1569 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_c830989a0cc24dbebee253e0e40a7132~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_c830989a0cc24dbebee253e0e40a7132~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_6d787ec44dd14bb5820d300ba95679dd~mv2.jpeg'
        ]
      },
      {
        address: '1600 27th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_90ef583aa5e84c388a54b1091014dae0~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_90ef583aa5e84c388a54b1091014dae0~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_4205f0e960d94555857430409d7a840d~mv2.jpeg'
        ]
      },
      {
        address: '1701 27th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_e54c155ba0154360b5f6da668c16b252~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_e54c155ba0154360b5f6da668c16b252~mv2.jpeg']
      },
      {
        address: '800 22nd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_f5a8ead372e44655b39aaacd298b3ef3~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_f5a8ead372e44655b39aaacd298b3ef3~mv2.jpeg']
      },
      {
        address: '1611 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_8f2c3ebd9b634367984a41fc52d1e85b~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_8f2c3ebd9b634367984a41fc52d1e85b~mv2.jpeg']
      },
      {
        address: '725 22nd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_3fd8475e03c14f498b65cf38a78c1830~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_3fd8475e03c14f498b65cf38a78c1830~mv2.jpeg']
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
csh-portfolio-nw { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

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
  <div class="hero__badge">44709 &mdash; Northwest Central Canton</div>
  <h1 class="hero__title">Northwest Central Portfolio</h1>
  <p class="hero__sub">12 single-family rental homes</p>
</section>

<div class="section-head">
  <h2>Properties</h2>
  <span>12 homes &middot; Canton, OH 44709</span>
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
customElements.define('csh-portfolio-nw', CshPortfolioNw);
