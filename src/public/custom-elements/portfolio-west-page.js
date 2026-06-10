// @ts-nocheck
class CshPortfolioWest extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Portfolio 1 — McKinley Presidential Library & Museum';
    var PL_DATA = {'2024':{title:'Portfolio 1 — McKinley Presidential Library & Museum',period:'January – December 2024',income:[['LTR Rents',45630],['Late Fees',600],['Cash Receipts',14396],['Security Deposits',1300]],totalIncome:61926,expenses:[['Repair Labor',13274],['Real Estate Taxes',6850],['Other Fees',30]],totalExpenses:20154,noi:41773},'2025':{title:'Portfolio 1 — McKinley Presidential Library & Museum',period:'January – December 2025',income:[['LTR Rents',38905],['Late Fees',540],['Cash Receipts',20000]],totalIncome:59445,expenses:[['Repair & Maintenance',1434],['Repair Labor',1279],['Real Estate Taxes',8914]],totalExpenses:11627,noi:47818}};
    function fmt(n) {
      if (n === null || n === undefined || n === '') return '\u2014';
      var num = Math.round(Number(n));
      if (isNaN(num)) return String(n);
      var s = '$' + Math.abs(num).toLocaleString('en-US');
      return num < 0 ? '(' + s + ')' : s;
    }
    var PROPERTIES = [
      {
        address: '635 Greenfield Ave SW', city: 'Canton, OH 44706', beds: 2, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_bc3385876fa543b2acee2cb03a1741c1~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_bc3385876fa543b2acee2cb03a1741c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_e39f74ab87be4f4a99d60f5e87b8db1e~mv2.jpg','https://static.wixstatic.com/media/d9828b_05174e141cef4bf081405497fdf8dc25~mv2.jpg','https://static.wixstatic.com/media/d9828b_bc3385876fa543b2acee2cb03a1741c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d93a7d364ced411d845d18e6c4e3db07~mv2.jpg','https://static.wixstatic.com/media/d9828b_15fe66da9f8b4c8bb2c443a8b52632c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_ea975df7804a49759c36b42b963cdd85~mv2.jpg','https://static.wixstatic.com/media/d9828b_0cd71d00ed2c48bda6277b0b91d564ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_cd263b3d33974eefbddaeb45bfcd8800~mv2.jpg','https://static.wixstatic.com/media/d9828b_a5122ffc4b0d40fda62e77cb194de2f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_f3e126afb8774447b5211d02e23a78fd~mv2.jpg','https://static.wixstatic.com/media/d9828b_764d1cd6e1eb404a903b3f4e5278720b~mv2.jpg','https://static.wixstatic.com/media/d9828b_f363e69a8a1b4d82b465f491afd83cd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_f6010c8b20e140e4a1b9dcaed82ce838~mv2.jpg','https://static.wixstatic.com/media/d9828b_9861f469d7394bf2aae288c525c0995a~mv2.jpg','https://static.wixstatic.com/media/d9828b_248ea9c13ea04e10935fe4aa7be3a0fe~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f5cedd6e07d410fb8bbcce212bb6ff0~mv2.jpg','https://static.wixstatic.com/media/d9828b_460cf0a9f2ac457fb82507a07a148ac1~mv2.jpg','https://static.wixstatic.com/media/d9828b_0a218d30146247deaa6841152dd6a651~mv2.jpg','https://static.wixstatic.com/media/d9828b_b68cee567d464fb6b637bc81157d4737~mv2.jpg','https://static.wixstatic.com/media/d9828b_bb2e7b405eed4fa78fb9703082bae5ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_434fd3c4bd014cb38fde0f665b957053~mv2.jpg','https://static.wixstatic.com/media/d9828b_870d50def00c4445945d5958d2d2033b~mv2.jpg','https://static.wixstatic.com/media/d9828b_1e9773ad803e4ccb8ac4d1b81f25e5b8~mv2.jpg','https://static.wixstatic.com/media/d9828b_4dca5948ca4f403ab19de8501a195f45~mv2.jpg','https://static.wixstatic.com/media/d9828b_8171ad6b905b49118931d3e8b7d92b04~mv2.jpg']
      },
      {
        address: '2923 Helen Pl NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_ff8a7a91e8d54815bdb4ecff04240cbe~mv2.jpg','https://static.wixstatic.com/media/d9828b_43748fc2834b46a4bc025cad544a1cc6~mv2.jpg','https://static.wixstatic.com/media/d9828b_aaccf35afe8043858b5ccf94928272c9~mv2.jpg','https://static.wixstatic.com/media/d9828b_322546c5040b4b549c7e68652ee6ffc5~mv2.jpg','https://static.wixstatic.com/media/d9828b_617b3e8c5d314989bd0ee51a4203f426~mv2.jpg','https://static.wixstatic.com/media/d9828b_d7b6b74955b941c582cf600d323d7610~mv2.jpg','https://static.wixstatic.com/media/d9828b_5d92b423a9f94b0eb8bd59fad17c6bbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_06a44a5bbcd446b7ab70236926430763~mv2.jpg','https://static.wixstatic.com/media/d9828b_4af4aac2bab64f36bf9df62e3df4c309~mv2.jpg','https://static.wixstatic.com/media/d9828b_ab17eaa87a444b01953d9c044f1759e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg','https://static.wixstatic.com/media/d9828b_6d17e9470641437f8635ca8e9f688ed6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2d0e91fd3cd404db69b3ccdfdc09fa4~mv2.jpg','https://static.wixstatic.com/media/d9828b_fde2ad6a0bc6410c84a901cac231a50d~mv2.jpg','https://static.wixstatic.com/media/d9828b_08f08d2c92e549cf944b0fd700b45541~mv2.jpg']
      },
      {
        address: '307 Bellflower Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_ff31d3cd5b5e4b22b516cbdf409cc963~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_ff31d3cd5b5e4b22b516cbdf409cc963~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d92a9b6f6f0423c94bd3e7c1e791913~mv2.jpg','https://static.wixstatic.com/media/d9828b_dce0e3a56f1447ac8743c1d92e6dd080~mv2.jpg','https://static.wixstatic.com/media/d9828b_507a57c23b234d4bab9526552c3c2e46~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d4f38184b604a2b8beff132fb80f505~mv2.jpg','https://static.wixstatic.com/media/d9828b_57071b4d4e5e4b8aa79c660fd65b00e6~mv2.jpg','https://static.wixstatic.com/media/d9828b_8e928772af27403ba3407299ed51234b~mv2.jpg','https://static.wixstatic.com/media/d9828b_622b6bae6e7c4bb5a21682057a682d19~mv2.jpg','https://static.wixstatic.com/media/d9828b_96c375243afd473dbf3986b24fa6fc4d~mv2.jpg','https://static.wixstatic.com/media/d9828b_728a161265c24fdfa9d76e65298856a1~mv2.jpg','https://static.wixstatic.com/media/d9828b_b171c3bedf424de78bfa1f5702321a77~mv2.jpg','https://static.wixstatic.com/media/d9828b_ffc118cb9624455d830554cf4f7ffd02~mv2.jpg','https://static.wixstatic.com/media/d9828b_34b05b96be1c4621aad66c580663efa7~mv2.jpg','https://static.wixstatic.com/media/d9828b_acdc9480bc914dd9af86d1a5028f52b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2088ce6169a4737a7832f2675d5f0db~mv2.jpg','https://static.wixstatic.com/media/d9828b_89a7fb9f3c58461c806b8da7bd68db63~mv2.jpg','https://static.wixstatic.com/media/d9828b_281c7199a5454d70a728139f8812fbf4~mv2.jpg','https://static.wixstatic.com/media/d9828b_fcccc37e40834103aabe6cfdcf98c1c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_44610d4e2c1943b292ebf38ebb46f499~mv2.jpg','https://static.wixstatic.com/media/d9828b_8306e160b4c94e5ea0cb1b285419a7df~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd6a9810870c45248ce23edc5ac62b04~mv2.jpg']
      },
      {
        address: '2945 15th St NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_8ad572acd9534fde971928bf4dfd845b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f2d0b1522354f43b4af160ada13b862~mv2.jpg','https://static.wixstatic.com/media/d9828b_c34dac640c54422a961384cf4bedc6ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_12c020938651419ab6cda114ac0f6067~mv2.jpg','https://static.wixstatic.com/media/d9828b_d23a71ddecf3498bbc70b5f710852617~mv2.jpg','https://static.wixstatic.com/media/d9828b_0db2c8ebfef24bf4be09ee1fa3eefcb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f5e669fee0404368911dbbd13d08b1eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4af34dd916a4306ad037a14c9a34089~mv2.jpg','https://static.wixstatic.com/media/d9828b_925183fcdb4d45268dfa99770e00a5d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_35ac8afe070a4201b2b21524f02dc1c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_5986bd983bef4aeabfcc49a58afd6af3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f53f35d8875e4829b75e4c22119207c6~mv2.jpg','https://static.wixstatic.com/media/d9828b_6c27d24e8a81457dae6e8f440f1afe8d~mv2.jpg','https://static.wixstatic.com/media/d9828b_3031fe0345cf455aa9edb0c155113245~mv2.jpg','https://static.wixstatic.com/media/d9828b_e8a348608cfe4098875e9c25d18b18b9~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f6f2d7bbc0e42abaa2b5bbc34f05fb1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d00f65a8cfce4d5e9e5427011a88173b~mv2.jpg','https://static.wixstatic.com/media/d9828b_72422342fc204f0da5ec0a9926a014ae~mv2.jpg','https://static.wixstatic.com/media/d9828b_b76779870d434c0e9c928bddc37de2b9~mv2.jpg','https://static.wixstatic.com/media/d9828b_a68e168f50b046f8a162de91f552bdf9~mv2.jpg']
      }
    ];
    var RENTS = {'635 Greenfield Ave SW':'$1,200','2923 Helen Pl NW':'$1,350','307 Bellflower Ave NW':'$1,375','2945 15th St NW':'$1,300'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" />' +
        '<span class="prop-card__badge">For Rent</span>' +
        '</div><div class="prop-card__info">' +
        '<div class="prop-card__address">' + p.address + '</div>' +
        '<div class="prop-card__city">' + p.city + '</div>' +
        '<div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' +
        (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') +
        '<div class="prop-card__btn">View Details &rarr;</div>' +
        '</div></div>';
    }).join('');
    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
