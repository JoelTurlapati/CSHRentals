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

    var SLIDES = [
      'https://static.wixstatic.com/media/64b604_0f42533432c64b84adbdfbda61fcc7e7~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_9ee44dbc31dd4d6d851071343ea0fa94~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_be845510679b49f29054081aaa6680a9~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_b071b082c3314191a292bd349728b657~mv2.jpeg',
      'https://static.wixstatic.com/media/64b604_150af085b1024681984084f74ed2ed18~mv2.jpeg'
    ];

    var slidesHtml = SLIDES.map(function(url, i) {
      return '<div class="slide' + (i === 0 ? ' active' : '') + '" style="background-image:url(\'' + url + '\')"></div>';
    }).join('');
    var dotsHtml = SLIDES.map(function(_, i) {
      return '<button class="dot' + (i === 0 ? ' active' : '') + '" aria-label="Slide ' + (i + 1) + '"></button>';
    }).join('');

    var PDF_BASE = 'https://raw.githubusercontent.com/JoelTurlapati/CSHRentals/master/src/public/resources/';

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

/* ── SLIDESHOW ── */
.hero{position:relative;width:100%;min-height:520px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1.2s ease}
.slide::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,15,30,.5) 0%,rgba(5,15,30,.6) 60%,rgba(5,15,30,.75) 100%)}
.slide.active{opacity:1}
.slide-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:3;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.35);color:#fff;width:46px;height:46px;border-radius:50%;cursor:pointer;font-size:22px;display:flex;align-items:center;justify-content:center;transition:background .2s;backdrop-filter:blur(6px);line-height:1}
.slide-arrow:hover{background:rgba(255,255,255,.25)}
.slide-prev{left:20px}.slide-next{right:20px}
.hero__body{position:relative;z-index:2;text-align:center;padding:80px 24px 90px;max-width:800px}
.hero__eyebrow{display:inline-block;background:var(--gold);color:#fff;font-size:13px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:5px 18px;border-radius:20px;margin-bottom:22px}
.hero__title{font-size:clamp(38px,7.2vw,74px);font-weight:900;color:#fff;line-height:1.06;margin-bottom:16px;letter-spacing:-.02em}
.hero__sub{font-size:clamp(16px,2.2vw,19px);color:rgba(255,255,255,.75);line-height:1.65;max-width:580px;margin:0 auto}
.slide-dots{position:absolute;bottom:22px;left:50%;transform:translateX(-50%);z-index:3;display:flex;align-items:center;gap:8px}
.dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.35);border:none;cursor:pointer;padding:0;transition:background .3s,transform .2s}
.dot.active{background:#fff;transform:scale(1.4)}

/* ── SECTION SHARED ── */
.sec{padding:72px 40px}
@media(max-width:768px){.sec{padding:56px 24px}}
.wrap{max-width:1200px;margin:0 auto}
.sec-lbl{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.sec-h2{font-size:clamp(26px,3.6vw,43px);font-weight:800;color:var(--navy);line-height:1.12;letter-spacing:-.02em;margin-bottom:12px}
.sec-sub{font-size:18px;color:var(--muted);line-height:1.75;max-width:640px}
.divbar{width:44px;height:3px;background:var(--gold);margin-bottom:22px}

/* ── INTRO ── */
.intro{background:var(--card);padding:64px 40px 56px;border-bottom:1px solid var(--border)}
.intro__wrap{max-width:880px;margin:0 auto}
.intro__tag{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);border:1px solid var(--border-g);padding:5px 16px;border-radius:20px;margin-bottom:24px}
.intro__h1{font-size:clamp(29px,4.8vw,48px);font-weight:900;color:var(--navy);line-height:1.1;letter-spacing:-.02em;margin-bottom:18px}
.intro__desc{font-size:18px;color:var(--muted);line-height:1.85;margin-bottom:36px}
.intro__cols{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px}
@media(max-width:640px){.intro__cols{grid-template-columns:1fr}}
.intro__box{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:24px 22px}
.intro__box-ttl{font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.intro__box ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.intro__box li{font-size:16px;color:var(--muted);line-height:1.55;padding-left:16px;position:relative}
.intro__box li::before{content:'•';position:absolute;left:0;color:var(--gold);font-weight:700}
.intro__price{background:linear-gradient(135deg,#0a1628,#0d2545);border:1px solid var(--border-g);border-radius:10px;padding:28px 32px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px}
.intro__price-note{font-size:16px;color:rgba(255,255,255,.75);line-height:1.75;max-width:560px}
.intro__price-btn{display:inline-block;padding:12px 26px;background:var(--gold);color:#0a1628;font-size:14px;font-weight:800;letter-spacing:.05em;text-decoration:none;border-radius:6px;white-space:nowrap;transition:background .2s;flex-shrink:0}
.intro__price-btn:hover{background:var(--gold-lt)}

/* ── CONTACT CTA STRIP ── */
.cta-strip{background:#0a1628;padding:32px 40px;text-align:center;border-top:1px solid rgba(255,255,255,.06)}
.cta-strip__inner{max-width:640px;margin:0 auto}
.cta-strip__text{font-size:17px;color:rgba(255,255,255,.65);margin-bottom:16px;line-height:1.6}
.cta-contact-btn{display:inline-block;padding:13px 36px;background:var(--gold);color:#0a1628;font-size:14px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;border-radius:6px;text-decoration:none;transition:background .2s}
.cta-contact-btn:hover{background:var(--gold-lt)}

/* ── PORTFOLIO CARDS ── */
.p-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:44px}
@media(max-width:900px){.p-grid{grid-template-columns:1fr}}
.p-card{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:visible;display:flex;flex-direction:column;box-shadow:var(--shadow);transition:box-shadow .2s}
.p-card:hover{box-shadow:0 4px 24px rgba(10,30,60,.13)}
.p-card--center{grid-column:1 / -1;max-width:calc(50% - 12px);margin:0 auto}
@media(max-width:900px){.p-card--center{max-width:100%}}
.p-card__img{width:100%;height:200px;object-fit:cover;display:block;border-radius:12px 12px 0 0}
.p-card__body{padding:24px;flex:1;display:flex;flex-direction:column;gap:14px}
.p-card__hdr{display:flex;align-items:center;gap:14px}
.p-letter{flex-shrink:0;width:48px;height:48px;border-radius:50%;background:var(--gold);color:#0a1628;font-size:23px;font-weight:900;display:flex;align-items:center;justify-content:center}
.p-title{font-size:19px;font-weight:800;color:var(--navy);line-height:1.2;margin-bottom:3px}
.p-meta{font-size:14px;color:var(--muted)}
.p-cta{display:block;width:100%;padding:12px;background:var(--navy);color:#fff;text-align:center;font-size:14px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border:none;border-radius:6px;cursor:pointer;text-decoration:none;transition:background .2s}
.p-cta:hover{background:#1a3557}

/* ── DROPDOWN ── */
.drop-wrap{position:relative;display:block}
.drop-trigger{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:11px 14px;background:transparent;color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border:1.5px solid var(--border-g);border-radius:6px;cursor:pointer;font-family:'Inter',sans-serif;transition:background .2s,color .2s;line-height:1}
.drop-trigger:hover{background:rgba(200,150,42,.09);color:var(--gold-lt)}
.drop-arrow{font-size:10px;transition:transform .2s;display:inline-block;flex-shrink:0}
.drop-wrap.open .drop-arrow{transform:rotate(180deg)}
.drop-menu{display:none;position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid var(--border-g);border-radius:8px;box-shadow:0 8px 32px rgba(10,30,60,.15);z-index:100;overflow:hidden;min-width:220px}
.drop-wrap.open .drop-menu{display:block}
.drop-item{display:block;padding:12px 16px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--gold);text-decoration:none;transition:background .2s,color .2s;white-space:nowrap}
.drop-item:hover{background:rgba(200,150,42,.08);color:var(--gold-lt)}
.drop-item+.drop-item{border-top:1px solid rgba(200,150,42,.18)}

/* ── INDIVIDUAL / PREMIUM CARDS ── */
.prem-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;max-width:700px;margin:28px auto 0}
@media(max-width:560px){.prem-grid{grid-template-columns:1fr}}
.prem-card{background:var(--card);border:1px solid var(--border);border-radius:10px;overflow:visible;display:flex;flex-direction:column;box-shadow:var(--shadow);transition:box-shadow .2s}
.prem-card:hover{box-shadow:0 4px 20px rgba(10,30,60,.12)}
.prem-card__img{width:100%;height:160px;object-fit:cover;display:block;border-radius:10px 10px 0 0}
.prem-card__body{padding:16px 18px 18px;display:flex;flex-direction:column;gap:10px;flex:1}
.prem-badge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;background:var(--gold);color:#0a1628;padding:3px 8px;border-radius:3px;width:fit-content}
.prem-addr{font-size:17px;font-weight:800;color:var(--navy);line-height:1.3}
.prem-beds{font-size:14px;color:var(--muted);margin-bottom:2px}

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
@media(max-width:768px){
  .wc-feature{padding:22px 18px}
  .wc-feature__row{grid-template-columns:1fr}
  .wc-close{padding:24px 20px}
}

/* ── FOOTER ── */
.footer{background:#0a1628;border-top:1px solid rgba(255,255,255,.08);padding:24px 40px;text-align:center;font-size:14px;color:rgba(255,255,255,.45)}

/* ── FIN BUTTON (drop-item as button) ── */
button.drop-item.fin-btn{background:none;border:none;width:100%;text-align:left;font-family:'Inter',sans-serif;cursor:pointer}

/* ── FINANCIALS MODAL ── */
.fin-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px}
.fin-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.75);backdrop-filter:blur(4px)}
.fin-modal__box{position:relative;background:#fff;border-radius:14px;max-width:800px;width:100%;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.35)}
.fin-modal__head{padding:18px 24px;border-bottom:1px solid #e0e4ea;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.fin-modal__title{font-size:16px;font-weight:800;color:#0d1f35;letter-spacing:-.01em}
.fin-modal__close{background:none;border:none;font-size:26px;cursor:pointer;color:#5a6b85;line-height:1;padding:0 4px;transition:color .2s}
.fin-modal__close:hover{color:#0d1f35}
.fin-modal__body{overflow-y:auto;padding:8px 24px 24px}
.fin-modal__scroll{overflow-x:auto}
.fin-tbl{width:100%;border-collapse:collapse;margin-top:12px;font-size:13px}
.fin-tbl th{background:#0a1628;color:#fff;font-weight:700;text-align:right;padding:10px 12px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}
.fin-tbl th:first-child{text-align:left}
.fin-tbl td{padding:9px 12px;border-bottom:1px solid #e8ecf2;color:#0d1f35;text-align:right;vertical-align:middle}
.fin-tbl td:first-child{text-align:left;font-weight:700}
.fin-tbl tr:last-child td{border-bottom:none;background:#f0f4fa;font-weight:800}
.fin-tbl tr:not(:last-child):hover td{background:#f7f9fc}
.fin-tbl__gold{color:#c8962a}
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

<!-- ══ SLIDESHOW ══ -->
<section class="hero">
  ${slidesHtml}
  <button class="slide-arrow slide-prev" aria-label="Previous">&#8249;</button>
  <button class="slide-arrow slide-next" aria-label="Next">&#8250;</button>
  <div class="hero__body">
    <span class="hero__eyebrow">Canton, Ohio &middot; CSH Rentals</span>
    <h1 class="hero__title">Quality Rentals.<br/>Proven Portfolio.</h1>
    <p class="hero__sub">46 single-family rental homes across Canton, OH &mdash; 100% occupied with proven cash flow.</p>
  </div>
  <div class="slide-dots">${dotsHtml}</div>
</section>

<!-- ══ INTRO ══ -->
<section class="intro">
  <div class="intro__wrap">
    <div class="intro__tag">Investment Opportunity &middot; Stark County, Ohio</div>
    <h1 class="intro__h1">Investment Opportunities in Stark County, Ohio</h1>
    <p class="intro__desc">We are offering a unique opportunity to acquire a collection of 46 investment properties located throughout Stark County, Ohio and Geneva-on-the-Lake. These properties include professionally managed single-family rental homes, individual investment properties, and a short-term rental asset, providing investors with multiple acquisition options to fit their investment strategy.</p>
    <div class="intro__cols">
      <div class="intro__box">
        <div class="intro__box-ttl">Available Investment Opportunities</div>
        <ul>
          <li>Portfolio 1 (West / 44708) &mdash; 9 rental properties</li>
          <li>Portfolio 2 (NW 21st&ndash;24th Operating Cluster) &mdash; 10 rental properties</li>
          <li>Portfolio 3 (NW 25th&ndash;27th Density Cluster) &mdash; 9 rental properties</li>
          <li>Portfolio 4 (NE / Market-Colonial Cluster) &mdash; 11 rental properties</li>
          <li>Portfolio 5 (High End Rent Portfolio) &mdash; 5 rental properties</li>
          <li>Portfolio 6 (Premium Individual Properties) &mdash; 2 properties</li>
        </ul>
      </div>
      <div class="intro__box">
        <div class="intro__box-ttl">Available Acquisition Options</div>
        <ul>
          <li>Purchase of an individual portfolio</li>
          <li>Purchase of multiple portfolios</li>
          <li>Purchase of individual properties (including properties within the portfolios)</li>
          <li>Purchase of all six portfolios as a single transaction</li>
          <li>Purchase of all 46 properties as a single transaction</li>
        </ul>
      </div>
    </div>
    <div class="intro__price">
      <p class="intro__price-note">Whether you are seeking a single investment property, an established rental portfolio, or a large-scale acquisition opportunity, these assets offer strong income-producing potential in one of Northeast Ohio&rsquo;s most established rental markets.</p>
      <a class="intro__price-btn" href="https://www.crexi.com/properties/1746554/ohio-canton-oh-44-sfh-portfolio" target="_blank">View on CREXI &rarr;</a>
    </div>
  </div>
</section>

<!-- ══ CONTACT CTA #1 ══ -->
<div class="cta-strip">
  <div class="cta-strip__inner">
    <p class="cta-strip__text">Interested in learning more about this investment opportunity? Our team is ready to answer your questions.</p>
    <a class="cta-contact-btn" href="/contact">Schedule a Call &rarr;</a>
  </div>
</div>

<!-- ══ FIVE PORTFOLIOS ══ -->
<section class="sec" id="portfolios" style="background:var(--bg)">
  <div class="wrap">
    <div class="sec-lbl">Investor Portfolios</div>
    <h2 class="sec-h2">The Six Investment Portfolios</h2>
    <div class="divbar"></div>
    <p class="sec-sub">Each portfolio is a geographically tight cluster, fully occupied, and available independently or as part of a bulk acquisition.</p>

    <div class="p-grid">

      <!-- PORTFOLIO 1 -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg" alt="Portfolio 1"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">1</div>
            <div>
              <div class="p-title">Portfolio 1 &mdash; West / 44708</div>
              <div class="p-meta">9 homes &nbsp;&middot;&nbsp; ZIP 44708 / 44709 / 44706</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-west">View Portfolio 1 &rarr;</a>
          <div class="drop-wrap">
            <button class="drop-trigger" type="button">&#128196; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>
            <div class="drop-menu">
              <a class="drop-item" href="${PDF_BASE}2024_Portfolio_A.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
              <a class="drop-item" href="${PDF_BASE}2025_Portfolio_A.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
              <button class="drop-item fin-btn" type="button" data-fin="1">&#128200; Financials</button>
            </div>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO 2 -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg" alt="Portfolio 2"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">2</div>
            <div>
              <div class="p-title">Portfolio 2 &mdash; NW 21st&ndash;24th Operating Cluster</div>
              <div class="p-meta">10 homes &nbsp;&middot;&nbsp; ZIP 44709 / 44703</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-northwest">View Portfolio 2 &rarr;</a>
          <div class="drop-wrap">
            <button class="drop-trigger" type="button">&#128196; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>
            <div class="drop-menu">
              <a class="drop-item" href="${PDF_BASE}2024_Portfolio_B.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
              <a class="drop-item" href="${PDF_BASE}2025_Portfolio_B.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
              <button class="drop-item fin-btn" type="button" data-fin="2">&#128200; Financials</button>
            </div>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO 3 -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_5849d546b0c34c91ac87049e3cd2c186~mv2.jpeg" alt="Portfolio 3"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">3</div>
            <div>
              <div class="p-title">Portfolio 3 &mdash; NW 25th&ndash;27th Density Cluster</div>
              <div class="p-meta">9 homes &nbsp;&middot;&nbsp; ZIP 44709</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-central">View Portfolio 3 &rarr;</a>
          <div class="drop-wrap">
            <button class="drop-trigger" type="button">&#128196; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>
            <div class="drop-menu">
              <a class="drop-item" href="${PDF_BASE}2024_Portfolio_C.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
              <a class="drop-item" href="${PDF_BASE}2025_Portfolio_C.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
              <button class="drop-item fin-btn" type="button" data-fin="3">&#128200; Financials</button>
            </div>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO 4 -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_2fadc168b10c4853b32cb35c72fc023b~mv2.jpeg" alt="Portfolio 4"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">4</div>
            <div>
              <div class="p-title">Portfolio 4 &mdash; NE / Market-Colonial Cluster</div>
              <div class="p-meta">11 homes &nbsp;&middot;&nbsp; ZIP 44714</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-northeast">View Portfolio 4 &rarr;</a>
          <div class="drop-wrap">
            <button class="drop-trigger" type="button">&#128196; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>
            <div class="drop-menu">
              <a class="drop-item" href="${PDF_BASE}2024_Portfolio_D.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
              <a class="drop-item" href="${PDF_BASE}2025_Portfolio_D.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
              <button class="drop-item fin-btn" type="button" data-fin="4">&#128200; Financials</button>
            </div>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO 5 — HIGH END RENT PORTFOLIO -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/d9828b_d344fde378c4422bbb1ae9b9758a0fc9~mv2.jpg" alt="Portfolio 5 — High End Rent Portfolio"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter" style="font-size:19px">5</div>
            <div>
              <div class="p-title">Portfolio 5 &mdash; High End Rent Portfolio</div>
              <div class="p-meta">5 homes &nbsp;&middot;&nbsp; ZIP 44708 / 44709</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-highend">View Portfolio 5 &rarr;</a>
          <div class="drop-wrap">
            <button class="drop-trigger" type="button">&#128196; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>
            <div class="drop-menu">
              <a class="drop-item" href="${PDF_BASE}2024_Portfolio_E.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
              <a class="drop-item" href="${PDF_BASE}2025_Portfolio_E.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
              <button class="drop-item fin-btn" type="button" data-fin="5">&#128200; Financials</button>
            </div>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO 6 — PREMIUM INDIVIDUAL PROPERTIES -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg" alt="Portfolio 6 — Premium Individual Properties"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter" style="font-size:19px">6</div>
            <div>
              <div class="p-title">Portfolio 6 &mdash; Premium Individual Properties</div>
              <div class="p-meta">2 properties &nbsp;&middot;&nbsp; Geneva-on-the-Lake / ZIP 44709</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-premium">View Portfolio 6 &rarr;</a>
          <div class="drop-wrap">
            <button class="drop-trigger" type="button">&#128196; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>
            <div class="drop-menu">
              <a class="drop-item" href="${PDF_BASE}2024_Portfolio_F.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
              <a class="drop-item" href="${PDF_BASE}2025_Portfolio_F.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
              <button class="drop-item fin-btn" type="button" data-fin="6">&#128200; Financials</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ CONTACT CTA #2 ══ -->
<div class="cta-strip">
  <div class="cta-strip__inner">
    <p class="cta-strip__text">Ready to explore a portfolio acquisition? Reach out and we'll walk you through the numbers.</p>
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

<!-- ══ FINANCIALS MODAL ══ -->
<div id="fin-modal" class="fin-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="fin-modal__overlay" id="fin-modal-overlay"></div>
  <div class="fin-modal__box">
    <div class="fin-modal__head">
      <span class="fin-modal__title" id="fin-modal-title"></span>
      <button class="fin-modal__close" id="fin-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="fin-modal__body">
      <div class="fin-modal__scroll">
        <table class="fin-tbl" id="fin-tbl"></table>
      </div>
    </div>
  </div>
</div>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  &copy; 2025 CSH Rentals &nbsp;&middot;&nbsp; 1428 Market Ave. N., Canton, OH 44714 &nbsp;&middot;&nbsp; scottprivate@tagplanning.com
</footer>
`;

    // ── Slideshow ──
    var cur = 0;
    var self = this;
    var slideEls = Array.from(self.querySelectorAll('.slide'));
    var dotEls = Array.from(self.querySelectorAll('.dot'));

    function goTo(n) {
      slideEls[cur].classList.remove('active');
      dotEls[cur].classList.remove('active');
      cur = ((n % slideEls.length) + slideEls.length) % slideEls.length;
      slideEls[cur].classList.add('active');
      dotEls[cur].classList.add('active');
    }

    self.querySelector('.slide-prev').addEventListener('click', function() { goTo(cur - 1); });
    self.querySelector('.slide-next').addEventListener('click', function() { goTo(cur + 1); });
    dotEls.forEach(function(dot, i) { dot.addEventListener('click', function() { goTo(i); }); });
    var autoPlay = setInterval(function() { goTo(cur + 1); }, 5000);
    var heroEl = self.querySelector('.hero');
    heroEl.addEventListener('mouseenter', function() { clearInterval(autoPlay); });
    heroEl.addEventListener('mouseleave', function() { autoPlay = setInterval(function() { goTo(cur + 1); }, 5000); });

    // ── Hamburger menu ──
    const burger = self.querySelector('#csh-burger');
    const mobNav = self.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // ── Financial data for modal ──
    var FIN_DATA = {
      '1': {
        title: 'Portfolio 1 — West / 44708',
        rows: [
          ['1502 37th St NW',      '$160,000', '$1,150', '$13,800', '$13,500'],
          ['2007 Kirk Ct NW',      '$140,000', '$1,350', '$16,200', '$13,500'],
          ['2923 Helen Pl NW',     '$175,000', '$1,350', '$16,200', '$16,230'],
          ['2945 15th St NW',      '$160,000', '$1,300', '$15,600', '$15,600'],
          ['307 Bellflower Ave NW','$160,000', '$1,375', '$16,500', '$12,575'],
          ['426 Vince Ave NW',     '$160,000', '$1,550', '$18,600', '$18,600'],
          ['635 Greenfield Ave SW', '$95,000', '$1,200', '$14,400', '$14,500'],
          ['806 23rd St NW',       '$131,000', '$1,200', '$14,400', '$14,400'],
          ['818 25th St NW',       '$150,000', '$1,250', '$15,000', '$15,000']
        ],
        total: ['Total — 9 Properties', '$1,331,000', '$11,725/mo', '$140,700/yr', '$133,905']
      },
      '2': {
        title: 'Portfolio 2 — NW 21st–24th Operating Cluster',
        rows: [
          ['1430 19th St NW',      '$139,500', '$1,325', '$15,900', '$16,100'],
          ['1511 23rd St NW',      '$125,000', '$1,300', '$15,600', '$15,600'],
          ['1708 18th St NW',      '$160,000', '$1,100', '$13,200', '$14,540'],
          ['1734 Woodland Ave NW',  '$90,000', '$1,055', '$12,660', '$12,100'],
          ['1919 Frazer Ave NW',   '$150,000', '$1,200', '$14,400', '$13,360'],
          ['2211 Myrtle Ave NW',   '$134,500', '$1,250', '$15,000', '$12,800'],
          ['519 21st St NW',       '$140,000', '$1,385', '$16,620', '$16,620'],
          ['523 21st St NW',       '$135,000', '$1,200', '$14,400', '$14,400'],
          ['725 22nd St NW',       '$125,000', '$1,150', '$13,800',  '$6,865'],
          ['800 22nd St NW',       '$150,000', '$1,450', '$17,400', '$17,400']
        ],
        total: ['Total — 10 Properties', '$1,349,000', '$12,415/mo', '$148,980/yr', '$139,785']
      },
      '3': {
        title: 'Portfolio 3 — NW 25th–27th Density Cluster',
        rows: [
          ['1338 25th St NW',      '$148,000', '$1,400', '$16,800', '$17,000'],
          ['1341 Ridgeway Pl NW',  '$151,000', '$1,450', '$17,400', '$15,120'],
          ['1344 24th St NW',      '$135,000', '$1,150', '$13,800', '$10,850'],
          ['1507 Ridgeway Pl NW',  '$125,000', '$1,300', '$15,600', '$14,638'],
          ['1540 Norwood Pl NW',   '$130,000', '$1,260', '$15,120', '$15,120'],
          ['1569 25th St NW',      '$145,000', '$1,275', '$15,300', '$15,300'],
          ['1600 27th St NW',      '$140,900', '$1,400', '$16,800', '$16,800'],
          ['1611 25th St NW',      '$140,000', '$1,300', '$15,600', '$11,400'],
          ['1701 27th St NW',      '$153,000', '$1,300', '$15,600', '$15,175']
        ],
        total: ['Total — 9 Properties', '$1,267,900', '$11,835/mo', '$142,020/yr', '$131,403']
      },
      '4': {
        title: 'Portfolio 4 — NE / Market-Colonial Cluster',
        rows: [
          ['804 29th St NE',         '$175,000', '$1,450', '$17,400', '$17,420'],
          ['1012 28th St NE',        '$164,000', '$1,545', '$18,540', '$13,392'],
          ['1203 25th St NE',        '$140,000', '$1,200', '$14,400', '$14,343'],
          ['1206 24th St NE',        '$160,000', '$1,645', '$19,740', '$19,700'],
          ['1207 Colonial Blvd NE',  '$160,000', '$1,400', '$16,800', '$16,950'],
          ['1210 25th St NE',        '$150,000', '$1,430', '$17,160', '$16,660'],
          ['1219 24th St NE',        '$182,000', '$1,320', '$15,840', '$16,040'],
          ['1306 22nd St NE',        '$150,000', '$1,515', '$18,180', '$12,080'],
          ['1326 24th St NE',        '$150,000', '$1,550', '$18,600', '$12,870'],
          ['1330 24th St NE',        '$140,000', '$1,400', '$16,800', '$13,250'],
          ['1335 22nd St NE',        '$145,000', '$1,200', '$14,400', '$14,840']
        ],
        total: ['Total — 11 Properties', '$1,716,000', '$15,655/mo', '$187,860/yr', '$167,545']
      },
      '5': {
        title: 'Portfolio 5 — High End Rent Portfolio',
        rows: [
          ['225 Grandview Ave NW',   '$176,300', '$1,600', '$19,200', '$19,400'],
          ['244 Harter Ave NW',      '$199,000', '$1,640', '$19,680', '$19,540'],
          ['300 Montrose Ave NW',    '$225,000', '$2,330', '$27,960', '$27,800'],
          ['1103 22nd St NW',        '$210,000', '$1,850', '$22,200', '$21,600'],
          ['2631 Demington Ave NW',  '$210,000', '$2,100', '$25,200', '$19,350']
        ],
        total: ['Total — 5 Properties', '$1,020,300', '$9,520/mo', '$114,240/yr', '$107,690']
      },
      '6': {
        title: 'Portfolio 6 — Premium Individual Properties',
        rows: [
          ['5192 University Ave',    '$280,000', 'STR', 'STR', '$21,210'],
          ['903 23rd St NW',         '$135,000', '$1,425', '$17,100', '$5,670']
        ],
        total: ['Total — 2 Properties', '$415,000', '—', '—', '$26,880']
      }
    };

    // ── Modal logic ──
    var finModal = self.querySelector('#fin-modal');
    var finTitle = self.querySelector('#fin-modal-title');
    var finTbl   = self.querySelector('#fin-tbl');
    var finClose = self.querySelector('#fin-modal-close');
    var finOverlay = self.querySelector('#fin-modal-overlay');

    function openFinModal(key) {
      var d = FIN_DATA[key];
      if (!d) return;
      finTitle.textContent = d.title;
      var h = '<thead><tr><th>Property</th><th>Value</th><th>Monthly Rent</th><th>Annual @ 100%</th><th>2025 Collected</th></tr></thead><tbody>';
      d.rows.forEach(function(r) {
        h += '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td class="fin-tbl__gold">' + r[2] + '</td><td>' + r[3] + '</td><td>' + r[4] + '</td></tr>';
      });
      h += '<tr><td>' + d.total[0] + '</td><td>' + d.total[1] + '</td><td class="fin-tbl__gold">' + d.total[2] + '</td><td>' + d.total[3] + '</td><td>' + d.total[4] + '</td></tr></tbody>';
      finTbl.innerHTML = h;
      finModal.style.display = 'flex';
    }

    function closeFinModal() { finModal.style.display = 'none'; }
    finClose.addEventListener('click', closeFinModal);
    finOverlay.addEventListener('click', closeFinModal);

    // ── Navigation, dropdowns ──
    const _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';

    self.addEventListener('click', (e) => {
      // Financials modal button
      const finBtn = e.target.closest('.fin-btn');
      if (finBtn) {
        e.preventDefault(); e.stopPropagation();
        self.querySelectorAll('.drop-wrap.open').forEach(w => w.classList.remove('open'));
        openFinModal(finBtn.dataset.fin);
        return;
      }

      // Dropdown toggle
      const dropTrig = e.target.closest('.drop-trigger');
      if (dropTrig) {
        e.preventDefault(); e.stopPropagation();
        const wrap = dropTrig.closest('.drop-wrap');
        const isOpen = wrap.classList.contains('open');
        self.querySelectorAll('.drop-wrap.open').forEach(w => w.classList.remove('open'));
        if (!isOpen) wrap.classList.add('open');
        return;
      }

      // Close open dropdowns when clicking outside any drop-wrap
      if (!e.target.closest('.drop-wrap')) {
        self.querySelectorAll('.drop-wrap.open').forEach(w => w.classList.remove('open'));
      }

      // Internal link navigation (skip external / PDF links)
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
  }
}
customElements.define('csh-home', CshHome);