// @ts-nocheck
class CshHome extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#eef2f7;min-height:100vh';
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    var self = this;

    var INDIVIDUAL_PROPS = [
      {
        address: '5192 University Ave', city: 'Geneva, OH 44041', beds: 2, baths: 1,
        portfolio: 'Individual Properties',
        photos: [
          'https://static.wixstatic.com/media/64b604_0fdb97b825944fcab5668957f3e3c78f~mv2.png',
          'https://static.wixstatic.com/media/64b604_2977e61099b74dfd84efd15af03370dd~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_5ea751320b474ee7ae6edd69157491f6~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_872c7e3ac3a4428a8a448c5dd1c44f84~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_2006be719a834de78a375ebf855685f8~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_523186930e5946028762053d55f0b1ce~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_c9e73982d6194845ba795fbc4cdae945~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_3a6d2c1e80204c4280c3cd6a13f512a4~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_9e363d43d0494979a574fd7a3b50676b~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_b02b163940664a65bc84c530c5a81fee~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_eb52e4d9ca8c4c888db787b8bdc4f9aa~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_82857d6e4fbc4f2b9355f8c6e1c9b1ff~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_6c9032bdcab541ebb294afc300d33a36~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_59837074eef94f8cb4178fee18644d2e~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_9ad948fd9884401c9e4f8c3cf63b5561~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_6e4c5afca63b4bcfa615b2024f0e90b9~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_7bd280037fe54170b8f223bb94f71eb2~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_44500f8175af4d6f9bee682b7f92b69a~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_7c2a0ed587dd403fa9d7b56f9f4fda42~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_befebc2cee0b4ff182b564a4c4908f74~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_80213895d1a545278781ecfa3f429968~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_48e2d40c5a544c318c70a41ebe44d1b5~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_3d791034cc244baa9aa51bb3f18627de~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_f44f8fe96ad942f4936e7cd8ea7eb6e1~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_1f7b7fa232f84dcfb4ac8e25e76e78c4~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_0d8188dfec7f4112bdf81099b439cdfb~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_75503cda2c4b4ac3bb503c6a29d09021~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_420ffecd895f406c9996add2900ac594~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_ba563646acdb4cb9b2cb1599a152497a~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_eaf12081dc2842dda79c25ccb440e2be~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_a448fb7f2bd34e46beac4e3648c2b38f~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_797d5fa46d8048eb880628bf9001eff3~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_cc2c51e02bdc4e1792a1c0da6f05df58~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_ad936ad898894d4da3e0f2869270d6cb~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_137960f8786243cda8ef9ca304b9c62d~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_2a8ecc4e19134746af1ab14f59970fa8~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_49556e028ce444e2be2459758da9abf9~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_a484eaa371d640328dbf492c372f6626~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_07590b31ffaf4bf1adc085963702ee19~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_156e39fa2ad04095baa32268d27152a1~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_095aeb579c41403d9da39d94f5c8a633~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_47a02fc45a354c02824530f5029e11d5~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_e634b05a03684819b5bb8cac7bfcfbd4~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_733af89787244cd989e46f07dd800021~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_dc558fe1a1814bd7bceff2ed6d4eb878~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_8c7aedcac24b4499ad4abb6d47fff125~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_80cfa4a18f784c669b0caa9eacf5ce27~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_081d5304cd70482fa4e77d100ae80fca~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_212828865ce149c194111b2923bf474e~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_428a3b386b2843b2906627f2a512c352~mv2.jpeg'
        ]
      },
      {
        address: '903 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        portfolio: 'Individual Properties',
        photos: ['https://static.wixstatic.com/media/64b604_33ba492a11134da4bf528511adbc6375~mv2.png']
      }
    ];

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
csh-home{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;background:#eef2f7;color:#0d1f35;line-height:1.6}
:root{
  --bg:#eef2f7;--bg-alt:#e4ecf7;--card:#ffffff;
  --navy:#0d1f35;--navy-hdr:#0a1628;
  --gold:#c8962a;--gold-lt:#dba83a;--gold-dk:#a67820;
  --text:#0d1f35;--muted:#5a6b85;--faint:#8899bb;
  --border:rgba(10,30,60,.10);--border-g:rgba(200,150,42,.35);
  --shadow:0 2px 16px rgba(10,30,60,.08);
}

/* ── HEADER ── */
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 32px;display:flex;align-items:center;height:94px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:55px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase;line-height:1}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:12px 23px;font-size:14px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:var(--gold);border-color:var(--gold);color:#0a1628}
.csh-hdr__btn--gold:hover{background:var(--gold-lt);border-color:var(--gold-lt)}
.csh-hdr__email{width:47px;height:47px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:20px;transition:background .2s,border-color .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6)}
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

