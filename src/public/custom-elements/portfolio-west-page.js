// @ts-nocheck
class CshPortfolioWest extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Portfolio 1 — McKinley Presidential Library & Museum';

    // cols order: Helen, 2945, Bellflower, Greenfield, Total  (matches QuickBooks report)
    // t: 'section'|'group'|'group-hdr'|'item'|'subtotal'|'total'|'noi'
    var PL_TABLE = {
      '2024': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2024',
        cols: ['2923 Helen Pl NW','2945 15th St NW','307 Bellflower','635 Greenfield','Total'],
        rows: [
          {t:'section', label:'Income'},
          {t:'group',   label:'LTR Rents',              v:[16200,9180,16850,3400,45630]},
          {t:'item',    label:'Late Fee collected',      v:[260,130,150,60,600]},
          {t:'item',    label:'LTR Cash Receipts',       v:[0,4413,0,9983.39,14396.39]},
          {t:'item',    label:'Security Deposit Income', v:[0,1300,0,0,1300]},
          {t:'subtotal',label:'Total for LTR Rents',    v:[16460,15023,17000,13443.39,61926.39]},
          {t:'total',   label:'Total for Income',       v:[16460,15023,17000,13443.39,61926.39]},
          {t:'total',   label:'Gross Profit',           v:[16460,15023,17000,13443.39,61926.39]},
          {t:'section', label:'Expenses'},
          {t:'group-hdr',label:'LTR Expenses'},
          {t:'item',    label:'QuickBooks Payments Fees',v:[0,30,0,0,30]},
          {t:'item',    label:'Repair Labor',            v:[1761.83,5673.54,3618.36,2220,13273.73]},
          {t:'item',    label:'Taxes - Real Estate',     v:[2470.19,2433.41,1196.14,750.40,6850.14]},
          {t:'subtotal',label:'Total for LTR Expenses', v:[4232.02,8136.95,4814.50,2970.40,20153.87]},
          {t:'total',   label:'Total for Expenses',     v:[4232.02,8136.95,4814.50,2970.40,20153.87]},
          {t:'noi',     label:'Net Operating Income',   v:[12227.98,6886.05,12185.50,10472.99,41772.52]},
          {t:'noi',     label:'Net Income',             v:[12227.98,6886.05,12185.50,10472.99,41772.52]}
        ]
      },
      '2025': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2025',
        cols: ['2923 Helen Pl NW','2945 15th St NW','307 Bellflower','635 Greenfield','Total'],
        rows: [
          {t:'section', label:'Income'},
          {t:'group',   label:'LTR Rents',              v:[16230,15600,7075,0,38905]},
          {t:'item',    label:'Late Fee collected',      v:[10,0,530,0,540]},
          {t:'item',    label:'LTR Cash Receipts',       v:[0,0,5500,14500,20000]},
          {t:'subtotal',label:'Total for LTR Rents',    v:[16240,15600,13105,14500,59445]},
          {t:'total',   label:'Total for Income',       v:[16240,15600,13105,14500,59445]},
          {t:'total',   label:'Gross Profit',           v:[16240,15600,13105,14500,59445]},
          {t:'section', label:'Expenses'},
          {t:'group-hdr',label:'LTR Expenses'},
          {t:'item',    label:'Repair & Maintenance',   v:[696.86,0,736.84,0,1433.70]},
          {t:'item',    label:'Repair Labor',            v:[150,0,900,229,1279]},
          {t:'item',    label:'Taxes - Real Estate',     v:[2820.30,2416.96,1906.92,1769.82,8914]},
          {t:'subtotal',label:'Total for LTR Expenses', v:[3667.16,2416.96,3543.76,1998.82,11626.70]},
          {t:'total',   label:'Total for Expenses',     v:[3667.16,2416.96,3543.76,1998.82,11626.70]},
          {t:'noi',     label:'Net Operating Income',   v:[12572.84,13183.04,9561.24,12501.18,47818.30]},
          {t:'noi',     label:'Net Income',             v:[12572.84,13183.04,9561.24,12501.18,47818.30]}
        ]
      }
    };

    var RENT_ROLL = [
      {address:'635 Greenfield Ave SW',value:95000,monthlyRent:1200,annualizedRent:14400},
      {address:'2923 Helen Pl NW',value:175000,monthlyRent:1350,annualizedRent:16200},
      {address:'307 Bellflower Ave NW',value:160000,monthlyRent:1375,annualizedRent:16500},
      {address:'2945 15th St NW',value:160000,monthlyRent:1300,annualizedRent:15600}
    ];

    function fmt(n) {
      if (n === null || n === undefined || n === '') return '—';
      var num = Math.round(Number(n));
      if (isNaN(num)) return String(n);
      var s = '$' + Math.abs(num).toLocaleString('en-US');
      return num < 0 ? '(' + s + ')' : s;
    }

    var PROPERTIES = [
      {
        address: '635 Greenfield Ave SW', city: 'Canton, OH 44706', beds: 2, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_c53805e63cfc4e6ea8185865e9574cab~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_940177374d5542b098ad6c74a37c2ec7~mv2.jpeg','https://static.wixstatic.com/media/64b604_b667e6f4d0c1425aa80d0fbac20c3b93~mv2.jpeg','https://static.wixstatic.com/media/64b604_e1f81fb0d29549e4bb66e822ab5ec4dc~mv2.jpeg','https://static.wixstatic.com/media/64b604_940177374d5542b098ad6c74a37c2ec7~mv2.jpeg','https://static.wixstatic.com/media/64b604_db13505dabef4c27b4130edc03d526e7~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce4ffabcfa754ddf829e6773bf293a15~mv2.jpeg','https://static.wixstatic.com/media/64b604_989c3c702a384553869441e0c6798675~mv2.jpeg','https://static.wixstatic.com/media/64b604_e7f2e0d66f6c49e599ee1f433aa20fff~mv2.jpeg','https://static.wixstatic.com/media/64b604_7b46acc41c384ef284d592a891a2cf5d~mv2.jpeg','https://static.wixstatic.com/media/64b604_668b074364c34ded882d300406fb5ed3~mv2.jpeg','https://static.wixstatic.com/media/64b604_2fcb74e2925a47f587bbcc82d91e5cfe~mv2.jpeg','https://static.wixstatic.com/media/64b604_0cc6d76060324c8aba0ea98ead379253~mv2.jpeg','https://static.wixstatic.com/media/64b604_59d977d85141442f88c9e1df86554aed~mv2.jpeg','https://static.wixstatic.com/media/64b604_8ff9de41d9d64055bca0cdf3bb190729~mv2.jpeg','https://static.wixstatic.com/media/64b604_73990df58e124fe292128da0f8f5466f~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce7bc681d40f440ea823300c44d65709~mv2.jpeg','https://static.wixstatic.com/media/64b604_d7ca473d42df48ff8a3d787bddf37656~mv2.jpeg','https://static.wixstatic.com/media/64b604_a2d9dfd891624456a7e72cdce2188566~mv2.jpeg','https://static.wixstatic.com/media/64b604_204a0bb2c592496e90b58d9eaca2e431~mv2.jpeg','https://static.wixstatic.com/media/64b604_dbf870f3b32c46fb8c5821ea831f3505~mv2.jpeg','https://static.wixstatic.com/media/64b604_fe0f540f908a493fbc785bad211774f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_c889ce7e527040ba971e0f30a1510f57~mv2.jpeg','https://static.wixstatic.com/media/64b604_b659f4932b1647b89e6ebd8eeb3ffa5b~mv2.jpeg','https://static.wixstatic.com/media/64b604_81496074fd2e4e369cb065f9388dd19e~mv2.jpeg','https://static.wixstatic.com/media/64b604_aade381e30de47389a03f18650b18686~mv2.jpeg','https://static.wixstatic.com/media/64b604_f4370a409240435593a6b827d59c360e~mv2.jpeg']
      },
      {
        address: '2923 Helen Pl NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_296278139a8949368e9d5bb5db702146~mv2.jpeg','https://static.wixstatic.com/media/64b604_054367b837d8455fbb6cd5bf7749d05c~mv2.jpeg','https://static.wixstatic.com/media/64b604_5140b5a114284d1dbad6e237972957ff~mv2.jpeg','https://static.wixstatic.com/media/64b604_7f080e1470a84cf2b4e97380ea515444~mv2.jpeg','https://static.wixstatic.com/media/64b604_41109bd30b724fb7998eb3735edeb774~mv2.jpeg','https://static.wixstatic.com/media/64b604_299fa1ee80a445609a5ed2451bacd558~mv2.jpeg','https://static.wixstatic.com/media/64b604_bea586d38112449fad4c5ec53b151ddd~mv2.jpeg','https://static.wixstatic.com/media/64b604_596c6c26f4e641e5979875b19c47b5b6~mv2.jpeg','https://static.wixstatic.com/media/64b604_582f360c952b4abb8bf7db78f902dae7~mv2.jpeg','https://static.wixstatic.com/media/64b604_08d73a3c6fb14da5a2922686347ec6bc~mv2.jpeg','https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg','https://static.wixstatic.com/media/64b604_78cf855c89d24155b74b3223c629f1da~mv2.jpeg','https://static.wixstatic.com/media/64b604_60c601e61541479ead7012753af1227b~mv2.jpeg','https://static.wixstatic.com/media/64b604_37852f0736344199aaf3f1bcfe208a2a~mv2.jpeg','https://static.wixstatic.com/media/64b604_7920b65b467346cc8ea0c9e0b8924f70~mv2.jpeg']
      },
      {
        address: '307 Bellflower Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/64b604_28a42e5cd1994e2a9d2c3c73d0cdbbf4~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_0f7be59ea6f6404d9993facda7f4bf56~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa41f41c304d407fb746142e781d74a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_24d8159ca79847e6b29019c6147c8361~mv2.jpeg','https://static.wixstatic.com/media/64b604_46d27b8f8ae742a3a8ffede925513281~mv2.jpeg','https://static.wixstatic.com/media/64b604_41fa6309ea914a0db241e8d0232ee6c0~mv2.jpeg','https://static.wixstatic.com/media/64b604_a1ec155490534718a58cabea27e85959~mv2.jpeg','https://static.wixstatic.com/media/64b604_59d6f2b98de84d1291461f03902e4668~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce72d6b8c30d4ad7adec8ae026b5c423~mv2.jpeg','https://static.wixstatic.com/media/64b604_11829af3dc624c2b96e53e9d8b76f732~mv2.jpeg','https://static.wixstatic.com/media/64b604_57b22e0b87b54f92ad87344fec65494e~mv2.jpeg','https://static.wixstatic.com/media/64b604_2b09c12635344d8eb3f20726cadcc416~mv2.jpeg','https://static.wixstatic.com/media/64b604_64341f46689f47f8b036a214bad02813~mv2.jpeg','https://static.wixstatic.com/media/64b604_3d05ff1703fe4131b56602f57f6a3846~mv2.jpeg','https://static.wixstatic.com/media/64b604_67d1162df55748898f0bd74acabd4f83~mv2.jpeg','https://static.wixstatic.com/media/64b604_358e87e9f268476f85d02a9ebed0a4ee~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa724bfdcbda4cc7a628394e98f872e3~mv2.jpeg','https://static.wixstatic.com/media/64b604_3843517fb0ac4df69b122df8465cf7f9~mv2.jpeg','https://static.wixstatic.com/media/64b604_fb0cc83f894944a98681c06cd5039ef1~mv2.jpeg','https://static.wixstatic.com/media/64b604_eed72c1637af44c2b596fe78c9e21732~mv2.jpeg','https://static.wixstatic.com/media/64b604_78356ee58e7a44b39cedbcee486aa5ec~mv2.jpeg','https://static.wixstatic.com/media/64b604_adc759c5f63d4e3d8ed352839df99ea4~mv2.jpeg']
      },
      {
        address: '2945 15th St NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_ab764bbc2bd341e593c144de14e3839a~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_d1f99b62c7134110a1ded73d93c35f2e~mv2.jpeg','https://static.wixstatic.com/media/64b604_aefb12adf7e3476594b2b1036b7da5b0~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f55fbc5917b46fcb76ebadd1e66b908~mv2.jpeg','https://static.wixstatic.com/media/64b604_2ec983e4267149408f1cd3ceaa975bf3~mv2.jpeg','https://static.wixstatic.com/media/64b604_bd6642cb0e9f403c9ca46cfc4ecbf40b~mv2.jpeg','https://static.wixstatic.com/media/64b604_e5a32dbdceef443ebde5a5722b0dbb59~mv2.jpeg','https://static.wixstatic.com/media/64b604_35df9b19480e439fb7ff7400eebfc13a~mv2.jpeg','https://static.wixstatic.com/media/64b604_00bb8704f44c4acca09ad2dfa9b8a595~mv2.jpeg','https://static.wixstatic.com/media/64b604_19e4e1868809406593cf43c0bf56c6ab~mv2.jpeg','https://static.wixstatic.com/media/64b604_ab764bbc2bd341e593c144de14e3839a~mv2.jpeg','https://static.wixstatic.com/media/64b604_65daebcaa239455291784a2d54c8bc8b~mv2.jpeg','https://static.wixstatic.com/media/64b604_12c060754bff4acfa5a5afaddb1bbe7b~mv2.jpeg','https://static.wixstatic.com/media/64b604_7d25a283113f4859bc16106de5c1be13~mv2.jpeg','https://static.wixstatic.com/media/64b604_f931d4b521c146ffb6834eb523601cc7~mv2.jpeg','https://static.wixstatic.com/media/64b604_ab0be4f474494d76b8a0db8541d5c809~mv2.jpeg','https://static.wixstatic.com/media/64b604_76977a7b003a4c46a476ee530faa1a5d~mv2.jpeg','https://static.wixstatic.com/media/64b604_75bbf0a444f4432cbb26722148f8b2b9~mv2.jpeg','https://static.wixstatic.com/media/64b604_a01b8ad2049a44dd9544cd716c515442~mv2.jpeg','https://static.wixstatic.com/media/64b604_495e3ee514ea4a7ab556f84f3e83f86c~mv2.jpeg','https://static.wixstatic.com/media/64b604_68fe67c2fd9e48cf991a5bcaec240c3d~mv2.jpeg','https://static.wixstatic.com/media/64b604_11f1f2ab80bb4b78afb5f6370bed4c41~mv2.jpeg']
      }
    ];

    var RENTS = {'635 Greenfield Ave SW':'$1,200','2923 Helen Pl NW':'$1,350','307 Bellflower Ave NW':'$1,375','2945 15th St NW':'$1,300'};

    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" />' +
        '</div><div class="prop-card__info">' +
        '<div class="prop-card__address">' + p.address + '</div>' +
        '<div class="prop-card__city">' + p.city + '</div>' +
        '<div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' +
        (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') +
        '<div class="prop-card__btn">View Property Images &rarr;</div>' +
        '</div></div>';
    }).join('');

    var MAP_DEFAULT = 'https://www.google.com/maps/d/embed?mid=1Fv0jQWfb6go-f-8YZuYooEYXx2xjvb4&ehbc=2E312F&noprof=1';

    var mapListHtml =
      '<div class="map-prop-item active" data-map-default="1">' +
      '<div class="map-prop-item__addr">All Properties</div>' +
      '<div class="map-prop-item__city">Portfolio Overview</div>' +
      '</div>' +
      PROPERTIES.map(function(p) {
        return '<div class="map-prop-item" data-map-addr="' + p.address + ', ' + p.city + '">' +
          '<div class="map-prop-item__addr">' + p.address + '</div>' +
          '<div class="map-prop-item__city">' + p.city + '</div>' +
          '</div>';
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

/* === FINANCIAL REPORTS SECTION === */
.reports-section{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 100%);padding:38px 28px;display:flex;justify-content:center;align-items:center}
.reports-section__inner{display:flex;flex-direction:column;align-items:center;gap:18px;width:100%;max-width:960px}
.reports-section__label{font-size:12px;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.45)}
.reports-section__btns{display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
.report-btn{padding:16px 28px;border:2px solid rgba(255,255,255,.22);border-radius:10px;background:rgba(255,255,255,.08);color:#fff;font-size:17px;font-weight:800;cursor:pointer;transition:all .2s;font-family:inherit;letter-spacing:.04em;display:inline-flex;align-items:center;gap:10px;white-space:nowrap}
.report-btn:hover{background:rgba(255,255,255,.17);border-color:rgba(255,255,255,.48);transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.28)}
.report-btn--gold{background:#c8962a;border-color:#c8962a}
.report-btn--gold:hover{background:#dba83a;border-color:#dba83a;transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.28)}
@media(max-width:620px){.reports-section__btns{flex-direction:column;align-items:center}.report-btn{width:280px;justify-content:center}}

/* === MAP SECTION === */
.map-wrap{background:#f5f7fa;padding:52px 0 12px}
.map-container{max-width:1200px;margin:0 auto;padding:0 24px}
.map-header__title{font-size:24px;font-weight:900;color:#0D1F35;text-transform:uppercase;letter-spacing:.08em;text-align:center;margin-bottom:10px}
.map-header__sub{font-size:15px;color:#5a6b85;font-style:italic;text-align:center;margin-bottom:30px;max-width:700px;margin-left:auto;margin-right:auto;line-height:1.6}
.map-layout{display:flex;border-radius:14px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.14);height:620px}
.map-list{width:232px;flex-shrink:0;background:#0a1628;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.15) transparent}
.map-list__hdr{font-size:10px;font-weight:900;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.35);padding:14px 16px 10px;border-bottom:1px solid rgba(255,255,255,.07)}
.map-prop-item{padding:13px 16px;cursor:pointer;border-left:3px solid transparent;transition:background .15s,border-color .15s;border-top:1px solid rgba(255,255,255,.04)}
.map-prop-item:hover,.map-prop-item.active{background:rgba(255,255,255,.07);border-left-color:#c8962a}
.map-prop-item__addr{font-size:13px;font-weight:700;color:#fff;line-height:1.3}
.map-prop-item__city{font-size:11px;color:rgba(255,255,255,.38);margin-top:2px}
.map-frame-wrap{flex:1;min-width:0}
.map-frame-wrap iframe{width:100%;height:100%;border:none;display:block}
@media(max-width:768px){.map-layout{flex-direction:column;height:auto}.map-list{width:100%;height:164px;display:flex;overflow-x:auto;overflow-y:hidden}.map-list__hdr{display:none}.map-prop-item{flex-shrink:0;min-width:140px;border-left:none;border-bottom:3px solid transparent;border-top:none;border-right:1px solid rgba(255,255,255,.06)}.map-prop-item:hover,.map-prop-item.active{border-bottom-color:#c8962a;border-left:none}.map-frame-wrap{height:480px}}

/* === WIDE P&L MODAL === */
.pl-modal__box--wide{max-width:900px}

/* === P&L CLASS TABLE (QuickBooks-style) === */
.pl-class-table{width:100%;border-collapse:collapse;font-size:13px;min-width:660px}
.pl-ct-hdr th{border-bottom:2px solid #e0e4ea;padding:9px 12px;white-space:nowrap}
.pl-ct-th-lbl{text-align:left;color:#5a6b85;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;min-width:200px}
.pl-ct-th-val{text-align:right;color:#0d1f35;font-size:12px;font-weight:700;min-width:105px}
.pl-ct-th-tot{color:#c8962a;border-bottom-color:#c8962a}
.pl-class-table tbody tr{border-bottom:1px solid #f0f4fa}
.pl-ct-section td{background:#d6e4f5;color:#0d1f35;font-size:12px;font-weight:800;padding:7px 14px;letter-spacing:.04em}
.pl-ct-group-hdr td{background:#eaf0f9;color:#0d1f35;font-size:12px;font-weight:700;padding:7px 22px}
.pl-ct-group td{background:#f5f8fc;font-weight:600}
.pl-ct-item td{background:#fff}
.pl-ct-subtotal td{background:#eaf0f9;font-weight:800}
.pl-ct-total td{background:#fff;font-weight:800}
.pl-ct-noi td{background:#0a1628;color:#fff;font-weight:900;border-bottom:none}
.pl-ct-noi .pl-ct-tot-col{color:#c8962a}
.pl-ct-lbl{padding:7px 14px;text-align:left;white-space:nowrap;color:#1a1a1a}
.pl-ct-ind{padding-left:32px!important}
.pl-ct-val{padding:7px 12px;text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;color:#1a1a1a}
.pl-ct-tot-col{font-weight:900}

/* === RENT ROLL TABLE === */
.rr-portfolio-badge{background:rgba(10,22,40,.06);border:1px solid rgba(10,22,40,.12);border-radius:7px;padding:9px 16px;font-size:13px;font-weight:800;color:#0a1628;text-align:center;margin-bottom:18px;letter-spacing:.04em}
.rr-table-wrap{overflow-x:auto}
.rr-table{width:100%;border-collapse:collapse;font-size:13.5px;min-width:400px}
.rr-table th{background:#0a1628;color:rgba(255,255,255,.75);padding:11px 16px;text-align:left;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:700}
.rr-table th:not(:first-child){text-align:right}
.rr-table td{padding:11px 16px;border-bottom:1px solid #e8eaed;color:#0d1f35}
.rr-table td:not(:first-child){text-align:right;font-variant-numeric:tabular-nums;font-weight:600}
.rr-table tbody tr:nth-child(even) td{background:#f5f7fa}
.rr-table tbody td:first-child{font-weight:700;color:#1a3557}
.rr-rent-val{color:#c8962a;font-weight:800}
.rr-table tfoot td{background:#0d1f35;color:#fff;font-weight:800;border-bottom:none;font-size:14px}
.rr-table tfoot td:not(:first-child){color:#c8962a;font-size:15px}
</style>
<header class="csh-hdr">
  <a href="/" class="csh-hdr__logo">
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/64b604_4ea6080e0e5c4c62892adb131d8d6c09~mv2.jpeg" alt="CSH Rentals"/>
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
  <div class="hero__badge">Portfolio 1 — McKinley Presidential Library</div>
  <h1 class="hero__title">Portfolio 1: McKinley Presidential Library &amp; Museum</h1>
  <p class="hero__sub">4 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
</section>

<section class="reports-section">
  <div class="reports-section__inner">
    <div class="reports-section__label">&#128202; Financial Reports</div>
    <div class="reports-section__btns">
      <button class="report-btn" type="button" data-report="pl-2024">&#128200;&nbsp; 2024 P&amp;L by Property</button>
      <button class="report-btn" type="button" data-report="pl-2025">&#128200;&nbsp; 2025 P&amp;L by Property</button>
      <button class="report-btn report-btn--gold" type="button" data-report="rent-roll">&#127968;&nbsp; Rent Roll</button>
    </div>
  </div>
</section>

<section class="map-wrap">
  <div class="map-container">
    <h2 class="map-header__title">Portfolio Map</h2>
    <p class="map-header__sub">Every portfolio is geographically tight, reducing travel time and management overhead.</p>
    <div class="map-layout">
      <div class="map-list">
        <div class="map-list__hdr">Properties</div>
        ${mapListHtml}
      </div>
      <div class="map-frame-wrap">
        <iframe id="portfolio-map" src="${MAP_DEFAULT}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</section>

<div class="section-head"><h2>Properties</h2><span>4 homes &middot; $5,225/mo &middot; $62,700 Annual</span></div>
<div class="prop-grid">${cardsHtml}</div>

<div id="pl-modal" class="pl-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="pl-modal__overlay" id="pl-modal-overlay"></div>
  <div class="pl-modal__box pl-modal__box--wide">
    <div class="pl-modal__head">
      <div class="pl-modal__title" id="pl-modal-title"></div>
      <div class="pl-modal__period" id="pl-modal-period"></div>
      <button class="pl-modal__close" id="pl-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="pl-modal__body" id="pl-modal-body"></div>
  </div>
</div>

<div id="rr-modal" class="pl-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="pl-modal__overlay" id="rr-modal-overlay"></div>
  <div class="pl-modal__box">
    <div class="pl-modal__head">
      <div class="pl-modal__title">Rent Roll</div>
      <div class="pl-modal__period">Portfolio 1 &mdash; McKinley Presidential Library &amp; Museum</div>
      <button class="pl-modal__close" id="rr-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="pl-modal__body" id="rr-modal-body"></div>
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
    var rrModal   = this.querySelector('#rr-modal');
    var rrClose   = this.querySelector('#rr-modal-close');
    var rrOverlay = this.querySelector('#rr-modal-overlay');
    var mapIframe = this.querySelector('#portfolio-map');

    var self = this;

    function openPLByProp(year) {
      var d = PL_TABLE[year];
      if (!d) return;
      plTitle.textContent = d.co;
      plPeriod.textContent = d.subtitle + '  |  ' + d.period;

      function fv(n, isDollarCol, forceShow) {
        var num = Number(n);
        if (isNaN(num)) return '';
        if (!forceShow && num === 0) return '';
        var abs = Math.abs(num);
        var s = abs.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        if (isDollarCol) s = '$' + s;
        return num < 0 ? '(' + s + ')' : s;
      }

      var nc = d.cols.length;
      var html = '<div style="overflow-x:auto"><table class="pl-class-table">';
      html += '<thead><tr class="pl-ct-hdr"><th class="pl-ct-th-lbl"></th>';
      d.cols.forEach(function(col, ci) {
        html += '<th class="pl-ct-th-val' + (ci === nc-1 ? ' pl-ct-th-tot' : '') + '">' + col + '</th>';
      });
      html += '</tr></thead><tbody>';

      d.rows.forEach(function(row) {
        var t = row.t, v = row.v || [];

        if (t === 'section') {
          html += '<tr class="pl-ct-section"><td colspan="' + (nc+1) + '">&#9660; ' + row.label + '</td></tr>';
          return;
        }
        if (t === 'group-hdr') {
          html += '<tr class="pl-ct-group-hdr"><td colspan="' + (nc+1) + '">&#9660; ' + row.label + '</td></tr>';
          return;
        }

        var isItem      = (t === 'item');
        var isSubtotal  = (t === 'subtotal');
        var isTotal     = (t === 'total');
        var isNoi       = (t === 'noi');
        var isGroup     = (t === 'group');
        var useForce    = isSubtotal || isTotal || isNoi || isGroup;
        var useDollarLastCol = isGroup || isSubtotal || isTotal || isNoi;

        var rowClass = isItem ? 'pl-ct-item' : isSubtotal ? 'pl-ct-subtotal' : isTotal ? 'pl-ct-total' : isNoi ? 'pl-ct-noi' : 'pl-ct-group';
        html += '<tr class="' + rowClass + '">';
        var lblClass = 'pl-ct-lbl' + (isItem || isSubtotal ? ' pl-ct-ind' : '');
        html += '<td class="' + lblClass + '">' + (isGroup ? '&#9660; ' : '') + row.label + '</td>';
        v.forEach(function(val, vi) {
          var lastCol = (vi === nc - 1);
          var useDollar = lastCol && useDollarLastCol;
          var cell = fv(val, useDollar, useForce);
          html += '<td class="pl-ct-val' + (lastCol ? ' pl-ct-tot-col' : '') + '">' + cell + '</td>';
        });
        html += '</tr>';
      });

      html += '</tbody></table></div>';
      plBody.innerHTML = html;
      plModal.style.display = 'flex';
    }

    function openRentRoll() {
      var rrBody = self.querySelector('#rr-modal-body');
      var html = '<div class="rr-portfolio-badge">Portfolio 1 &mdash; McKinley Presidential Library &amp; Museum</div>';
      html += '<div class="rr-table-wrap"><table class="rr-table"><thead><tr>';
      html += '<th>Property</th><th>Property Value</th><th>Monthly Rent</th><th>Annualized Rent</th>';
      html += '</tr></thead><tbody>';
      RENT_ROLL.forEach(function(r) {
        html += '<tr>';
        html += '<td>' + r.address + '</td>';
        html += '<td>' + fmt(r.value) + '</td>';
        html += '<td class="rr-rent-val">' + fmt(r.monthlyRent) + '</td>';
        html += '<td>' + fmt(r.annualizedRent) + '</td>';
        html += '</tr>';
      });
      html += '</tbody><tfoot><tr>';
      html += '<td>Portfolio 1 Total</td>';
      html += '<td>' + fmt(590000) + '</td>';
      html += '<td class="rr-rent-val">' + fmt(5225) + '</td>';
      html += '<td>' + fmt(62700) + '</td>';
      html += '</tr></tfoot></table></div>';
      rrBody.innerHTML = html;
      rrModal.style.display = 'flex';
    }

    function closePL() { plModal.style.display = 'none'; }
    function closeRR() { rrModal.style.display = 'none'; }

    if (plClose)   plClose.addEventListener('click', closePL);
    if (plOverlay) plOverlay.addEventListener('click', closePL);
    if (rrClose)   rrClose.addEventListener('click', closeRR);
    if (rrOverlay) rrOverlay.addEventListener('click', closeRR);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closePL(); closeRR(); }
    });

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';

    self.addEventListener('click', function(e) {
      var reportBtn = e.target.closest('.report-btn');
      if (reportBtn) {
        e.preventDefault(); e.stopPropagation();
        var report = reportBtn.dataset.report;
        if (report === 'pl-2024') openPLByProp('2024');
        else if (report === 'pl-2025') openPLByProp('2025');
        else if (report === 'rent-roll') openRentRoll();
        return;
      }

      var mapItem = e.target.closest('.map-prop-item');
      if (mapItem) {
        Array.from(self.querySelectorAll('.map-prop-item')).forEach(function(i) { i.classList.remove('active'); });
        mapItem.classList.add('active');
        if (mapItem.dataset.mapDefault) {
          mapIframe.src = MAP_DEFAULT;
        } else {
          mapIframe.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(mapItem.dataset.mapAddr) + '&z=17&output=embed';
        }
        return;
      }

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
