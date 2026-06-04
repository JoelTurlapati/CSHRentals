// @ts-nocheck
class CshPortfolioCentral extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'Central — 44703';
    var PROPERTIES = [
      {
        address: '1708 18th St NW', city: 'Canton, OH 44703', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_f4478974a66244efa6ebc3ac70762d7b~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_f4478974a66244efa6ebc3ac70762d7b~mv2.jpg','https://static.wixstatic.com/media/d9828b_71b3e32c25434012912df3b992993cd8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2af6f49f545d46098eaca3a9968df487~mv2.jpg','https://static.wixstatic.com/media/d9828b_6adc3bc4cc7248daafbcbdc9c68d899a~mv2.jpg','https://static.wixstatic.com/media/d9828b_abe25b7efee54e16a4cf5c1af741e32f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b390fe2121d54d1abd18b441e59132ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_45c15d15fc7c4364bc5620dccf33dc6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_df2706e8b74a4625ab71c8ed3726e60f~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ec37e74d06c43b69a04926702d35f9d~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4ae515a62084045bd5a56194635b533~mv2.jpg','https://static.wixstatic.com/media/d9828b_25b49b44d03249e19c618250eca8a60d~mv2.jpg','https://static.wixstatic.com/media/d9828b_feefd23ba0cf41199a683b340ff9b425~mv2.jpg','https://static.wixstatic.com/media/d9828b_d3d7031951a846418008c187e31ec6a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_089c17e27afa4969be4456a4072a24fd~mv2.jpg','https://static.wixstatic.com/media/d9828b_14902a5feff74713b9a5d549a4b9f8a0~mv2.jpg','https://static.wixstatic.com/media/d9828b_8835703a91e8418c88c9ede4e51ebc5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_31cb6358388e4affa117d843daaf276d~mv2.jpg','https://static.wixstatic.com/media/d9828b_012c27bfcc5d4e4e9ef397651ccddeba~mv2.jpg','https://static.wixstatic.com/media/d9828b_c3250bcdfa884778a3ff9f5e02d029f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_722d8efa3b224bf085e80a56b9de731e~mv2.jpg']
      },
      {
        address: '1734 Woodland Ave NW', city: 'Canton, OH 44703', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_615742817b6a49f0a7107459b590b5eb~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_615742817b6a49f0a7107459b590b5eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_ef25a5b593214153bbdfb69c5fc5451a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d693844ecc2444697a612dc70b6b71d~mv2.jpg','https://static.wixstatic.com/media/d9828b_aef5e35cf6594b868a68c2f2067b63a6~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e8e339d238541de9eb6ac9f00adf9bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a8e3b2d4bb04abe8f0d9e02c9e46b30~mv2.jpg','https://static.wixstatic.com/media/d9828b_420a506ca49d42b38a144264f2bfc894~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2c69b0c0f0d4132a1139b68a4bc980a~mv2.jpg','https://static.wixstatic.com/media/d9828b_6430e8af3bf54b6582a4cff26a28c511~mv2.jpg','https://static.wixstatic.com/media/d9828b_e8197b706fca47cb9479785bbd2537c3~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec468d7d4b5949d1915e719f3abb80f7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0ae48477a75457e9b8c2222f8a114b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a269d6a74fd4d76830d50bebe40cc5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_d2b1ef513aa54b61a558da9a3fa2e3a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a27bc187a734f8193440f0f895a5644~mv2.jpg','https://static.wixstatic.com/media/d9828b_a29a9169bb5e41d981a4e903edfca3fb~mv2.jpg','https://static.wixstatic.com/media/d9828b_46e7667f60904d84acb3175dba04db97~mv2.jpg']
      }
    ];

    var cardsHtml = PROPERTIES.map(function(p, i) {
      return '<div class="prop-card" data-idx="' + i + '"><div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" /><span class="prop-card__badge">For Rent</span></div><div class="prop-card__info"><div class="prop-card__address">' + p.address + '</div><div class="prop-card__city">' + p.city + '</div><div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div><div class="prop-card__btn">View Details &rarr;</div></div></div>';
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
.prop-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); transition: transform 0.22s, box-shadow 0.22s; display: flex; flex-direction: column; cursor: pointer; }
.prop-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.16); }
.prop-card__img-wrap { position: relative; height: 220px; overflow: hidden; }
.prop-card__cover { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s; }
.prop-card:hover .prop-card__cover { transform: scale(1.06); }
.prop-card__badge { position: absolute; top: 12px; left: 12px; background: #C8962A; color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 12px; }
.prop-card__info { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
.prop-card__address { font-size: 17px; font-weight: 800; color: #0D1F35; margin-bottom: 4px; line-height: 1.3; }
.prop-card__city { font-size: 12px; color: #999; margin-bottom: 10px; }
.prop-card__specs { font-size: 13px; color: #555; font-weight: 600; margin-bottom: 18px; flex: 1; }
.prop-card__btn { width: 100%; padding: 12px; background: #1A3557; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-align: center; }
.prop-card:hover .prop-card__btn { background: #0D1F35; }
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
<div class="section-head"><h2>Properties</h2><span>2 homes &middot; Canton, OH 44703</span></div>
<div class="prop-grid">${cardsHtml}</div>
`;

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
customElements.define('csh-portfolio-central', CshPortfolioCentral);