/* ── VIDEO HERO ── */
.hero-video{position:relative;width:100%;min-height:580px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hero-video video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.hero-video__overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,15,30,.42) 0%,rgba(5,15,30,.6) 60%,rgba(5,15,30,.82) 100%);z-index:1}
.hero-video__body{position:relative;z-index:2;text-align:center;padding:100px 24px 110px;max-width:840px}
.hero__eyebrow{display:inline-block;background:var(--gold);color:#fff;font-size:13px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:5px 18px;border-radius:20px;margin-bottom:26px}
.hero__title{font-size:clamp(38px,7.2vw,78px);font-weight:900;color:#fff;line-height:1.04;margin-bottom:20px;letter-spacing:-.025em}
.hero__sub{font-size:clamp(16px,2.2vw,20px);color:rgba(255,255,255,.78);line-height:1.7;max-width:620px;margin:0 auto}
@media(max-width:600px){.hero-video{min-height:460px}.hero-video__body{padding:70px 20px 80px}}

/* ── SECTION SHARED ── */
.sec{padding:72px 40px}
@media(max-width:768px){.sec{padding:48px 20px}}
.wrap{max-width:1500px;margin:0 auto}
.sec-lbl{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.sec-h2{font-size:clamp(26px,3.6vw,43px);font-weight:800;color:var(--navy);line-height:1.12;letter-spacing:-.02em;margin-bottom:12px}
.sec-sub{font-size:17px;color:var(--muted);line-height:1.8}
.divbar{width:44px;height:3px;background:var(--gold);margin-bottom:22px}

/* ── INTRO ── */
.intro{background:var(--card);padding:64px 40px 60px;border-bottom:1px solid var(--border)}
.intro__wrap{max-width:1200px;margin:0 auto}
.intro__tag{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);border:1px solid var(--border-g);padding:5px 16px;border-radius:20px;margin-bottom:24px}
.intro__h1{font-size:clamp(28px,4.8vw,48px);font-weight:900;color:var(--navy);line-height:1.1;letter-spacing:-.02em;margin-bottom:22px}
.intro__desc{font-size:17px;color:var(--muted);line-height:1.9;margin-bottom:14px}
.intro__desc+.intro__desc{margin-bottom:36px}
.highlights-hdr{font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:16px}
.highlights-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
@media(max-width:980px){.highlights-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.highlights-grid{grid-template-columns:1fr}}
.hl-item{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:16px 12px;text-align:center;transition:box-shadow .2s,border-color .2s,background .2s}
.hl-item:hover{box-shadow:0 4px 16px rgba(10,30,60,.1);border-color:var(--border-g);background:#fff}
.hl-item__emoji{font-size:22px;margin-bottom:8px;display:block}
.hl-item__text{font-size:12px;font-weight:700;color:var(--navy);line-height:1.45}

/* ── OVERVIEW MAP ── */
.map-overview{background:var(--bg-alt);padding:60px 40px;border-top:1px solid var(--border)}
@media(max-width:768px){.map-overview{padding:44px 20px}}
.map-overview__wrap{max-width:1500px;margin:0 auto}
.map-responsive{position:relative;width:100%;padding-bottom:52%;height:0;border-radius:14px;overflow:hidden;box-shadow:0 4px 28px rgba(10,30,60,.14);border:2px solid var(--border-g);margin-top:30px}
.map-responsive iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}
@media(max-width:600px){.map-responsive{padding-bottom:110%}}
.map-legend{display:flex;flex-wrap:wrap;gap:8px 24px;margin-bottom:16px;padding:12px 20px;background:#fff;border-radius:10px;border:1px solid var(--border);box-shadow:var(--shadow)}
.map-legend__item{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--navy);white-space:nowrap}
.map-legend__pin{width:13px;height:13px;border-radius:50%;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,.25)}

/* ── PORTFOLIO GRID ── */
.p-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:44px}
@media(max-width:900px){.p-grid{grid-template-columns:1fr}}

