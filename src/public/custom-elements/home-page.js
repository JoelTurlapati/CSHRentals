// @ts-nocheck
class CshHome extends HTMLElement {
  connectedCallback() {
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
csh-investors{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;background:#eef2f7;color:#0d1f35;line-height:1.6}
:root{
  --bg:#eef2f7;--bg-alt:#e4ecf7;--card:#ffffff;
  --navy:#0d1f35;--navy-hdr:#0a1628;
  --gold:#c8962a;--gold-lt:#dba83a;--gold-dk:#a67820;
  --text:#0d1f35;--muted:#5a6b85;--faint:#8899bb;
  --border:rgba(10,30,60,.10);--border-g:rgba(200,150,42,.35);
  --shadow:0 2px 16px rgba(10,30,60,.08);
}

/* ── HEADER ── */
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 32px;display:flex;align-items:center;height:72px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:42px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:8px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase;line-height:1}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:9px 18px;font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:var(--gold);border-color:var(--gold);color:#0a1628}
.csh-hdr__btn--gold:hover{background:var(--gold-lt);border-color:var(--gold-lt)}
.csh-hdr__email{width:36px;height:36px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:15px;transition:background .2s,border-color .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6)}
@media(max-width:640px){.csh-hdr{padding:0 16px}.csh-hdr__btn{padding:8px 12px;font-size:10px}}

/* ── SLIDESHOW ── */
.hero{position:relative;width:100%;min-height:520px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1.2s ease}
.slide::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,15,30,.5) 0%,rgba(5,15,30,.6) 60%,rgba(5,15,30,.75) 100%)}
.slide.active{opacity:1}
.slide-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:3;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.35);color:#fff;width:46px;height:46px;border-radius:50%;cursor:pointer;font-size:22px;display:flex;align-items:center;justify-content:center;transition:background .2s;backdrop-filter:blur(6px);line-height:1}
.slide-arrow:hover{background:rgba(255,255,255,.25)}
.slide-prev{left:20px}.slide-next{right:20px}
.hero__body{position:relative;z-index:2;text-align:center;padding:80px 24px 90px;max-width:800px}
.hero__eyebrow{display:inline-block;background:var(--gold);color:#fff;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:5px 18px;border-radius:20px;margin-bottom:22px}
.hero__title{font-size:clamp(32px,6vw,62px);font-weight:900;color:#fff;line-height:1.06;margin-bottom:16px;letter-spacing:-.02em}
.hero__sub{font-size:clamp(13px,1.8vw,16px);color:rgba(255,255,255,.75);line-height:1.65;max-width:580px;margin:0 auto}
.slide-dots{position:absolute;bottom:22px;left:50%;transform:translateX(-50%);z-index:3;display:flex;align-items:center;gap:8px}
.dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.35);border:none;cursor:pointer;padding:0;transition:background .3s,transform .2s}
.dot.active{background:#fff;transform:scale(1.4)}

/* ── SECTION SHARED ── */
.sec{padding:72px 40px}
@media(max-width:768px){.sec{padding:56px 24px}}
.wrap{max-width:1200px;margin:0 auto}
.sec-lbl{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.sec-h2{font-size:clamp(22px,3vw,36px);font-weight:800;color:var(--navy);line-height:1.12;letter-spacing:-.02em;margin-bottom:12px}
.sec-sub{font-size:15px;color:var(--muted);line-height:1.75;max-width:640px}
.divbar{width:44px;height:3px;background:var(--gold);margin-bottom:22px}

/* ── INTRO ── */
.intro{background:var(--card);padding:64px 40px 56px;border-bottom:1px solid var(--border)}
.intro__wrap{max-width:880px;margin:0 auto}
.intro__tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);border:1px solid var(--border-g);padding:5px 16px;border-radius:20px;margin-bottom:24px}
.intro__h1{font-size:clamp(24px,4vw,40px);font-weight:900;color:var(--navy);line-height:1.1;letter-spacing:-.02em;margin-bottom:18px}
.intro__desc{font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:36px}
.intro__cols{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px}
@media(max-width:640px){.intro__cols{grid-template-columns:1fr}}
.intro__box{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:24px 22px}
.intro__box-ttl{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.intro__box ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.intro__box li{font-size:13.5px;color:var(--muted);line-height:1.55;padding-left:16px;position:relative}
.intro__box li::before{content:'•';position:absolute;left:0;color:var(--gold);font-weight:700}
.intro__price{background:linear-gradient(135deg,#0a1628,#0d2545);border:1px solid var(--border-g);border-radius:10px;padding:28px 32px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px}
.intro__price-val{font-size:clamp(26px,3.5vw,40px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:5px}
.intro__price-lbl{font-size:12px;color:rgba(255,255,255,.6)}
.intro__price-note{font-size:13.5px;color:rgba(255,255,255,.75);line-height:1.75;max-width:360px}
.intro__price-btn{display:inline-block;padding:12px 26px;background:var(--gold);color:#0a1628;font-size:12px;font-weight:800;letter-spacing:.05em;text-decoration:none;border-radius:6px;white-space:nowrap;transition:background .2s;flex-shrink:0}
.intro__price-btn:hover{background:var(--gold-lt)}

/* ── CONTACT CTA STRIP ── */
.cta-strip{background:#0a1628;padding:32px 40px;text-align:center;border-top:1px solid rgba(255,255,255,.06)}
.cta-strip__inner{max-width:640px;margin:0 auto}
.cta-strip__text{font-size:14px;color:rgba(255,255,255,.65);margin-bottom:16px;line-height:1.6}
.cta-contact-btn{display:inline-block;padding:13px 36px;background:var(--gold);color:#0a1628;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;border-radius:6px;text-decoration:none;transition:background .2s}
.cta-contact-btn:hover{background:var(--gold-lt)}

/* ── PORTFOLIO CARDS ── */
.p-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:44px}
@media(max-width:900px){.p-grid{grid-template-columns:1fr}}
.p-card{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:visible;display:flex;flex-direction:column;box-shadow:var(--shadow);transition:box-shadow .2s}
.p-card:hover{box-shadow:0 4px 24px rgba(10,30,60,.13)}
.p-card__img{width:100%;height:200px;object-fit:cover;display:block;border-radius:12px 12px 0 0}
.p-card__body{padding:24px;flex:1;display:flex;flex-direction:column;gap:14px}
.p-card__hdr{display:flex;align-items:center;gap:14px}
.p-letter{flex-shrink:0;width:48px;height:48px;border-radius:50%;background:var(--gold);color:#0a1628;font-size:19px;font-weight:900;display:flex;align-items:center;justify-content:center}
.p-title{font-size:16px;font-weight:800;color:var(--navy);line-height:1.2;margin-bottom:3px}
.p-meta{font-size:12px;color:var(--muted)}
.p-cta{display:block;width:100%;padding:12px;background:var(--navy);color:#fff;text-align:center;font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border:none;border-radius:6px;cursor:pointer;text-decoration:none;transition:background .2s}
.p-cta:hover{background:#1a3557}

/* ── PDF BUTTONS ── */
.pdf-btns{display:flex;gap:10px;flex-wrap:wrap}
.pdf-btn{flex:1;min-width:120px;display:block;padding:10px 12px;background:transparent;color:var(--gold);text-align:center;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border:1.5px solid var(--border-g);border-radius:6px;text-decoration:none;transition:background .2s,color .2s}
.pdf-btn:hover{background:rgba(200,150,42,.09);color:var(--gold-lt)}

/* ── INDIVIDUAL PROPERTIES ── */
.prem-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px}
@media(max-width:960px){.prem-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.prem-grid{grid-template-columns:1fr}}
.prem-card{background:var(--card);border:1px solid var(--border);border-radius:10px;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--shadow);transition:box-shadow .2s}
.prem-card:hover{box-shadow:0 4px 20px rgba(10,30,60,.12)}
.prem-card__img{width:100%;height:160px;object-fit:cover;display:block}
.prem-card__body{padding:16px 18px 18px;display:flex;flex-direction:column;gap:10px;flex:1}
.prem-badge{display:inline-block;font-size:8px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;background:var(--gold);color:#0a1628;padding:3px 8px;border-radius:3px;width:fit-content}
.prem-addr{font-size:14px;font-weight:800;color:var(--navy);line-height:1.3}
.prem-beds{font-size:12px;color:var(--muted);margin-bottom:2px}

/* ── GENEVA ── */
.gen-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;margin-top:36px}
@media(max-width:820px){.gen-grid{grid-template-columns:1fr;gap:36px}}
.gen-tag{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#0a1628;background:var(--gold);padding:4px 12px;border-radius:3px;margin-bottom:14px}
.gen-addr{font-size:21px;font-weight:800;color:var(--navy);margin-bottom:5px;line-height:1.2}
.gen-specs{font-size:13px;color:var(--muted);margin-bottom:16px}
.gen-desc{font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:22px}
.adu{background:rgba(200,150,42,.06);border:1px solid var(--border-g);border-left:3px solid var(--gold);border-radius:0 8px 8px 0;padding:16px 18px;margin-bottom:20px}
.adu__ttl{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:7px}
.adu__txt{font-size:13px;color:var(--muted);line-height:1.75}
.gen-metrics{display:flex;flex-direction:column;gap:14px}
.gm{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:22px 24px;box-shadow:var(--shadow)}
.gm__val{font-size:clamp(20px,2.5vw,28px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:5px}
.gm__lbl{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.gm__note{font-size:11px;color:var(--faint)}
.gen-gallery-wrap{margin-top:20px}
.gen-gallery-btn{display:block;width:100%;padding:11px;background:transparent;color:var(--gold);font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border:1.5px solid var(--border-g);border-radius:6px;cursor:pointer;transition:background .2s;font-family:inherit}
.gen-gallery-btn:hover{background:rgba(200,150,42,.07)}
.gen-gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.gen-gallery-grid.hidden{display:none}
.gen-gallery-grid img{width:100%;height:150px;object-fit:cover;border-radius:8px;display:block}
@media(max-width:560px){.gen-gallery-grid{grid-template-columns:1fr}}

/* ── WHY CANTON ── */
.wc-tagline{font-size:16px;color:var(--muted);line-height:1.8;text-align:center;max-width:700px;margin:16px auto 44px;font-style:italic}
.wc-features{display:flex;flex-direction:column;gap:28px}
.wc-feature{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:36px 40px;box-shadow:var(--shadow);transition:box-shadow .2s}
.wc-feature:hover{box-shadow:0 4px 24px rgba(10,30,60,.12)}
.wc-feature__row{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:start}
.wc-feature__title{font-size:clamp(20px,2.5vw,26px);font-weight:800;color:var(--navy);line-height:1.2;margin-bottom:14px}
.wc-feature__desc{font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:16px}
.wc-feature__list{list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:20px}
.wc-feature__list li{font-size:13.5px;color:var(--muted);padding-left:18px;position:relative;line-height:1.6}
.wc-feature__list li::before{content:'•';position:absolute;left:0;color:var(--gold);font-weight:900;font-size:15px;line-height:1.3}
.wc-feature__list li strong{color:var(--navy)}
.wc-hi{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.03em;color:var(--gold);background:rgba(200,150,42,.08);border:1.5px solid var(--border-g);border-radius:6px;padding:7px 16px;margin-top:4px}
.wc-imgs{display:flex;flex-direction:column;gap:10px}
.wc-imgs img{width:100%;height:185px;object-fit:cover;border-radius:8px;display:block;box-shadow:0 2px 10px rgba(10,30,60,.09)}
.wc-imgs-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.wc-imgs-row img{width:100%;height:165px;object-fit:cover;border-radius:8px;display:block;box-shadow:0 2px 10px rgba(10,30,60,.09)}
.wc-img-wide{width:100%;height:200px;object-fit:cover;border-radius:8px;display:block;box-shadow:0 2px 10px rgba(10,30,60,.09);margin-top:16px}
.wc-close{margin-top:40px;background:linear-gradient(135deg,#0a1628,#0d2545);border:1px solid var(--border-g);border-radius:12px;padding:32px 36px;text-align:center}
.wc-close__val{font-size:clamp(22px,3vw,34px);font-weight:900;color:var(--gold);letter-spacing:-.02em;margin-bottom:10px}
.wc-close__txt{font-size:14px;color:rgba(255,255,255,.7);line-height:1.75;max-width:600px;margin:0 auto}
@media(max-width:768px){
  .wc-feature{padding:22px 18px}
  .wc-feature__row{grid-template-columns:1fr}
  .wc-close{padding:24px 20px}
}

/* ── FOOTER ── */
.footer{background:#0a1628;border-top:1px solid rgba(255,255,255,.08);padding:24px 40px;text-align:center;font-size:11.5px;color:rgba(255,255,255,.45)}
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
    <a class="csh-hdr__email" href="mailto:scottprivate@tagplanning.com" title="Email Us">&#9993;</a>
  </nav>
</header>

<!-- ══ SLIDESHOW ══ -->
<section class="hero">
  ${slidesHtml}
  <button class="slide-arrow slide-prev" aria-label="Previous">&#8249;</button>
  <button class="slide-arrow slide-next" aria-label="Next">&#8250;</button>
  <div class="hero__body">
    <span class="hero__eyebrow">Canton, Ohio &middot; CSH Rentals</span>
    <h1 class="hero__title">Quality Rentals.<br/>Proven Portfolio.</h1>
    <p class="hero__sub">45 single-family rental homes across Canton, OH &mdash; plus a lakeside short-term rental in Geneva-on-the-Lake. 100% occupied with proven cash flow.</p>
  </div>
  <div class="slide-dots">${dotsHtml}</div>
</section>

<!-- ══ INTRO ══ -->
<section class="intro">
  <div class="intro__wrap">
    <div class="intro__tag">Investment Opportunity &middot; Stark County, Ohio</div>
    <h1 class="intro__h1">Investment Opportunities in Stark County, Ohio</h1>
    <p class="intro__desc">We are offering a unique opportunity to acquire a collection of 45 investment properties located throughout Stark County, Ohio and Geneva-on-the-Lake. These properties include professionally managed single-family rental homes, individual investment properties, and a short-term rental asset, providing investors with multiple acquisition options to fit their investment strategy.</p>
    <div class="intro__cols">
      <div class="intro__box">
        <div class="intro__box-ttl">Available Investment Opportunities</div>
        <ul>
          <li>4 Investment Portfolios consisting of 39 rental properties</li>
          <li>5 Individual Investment Properties</li>
          <li>1 Short-Term Rental Property located in Geneva-on-the-Lake</li>
        </ul>
      </div>
      <div class="intro__box">
        <div class="intro__box-ttl">Available Acquisition Options</div>
        <ul>
          <li>Purchase of an individual portfolio</li>
          <li>Purchase of multiple portfolios</li>
          <li>Purchase of individual properties (including properties within the portfolios)</li>
          <li>Purchase of all four portfolios as a single transaction</li>
          <li>Purchase of all 45 properties as a single transaction</li>
        </ul>
      </div>
    </div>
    <div class="intro__price">
      <div>
        <div class="intro__price-val">$6,599,000</div>
        <div class="intro__price-lbl">Sale Price for All 45 Properties</div>
      </div>
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

<!-- ══ FOUR PORTFOLIOS ══ -->
<section class="sec" id="portfolios" style="background:var(--bg)">
  <div class="wrap">
    <div class="sec-lbl">Investor Portfolios</div>
    <h2 class="sec-h2">The Four Sub-Portfolios</h2>
    <div class="divbar"></div>
    <p class="sec-sub">Each portfolio is a geographically tight cluster, fully occupied, and available independently or as part of a bulk acquisition.</p>

    <div class="p-grid">

      <!-- PORTFOLIO A -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg" alt="Portfolio A"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">A</div>
            <div>
              <div class="p-title">West / 44708 &amp; Outlier Cluster</div>
              <div class="p-meta">9 homes &nbsp;&middot;&nbsp; ZIP 44708 / 44709 / 44706</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-west">View Portfolio A &rarr;</a>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Portfolio_A.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Portfolio_A.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO B -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg" alt="Portfolio B"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">B</div>
            <div>
              <div class="p-title">NW 21st&ndash;24th Operating Cluster</div>
              <div class="p-meta">10 homes &nbsp;&middot;&nbsp; ZIP 44709 / 44703</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-northwest">View Portfolio B &rarr;</a>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Portfolio_B.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Portfolio_B.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO C -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_5849d546b0c34c91ac87049e3cd2c186~mv2.jpeg" alt="Portfolio C"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">C</div>
            <div>
              <div class="p-title">NW 25th&ndash;27th Density Cluster</div>
              <div class="p-meta">9 homes &nbsp;&middot;&nbsp; ZIP 44709</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-central">View Portfolio C &rarr;</a>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Portfolio_C.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Portfolio_C.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO D -->
      <div class="p-card">
        <img class="p-card__img" src="https://static.wixstatic.com/media/64b604_2fadc168b10c4853b32cb35c72fc023b~mv2.jpeg" alt="Portfolio D"/>
        <div class="p-card__body">
          <div class="p-card__hdr">
            <div class="p-letter">D</div>
            <div>
              <div class="p-title">NE / Market-Colonial Cluster</div>
              <div class="p-meta">11 homes &nbsp;&middot;&nbsp; ZIP 44714</div>
            </div>
          </div>
          <a class="p-cta" href="/portfolio-northeast">View Portfolio D &rarr;</a>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Portfolio_D.pdf" target="_blank" rel="noopener">&#128196; 2024 Income Statement</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Portfolio_D.pdf" target="_blank" rel="noopener">&#128196; 2025 Income Statement</a>
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

<!-- ══ 5 INDIVIDUAL PROPERTIES ══ -->
<section class="sec" id="premium" style="background:var(--bg-alt);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Individual Acquisitions</div>
    <h2 class="sec-h2">5 Individual Investment Properties</h2>
    <div class="divbar"></div>
    <p class="sec-sub">Five stand-alone homes available for individual sale, each offering strong rental income in established Canton neighborhoods.</p>
    <div class="prem-grid">

      <div class="prem-card">
        <img class="prem-card__img" src="https://static.wixstatic.com/media/d9828b_1a1d76a9b76443d5a64141ebcf6c48ca~mv2.jpg" alt="300 Montrose Ave NW"/>
        <div class="prem-card__body">
          <span class="prem-badge">Individual Property</span>
          <div class="prem-addr">300 Montrose Ave NW</div>
          <div class="prem-beds">5 bed &nbsp;/&nbsp; 2 bath &nbsp;&middot;&nbsp; ZIP 44708</div>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2024 P&amp;L</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2025 P&amp;L</a>
          </div>
        </div>
      </div>

      <div class="prem-card">
        <img class="prem-card__img" src="https://static.wixstatic.com/media/d9828b_a56f5a5658184c74bcb3132dcb85eedc~mv2.jpg" alt="2631 Demington Ave NW"/>
        <div class="prem-card__body">
          <span class="prem-badge">Individual Property</span>
          <div class="prem-addr">2631 Demington Ave NW</div>
          <div class="prem-beds">3 bed &nbsp;/&nbsp; 2 bath &nbsp;&middot;&nbsp; ZIP 44708</div>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2024 P&amp;L</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2025 P&amp;L</a>
          </div>
        </div>
      </div>

      <div class="prem-card">
        <img class="prem-card__img" src="https://static.wixstatic.com/media/d9828b_01ee6699f540475790cef8f11779998d~mv2.jpg" alt="1103 22nd St NE"/>
        <div class="prem-card__body">
          <span class="prem-badge">Individual Property</span>
          <div class="prem-addr">1103 22nd St NE</div>
          <div class="prem-beds">4 bed &nbsp;/&nbsp; 2.5 bath &nbsp;&middot;&nbsp; ZIP 44714</div>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2024 P&amp;L</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2025 P&amp;L</a>
          </div>
        </div>
      </div>

      <div class="prem-card">
        <img class="prem-card__img" src="https://static.wixstatic.com/media/d9828b_d344fde378c4422bbb1ae9b9758a0fc9~mv2.jpg" alt="225 Grandview Ave NW"/>
        <div class="prem-card__body">
          <span class="prem-badge">Individual Property</span>
          <div class="prem-addr">225 Grandview Ave NW</div>
          <div class="prem-beds">4 bed &nbsp;/&nbsp; 2.5 bath &nbsp;&middot;&nbsp; ZIP 44708</div>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2024 P&amp;L</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2025 P&amp;L</a>
          </div>
        </div>
      </div>

      <div class="prem-card">
        <img class="prem-card__img" src="https://static.wixstatic.com/media/d9828b_4a43c60a2a3343bdb4aad6e86ecf49cb~mv2.png" alt="903 23rd St NW"/>
        <div class="prem-card__body">
          <span class="prem-badge">Individual Property</span>
          <div class="prem-addr">903 23rd St NW</div>
          <div class="prem-beds">4 bed &nbsp;/&nbsp; 1.5 bath &nbsp;&middot;&nbsp; ZIP 44709</div>
          <div class="pdf-btns">
            <a class="pdf-btn" href="${PDF_BASE}2024_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2024 P&amp;L</a>
            <a class="pdf-btn" href="${PDF_BASE}2025_Individual_Properties.pdf" target="_blank" rel="noopener">&#128196; 2025 P&amp;L</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ CONTACT CTA #3 ══ -->
<div class="cta-strip">
  <div class="cta-strip__inner">
    <p class="cta-strip__text">Have questions about individual properties or want to arrange a walkthrough? Our team is here to help.</p>
    <a class="cta-contact-btn" href="/contact">Contact an Advisor &rarr;</a>
  </div>
</div>

<!-- ══ GENEVA ON THE LAKE ══ -->
<section class="sec" id="geneva" style="background:var(--bg);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Property #45 &middot; Short-Term Rental</div>
    <h2 class="sec-h2">Geneva on the Lake</h2>
    <div class="divbar"></div>
    <div class="gen-grid">
      <div>
        <span class="gen-tag">Airbnb Superhost &middot; Turnkey STR</span>
        <div class="gen-addr">5192 University Dr<br/>Geneva, OH 44041</div>
        <div class="gen-specs">2 bed &nbsp;/&nbsp; 1 bath &nbsp;/&nbsp; 2,300 sq ft &nbsp;/&nbsp; Sleeps 8</div>
        <p class="gen-desc">Fully turnkey &mdash; all furniture, d&eacute;cor, and electronics stay. Steps from the GOTL strip, Ohio&rsquo;s oldest beach boardwalk. Within 7 miles of I-90. 37 wineries within 20 minutes. Current ownership is an Airbnb Superhost with some of the highest guest ratings in the county.</p>
        <div class="adu">
          <div class="adu__ttl">ADU Conversion Opportunity</div>
          <div class="adu__txt">The detached garage already has a walk-out second-story door, support pillars, new windows, full insulation, and updated electrical. Ready to convert to a 2-bed/1-bath second unit. Local comparables suggest this addition would double annual gross revenue &mdash; creating a &ldquo;sleep 16&rdquo; arrangement impossible to find in GOTL. Rent it with the house or separately.</div>
        </div>
        <div class="gen-gallery-wrap">
          <button class="gen-gallery-btn" type="button">&#128247; View Photos &#9660;</button>
          <div class="gen-gallery-grid hidden">
            <img src="https://static.wixstatic.com/media/64b604_523186930e5946028762053d55f0b1ce~mv2.jpeg" alt="Geneva property exterior"/>
            <img src="https://static.wixstatic.com/media/64b604_75503cda2c4b4ac3bb503c6a29d09021~mv2.jpeg" alt="Geneva property interior"/>
            <img src="https://static.wixstatic.com/media/64b604_0fdb97b825944fcab5668957f3e3c78f~mv2.png" alt="Geneva property view"/>
          </div>
        </div>
      </div>
      <div class="gen-metrics">
        <div class="gm">
          <div class="gm__val">$22,000</div>
          <div class="gm__lbl">2025 Gross Revenue</div>
          <div class="gm__note">$1,833/mo equivalent</div>
        </div>
        <div class="gm">
          <div class="gm__val">$52,000</div>
          <div class="gm__lbl">ARV Gross Revenue</div>
          <div class="gm__note">Projected with ADU addition</div>
        </div>
        <div class="gm">
          <div class="gm__val">$349,000</div>
          <div class="gm__lbl">Asking Price</div>
          <div class="gm__note">Turnkey &mdash; all contents included</div>
        </div>
        <a class="p-cta" href="/geneva-str">View Geneva Property &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- ══ WHY CANTON ══ -->
<section class="sec" id="why-canton" style="background:var(--bg-alt);border-top:1px solid var(--border)">
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

    // ── Navigation & gallery ──
    const _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';

    self.addEventListener('click', (e) => {
      // Geneva gallery toggle
      const galBtn = e.target.closest('.gen-gallery-btn');
      if (galBtn) {
        e.preventDefault(); e.stopPropagation();
        const grid = galBtn.nextElementSibling;
        const nowHidden = grid.classList.toggle('hidden');
        galBtn.innerHTML = nowHidden ? '&#128247; View Photos &#9660;' : '&#128247; Hide Photos &#9650;';
        return;
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
