// @ts-nocheck
class CshPortfolioNe extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'Northeast — 44714';
    var PROPERTIES = [
      {
        address: '1207 Colonial Blvd NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_577c9c84ca604395b42763c082e0fe44~mv2.jpg','https://static.wixstatic.com/media/d9828b_c8b8160c965b46e786570aaa4c0e5067~mv2.jpg','https://static.wixstatic.com/media/d9828b_3c9a2b3342284f868eafde03d51b4c5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_f98683ca720a4f9b83813e3504485cd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_df9ffc08cb4d446b825261c3c14923a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_e7118c7c7f5d48f39881710ed0f063bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_1b8c021139304b70b5ad712797ef552c~mv2.jpg','https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg','https://static.wixstatic.com/media/d9828b_b0597321bc514be085d0f416c662f910~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb905ca0c7594ab084d2fa8b91a2bf6b~mv2.jpg','https://static.wixstatic.com/media/d9828b_38e48530067742c9b58d869494be1485~mv2.jpg','https://static.wixstatic.com/media/d9828b_2c22e547ed374c4fb5c5ca41e344f580~mv2.jpg','https://static.wixstatic.com/media/d9828b_10be6e16920f4ec492f9098eba977f9c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e82f6a1f606b46478afd37626d22943c~mv2.jpg','https://static.wixstatic.com/media/d9828b_b7bfb622767b4d3b87f911cbbd427b83~mv2.jpg','https://static.wixstatic.com/media/d9828b_b139f601d96d4922a406e4fd2db93b5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_fd2b7545865645a78d8295c27459989e~mv2.jpg','https://static.wixstatic.com/media/d9828b_8c85e085fb964d7cadfed896a6b0184e~mv2.jpg','https://static.wixstatic.com/media/d9828b_a1e21bbffcc240b99413d5a96f063966~mv2.jpg','https://static.wixstatic.com/media/d9828b_11f4d32902944520932fc1d15eb7649a~mv2.jpg']
      },
      {
        address: '1206 24th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_7a3674529d954a239ebcdf86611c115c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_7a3674529d954a239ebcdf86611c115c~mv2.jpg','https://static.wixstatic.com/media/d9828b_320a3860aaff484aae55e7fb64ad4be2~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2b28703c8034a42ad921e06782882ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_9c22f88e531b440db140d14f0b0af809~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b3e1832d5cd4526b5ce8bbc0a4c16ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_60a295bd891e4c8f84cf7b6d895513ba~mv2.jpg','https://static.wixstatic.com/media/d9828b_79e4032989ba4ebc904872ffd5162cb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_e7fd8eb20a06471d8c02745b136253bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_0056bff3d32f4db2a46f43d8b7b63d55~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e1857ebaa3d40a291e1b6235823be5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e3288b50f60f43dfbc91595aca1b978d~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7f50ecaa4884d87b2aae14617d821cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_7041db6f4dad4a238f9987887a8233ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_e46c7d7883e24abe802da734dda4bb83~mv2.jpg','https://static.wixstatic.com/media/d9828b_1af8c95210e4422d99f1e836972335e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_be996a40fe354cb4bab495e1de605967~mv2.jpg','https://static.wixstatic.com/media/d9828b_1678b9ddf7ef4f6ba5584ee6d2eb9de5~mv2.jpg','https://static.wixstatic.com/media/d9828b_8ea2834be9644d0cb81f17a27aaad3f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_80e85a3c5fb04e7c8f27eac20d7a6a5d~mv2.jpg','https://static.wixstatic.com/media/d9828b_4604c748064d4ed0b8ccd9c59dfa0054~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad1af40daf1e4287af48359dcdb0b526~mv2.jpg']
      },
      {
        address: '1012 28th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_6b5322c3ac554fa38fc6e44617621092~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_6b5322c3ac554fa38fc6e44617621092~mv2.jpg','https://static.wixstatic.com/media/d9828b_d9974ad55756436e8048731ed96bd547~mv2.jpg','https://static.wixstatic.com/media/d9828b_0386534e6ce74270956bb843454646c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_606643630a2a4bfa9d479db6c22023f0~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6007ecca713404ea3c948463d44b8df~mv2.jpg','https://static.wixstatic.com/media/d9828b_cdd2b0ad726c40a5bb6fe9b50534ac81~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f2b82eb3f064a74b71d9afbd4151cab~mv2.jpg','https://static.wixstatic.com/media/d9828b_41b4c9e7b6764f5b99aad67400f3bcbd~mv2.jpg','https://static.wixstatic.com/media/d9828b_080ec504af5f4b4a98311d4363df63d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_e1d4aaf47bc64d728afff9708aba0063~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa3c302cf47f47c6b72fa144ec98688b~mv2.jpg','https://static.wixstatic.com/media/d9828b_c54608f242294cd0bf4d56849926d67c~mv2.jpg','https://static.wixstatic.com/media/d9828b_8005085f6ca041b3875184d04c3725f5~mv2.jpg','https://static.wixstatic.com/media/d9828b_7af5275536754e18bc38d1177bf6cb58~mv2.jpg','https://static.wixstatic.com/media/d9828b_f85a1ce5682443eea3b519b008baf321~mv2.jpg','https://static.wixstatic.com/media/d9828b_291040edcd48400e93c44f2c63e1a70d~mv2.jpg','https://static.wixstatic.com/media/d9828b_04291b783c8248798a3bf06e244f1882~mv2.jpg','https://static.wixstatic.com/media/d9828b_238f3083474c476aa23627bb496c28ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6032a644762491e81014c296654f88a~mv2.jpg','https://static.wixstatic.com/media/d9828b_58169544afd640ae873b236c6bac92d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_23633a1a37854a4ebd5307a6fc77be89~mv2.jpg']
      },
      {
        address: '804 29th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_b3c7e63cfdd04e66aabc6f707088a0f9~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_e43dcc10c9fc49b48abc62fb376f697c~mv2.jpg','https://static.wixstatic.com/media/d9828b_340eb52bca374f1b8f3bee12bf708b43~mv2.jpg','https://static.wixstatic.com/media/d9828b_0615d1021d124ecbabd381beeff07cbf~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ff68a188e0e4e66bf6c49e16d0bd761~mv2.jpg','https://static.wixstatic.com/media/d9828b_85709788878a4ea7a7971af7420cb7e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3c7e63cfdd04e66aabc6f707088a0f9~mv2.jpg','https://static.wixstatic.com/media/d9828b_61019c0fbd3049349c2611a482d47643~mv2.jpg','https://static.wixstatic.com/media/d9828b_74008132f63d4471930ac7ddfecaac72~mv2.jpg','https://static.wixstatic.com/media/d9828b_0bbf9e3da64f46f996c1f7dc083409ed~mv2.jpg']
      },
      {
        address: '1326 24th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a277d2494c974c12877f2bc2a5739276~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_156f374e7ab54675a7bb2680b21121b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_02f08a8aa68c41b1bc124e8650c5b0fe~mv2.jpg','https://static.wixstatic.com/media/d9828b_0e08866f292246639cf037cdf86206d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_173602d244544b4dba40ea66bd6e3d2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_a277d2494c974c12877f2bc2a5739276~mv2.jpg','https://static.wixstatic.com/media/d9828b_d40f5294bfae4a4d83b3410bd466268c~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad704b7fecd84cf0909a31f5026e2054~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2762ab82bd8403dbb5fea1928499365~mv2.jpg','https://static.wixstatic.com/media/d9828b_7d242996e89f4f12bdb696f93810fb3d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7bcfaab4b7a4a0db6013baaa507b686~mv2.jpg','https://static.wixstatic.com/media/d9828b_3439cc0c510047f2901ca3601c3898c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_c33379ca53274a9989c4d58d6dda3fa7~mv2.jpg','https://static.wixstatic.com/media/d9828b_4d330ce6672141dba6fc42e56879bdbb~mv2.jpg','https://static.wixstatic.com/media/d9828b_22d75194d1ec430fa67926f88a8366eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_1ac385d0257a4e3087304d25e0e2ecf3~mv2.jpg','https://static.wixstatic.com/media/d9828b_38bcea7395bc49eda7808cb609054247~mv2.jpg','https://static.wixstatic.com/media/d9828b_e85f0df3dec740a8bc824d5b9aa46c13~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf8c62c3cf9a4ce5a99bfc37f77a295c~mv2.jpg']
      },
      {
        address: '1203 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_801cf90ba5e04c7bb182cc61e542e4d5~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_801cf90ba5e04c7bb182cc61e542e4d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a2e739b80d94fccb9d43e85f587addc~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b7dfec1f88e48cba26c3e184f8c0f34~mv2.jpg','https://static.wixstatic.com/media/d9828b_7500b7899ac54ac2b0b04ac3e17888f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_05ad58532e27485ca8d346b546c9e42c~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb13465edfd44efa8ff61c06ba845f00~mv2.jpg','https://static.wixstatic.com/media/d9828b_9460ffa1c0b549edb81a474d33bbe5df~mv2.jpg','https://static.wixstatic.com/media/d9828b_6766275ea06b45c4a1ade9b54de92126~mv2.jpg','https://static.wixstatic.com/media/d9828b_2e573ba1bea249dabbced89100d288af~mv2.jpg','https://static.wixstatic.com/media/d9828b_251d73599b3349c98263851ccb8446a4~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a5c7ff4bc3147a694acecca74cd4b9f~mv2.jpg','https://static.wixstatic.com/media/d9828b_fc4be8886b9c4dd3b3d83d101c16fd4b~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2b1989bb512423f8236aba06412265f~mv2.jpg','https://static.wixstatic.com/media/d9828b_8387a41552c54c4e96ebe0ffd0c631b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_43297e95b66541129c88a4946eecb93b~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a098781651c48c6a4f095706aee8680~mv2.jpg','https://static.wixstatic.com/media/d9828b_0e456d8fce82487d865db7d5f91cc73d~mv2.jpg']
      }
    ];

    var cardsHtml = PROPERTIES.map(function(p, i) {
      return '<div class="prop-card" data-idx="' + i + '"><div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" /><span class="prop-card__badge">For Rent</span></div><div class="prop-card__info"><div class="prop-card__address">' + p.address + '</div><div class="prop-card__city">' + p.city + '</div><div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div><div class="prop-card__btn">View Details &rarr;</div></div></div>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-ne { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }
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
  <div class="hero__badge">44714 &mdash; Northeast Canton</div>
  <h1 class="hero__title">Northeast Portfolio</h1>
  <p class="hero__sub">6 single-family rental homes</p>
</section>
<div class="section-head"><h2>Properties</h2><span>6 homes &middot; Canton, OH 44714</span></div>
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
customElements.define('csh-portfolio-ne', CshPortfolioNe);