/* Portfolio card — top/mid/bottom panels */
.p-card{border-radius:14px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 4px 24px rgba(10,30,60,.14);transition:box-shadow .25s,transform .25s;cursor:pointer;background:#fff;border:1px solid var(--border)}
.p-card:hover{box-shadow:0 10px 36px rgba(10,30,60,.2);transform:translateY(-3px)}
.p-card--individual{border:2px solid var(--border-g)}
.p-card__img{width:100%;height:260px;object-fit:cover;object-position:top;display:block}
.p-card__body{padding:22px 24px 26px}
.p-card__actions{margin-top:22px}

/* Top white panel */
.p-card__top{background:#fff;padding:22px 24px 18px;border-bottom:1px solid var(--border)}
.p-card__badge{display:inline-block;font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;background:var(--navy);color:#fff;padding:4px 10px;border-radius:4px;width:fit-content;margin-bottom:10px}
.p-card__badge--prem{background:linear-gradient(135deg,var(--gold),var(--gold-lt));color:#0a1628}
.p-card__title{font-size:22px;font-weight:900;color:var(--navy);line-height:1.2;margin-bottom:4px;letter-spacing:-.01em}
.p-card__count{font-size:13px;color:var(--muted);font-weight:500}

/* Middle image panel */
.p-card__mid{position:relative;height:220px;background-size:cover;background-position:center;flex-shrink:0}
.p-card__mid-overlay{position:absolute;inset:0;background:rgba(5,15,30,.45)}
.p-card__mid-btns{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:12px;padding:0 20px}
.p-map-view{display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:rgba(255,255,255,.15);border:1.5px solid rgba(255,255,255,.55);border-radius:7px;color:#fff;font-size:13px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;backdrop-filter:blur(4px);white-space:nowrap;cursor:pointer;transition:background .2s,border-color .2s}
.p-map-view:hover{background:rgba(255,255,255,.25);border-color:#fff}
.p-cta{display:inline-flex;align-items:center;padding:10px 20px;background:var(--gold);color:#0a1628;text-align:center;font-size:13px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;border:none;border-radius:7px;cursor:pointer;text-decoration:none;transition:background .2s;white-space:nowrap}
.p-cta:hover{background:var(--gold-lt)}

/* Bottom white panel */
.p-card__bot{background:#fff;padding:18px 24px 22px;border-top:1px solid var(--border)}
.p-stats{display:grid;grid-template-columns:1fr 1fr;gap:0}
.p-stat{padding:4px 0}
.p-stat+.p-stat{border-left:1px solid var(--border);padding-left:20px}
.p-stat__label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:5px}
.p-stat__value{font-size:20px;font-weight:900;color:var(--navy);letter-spacing:-.01em;line-height:1.1}
.p-stat__value--gold{color:var(--gold)}

/* ── INDIVIDUAL SECTION ── */
.individual-section{background:var(--bg-alt);border-top:3px solid var(--border-g);padding:64px 40px}
@media(max-width:768px){.individual-section{padding:44px 20px}}
.individual-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,520px));gap:28px;margin-top:36px}
@media(max-width:600px){.individual-grid{grid-template-columns:1fr}}


/* ── WHY CANTON ── */
.wc-tagline{font-size:19px;color:var(--muted);line-height:1.8;text-align:center;max-width:700px;margin:16px auto 44px;font-style:italic}
.wc-features{display:flex;flex-direction:column;gap:28px}
.wc-feature{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:36px 40px;box-shadow:var(--shadow);transition:box-shadow .2s}
.wc-feature:hover{box-shadow:0 4px 24px rgba(10,30,60,.12)}
.wc-feature__row{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:start}
.wc-feature__title{font-size:clamp(24px,3vw,31px);font-weight:800;color:var(--navy);line-height:1.2;margin-bottom:14px}
.wc-feature__desc{font-size:17px;color:var(--muted);line-height:1.8;margin-bottom:16px}
.wc-feature__list{list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:20px}
.wc-feature__list li{font-size:16px;color:var(--muted);padding-left:18px;position:relative;line-height:1.6}
.wc-feature__list li::before{content:'•';position:absolute;left:0;color:var(--gold);font-weight:900;font-size:15px;line-height:1.3}
.wc-feature__list li strong{color:var(--navy)}
.wc-hi{display:inline-block;font-size:14px;font-weight:800;letter-spacing:.03em;color:var(--gold);background:rgba(200,150,42,.08);border:1.5px solid var(--border-g);border-radius:6px;padding:7px 16px;margin-top:4px}
.wc-imgs{display:flex;flex-direction:column;gap:10px}
.wc-imgs img{width:100%;height:185px;object-fit:cover;border-radius:8px;display:block;box-shadow:0 2px 10px rgba(10,30,60,.09)}
.wc-imgs-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.wc-imgs-row img{width:100%;height:165px;object-fit:cover;border-radius:8px;display:block;box-shadow:0 2px 10px rgba(10,30,60,.09)}
.wc-img-wide{width:100%;height:200px;object-fit:cover;border-radius:8px;display:block;box-shadow:0 2px 10px rgba(10,30,60,.09);margin-top:16px}
.wc-close{margin-top:40px;background:linear-gradient(135deg,#0a1628,#0d2545);border:1px solid var(--border-g);border-radius:12px;padding:32px 36px;text-align:center}
.wc-close__val{font-size:clamp(26px,3.6vw,41px);font-weight:900;color:var(--gold);letter-spacing:-.02em;margin-bottom:10px}
.wc-close__txt{font-size:17px;color:rgba(255,255,255,.7);line-height:1.75;max-width:600px;margin:0 auto}
@media(max-width:768px){.wc-feature{padding:22px 18px}.wc-feature__row{grid-template-columns:1fr}.wc-close{padding:24px 20px}}

/* ── CTA STRIP ── */
.cta-strip{background:#0a1628;padding:32px 40px;text-align:center;border-top:1px solid rgba(255,255,255,.06)}
.cta-strip__inner{max-width:640px;margin:0 auto}
.cta-strip__text{font-size:17px;color:rgba(255,255,255,.65);margin-bottom:16px;line-height:1.6}
.cta-contact-btn{display:inline-block;padding:13px 36px;background:var(--gold);color:#0a1628;font-size:14px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;border-radius:7px;text-decoration:none;transition:background .2s}
.cta-contact-btn:hover{background:var(--gold-lt)}


/* ── FOOTER ── */
.footer{background:#0a1628;border-top:1px solid rgba(255,255,255,.08);padding:24px 40px;text-align:center;font-size:14px;color:rgba(255,255,255,.45)}
</style>

<!-- ══ HEADER ══ -->
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

<!-- ══ VIDEO HERO ══ -->
<section class="hero-video">
  <video autoplay muted loop playsinline preload="auto">
    <source src="https://video.wixstatic.com/video/64b604_4da27ce3fcc34154b9300c106a370079/720p/mp4/file.mp4" type="video/mp4"/>
  </video>
  <div class="hero-video__overlay"></div>
  <div class="hero-video__body">
    <span class="hero__eyebrow">Canton, Ohio &middot; CSH Rentals</span>
    <h1 class="hero__title">Quality Rentals.<br/>Proven Portfolio.</h1>
    <p class="hero__sub">46 professionally managed rental homes across Stark County, Ohio &mdash; organized into 4 geographically concentrated investment portfolios with proven cash flow.</p>
  </div>
</section>

<!-- ══ INTRO ══ -->
<section class="intro">
  <div class="intro__wrap">
    <div class="intro__tag">Investment Opportunity &middot; Stark County, Ohio</div>
    <h1 class="intro__h1">Investment Opportunities in Stark County, Ohio</h1>
    <p class="intro__desc">Most Northeast Ohio rental portfolios are built around one thing: maximizing rent from aging properties.</p>
    <p class="intro__desc">This opportunity is different.</p>
    <p class="intro__desc">Over the last 15 years, we have carefully assembled and renovated a collection of homes located in some of Canton&rsquo;s most desirable neighborhoods. Rather than chasing the highest immediate cash flow, we focused on acquiring properties in areas with strong long-term appreciation potential and then invested heavily to restore them to a standard rarely found in Midwest rental portfolios.</p>
    <p class="intro__desc">The result is a collection of professionally managed homes that generate attractive income today while offering meaningful upside through future appreciation. These are not tired rentals in marginal locations. They are quality homes in established neighborhoods that tenants are proud to call home and investors can confidently own.</p>
    <p class="intro__desc">To create flexibility for investors, the portfolio has been organized into four geographically concentrated investment portfolios, each offering operational efficiencies and simplified management. In addition, two premium properties are available for individual acquisition.</p>
    <p class="intro__desc">Whether your goal is dependable cash flow, long-term appreciation, or a combination of both, this is a rare opportunity to acquire renovated, income-producing homes in some of Stark County&rsquo;s most established rental markets.</p>
  </div>
</section>

<!-- ══ OVERVIEW MAP ══ -->
<section class="map-overview">
  <div class="map-overview__wrap">
    <div class="sec-lbl">Geographic Distribution</div>
    <h2 class="sec-h2">4 Investment Portfolios &amp; 2 Individual Properties</h2>
    <div class="divbar"></div>
    <p class="sec-sub">Every portfolio is geographically tight, reducing travel time and management overhead. All properties sit within close proximity to major employment, healthcare, and education anchors.</p>
    <div class="map-legend">
      <div class="map-legend__item"><span class="map-legend__pin" style="background:#e8a900"></span>Portfolio 1 &mdash; Malone / HoF Area 1</div>
      <div class="map-legend__item"><span class="map-legend__pin" style="background:#e05b00"></span>Portfolio 2 &mdash; Malone / HoF Area 2</div>
      <div class="map-legend__item"><span class="map-legend__pin" style="background:#1a8c35"></span>Portfolio 3 &mdash; Colonial Heights</div>
      <div class="map-legend__item"><span class="map-legend__pin" style="background:#9c27b0"></span>Portfolio 4 &mdash; Higher Value Portfolio</div>
      <div class="map-legend__item"><span class="map-legend__pin" style="background:#1a3557"></span>Premium Individual Properties</div>
    </div>
    <div class="map-responsive">
      <iframe src="https://www.google.com/maps/d/embed?mid=1-UjOFoDqjCvel-Hh8xbCvZUu4CTQLeI&ehbc=2E312F" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>
</section>

<!-- ══ 4 INVESTMENT PORTFOLIOS ══ -->
<section class="sec" id="portfolios" style="background:var(--bg)">
  <div class="wrap">
    <div class="sec-lbl">Investor Portfolios</div>
    <h2 class="sec-h2">4 Investment Portfolios</h2>
    <div class="divbar"></div>
    <p class="sec-sub">Each portfolio is a geographically tight cluster, professionally managed, and available independently or as part of a bulk acquisition.</p>

    <div class="p-grid">

      <!-- ─ PORTFOLIO 1 ─ -->
      <div class="p-card" data-href="/portfolio-northwest">
        <div class="p-card__top">
          <div class="p-card__badge">Portfolio 1</div>
          <div class="p-card__title">Malone University / Pro Football Hall of Fame Area 1</div>
          <div class="p-card__count">16 Properties</div>
        </div>
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/64b604_e54c155ba0154360b5f6da668c16b252~mv2.jpeg')">
          <div class="p-card__mid-overlay"></div>
          <div class="p-card__mid-btns">
            <span class="p-map-view">&#128205; Map View</span>
            <a class="p-cta" href="/portfolio-northwest">View Portfolio &rarr;</a>
          </div>
        </div>
        <div class="p-card__bot">
          <div class="p-stats">
            <div class="p-stat">
              <div class="p-stat__label">Annual Rent</div>
              <div class="p-stat__value p-stat__value--gold">$241,680</div>
            </div>
            <div class="p-stat">
              <div class="p-stat__label">Portfolio Value</div>
              <div class="p-stat__value">$2,235,000</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─ PORTFOLIO 2 ─ -->
      <div class="p-card" data-href="/portfolio-central">
        <div class="p-card__top">
          <div class="p-card__badge">Portfolio 2</div>
          <div class="p-card__title">Malone University / Pro Football Hall of Fame Area 2</div>
          <div class="p-card__count">11 Properties</div>
        </div>
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/64b604_6d787ec44dd14bb5820d300ba95679dd~mv2.jpeg')">
          <div class="p-card__mid-overlay"></div>
          <div class="p-card__mid-btns">
            <span class="p-map-view">&#128205; Map View</span>
            <a class="p-cta" href="/portfolio-central">View Portfolio &rarr;</a>
          </div>
        </div>
        <div class="p-card__bot">
          <div class="p-stats">
            <div class="p-stat">
              <div class="p-stat__label">Annual Rent</div>
              <div class="p-stat__value p-stat__value--gold">$171,420</div>
            </div>
            <div class="p-stat">
              <div class="p-stat__label">Portfolio Value</div>
              <div class="p-stat__value">$1,552,900</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─ PORTFOLIO 3 ─ -->
      <div class="p-card" data-href="/portfolio-northeast">
        <div class="p-card__top">
          <div class="p-card__badge">Portfolio 3</div>
          <div class="p-card__title">Colonial Heights</div>
          <div class="p-card__count">11 Properties</div>
        </div>
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/64b604_4205f0e960d94555857430409d7a840d~mv2.jpeg')">
          <div class="p-card__mid-overlay"></div>
          <div class="p-card__mid-btns">
            <span class="p-map-view">&#128205; Map View</span>
            <a class="p-cta" href="/portfolio-northeast">View Portfolio &rarr;</a>
          </div>
        </div>
        <div class="p-card__bot">
          <div class="p-stats">
            <div class="p-stat">
              <div class="p-stat__label">Annual Rent</div>
              <div class="p-stat__value p-stat__value--gold">$187,860</div>
            </div>
            <div class="p-stat">
              <div class="p-stat__label">Portfolio Value</div>
              <div class="p-stat__value">$1,716,000</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─ PORTFOLIO 4 ─ -->
      <div class="p-card" data-href="/portfolio-highend">
        <div class="p-card__top">
          <div class="p-card__badge">Portfolio 4</div>
          <div class="p-card__title">Higher Value Portfolio</div>
          <div class="p-card__count">6 Properties</div>
        </div>
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/64b604_8fa8e45f055b4c67b1f87daba6780dd6~mv2.jpeg')">
          <div class="p-card__mid-overlay"></div>
          <div class="p-card__mid-btns">
            <span class="p-map-view">&#128205; Map View</span>
            <a class="p-cta" href="/portfolio-highend">View Portfolio &rarr;</a>
          </div>
        </div>
        <div class="p-card__bot">
          <div class="p-stats">
            <div class="p-stat">
              <div class="p-stat__label">Annual Rent</div>
              <div class="p-stat__value p-stat__value--gold">$132,840</div>
            </div>
            <div class="p-stat">
              <div class="p-stat__label">Portfolio Value</div>
              <div class="p-stat__value">$1,180,300</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ INDIVIDUAL PROPERTIES ══ -->
<section class="individual-section" id="individual">
  <div class="wrap">
    <div class="sec-lbl">Individual Acquisition</div>
    <h2 class="sec-h2">Individual Investment Properties</h2>
    <div class="divbar"></div>
    <p class="sec-sub">2 premium properties available for individual acquisition &mdash; each positioned within established rental markets with strong income potential.</p>
    <div class="individual-grid">

      <!-- ─ 5192 University Ave ─ -->
      <div class="p-card p-card--individual" data-prop-idx="0">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_0fdb97b825944fcab5668957f3e3c78f~mv2.png" alt="5192 University Ave"/>
        <div class="p-card__body">
          <div class="p-card__badge p-card__badge--prem">&#11088; STR &nbsp;&middot;&nbsp; Individual</div>
          <div class="p-card__title">5192 University Ave</div>
          <div class="p-card__count">Geneva, OH 44041 &nbsp;&middot;&nbsp; 2 bd &nbsp;&middot;&nbsp; 1 ba</div>
          <div class="p-stats" style="margin-top:16px">
            <div class="p-stat">
              <div class="p-stat__label">Annual Rent</div>
              <div class="p-stat__value p-stat__value--gold" style="font-size:14px;line-height:1.35">Short-Term<br/>Rental</div>
            </div>
            <div class="p-stat">
              <div class="p-stat__label">Est. Value</div>
              <div class="p-stat__value">$280,000</div>
            </div>
          </div>
          <div class="p-card__actions">
            <button class="p-cta">View Property Images &rarr;</button>
          </div>
        </div>
      </div>

      <!-- ─ 903 23rd St NW ─ -->
      <div class="p-card p-card--individual" data-prop-idx="1">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_33ba492a11134da4bf528511adbc6375~mv2.png" alt="903 23rd St NW"/>
        <div class="p-card__body">
          <div class="p-card__badge p-card__badge--prem">&#11088; Individual</div>
          <div class="p-card__title">903 23rd St NW</div>
          <div class="p-card__count">Canton, OH 44709 &nbsp;&middot;&nbsp; 3 bd &nbsp;&middot;&nbsp; 1 ba</div>
          <div class="p-stats" style="margin-top:16px">
            <div class="p-stat">
              <div class="p-stat__label">Annual Rent</div>
              <div class="p-stat__value p-stat__value--gold">$17,100/yr</div>
            </div>
            <div class="p-stat">
              <div class="p-stat__label">Est. Value</div>
              <div class="p-stat__value">$135,000</div>
            </div>
          </div>
          <div class="p-card__actions">
            <button class="p-cta">View Property Images &rarr;</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ CONTACT CTA ══ -->
<div class="cta-strip">
  <div class="cta-strip__inner">
    <p class="cta-strip__text">Ready to explore a portfolio acquisition? Reach out and we&rsquo;ll walk you through the numbers.</p>
    <a class="cta-contact-btn" href="/contact">Inquire About a Portfolio &rarr;</a>
  </div>
</div>

<!-- ══ WHY CANTON ══ -->
<section class="sec" id="why-canton" style="background:var(--bg);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Market Fundamentals</div>
    <h2 class="sec-h2">Why Canton, Ohio</h2>
    <div class="divbar"></div>
    <p class="wc-tagline">All properties are within 5 miles of some of the greatest attractions northeastern Ohio has to offer&hellip;</p>

    <div class="wc-features">
      <div class="wc-feature">
        <div class="wc-feature__row">
          <div>
            <div class="wc-feature__title">Pro Football Hall of Fame Village</div>
            <p class="wc-feature__desc">The Pro Football Hall of Fame Village is a transformative multi-phase development reshaping Canton&rsquo;s economic landscape and drawing visitors year-round from across the country.</p>
            <ul class="wc-feature__list">
              <li>Will create hundreds of service industry jobs</li>
              <li>Shopping, restaurants, gaming, waterpark, and hotel</li>
            </ul>
            <span class="wc-hi">ALL HOMES WITHIN 2 MILES OF THE VILLAGE</span>
          </div>
          <div class="wc-imgs">
            <img src="https://static.wixstatic.com/media/64b604_7bd172f47c5e4eb5b44adf0f6a417ffc~mv2.jpeg" alt="Hall of Fame Village render"/>
            <img src="https://static.wixstatic.com/media/64b604_150af085b1024681984084f74ed2ed18~mv2.jpeg" alt="Hall of Fame Village aerial"/>
          </div>
        </div>
        <img class="wc-img-wide" src="https://static.wixstatic.com/media/64b604_86c217171bd442aab125c865cc5114e6~mv2.jpeg" alt="Hall of Fame Village site map"/>
      </div>

      <div class="wc-feature">
        <div class="wc-feature__row">
          <div>
            <div class="wc-feature__title">Two State-of-the-Art Hospitals</div>
            <p class="wc-feature__desc">Both Cleveland Clinic Mercy Hospital and Aultman Hospital are within just 5 miles of all homes. These are destination healthcare facilities drawing employees from over an hour away.</p>
            <ul class="wc-feature__list">
              <li>Both hospitals are desired by people from over an hour away looking to work here</li>
              <li>Multiple colleges and universities nearby provide a steady stream of incoming healthcare workers for the area</li>
              <li>Opens up the opportunity for short-term rentals &mdash; a large volume of traveling nurses work here throughout the year</li>
              <li>Between both hospitals they provide a combined 10,000 employees</li>
            </ul>
            <span class="wc-hi">10,000 Combined Employees</span>
          </div>
          <div class="wc-imgs">
            <img src="https://static.wixstatic.com/media/64b604_0f42533432c64b84adbdfbda61fcc7e7~mv2.jpeg" alt="Cleveland Clinic Mercy Hospital"/>
            <img src="https://static.wixstatic.com/media/64b604_aefb223caed54067a974d9211b05bbcf~mv2.jpeg" alt="Aultman Hospital"/>
          </div>
        </div>
      </div>

      <div class="wc-feature">
        <div class="wc-feature__row">
          <div>
            <div class="wc-feature__title">Flow of Educational Traffic</div>
            <p class="wc-feature__desc">Canton is home to four colleges and universities, each generating consistent demand for housing from students, faculty, and post-graduates every year.</p>
            <ul class="wc-feature__list">
              <li><strong>Malone University</strong> &mdash; NCAA Division 2</li>
              <li><strong>Walsh University</strong> &mdash; NCAA Division 2</li>
              <li><strong>Kent State University, Stark County Campus</strong> &mdash; NCAA Division 1 branch campus</li>
              <li><strong>Stark State College</strong> &mdash; Technical and professional programs</li>
              <li>Growing need for college housing and post-graduate living</li>
            </ul>
          </div>
          <div class="wc-imgs">
            <img src="https://static.wixstatic.com/media/64b604_9ee44dbc31dd4d6d851071343ea0fa94~mv2.jpeg" alt="Stark State College"/>
            <img src="https://static.wixstatic.com/media/64b604_83b3ef79823b4e7f8158277f28688173~mv2.jpeg" alt="Walsh University Campus Center"/>
          </div>
        </div>
        <div class="wc-imgs-row">
          <img src="https://static.wixstatic.com/media/64b604_b071b082c3314191a292bd349728b657~mv2.jpeg" alt="Malone University"/>
          <img src="https://static.wixstatic.com/media/64b604_8647dc6c7d76437f8fd6de4abfa89923~mv2.jpeg" alt="Malone University sign"/>
        </div>
      </div>

      <div class="wc-feature">
        <div class="wc-feature__row">
          <div class="wc-imgs">
            <img src="https://static.wixstatic.com/media/64b604_79080b90eb064804b8c16f4d1b927e1c~mv2.png" alt="Amazon fulfillment sign"/>
            <img src="https://static.wixstatic.com/media/64b604_69c099cebb7b4a43a90ddf4d92ea3465~mv2.jpeg" alt="Amazon distribution interior"/>
          </div>
          <div>
            <div class="wc-feature__title">Amazon Distribution Center</div>
            <p class="wc-feature__desc">The Amazon distribution center is just a few miles away from all properties. Amazon warehouses provide a consistent, low-variance anchor of tenant demand.</p>
            <ul class="wc-feature__list">
              <li>Service workers are primarily renters</li>
              <li>The center created and maintains over 1,000 employees at one time</li>
              <li>Also located near the Hall of Fame Village</li>
            </ul>
            <span class="wc-hi">1,000+ Employees</span>
          </div>
        </div>
      </div>

      <div class="wc-feature">
        <div class="wc-feature__row">
          <div>
            <div class="wc-feature__title">Belden Village Shopping District</div>
            <p class="wc-feature__desc">The Belden Village shopping area is one of the most densely populated areas of restaurants and shopping in all of Ohio, creating a long-term supply of service workers who need to rent.</p>
            <ul class="wc-feature__list">
              <li>Over 80 retail shops</li>
              <li>Over 90 restaurants and eateries within a 5-mile radius, including Gervasi Vineyard</li>
              <li>An ever-growing need for service workers creating a long-term supply of people needing to rent</li>
            </ul>
            <span class="wc-hi">80+ Shops &nbsp;&middot;&nbsp; 90+ Restaurants</span>
          </div>
          <div class="wc-imgs">
            <img src="https://static.wixstatic.com/media/64b604_be845510679b49f29054081aaa6680a9~mv2.jpeg" alt="Belden Village Mall"/>
            <img src="https://static.wixstatic.com/media/64b604_2a5a7c9bc51e4ff297c20073da36fa62~mv2.jpeg" alt="Belden Village Shopping"/>
          </div>
        </div>
      </div>
    </div>

    <div class="wc-close">
      <div class="wc-close__val">And Everything is Within 8 Miles of All Properties</div>
      <div class="wc-close__txt">Every single property in this portfolio sits within 8 miles of all five demand drivers above &mdash; a concentration of employment, education, healthcare, retail, and entertainment that is impossible to replicate at this price point in Northeast Ohio.</div>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  &copy; 2025 CSH Rentals &nbsp;&middot;&nbsp; 1428 Market Ave. N., Canton, OH 44714 &nbsp;&middot;&nbsp; scottprivate@tagplanning.com
</footer>
`;

    // ── Hamburger ──
    var burger = self.querySelector('#csh-burger');
    var mobNav = self.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // ── Navigation & Card Clicks ──
    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';

    self.addEventListener('click', function(e) {
      var card = e.target.closest('.p-card');
      if (card) {
        var propIdx = card.dataset.propIdx;
        if (propIdx !== undefined) {
          // Individual property card (any click, including button)
          e.preventDefault(); e.stopPropagation();
          var p = INDIVIDUAL_PROPS[parseInt(propIdx, 10)];
          try { localStorage.setItem('csh_prop', JSON.stringify({address: p.address, city: p.city, portfolio: p.portfolio, beds: p.beds, baths: p.baths, photos: p.photos})); } catch(err) {}
          window.location.assign(window.location.origin + _b + '/property-detail');
          return;
        }
        // Portfolio card click → navigate (skip if clicking the CTA link)
        if (!e.target.closest('.p-cta')) {
          var cardHref = card.dataset.href;
          if (cardHref) {
            e.preventDefault(); e.stopPropagation();
            window.location.assign(window.location.origin + _b + cardHref);
            return;
          }
        }
      }

      // Regular anchor links
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault(); e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
  }
}
customElements.define('csh-home', CshHome);
