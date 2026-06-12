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
          'https://static.wixstatic.com/media/d9828b_b54105f8c7654bddb2b98a8c32c498a9~mv2.png',
          'https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_46a3231b3f6d489bb78c54dcebcec48e~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_6e5e64f327b943cbb61c9d41bd5cbee8~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_164e128a8f8c4de0a68646f0911fae09~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2bcaeb3dfcee4ac09e02c5ef2b9fc41d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c6daf260ec0348d588816030ac681297~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_544633d33bb641ad9c0ffa241ecac34c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a2c5527cb00c4a19bd5ce79edec4b317~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4d15ba9cccbc419eb7ce6b77d634fcb9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_13451ed4cda542c1a8f48287b551b930~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_a9cddaf95ec7495e833083d74541f3ed~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1fc67972d1d84efb9e044a5abc0e9dc9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b74c87ba04534f4cbe2df8f9c403efb5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d725968b79854ca9a0fa2624f9061eac~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_24a477c321b7429eabcebd9342809140~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_d78e16091412484bb05e39908fdba977~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4ce97538ba0d46a19f1ad781e86584a9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1e080b62ad954b2685be55165ccc5450~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_b12cf036b893427198646967b1a20285~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f8f0a11cb1c7467fa8dc8331962c0a88~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_72f0431cf10b4593b579924de6b36c34~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9625b1b5eb004118b087c1453eabf856~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f85cca70e73f454c81e114a01400a535~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c0111508ee804ea1ad3fbcfe690b95c6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_10b0b23bc159436dac64204e2a2e02bf~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_88702235d5204eb8a2062465eceac5f9~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2d0bc00fa92c4aa4aa4bb1a3bab6a374~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f9c9eedec21d4955b9423bde9c4dcaa0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_3518999290d0444dac4b4337738e20e0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_2bd8cae06dfa4e2f9b1c4b454bcbeb8f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_ccaf87b6733f476e81372e810e924a4b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c54592dea6684f10bed556f353837a6f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4916395697d64c599fc610663bc68a48~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_55f76086a9aa4ab3ab72c0e03c0eb5fb~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_45740064921c4ec88df2219008df6eda~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_267a37a567a54dc283a11cf9da243555~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_6f31da0b77a546b78addf3917fe24ac5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_8f277d048e404f0a818d4e257de8cd1a~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4f98d257421640a4b9c771d859eab93e~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_e73a21e2ec4c4dc9917cd65a8d3bb62b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_74162ffc3e8b431c8b14254aee25ef71~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f9b9250c154d451b8f1dbdccd42f062c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_4d3bfddd5b4741adbd7396696e7d0a9a~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_7147464688fc42de96d874c72a167c6f~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c59158f9271c4497a3024de73b44c9ff~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_8560fb4ea56c4b25b8551220f8b67ba5~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_e6bac556c9184109a493e123efae98fa~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_795f15ea9c2442dfbd16bf06c1f743d0~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_464d877f650d4a1eb025cecd0e66c08d~mv2.jpg'
        ]
      },
      {
        address: '903 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        portfolio: 'Individual Properties',
        photos: ['https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png']
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
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>
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
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg')">
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
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/d9828b_9a2dd8d6ab744124b24a5874644e9226~mv2.jpg')">
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
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg')">
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
        <div class="p-card__mid" style="background-image:url('https://static.wixstatic.com/media/d9828b_3821574328f3405195c69f761eb602e5~mv2.jpg')">
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
        <img class="p-card__img" src="https://static.wixstatic.com/media/d9828b_b54105f8c7654bddb2b98a8c32c498a9~mv2.png" alt="5192 University Ave"/>
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
        <img class="p-card__img" src="https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png" alt="903 23rd St NW"/>
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
            <img src="https://static.wixstatic.com/media/d9828b_73a402f4b5bc40cf8d3f9e89eee05f43~mv2.jpg" alt="Hall of Fame Village render"/>
            <img src="https://static.wixstatic.com/media/d9828b_7704f74b30634709b76a6039e9d2f2da~mv2.jpg" alt="Hall of Fame Village aerial"/>
          </div>
        </div>
        <img class="wc-img-wide" src="https://static.wixstatic.com/media/d9828b_9eee10d2942b431a9e9e13c5d8102d47~mv2.jpg" alt="Hall of Fame Village site map"/>
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
            <img src="https://static.wixstatic.com/media/d9828b_0be8a50b8f2c46acb0a4a9a33af28fe6~mv2.jpg" alt="Cleveland Clinic Mercy Hospital"/>
            <img src="https://static.wixstatic.com/media/d9828b_7d0744e6a26a433ab646be7344333331~mv2.jpg" alt="Aultman Hospital"/>
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
            <img src="https://static.wixstatic.com/media/d9828b_10c51c7b08c4488d9c9296202b5f3454~mv2.jpg" alt="Stark State College"/>
            <img src="https://static.wixstatic.com/media/d9828b_8d81de147cb348ffad5bc46408c5e58b~mv2.jpg" alt="Walsh University Campus Center"/>
          </div>
        </div>
        <div class="wc-imgs-row">
          <img src="https://static.wixstatic.com/media/d9828b_635e1839b035460388f835d024dee216~mv2.jpg" alt="Malone University"/>
          <img src="https://static.wixstatic.com/media/d9828b_cf37a9bbb71646169df17c582ab242b9~mv2.jpg" alt="Malone University sign"/>
        </div>
      </div>

      <div class="wc-feature">
        <div class="wc-feature__row">
          <div class="wc-imgs">
            <img src="https://static.wixstatic.com/media/d9828b_9a15bac0c8e1412583f3a1ef682c4ba6~mv2.png" alt="Amazon fulfillment sign"/>
            <img src="https://static.wixstatic.com/media/d9828b_e821dd14d7b44480b9635f48fc147c18~mv2.jpg" alt="Amazon distribution interior"/>
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
            <img src="https://static.wixstatic.com/media/d9828b_4bfe468c3e494c7baa1d07abca280136~mv2.jpg" alt="Belden Village Mall"/>
            <img src="https://static.wixstatic.com/media/d9828b_742580d84f934878b83167d3cd0ab455~mv2.jpg" alt="Belden Village Shopping"/>
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
