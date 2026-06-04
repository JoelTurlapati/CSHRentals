// @ts-nocheck
class CshPortfolioWest extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'West — 44708';
    var PROPERTIES = [
      {
        address: '818 25th St NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_2d552cf9168f4741b747927451fcf538~mv2.jpg',
        photos: [
          'https://static.wixstatic.com/media/d9828b_2d552cf9168f4741b747927451fcf538~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ccf98a0e23944898846af9a30f0b9384~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c44a1f6320604ceca7f6de34f53c07b0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_83190796e1794c13b72740a895ff985f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_7cb3b9d67606410194e02ae036154093~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_e5e6be6cf61949439db2b94ca6fcebf5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_3dec0b76e8b147deb44ea82c5848c8d4~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_bb67d592d9114021889c8c7fd3899427~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_fdaae49535444d428939da6d0f5652f8~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_65765707b5e0446b8ef8bcba6bce9827~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4da54f97ff5c4f8487452ed57dbff9a3~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4cab9396762044a69f1b468b53eda60a~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9c63a359a8344349838d5af2ed340187~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b8fa39eeef71459797bdd92bcb651cc1~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_21b306afd90849808e46f248081b4e05~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2db11308cada41fcb79e2260d151ccc5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ad295cff0d5a41a1b870a9b2b700478e~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_541d11e2980049798094f4bc23302062~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ebfa7420922847489e65f6226c60aec4~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_343728ef7f9c4713a9aaef0fc1cd7ed0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_38cfd45362a8462fb2d7973249705481~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c7d3636b265141ab9ad151ec1702145b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_39d085f24ffa44208dfb16a0b05532a1~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ec79e6eceb57435493190daadc318c40~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg'
        ]
      },
      {
        address: '426 Vince Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_91181a946ee7448fb5525cc2baee3f8b~mv2.jpg',
        photos: [
          'https://static.wixstatic.com/media/d9828b_91181a946ee7448fb5525cc2baee3f8b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9ab220a06f1346d6b909584eeca402d4~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_720a6e9a74154ccaa5bbaede9136e421~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_eb8e0337c9074bedb72058772e70186d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_af4cc8b943e54faebece087a5a3d154c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f6f3dd53068e4e98879eb6e225caf644~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_fcca44ebd6fe4fafb80ea0ac6f79e0a6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9e62b2e28fff4e1c88ad3389894d08ef~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_892736adbb4f43349ba517a30b0e2221~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_5ecb84710ce04142bf64b5153840e602~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_349a755f695d40059ee6441da9bd0424~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_eec40946a4ce4df7ae4e7a7cfdcafafe~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1aeab20eb7014eafa683790790910a39~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c8cfe8d505a6465fa8fe69400f93e5fe~mv2.jpg'
        ]
      },
      {
        address: '2923 Helen Pl NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_ff8a7a91e8d54815bdb4ecff04240cbe~mv2.jpg',
        photos: [
          'https://static.wixstatic.com/media/d9828b_ff8a7a91e8d54815bdb4ecff04240cbe~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_43748fc2834b46a4bc025cad544a1cc6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_aaccf35afe8043858b5ccf94928272c9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_322546c5040b4b549c7e68652ee6ffc5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_617b3e8c5d314989bd0ee51a4203f426~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d7b6b74955b941c582cf600d323d7610~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_5d92b423a9f94b0eb8bd59fad17c6bbc~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_06a44a5bbcd446b7ab70236926430763~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4af4aac2bab64f36bf9df62e3df4c309~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ab17eaa87a444b01953d9c044f1759e7~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_6d17e9470641437f8635ca8e9f688ed6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a2d0e91fd3cd404db69b3ccdfdc09fa4~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_fde2ad6a0bc6410c84a901cac231a50d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_08f08d2c92e549cf944b0fd700b45541~mv2.jpg'
        ]
      },
      {
        address: '307 Bellflower Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_0d92a9b6f6f0423c94bd3e7c1e791913~mv2.jpg',
        photos: [
          'https://static.wixstatic.com/media/d9828b_0d92a9b6f6f0423c94bd3e7c1e791913~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_dce0e3a56f1447ac8743c1d92e6dd080~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_507a57c23b234d4bab9526552c3c2e46~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_0d4f38184b604a2b8beff132fb80f505~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_57071b4d4e5e4b8aa79c660fd65b00e6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_8e928772af27403ba3407299ed51234b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_622b6bae6e7c4bb5a21682057a682d19~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_96c375243afd473dbf3986b24fa6fc4d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_728a161265c24fdfa9d76e65298856a1~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b171c3bedf424de78bfa1f5702321a77~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ffc118cb9624455d830554cf4f7ffd02~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_34b05b96be1c4621aad66c580663efa7~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_acdc9480bc914dd9af86d1a5028f52b3~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a2088ce6169a4737a7832f2675d5f0db~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_89a7fb9f3c58461c806b8da7bd68db63~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_281c7199a5454d70a728139f8812fbf4~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_fcccc37e40834103aabe6cfdcf98c1c1~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_44610d4e2c1943b292ebf38ebb46f499~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_8306e160b4c94e5ea0cb1b285419a7df~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_dd6a9810870c45248ce23edc5ac62b04~mv2.jpg'
        ]
      },
      {
        address: '2945 15th St NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_8ad572acd9534fde971928bf4dfd845b~mv2.jpg',
        photos: [
          'https://static.wixstatic.com/media/d9828b_8ad572acd9534fde971928bf4dfd845b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4f2d0b1522354f43b4af160ada13b862~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c34dac640c54422a961384cf4bedc6ca~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_12c020938651419ab6cda114ac0f6067~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d23a71ddecf3498bbc70b5f710852617~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_0db2c8ebfef24bf4be09ee1fa3eefcb7~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f5e669fee0404368911dbbd13d08b1eb~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f4af34dd916a4306ad037a14c9a34089~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_925183fcdb4d45268dfa99770e00a5d3~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_35ac8afe070a4201b2b21524f02dc1c8~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_5986bd983bef4aeabfcc49a58afd6af3~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f53f35d8875e4829b75e4c22119207c6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_6c27d24e8a81457dae6e8f440f1afe8d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_3031fe0345cf455aa9edb0c155113245~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_e8a348608cfe4098875e9c25d18b18b9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1f6f2d7bbc0e42abaa2b5bbc34f05fb1~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d00f65a8cfce4d5e9e5427011a88173b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_72422342fc204f0da5ec0a9926a014ae~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b76779870d434c0e9c928bddc37de2b9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a68e168f50b046f8a162de91f552bdf9~mv2.jpg'
        ]
      }
    ];

    var cardsHtml = PROPERTIES.map(function(p, i) {
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" />' +
        '<span class="prop-card__badge">For Rent</span>' +
        '</div>' +
        '<div class="prop-card__info">' +
        '<div class="prop-card__address">' + p.address + '</div>' +
        '<div class="prop-card__city">' + p.city + '</div>' +
        '<div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' +
        '<div class="prop-card__btn">View Details &rarr;</div>' +
        '</div>' +
        '</div>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-west { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }
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
  <div class="hero__badge">44708 &mdash; West Canton</div>
  <h1 class="hero__title">West Portfolio</h1>
  <p class="hero__sub">5 single-family rental homes</p>
</section>
<div class="section-head"><h2>Properties</h2><span>5 homes &middot; Canton, OH 44708</span></div>
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
customElements.define('csh-portfolio-west', CshPortfolioWest);