csh-portfolio-west{display:block;font-family:'Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:88px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:52px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:10px 18px;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;transition:background .2s,border-color .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}
.csh-hdr__burger{display:none;flex-direction:column;justify-content:space-between;width:26px;height:19px;background:none;border:none;cursor:pointer;padding:0;margin-left:auto;flex-shrink:0}
.csh-hdr__burger span{display:block;width:100%;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:transform .25s,opacity .25s}
.csh-hdr__burger.open span:nth-child(1){transform:translateY(8.5px) rotate(45deg)}
.csh-hdr__burger.open span:nth-child(2){opacity:0}
.csh-hdr__burger.open span:nth-child(3){transform:translateY(-8.5px) rotate(-45deg)}
.csh-mob-nav{display:none;position:absolute;top:94px;left:0;right:0;background:#0a1628;border-top:1px solid rgba(255,255,255,.08);z-index:199;box-shadow:0 8px 32px rgba(0,0,0,.35)}
.csh-mob-nav.open{display:block}
.csh-mob-nav__inner{display:flex;flex-direction:column;padding:8px 0 16px}
.csh-mob-nav__link{padding:15px 20px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.85);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s}
.csh-mob-nav__link:hover{background:rgba(255,255,255,.06)}
.csh-mob-nav__link:last-child{border-bottom:none}
.csh-mob-nav__link--gold{color:#c8962a}
@media(max-width:768px){.csh-hdr{padding:0 16px}.csh-hdr__nav{display:none}.csh-hdr__burger{display:flex}}
.csh-back{display:block;padding:10px 28px;font-size:13px;font-weight:700;color:#5a6b85;text-decoration:none;letter-spacing:.05em;text-transform:uppercase;border-bottom:1px solid #e0e4ea;background:#fff}
.csh-back:hover{color:#0d1f35}
.prop-card__rent{font-size:18px;font-weight:800;color:#c8962a;margin-bottom:12px}
.hero{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 60%,#1e3f68 100%);color:#fff;padding:52px 32px 48px;text-align:center}
.hero__badge{display:inline-block;background:#C8962A;color:#fff;font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:16px}
.hero__title{font-size:clamp(24px,4.8vw,46px);font-weight:900;margin-bottom:8px}
.hero__sub{font-size:18px;color:rgba(255,255,255,0.68)}
.pl-bar{background:#fff;padding:14px 28px;border-bottom:1px solid #e0e4ea;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.pl-bar__label{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6b85;white-space:nowrap}
.pl-year-btn{padding:9px 16px;background:#0d1f35;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .2s;font-family:inherit}
.pl-year-btn:hover{background:#1a3557}
.section-head{max-width:1040px;margin:48px auto 20px;padding:0 24px;display:flex;align-items:baseline;justify-content:space-between}
.section-head h2{font-size:22px;font-weight:800;color:#0D1F35;text-transform:uppercase;letter-spacing:.08em}
.section-head span{font-size:16px;color:#888}
.prop-grid{max-width:1040px;margin:0 auto 64px;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:24px}
.prop-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);transition:transform .22s,box-shadow .22s;display:flex;flex-direction:column;cursor:pointer}
.prop-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(0,0,0,0.16)}
.prop-card__img-wrap{position:relative;height:220px;overflow:hidden}
.prop-card__cover{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s}
.prop-card:hover .prop-card__cover{transform:scale(1.06)}
.prop-card__badge{position:absolute;top:12px;left:12px;background:#C8962A;color:#fff;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:12px}
.prop-card__info{padding:18px 20px 20px;display:flex;flex-direction:column;flex:1}
.prop-card__address{font-size:20px;font-weight:800;color:#0D1F35;margin-bottom:4px;line-height:1.3}
.prop-card__city{font-size:14px;color:#999;margin-bottom:10px}
.prop-card__specs{font-size:16px;color:#555;font-weight:600;margin-bottom:18px;flex:1}
.prop-card__btn{width:100%;padding:12px;background:#1A3557;color:#fff;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:7px;text-align:center}
.prop-card:hover .prop-card__btn{background:#0D1F35}
.pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px}
.pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.pl-modal__box{position:relative;background:#fff;border-radius:16px;max-width:520px;width:100%;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.pl-modal__head{padding:20px 52px 18px 24px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.pl-modal__title{font-size:14px;font-weight:800;color:#fff;line-height:1.35}
.pl-modal__period{font-size:11px;color:#c8962a;font-weight:700;margin-top:5px;letter-spacing:.1em;text-transform:uppercase}
.pl-modal__close{position:absolute;top:14px;right:16px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.pl-modal__body{overflow-y:auto;padding:22px 24px 24px;flex:1}
.pl-section{margin-bottom:20px}
.pl-section-hdr{font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#5a6b85;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid rgba(10,30,60,.10)}
.pl-row{display:flex;justify-content:space-between;align-items:center;padding:7px 8px;border-radius:5px}
.pl-row:nth-child(even){background:#f9fafc}
.pl-row__label{font-size:13.5px;color:#5a6b85}
.pl-row__value{font-size:13.5px;font-weight:600;color:#0d1f35;font-variant-numeric:tabular-nums}
.pl-divider{height:1px;background:rgba(10,30,60,.10);margin:4px 0 8px}
.pl-row--total{background:#f0f4fa!important;padding:10px;border-radius:7px;margin-top:2px}
.pl-row--total .pl-row__label{font-weight:800;color:#0d1f35;font-size:14px}
.pl-row--total .pl-row__value{font-weight:900;color:#0d1f35;font-size:15px}
.pl-noi{background:linear-gradient(135deg,#0a1628,#0d2545);border-radius:11px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;margin-top:8px;border:1px solid rgba(200,150,42,.35)}
.pl-noi__label{font-size:14px;font-weight:700;color:rgba(255,255,255,.85)}
.pl-noi__value{font-size:22px;font-weight:900;color:#c8962a;font-variant-numeric:tabular-nums}
</style>
<header class="csh-hdr">
  <a href="/" class="csh-hdr__logo">
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>
    <span class="csh-hdr__logo-text">CSH RENTALS</span>
  </a>
  <nav class="csh-hdr__nav">
    <a class="csh-hdr__btn" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-hdr__btn csh-hdr__btn--gold" href="/contact">Contact</a>
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
  <div class="hero__badge">Portfolio 1 — McKinley Presidential Library</div>
  <h1 class="hero__title">Portfolio 1: McKinley Presidential Library &amp; Museum</h1>
  <p class="hero__sub">4 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
</section>
<div class="pl-bar">
  <span class="pl-bar__label">&#128202; Financial Reports:</span>
  <button class="pl-year-btn" type="button" data-year="2024">2024 Profit &amp; Loss</button>
  <button class="pl-year-btn" type="button" data-year="2025">2025 Profit &amp; Loss</button>
</div>
<div class="section-head"><h2>Properties</h2><span>4 homes &middot; $5,225/mo &middot; $62,700 Annual</span></div>
<div class="prop-grid">${cardsHtml}</div>
<div id="pl-modal" class="pl-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="pl-modal__overlay" id="pl-modal-overlay"></div>
  <div class="pl-modal__box">
    <div class="pl-modal__head">
      <div class="pl-modal__title" id="pl-modal-title"></div>
      <div class="pl-modal__period" id="pl-modal-period"></div>
      <button class="pl-modal__close" id="pl-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="pl-modal__body" id="pl-modal-body"></div>
  </div>
</div>
`;

    var burger = this.querySelector('#csh-burger');
    var mobNav = this.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    var plModal   = this.querySelector('#pl-modal');
    var plTitle   = this.querySelector('#pl-modal-title');
    var plPeriod  = this.querySelector('#pl-modal-period');
    var plBody    = this.querySelector('#pl-modal-body');
    var plClose   = this.querySelector('#pl-modal-close');
    var plOverlay = this.querySelector('#pl-modal-overlay');

    var self = this;
    function openPL(year) {
      var d = PL_DATA[year];
      if (!d) return;
      plTitle.textContent = d.title;
      plPeriod.textContent = d.period;
      var html = '<div class="pl-section"><div class="pl-section-hdr">Income</div>';
      d.income.forEach(function(r) {
        html += '<div class="pl-row"><span class="pl-row__label">' + r[0] + '</span><span class="pl-row__value">' + fmt(r[1]) + '</span></div>';
      });
      html += '<div class="pl-divider"></div><div class="pl-row pl-row--total"><span class="pl-row__label">Total Income</span><span class="pl-row__value">' + fmt(d.totalIncome) + '</span></div></div>';
      html += '<div class="pl-section"><div class="pl-section-hdr">Expenses</div>';
      d.expenses.forEach(function(r) {
        html += '<div class="pl-row"><span class="pl-row__label">' + r[0] + '</span><span class="pl-row__value">' + fmt(r[1]) + '</span></div>';
      });
      html += '<div class="pl-divider"></div><div class="pl-row pl-row--total"><span class="pl-row__label">Total Expenses</span><span class="pl-row__value">' + fmt(d.totalExpenses) + '</span></div></div>';
      html += '<div class="pl-noi"><div class="pl-noi__label">Net Operating Income</div><div class="pl-noi__value">' + fmt(d.noi) + '</div></div>';
      plBody.innerHTML = html;
      plModal.style.display = 'flex';
    }
    function closePL() { plModal.style.display = 'none'; }
    if (plClose)   plClose.addEventListener('click', closePL);
    if (plOverlay) plOverlay.addEventListener('click', closePL);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePL(); });

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    self.addEventListener('click', function(e) {
      var plBtn = e.target.closest('.pl-year-btn');
      if (plBtn) { e.preventDefault(); e.stopPropagation(); openPL(plBtn.dataset.year); return; }
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
      try { localStorage.setItem('csh_prop', JSON.stringify({address:p.address,city:p.city,portfolio:PORTFOLIO,beds:p.beds,baths:p.baths,photos:p.photos})); } catch(err) {}
      window.location.assign(window.location.origin + _b + '/property-detail');
    });
  }
}
customElements.define('csh-portfolio-west', CshPortfolioWest);
