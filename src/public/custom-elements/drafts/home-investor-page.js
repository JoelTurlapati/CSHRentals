// @ts-nocheck
class CshHome extends HTMLElement {
  connectedCallback() {
    // Inject Inter font once
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font';
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
csh-home{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;background:#0a1628;color:#fff;line-height:1.6}
:root{
  --navy:#0a1628;
  --navy-mid:#0d1f35;
  --navy-lt:#1a3557;
  --gold:#c8962a;
  --gold-lt:#dba83a;
  --white:#fff;
  --muted:rgba(255,255,255,.65);
  --faint:rgba(255,255,255,.38);
  --border:rgba(255,255,255,.10);
  --border-g:rgba(200,150,42,.28);
}

/* ── NAV ── */
.nav{background:rgba(10,22,40,.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;display:flex;align-items:center;height:68px;gap:8px;position:sticky;top:0;z-index:200}
.nav__logo{margin-right:auto;text-decoration:none;display:flex;align-items:center}
.nav__logo img{height:38px;width:auto;display:block}
.nav__link{padding:8px 15px;font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);text-decoration:none;border-radius:5px;transition:color .2s,background .2s}
.nav__link:hover{color:var(--white);background:rgba(255,255,255,.07)}
.nav__cta{margin-left:10px;padding:10px 22px;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--navy);background:var(--gold);text-decoration:none;border-radius:5px;transition:background .2s}
.nav__cta:hover{background:var(--gold-lt)}
@media(max-width:760px){.nav{padding:0 20px}.nav__link{display:none}.nav__cta{margin-left:auto}}

/* ── HERO ── */
.hero{min-height:100vh;background:var(--navy);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px 64px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(200,150,42,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(200,150,42,.025) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:200px;background:linear-gradient(transparent,var(--navy));pointer-events:none}
.hero__eye{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);border:1px solid var(--border-g);padding:5px 18px;border-radius:20px;margin-bottom:28px;position:relative;z-index:1}
.hero__h1{font-size:clamp(30px,5.5vw,62px);font-weight:900;color:var(--white);line-height:1.07;letter-spacing:-.025em;margin-bottom:20px;max-width:820px;position:relative;z-index:1}
.hero__sub{font-size:clamp(14px,1.8vw,18px);color:var(--muted);max-width:660px;line-height:1.75;margin-bottom:56px;position:relative;z-index:1}
.kpi-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-width:860px;width:100%;position:relative;z-index:1}
@media(max-width:600px){.kpi-strip{grid-template-columns:repeat(2,1fr)}}
.kpi-box{background:rgba(255,255,255,.03);padding:28px 16px;text-align:center}
.kpi-val{font-size:clamp(22px,2.8vw,34px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:8px}
.kpi-lbl{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.kpi-note{font-size:10px;color:var(--faint)}

/* ── SECTION SHARED ── */
.sec{padding:80px 40px}
@media(max-width:768px){.sec{padding:60px 24px}}
.wrap{max-width:1200px;margin:0 auto}
.sec-lbl{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.sec-h2{font-size:clamp(22px,3.5vw,40px);font-weight:800;color:var(--white);line-height:1.12;letter-spacing:-.02em;margin-bottom:14px}
.sec-sub{font-size:15px;color:var(--muted);line-height:1.75;max-width:640px}
.bar{width:44px;height:3px;background:var(--gold);margin-bottom:24px}

/* ── S2 SUMMARY ── */
.sum-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:28px}
@media(max-width:600px){.sum-grid{grid-template-columns:repeat(2,1fr)}}
.sum-box{background:rgba(255,255,255,.03);padding:30px 18px;text-align:center}
.sum-val{font-size:clamp(20px,2.6vw,32px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:8px}
.sum-lbl{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.sum-note{font-size:10px;color:var(--faint)}
.price-bar{background:linear-gradient(135deg,#0e2448,#0d1f35);border:1px solid var(--border-g);border-radius:10px;padding:30px 36px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px}
.price-ask{font-size:clamp(26px,4vw,46px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:6px}
.price-break{font-size:13px;color:var(--muted);letter-spacing:.04em}
.price-btn{display:inline-block;padding:14px 28px;background:var(--gold);color:var(--navy);font-size:12.5px;font-weight:800;letter-spacing:.05em;text-decoration:none;border-radius:6px;white-space:nowrap;transition:background .2s}
.price-btn:hover{background:var(--gold-lt)}

/* ── S3 OPPORTUNITY ── */
.opp-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
@media(max-width:820px){.opp-grid{grid-template-columns:1fr;gap:48px}}
.opp-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:32px}
.opp-stat{background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:8px;padding:20px 16px;text-align:center}
.os-val{font-size:17px;font-weight:800;color:var(--gold);margin-bottom:6px;line-height:1.2}
.os-lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.why-box{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:32px}
.why-ttl{font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:26px}
.why-item{display:flex;gap:14px;margin-bottom:20px;align-items:flex-start}
.why-item:last-child{margin-bottom:0}
.why-num{flex-shrink:0;width:26px;height:26px;border-radius:50%;background:var(--gold);color:var(--navy);font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;margin-top:1px}
.why-txt{font-size:13.5px;color:var(--muted);line-height:1.65}
.why-txt strong{color:var(--white)}

/* ── S4 DENSITY ── */
.density-stmt{font-size:clamp(17px,2.8vw,28px);font-weight:700;color:var(--white);max-width:820px;margin:0 auto 48px;line-height:1.5;text-align:center}
.density-stmt em{color:var(--gold);font-style:normal}
.density-stats{display:flex;flex-wrap:wrap;justify-content:center;max-width:680px;margin:0 auto;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:var(--border)}
.d-stat{flex:1 1 160px;background:rgba(255,255,255,.03);padding:28px 20px;text-align:center}
.d-val{font-size:38px;font-weight:900;color:var(--gold);line-height:1;margin-bottom:8px}
.d-lbl{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}

/* ── S5 PORTFOLIOS ── */
.p-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:48px}
@media(max-width:900px){.p-grid{grid-template-columns:1fr}}
.p-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;padding:30px;display:flex;flex-direction:column;gap:22px;transition:border-color .2s}
.p-card:hover{border-color:var(--border-g)}
.p-hdr{display:flex;align-items:flex-start;gap:14px}
.p-letter{flex-shrink:0;width:50px;height:50px;border-radius:50%;background:var(--gold);color:var(--navy);font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center}
.p-title{font-size:17px;font-weight:800;color:var(--white);line-height:1.2;margin-bottom:3px}
.p-meta{font-size:12px;color:var(--muted)}
.p-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pm{background:rgba(0,0,0,.2);border-radius:7px;padding:13px 14px}
.pm-val{font-size:17px;font-weight:800;color:var(--gold);line-height:1;margin-bottom:4px}
.pm-lbl{font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.pills{display:flex;flex-wrap:wrap;gap:5px}
.pill{display:inline-block;font-size:9.5px;font-weight:500;padding:3px 9px;background:rgba(255,255,255,.06);border:1px solid var(--border);border-radius:20px;color:var(--muted);white-space:nowrap}
details summary{cursor:pointer;font-size:11.5px;font-weight:600;color:var(--gold);letter-spacing:.04em;list-style:none;user-select:none}
details summary::-webkit-details-marker{display:none}
details summary::after{content:' ↓';font-size:10px}
details[open] summary::after{content:' ↑'}
.prop-wrap{overflow-x:auto;border-radius:6px;background:rgba(0,0,0,.18);margin-top:10px}
.prop-tbl{width:100%;border-collapse:collapse;font-size:11.5px;white-space:nowrap}
.prop-tbl th{padding:8px 10px;text-align:left;font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);border-bottom:1px solid var(--border)}
.prop-tbl td{padding:7px 10px;color:var(--muted);border-bottom:1px solid rgba(255,255,255,.04)}
.prop-tbl tr:last-child td{border-bottom:none}
.prop-tbl td:nth-child(3),.prop-tbl td:nth-child(4){color:var(--white);font-weight:600}
.p-cta{display:block;width:100%;padding:13px;background:transparent;border:1px solid var(--gold);color:var(--gold);text-align:center;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:6px;cursor:pointer;text-decoration:none;transition:background .2s,color .2s;margin-top:auto}
.p-cta:hover{background:var(--gold);color:var(--navy)}
.combined-bar{margin-top:24px;background:rgba(200,150,42,.06);border:1px solid var(--border-g);border-radius:10px;padding:22px 30px;font-size:13.5px;color:var(--muted);line-height:1.8}
.combined-bar strong{color:var(--gold);font-weight:800}

/* ── S6 PREMIUM ── */
.prem-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:40px}
@media(max-width:1100px){.prem-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:640px){.prem-grid{grid-template-columns:repeat(2,1fr)}}
.prem-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:22px 16px;display:flex;flex-direction:column;gap:12px;position:relative;transition:border-color .2s}
.prem-card:hover{border-color:var(--border-g)}
.prem-badge{position:absolute;top:11px;right:11px;font-size:8.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;background:var(--gold);color:var(--navy);padding:3px 7px;border-radius:3px}
.prem-addr{font-size:13px;font-weight:700;color:var(--white);line-height:1.3;padding-right:50px}
.prem-beds{font-size:11px;color:var(--muted)}
.prem-metrics{display:flex;flex-direction:column;gap:8px;margin-top:auto;padding-top:8px;border-top:1px solid var(--border)}
.prem-m{display:flex;justify-content:space-between;align-items:center;gap:8px}
.prem-m-lbl{font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.prem-m-val{font-size:13.5px;font-weight:800;color:var(--gold)}

/* ── S7 GENEVA ── */
.gen-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
@media(max-width:820px){.gen-grid{grid-template-columns:1fr;gap:40px}}
.gen-tag{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--navy);background:var(--gold);padding:4px 12px;border-radius:3px;margin-bottom:14px}
.gen-addr{font-size:22px;font-weight:800;color:var(--white);margin-bottom:6px;line-height:1.2}
.gen-specs{font-size:13.5px;color:var(--muted);margin-bottom:18px}
.gen-desc{font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:24px}
.adu-box{background:rgba(200,150,42,.05);border:1px solid var(--border-g);border-left:3px solid var(--gold);border-radius:0 8px 8px 0;padding:18px 20px}
.adu-ttl{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:8px}
.adu-txt{font-size:13px;color:var(--muted);line-height:1.75}
.gen-metrics{display:flex;flex-direction:column;gap:14px}
.gm{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:24px 26px}
.gm-val{font-size:clamp(22px,2.5vw,30px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:6px}
.gm-lbl{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.gm-note{font-size:11px;color:var(--faint)}

/* ── S8 WHY CANTON ── */
.wc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:48px}
@media(max-width:900px){.wc-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.wc-grid{grid-template-columns:1fr}}
.wc-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:26px 22px;transition:border-color .2s}
.wc-card:hover{border-color:var(--border-g)}
.wc-icon{font-size:26px;margin-bottom:14px;display:block}
.wc-title{font-size:15px;font-weight:800;color:var(--white);margin-bottom:10px;line-height:1.3}
.wc-txt{font-size:13px;color:var(--muted);line-height:1.75}

/* ── S9 FINANCIALS ── */
.fin-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:40px;max-width:820px}
@media(max-width:600px){.fin-grid{grid-template-columns:1fr}}
.fin-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:26px;display:flex;flex-direction:column;gap:10px;transition:border-color .2s}
.fin-card:hover{border-color:var(--border-g)}
.fin-icon{font-size:22px}
.fin-title{font-size:15px;font-weight:800;color:var(--white)}
.fin-desc{font-size:13px;color:var(--muted);line-height:1.65;flex:1}
.fin-btn{display:inline-block;padding:9px 18px;background:transparent;border:1px solid var(--border);color:var(--muted);font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:5px;cursor:pointer;text-decoration:none;align-self:flex-start;transition:border-color .2s,color .2s}
.fin-btn:hover{border-color:var(--gold);color:var(--gold)}

/* ── S10 CONTACT ── */
.contact-inner{max-width:660px;margin:0 auto;text-align:center}
.form{margin-top:40px;text-align:left;display:flex;flex-direction:column;gap:14px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:520px){.f-row{grid-template-columns:1fr}}
.fg{display:flex;flex-direction:column;gap:6px}
.fg label{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.fg input,.fg select{background:rgba(255,255,255,.05);border:1px solid var(--border);border-radius:6px;padding:12px 15px;font-size:14px;color:var(--white);font-family:inherit;outline:none;transition:border-color .2s;width:100%;-webkit-appearance:none;appearance:none}
.fg select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='7'%3E%3Cpath fill='rgba(255,255,255,.35)' d='M5 7L0 0h10z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center;padding-right:34px}
.fg select option{background:#0d1f35;color:#fff}
.fg input::placeholder{color:rgba(255,255,255,.2)}
.fg input:focus,.fg select:focus{border-color:var(--gold)}
.btn-sub{display:block;width:100%;padding:16px;background:var(--gold);color:var(--navy);font-size:12.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;border:none;border-radius:7px;cursor:pointer;font-family:inherit;transition:background .2s;margin-top:6px}
.btn-sub:hover{background:var(--gold-lt)}
.form-note{font-size:11px;color:var(--faint);text-align:center;line-height:1.6;margin-top:6px}
.form-ty{text-align:center;padding:48px 24px}
.form-ty__check{font-size:36px;margin-bottom:16px}
.form-ty__h{font-size:22px;font-weight:800;color:var(--gold);margin-bottom:10px}
.form-ty__p{font-size:15px;color:var(--muted)}

/* ── FOOTER ── */
.footer{background:rgba(0,0,0,.35);border-top:1px solid var(--border);padding:22px 40px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px}
.footer__copy{font-size:11.5px;color:var(--faint)}
.footer__tenant{font-size:11px;color:var(--faint);text-decoration:none;letter-spacing:.04em;transition:color .2s}
.footer__tenant:hover{color:var(--muted)}
</style>

<!-- ══ NAV ══ -->
<nav class="nav">
  <a class="nav__logo" href="/">
    <img src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals"/>
  </a>
  <a class="nav__link" href="#portfolios">Portfolios</a>
  <a class="nav__link" href="#geneva">Geneva STR</a>
  <a class="nav__link" href="#financials">Financials</a>
  <a class="nav__link" href="#why-canton">Why Canton</a>
  <a class="nav__cta" href="#contact">Request Info</a>
</nav>

<!-- ══ S1 HERO ══ -->
<section class="hero" id="hero">
  <span class="hero__eye">Canton, Ohio · Portfolio Offering · 2025</span>
  <h1 class="hero__h1">45 Single-Family Rental Homes<br/>Canton, Ohio</h1>
  <p class="hero__sub">A fully stabilized, 100% occupied portfolio available as four investor sub-portfolios, five premium individual assets, or a single bulk acquisition.</p>
  <div class="kpi-strip">
    <div class="kpi-box">
      <div class="kpi-val">45</div>
      <div class="kpi-lbl">Total Properties</div>
      <div class="kpi-note">44 Canton LTR + 1 Geneva STR</div>
    </div>
    <div class="kpi-box">
      <div class="kpi-val">$62,882</div>
      <div class="kpi-lbl">Monthly Rent</div>
      <div class="kpi-note">100% occupancy</div>
    </div>
    <div class="kpi-box">
      <div class="kpi-val">$754,580</div>
      <div class="kpi-lbl">Annual Gross Rent</div>
      <div class="kpi-note">All 45 properties</div>
    </div>
    <div class="kpi-box">
      <div class="kpi-val">$555,385</div>
      <div class="kpi-lbl">2025 NOI</div>
      <div class="kpi-note">44 Canton properties</div>
    </div>
  </div>
</section>

<!-- ══ S2 SUMMARY ══ -->
<section class="sec" id="summary" style="background:var(--navy-mid);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Full Portfolio Summary</div>
    <h2 class="sec-h2">The Complete Offering</h2>
    <div class="sum-grid">
      <div class="sum-box">
        <div class="sum-val">45</div>
        <div class="sum-lbl">Total Properties</div>
        <div class="sum-note">44 Canton LTR + 1 Geneva STR</div>
      </div>
      <div class="sum-box">
        <div class="sum-val">$62,882</div>
        <div class="sum-lbl">Combined Monthly Rent</div>
        <div class="sum-note">100% occupied</div>
      </div>
      <div class="sum-box">
        <div class="sum-val">$754,580</div>
        <div class="sum-lbl">Combined Annual Rent</div>
        <div class="sum-note">All 45 properties</div>
      </div>
      <div class="sum-box">
        <div class="sum-val">$555,385</div>
        <div class="sum-lbl">2025 Canton NOI</div>
        <div class="sum-note">44 LTR properties</div>
      </div>
    </div>
    <div class="price-bar">
      <div>
        <div class="price-ask">$6,948,000</div>
        <div class="price-break">Combined Asking Price &nbsp;&middot;&nbsp; Canton $6,599,000 + Geneva $349,000</div>
      </div>
      <a class="price-btn" href="https://www.crexi.com/properties/1746554/ohio-canton-oh-44-sfh-portfolio" target="_blank">
        View Full Commercial Listing on CREXI &rarr;
      </a>
    </div>
  </div>
</section>

<!-- ══ S3 OPPORTUNITY ══ -->
<section class="sec" id="opportunity" style="background:var(--navy)">
  <div class="wrap">
    <div class="opp-grid">
      <div>
        <div class="sec-lbl">The Opportunity</div>
        <h2 class="sec-h2">A Stabilized, Income-Producing Portfolio</h2>
        <div class="bar"></div>
        <p class="sec-sub">44 single-family rental homes across Canton&rsquo;s most supply-constrained neighborhoods. Every property is occupied, managed, and generating verified cash flow as of 2025.</p>
        <div class="opp-stats">
          <div class="opp-stat">
            <div class="os-val">100%</div>
            <div class="os-lbl">Occupancy Rate</div>
          </div>
          <div class="opp-stat">
            <div class="os-val">$1,380</div>
            <div class="os-lbl">Avg Rent / Door / Mo</div>
          </div>
          <div class="opp-stat">
            <div class="os-val">$555,385</div>
            <div class="os-lbl">2025 Net Operating Income</div>
          </div>
          <div class="opp-stat">
            <div class="os-val">Newly Remodeled</div>
            <div class="os-lbl">All Homes</div>
          </div>
        </div>
      </div>
      <div class="why-box">
        <div class="why-ttl">Why Buy This Portfolio</div>
        <div class="why-item">
          <div class="why-num">1</div>
          <div class="why-txt"><strong>Turnkey with built-in property management</strong> &mdash; day one income, no setup required.</div>
        </div>
        <div class="why-item">
          <div class="why-num">2</div>
          <div class="why-txt"><strong>Unmatched geographic density</strong> &mdash; all homes walkable from each other, a route-efficient operating cluster impossible to replicate.</div>
        </div>
        <div class="why-item">
          <div class="why-num">3</div>
          <div class="why-txt"><strong>Multiple acquisition formats</strong> &mdash; single portfolio (9&ndash;11 homes), full bulk purchase, or premium individual assets.</div>
        </div>
        <div class="why-item">
          <div class="why-num">4</div>
          <div class="why-txt"><strong>Opportunity Zone exposure</strong> &mdash; many properties fall within designated OZs, potential tax advantages for qualifying investors.</div>
        </div>
        <div class="why-item">
          <div class="why-num">5</div>
          <div class="why-txt"><strong>Verified 2025 financials</strong> available to qualified buyers upon request.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ S4 DENSITY ══ -->
<section class="sec" id="density" style="background:linear-gradient(135deg,#0a1e38,#0d1f35);border-top:1px solid var(--border-g);border-bottom:1px solid var(--border-g)">
  <div class="wrap">
    <p class="density-stmt">Every one of these 39 clustered homes sits <em>within walking distance</em> of the others. The route efficiency of this geographic cluster is <em>impossible to replicate</em> &mdash; this is a self-managing operating organism, not a scattered portfolio.</p>
    <div class="density-stats">
      <div class="d-stat">
        <div class="d-val">4</div>
        <div class="d-lbl">Geographic Clusters</div>
      </div>
      <div class="d-stat">
        <div class="d-val">&lt;5 mi</div>
        <div class="d-lbl">Total Spread</div>
      </div>
      <div class="d-stat">
        <div class="d-val">39</div>
        <div class="d-lbl">Homes Across 4 Clusters</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ S5 PORTFOLIOS ══ -->
<section class="sec" id="portfolios" style="background:var(--navy-mid)">
  <div class="wrap">
    <div class="sec-lbl">Investor Portfolios</div>
    <h2 class="sec-h2">The Four Sub-Portfolios</h2>
    <p class="sec-sub">Each portfolio is a geographically tight cluster, fully occupied, and available independently or as part of a bulk acquisition.</p>
    <div class="p-grid">

      <!-- PORTFOLIO A -->
      <div class="p-card">
        <div class="p-hdr">
          <div class="p-letter">A</div>
          <div>
            <div class="p-title">West / 44708 &amp; Outlier Cluster</div>
            <div class="p-meta">9 homes &nbsp;&middot;&nbsp; ZIP 44708 / 44709 / 44706</div>
          </div>
        </div>
        <div class="p-metrics">
          <div class="pm"><div class="pm-val">$11,700</div><div class="pm-lbl">Monthly Rent</div></div>
          <div class="pm"><div class="pm-val">$140,400</div><div class="pm-lbl">Annual Rent</div></div>
          <div class="pm"><div class="pm-val">$1,300/mo</div><div class="pm-lbl">Avg / Door</div></div>
          <div class="pm"><div class="pm-val">$114,396</div><div class="pm-lbl">2025 NOI &middot; 83.4%</div></div>
        </div>
        <div class="pills">
          <span class="pill">806 23rd St NW</span><span class="pill">818 25th St NW</span><span class="pill">2007 Kirk Ct NW</span>
          <span class="pill">426 Vince Ave NW</span><span class="pill">2923 Helen Pl NW</span><span class="pill">635 Greenfield Ave SW</span>
          <span class="pill">307 Bellflower Ave NW</span><span class="pill">1502 37th St NW</span><span class="pill">2945 15th St NW</span>
        </div>
        <details>
          <summary>View all properties</summary>
          <div class="prop-wrap">
            <table class="prop-tbl">
              <thead><tr><th>Address</th><th>Bed/Bath</th><th>Mo. Rent</th><th>2025 NOI</th></tr></thead>
              <tbody>
                <tr><td>806 23rd St NW</td><td>2bd/1ba</td><td>$1,200</td><td>$13,027</td></tr>
                <tr><td>818 25th St NW</td><td>3bd/1ba</td><td>$1,250</td><td>$13,871</td></tr>
                <tr><td>2007 Kirk Ct NW</td><td>3bd/1ba</td><td>$1,350</td><td>$11,264</td></tr>
                <tr><td>426 Vince Ave NW</td><td>3bd/2ba</td><td>$1,550</td><td>$16,364</td></tr>
                <tr><td>2923 Helen Pl NW</td><td>3bd/1ba</td><td>$1,350</td><td>$12,352</td></tr>
                <tr><td>635 Greenfield Ave SW</td><td>2bd/2ba</td><td>$1,150</td><td>$12,501</td></tr>
                <tr><td>307 Bellflower Ave NW</td><td>3bd/1.5ba</td><td>$1,425</td><td>$8,956</td></tr>
                <tr><td>1502 37th St NW</td><td>3bd/1ba</td><td>$1,125</td><td>$12,878</td></tr>
                <tr><td>2945 15th St NW</td><td>3bd/1ba</td><td>$1,300</td><td>$13,183</td></tr>
              </tbody>
            </table>
          </div>
        </details>
        <a class="p-cta" href="#contact">Request Due Diligence Packet</a>
      </div>

      <!-- PORTFOLIO B -->
      <div class="p-card">
        <div class="p-hdr">
          <div class="p-letter">B</div>
          <div>
            <div class="p-title">NW 21st&ndash;24th Operating Cluster</div>
            <div class="p-meta">10 homes &nbsp;&middot;&nbsp; ZIP 44709 / 44703</div>
          </div>
        </div>
        <div class="p-metrics">
          <div class="pm"><div class="pm-val">$13,325</div><div class="pm-lbl">Monthly Rent</div></div>
          <div class="pm"><div class="pm-val">$159,900</div><div class="pm-lbl">Annual Rent</div></div>
          <div class="pm"><div class="pm-val">$1,332/mo</div><div class="pm-lbl">Avg / Door</div></div>
          <div class="pm"><div class="pm-val">$108,646</div><div class="pm-lbl">2025 NOI &middot; 71.5%</div></div>
        </div>
        <div class="pills">
          <span class="pill">519 21st St NW</span><span class="pill">523 21st St NW</span><span class="pill">1430 19th St NW</span>
          <span class="pill">1919 Frazer Ave NW</span><span class="pill">1708 18th St NW</span><span class="pill">244 Harter Ave NW</span>
          <span class="pill">800 22nd St NW</span><span class="pill">1511 23rd St NW</span><span class="pill">1734 Woodland Ave NW</span>
          <span class="pill">725 22nd St NW</span>
        </div>
        <details>
          <summary>View all properties</summary>
          <div class="prop-wrap">
            <table class="prop-tbl">
              <thead><tr><th>Address</th><th>Bed/Bath</th><th>Mo. Rent</th><th>2025 NOI</th></tr></thead>
              <tbody>
                <tr><td>519 21st St NW</td><td>3bd/1ba</td><td>$1,385</td><td>$13,057</td></tr>
                <tr><td>523 21st St NW</td><td>3bd/1ba</td><td>$1,200</td><td>$11,842</td></tr>
                <tr><td>1430 19th St NW</td><td>3bd/1ba</td><td>$1,325</td><td>$14,868</td></tr>
                <tr><td>1919 Frazer Ave NW</td><td>3bd/2ba</td><td>$1,450</td><td>$8,702</td></tr>
                <tr><td>1708 18th St NW</td><td>3bd/2ba</td><td>$1,300</td><td>$12,028</td></tr>
                <tr><td>244 Harter Ave NW</td><td>4bd/1.5ba</td><td>$1,640</td><td>$14,927</td></tr>
                <tr><td>800 22nd St NW</td><td>4bd/1.5ba</td><td>$1,450</td><td>$12,097</td></tr>
                <tr><td>1511 23rd St NW</td><td>3bd/2ba</td><td>$1,300</td><td>$10,462</td></tr>
                <tr><td>1734 Woodland Ave NW</td><td>3bd/1ba</td><td>$975</td><td>$10,253</td></tr>
                <tr><td>725 22nd St NW</td><td>3bd/1ba</td><td>$1,300</td><td>$410</td></tr>
              </tbody>
            </table>
          </div>
        </details>
        <a class="p-cta" href="#contact">Request Due Diligence Packet</a>
      </div>

      <!-- PORTFOLIO C -->
      <div class="p-card">
        <div class="p-hdr">
          <div class="p-letter">C</div>
          <div>
            <div class="p-title">NW 25th&ndash;27th Density Cluster</div>
            <div class="p-meta">9 homes &nbsp;&middot;&nbsp; ZIP 44709</div>
          </div>
        </div>
        <div class="p-metrics">
          <div class="pm"><div class="pm-val">$11,615</div><div class="pm-lbl">Monthly Rent</div></div>
          <div class="pm"><div class="pm-val">$139,380</div><div class="pm-lbl">Annual Rent</div></div>
          <div class="pm"><div class="pm-val">$1,291/mo</div><div class="pm-lbl">Avg / Door</div></div>
          <div class="pm"><div class="pm-val">$103,624</div><div class="pm-lbl">2025 NOI &middot; 75.9%</div></div>
        </div>
        <div class="pills">
          <span class="pill">1338 25th St NW</span><span class="pill">1344 24th St NW</span><span class="pill">1540 Norwood Pl NW</span>
          <span class="pill">1507 Ridgeway Pl NW</span><span class="pill">1569 25th St NW</span><span class="pill">1600 27th St NW</span>
          <span class="pill">1701 27th St NW</span><span class="pill">1341 Ridgeway Pl NW</span><span class="pill">1611 25th St NW</span>
        </div>
        <details>
          <summary>View all properties</summary>
          <div class="prop-wrap">
            <table class="prop-tbl">
              <thead><tr><th>Address</th><th>Bed/Bath</th><th>Mo. Rent</th><th>2025 NOI</th></tr></thead>
              <tbody>
                <tr><td>1338 25th St NW</td><td>3bd/2ba</td><td>$1,400</td><td>$15,656</td></tr>
                <tr><td>1344 24th St NW</td><td>3bd/3ba</td><td>$1,330</td><td>$7,595</td></tr>
                <tr><td>1540 Norwood Pl NW</td><td>3bd/1ba</td><td>$1,260</td><td>$13,498</td></tr>
                <tr><td>1507 Ridgeway Pl NW</td><td>3bd/1ba</td><td>$1,250</td><td>$12,099</td></tr>
                <tr><td>1569 25th St NW</td><td>3bd/1ba</td><td>$1,275</td><td>$12,630</td></tr>
                <tr><td>1600 27th St NW</td><td>4bd/2ba</td><td>$1,400</td><td>$15,400</td></tr>
                <tr><td>1701 27th St NW</td><td>3bd/1ba</td><td>$1,250</td><td>$13,314</td></tr>
                <tr><td>1341 Ridgeway Pl NW</td><td>3bd/2ba</td><td>$1,250</td><td>$6,579</td></tr>
                <tr><td>1611 25th St NW</td><td>3bd/1ba</td><td>$1,200</td><td>$6,853</td></tr>
              </tbody>
            </table>
          </div>
        </details>
        <a class="p-cta" href="#contact">Request Due Diligence Packet</a>
      </div>

      <!-- PORTFOLIO D -->
      <div class="p-card">
        <div class="p-hdr">
          <div class="p-letter">D</div>
          <div>
            <div class="p-title">NE / Market-Colonial Cluster</div>
            <div class="p-meta">11 homes &nbsp;&middot;&nbsp; ZIP 44714</div>
          </div>
        </div>
        <div class="p-metrics">
          <div class="pm"><div class="pm-val">$14,965</div><div class="pm-lbl">Monthly Rent</div></div>
          <div class="pm"><div class="pm-val">$179,580</div><div class="pm-lbl">Annual Rent</div></div>
          <div class="pm"><div class="pm-val">$1,360/mo</div><div class="pm-lbl">Avg / Door</div></div>
          <div class="pm"><div class="pm-val">$132,742</div><div class="pm-lbl">2025 NOI &middot; 75.6%</div></div>
        </div>
        <div class="pills">
          <span class="pill">1210 25th St NE</span><span class="pill">1207 Colonial Blvd NE</span><span class="pill">1335 22nd St NE</span>
          <span class="pill">1206 24th St NE</span><span class="pill">1012 28th St NE</span><span class="pill">1219 24th St NE</span>
          <span class="pill">1330 24th St NE</span><span class="pill">804 29th St NE</span><span class="pill">1326 24th St NE</span>
          <span class="pill">1203 25th St NE</span><span class="pill">1306 22nd St NE</span>
        </div>
        <details>
          <summary>View all properties</summary>
          <div class="prop-wrap">
            <table class="prop-tbl">
              <thead><tr><th>Address</th><th>Bed/Bath</th><th>Mo. Rent</th><th>2025 NOI</th></tr></thead>
              <tbody>
                <tr><td>1210 25th St NE</td><td>3bd/1ba</td><td>$1,390</td><td>$14,821</td></tr>
                <tr><td>1207 Colonial Blvd NE</td><td>3bd/1ba</td><td>$1,350</td><td>$8,206</td></tr>
                <tr><td>1335 22nd St NE</td><td>3bd/1ba</td><td>$1,220</td><td>$12,632</td></tr>
                <tr><td>1206 24th St NE</td><td>4bd/1.5ba</td><td>$1,625</td><td>$18,043</td></tr>
                <tr><td>1012 28th St NE</td><td>4bd/2ba</td><td>$1,450</td><td>$10,102</td></tr>
                <tr><td>1219 24th St NE</td><td>4bd/2ba</td><td>$1,320</td><td>$11,046</td></tr>
                <tr><td>1330 24th St NE</td><td>3bd/2ba</td><td>$1,325</td><td>$11,461</td></tr>
                <tr><td>804 29th St NE</td><td>4bd/2ba</td><td>$1,450</td><td>$13,669</td></tr>
                <tr><td>1326 24th St NE</td><td>4bd/1ba</td><td>$1,140</td><td>$11,616</td></tr>
                <tr><td>1203 25th St NE</td><td>3bd/1ba</td><td>$1,200</td><td>$11,361</td></tr>
                <tr><td>1306 22nd St NE</td><td>4bd/1.5ba</td><td>$1,495</td><td>$9,785</td></tr>
              </tbody>
            </table>
          </div>
        </details>
        <a class="p-cta" href="#contact">Request Due Diligence Packet</a>
      </div>

    </div><!-- /p-grid -->

    <div class="combined-bar">
      <strong>All 4 Portfolios Combined &mdash; 39 Homes:</strong>
      &nbsp; $51,605/mo &nbsp;&middot;&nbsp; $619,260/yr &nbsp;&middot;&nbsp; $1,323 avg per door &nbsp;&middot;&nbsp;
      <strong>2025 Combined NOI: $459,408</strong>
    </div>

  </div>
</section>

<!-- ══ S6 PREMIUM ASSETS ══ -->
<section class="sec" id="premium" style="background:var(--navy);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Individual Acquisitions</div>
    <h2 class="sec-h2">Premium Individual Assets &mdash; Available Separately</h2>
    <p class="sec-sub">Five stand-alone homes with above-average rents, strong NOI, and renovation quality that sets them apart from the cluster portfolios.</p>
    <div class="prem-grid">
      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">300 Montrose Ave NW</div>
        <div class="prem-beds">5 bed / 2 bath</div>
        <div class="prem-metrics">
          <div class="prem-m"><span class="prem-m-lbl">Mo. Rent</span><span class="prem-m-val">$2,300</span></div>
          <div class="prem-m"><span class="prem-m-lbl">2025 NOI</span><span class="prem-m-val">$22,309</span></div>
        </div>
      </div>
      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">2631 Demington Ave NW</div>
        <div class="prem-beds">3 bed / 2 bath</div>
        <div class="prem-metrics">
          <div class="prem-m"><span class="prem-m-lbl">Mo. Rent</span><span class="prem-m-val">$2,000</span></div>
          <div class="prem-m"><span class="prem-m-lbl">2025 NOI</span><span class="prem-m-val">$42,941</span></div>
        </div>
      </div>
      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">1103 22nd St NE</div>
        <div class="prem-beds">4 bed / 2.5 bath</div>
        <div class="prem-metrics">
          <div class="prem-m"><span class="prem-m-lbl">Mo. Rent</span><span class="prem-m-val">$1,800</span></div>
          <div class="prem-m"><span class="prem-m-lbl">2025 NOI</span><span class="prem-m-val">$14,909</span></div>
        </div>
      </div>
      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">225 Grandview Ave NW</div>
        <div class="prem-beds">4 bed / 2.5 bath</div>
        <div class="prem-metrics">
          <div class="prem-m"><span class="prem-m-lbl">Mo. Rent</span><span class="prem-m-val">$1,600</span></div>
          <div class="prem-m"><span class="prem-m-lbl">2025 NOI</span><span class="prem-m-val">$15,818</span></div>
        </div>
      </div>
      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">903 23rd St NW</div>
        <div class="prem-beds">4 bed / 1.5 bath</div>
        <div class="prem-metrics">
          <div class="prem-m"><span class="prem-m-lbl">Mo. Rent</span><span class="prem-m-val">$1,410</span></div>
          <div class="prem-m"><span class="prem-m-lbl">2025 NOI</span><span class="prem-m-val" style="font-size:11px;color:var(--muted)">Upon Request</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ S7 GENEVA ══ -->
<section class="sec" id="geneva" style="background:var(--navy-mid);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="gen-grid">
      <div>
        <span class="gen-tag">Airbnb Superhost &middot; Turnkey STR</span>
        <div class="gen-addr">5192 University Dr<br/>Geneva, OH 44041</div>
        <div class="gen-specs">2 bed &nbsp;/&nbsp; 1 bath &nbsp;/&nbsp; 2,300 sq ft &nbsp;/&nbsp; Sleeps 8</div>
        <p class="gen-desc">Fully turnkey &mdash; all furniture, d&eacute;cor, and electronics stay. Steps from the GOTL strip, Ohio&rsquo;s oldest beach boardwalk. Within 7 miles of I-90. 37 wineries within 20 minutes. Current ownership is an Airbnb Superhost with some of the highest guest ratings in the county.</p>
        <div class="adu-box">
          <div class="adu-ttl">ADU Conversion Opportunity</div>
          <div class="adu-txt">The detached garage already has a walk-out second-story door, support pillars, new windows, full insulation, and updated electrical. Ready to convert to a 2-bed/1-bath second unit. Local comparables suggest this addition would double annual gross revenue &mdash; creating a &ldquo;sleep 16&rdquo; arrangement impossible to find in GOTL. Rent it with the house or separately.</div>
        </div>
      </div>
      <div class="gen-metrics">
        <div class="gm">
          <div class="gm-val">$26,000</div>
          <div class="gm-lbl">2024 Gross Revenue</div>
          <div class="gm-note">$2,167/mo equivalent</div>
        </div>
        <div class="gm">
          <div class="gm-val">$52,000</div>
          <div class="gm-lbl">ARV Gross Revenue</div>
          <div class="gm-note">Projected with ADU addition</div>
        </div>
        <div class="gm">
          <div class="gm-val">$349,000</div>
          <div class="gm-lbl">Asking Price</div>
          <div class="gm-note">Turnkey &mdash; all contents included</div>
        </div>
        <a class="p-cta" href="#contact" style="margin-top:4px">Request Info on Geneva STR</a>
      </div>
    </div>
  </div>
</section>

<!-- ══ S8 WHY CANTON ══ -->
<section class="sec" id="why-canton" style="background:var(--navy);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Market Fundamentals</div>
    <h2 class="sec-h2">Why Canton, Ohio</h2>
    <p class="sec-sub">Six demand drivers within 5 miles of every property in this portfolio.</p>
    <div class="wc-grid">
      <div class="wc-card"><span class="wc-icon">&#127944;</span><div class="wc-title">Pro Football Hall of Fame Village</div><div class="wc-txt">All properties within 2 miles. A multi-phase development bringing a waterpark, hotels, restaurants, retail, and gaming. Hundreds of new service-industry jobs directly expand the renter pool.</div></div>
      <div class="wc-card"><span class="wc-icon">&#127973;</span><div class="wc-title">Two Major Hospital Systems</div><div class="wc-txt">Cleveland Clinic Mercy and Aultman Hospital are within 5 miles of all homes. Combined 10,000 employees. Traveling nurses and healthcare workers provide strong rental demand year-round.</div></div>
      <div class="wc-card"><span class="wc-icon">&#128230;</span><div class="wc-title">Amazon Distribution Center</div><div class="wc-txt">A major Amazon fulfillment center a few miles away sustains 1,000+ workers, the majority of whom are renters. Consistent, low-variance demand anchor.</div></div>
      <div class="wc-card"><span class="wc-icon">&#127979;</span><div class="wc-title">Four Colleges &amp; Universities</div><div class="wc-txt">Malone University, Walsh University, Stark State College, and Kent State Stark create a steady stream of students and post-graduate renters every year.</div></div>
      <div class="wc-card"><span class="wc-icon">&#128717;</span><div class="wc-title">Belden Village Shopping Corridor</div><div class="wc-txt">One of Ohio&rsquo;s densest retail and restaurant corridors. 80+ retail shops and 90+ restaurants within 5 miles including Gervasi Vineyard. Large and growing service-worker renter base.</div></div>
      <div class="wc-card"><span class="wc-icon">&#127963;</span><div class="wc-title">Opportunity Zones</div><div class="wc-txt">Many of these properties fall within federally designated Opportunity Zones, providing potential capital gains tax deferral and exemption benefits for qualifying investors.</div></div>
    </div>
  </div>
</section>

<!-- ══ S9 FINANCIALS ══ -->
<section class="sec" id="financials" style="background:var(--navy-mid);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Due Diligence</div>
    <h2 class="sec-h2">Financial Documents</h2>
    <p class="sec-sub">Verified financials available to qualified buyers. Request access below &mdash; documents provided in PDF view only.</p>
    <div class="fin-grid">
      <div class="fin-card"><span class="fin-icon">&#128202;</span><div class="fin-title">2025 P&amp;L by Class</div><div class="fin-desc">Full year profit &amp; loss statement, all 44 Canton properties, broken out by property class and geographic cluster.</div><a class="fin-btn" href="#contact">Request Access</a></div>
      <div class="fin-card"><span class="fin-icon">&#128202;</span><div class="fin-title">2024 P&amp;L by Class</div><div class="fin-desc">Full year profit &amp; loss statement, all 44 Canton properties. Year-over-year comparison baseline for underwriting.</div><a class="fin-btn" href="#contact">Request Access</a></div>
      <div class="fin-card"><span class="fin-icon">&#128203;</span><div class="fin-title">2025 Rent Roll</div><div class="fin-desc">Per-property monthly rent breakdown for all 44 Canton homes as of 2025. Lease terms, tenant status, and unit details.</div><a class="fin-btn" href="#contact">Request Access</a></div>
      <div class="fin-card"><span class="fin-icon">&#128203;</span><div class="fin-title">2024 Rent Roll</div><div class="fin-desc">Per-property monthly rent breakdown for all 44 Canton homes, full calendar year 2024. Prior-year occupancy verification.</div><a class="fin-btn" href="#contact">Request Access</a></div>
    </div>
  </div>
</section>

<!-- ══ S10 CONTACT ══ -->
<section class="sec" id="contact" style="background:var(--navy);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="contact-inner">
      <div class="sec-lbl" style="display:block;text-align:center">Contact</div>
      <h2 class="sec-h2" style="text-align:center">Request the Due Diligence Packet</h2>
      <p class="sec-sub" style="max-width:100%;text-align:center">Access the rent roll, P&amp;L statements, and full due diligence packet. Tell us which portfolios interest you.</p>
      <form class="form" id="csh-contact-form" novalidate>
        <div class="f-row">
          <div class="fg"><label for="cf-name">Full Name</label><input id="cf-name" name="name" type="text" placeholder="John Smith" required/></div>
          <div class="fg"><label for="cf-company">Company / Entity</label><input id="cf-company" name="company" type="text" placeholder="Acme Capital LLC"/></div>
        </div>
        <div class="fg"><label for="cf-email">Email Address</label><input id="cf-email" name="email" type="email" placeholder="you@example.com" required/></div>
        <div class="f-row">
          <div class="fg"><label for="cf-phone">Phone Number</label><input id="cf-phone" name="phone" type="tel" placeholder="(555) 000-0000"/></div>
          <div class="fg">
            <label for="cf-portfolio">Portfolio of Interest</label>
            <select id="cf-portfolio" name="portfolio">
              <option value="">Select one&hellip;</option>
              <option>Portfolio A &mdash; West / 44708</option>
              <option>Portfolio B &mdash; NW 21st&ndash;24th</option>
              <option>Portfolio C &mdash; NW 25th&ndash;27th</option>
              <option>Portfolio D &mdash; NE / Market-Colonial</option>
              <option>Premium Individual Assets</option>
              <option>Geneva on the Lake STR</option>
              <option>Full Portfolio &mdash; All 45 Properties</option>
              <option>Multiple / Open to Discussion</option>
            </select>
          </div>
        </div>
        <div class="fg">
          <label for="cf-source">How did you hear about us?</label>
          <select id="cf-source" name="source">
            <option value="">Select one&hellip;</option>
            <option>Facebook / Social Media</option>
            <option>CREXI Listing</option>
            <option>Referral</option>
            <option>Auctioneer / Broker</option>
            <option>Other</option>
          </select>
        </div>
        <button class="btn-sub" type="submit">Request Rent Roll, P&amp;L &amp; Due Diligence Packet</button>
        <p class="form-note">All inquiries are confidential. Financial documents provided to qualified buyers only.</p>
      </form>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  <span class="footer__copy">&copy; 2025 CSH Rentals &nbsp;&middot;&nbsp; 1428 Market Ave. N., Canton, OH 44714 &nbsp;&middot;&nbsp; customstarkhomes@gmail.com</span>
  <a class="footer__tenant" href="/tenants">Tenant rental application &rarr;</a>
</footer>
`;

    var self = this;

    var form = self.querySelector('#csh-contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = (form.querySelector('#cf-name').value || 'there').split(' ')[0];
        form.innerHTML =
          '<div class="form-ty">' +
            '<div class="form-ty__check">&#10003;</div>' +
            '<h3 class="form-ty__h">Request Received, ' + name + '</h3>' +
            '<p class="form-ty__p">We\'ll be in touch within 1 business day with the due diligence packet.</p>' +
          '</div>';
      });
    }

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    self.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });
  }
}

customElements.define('csh-home', CshHome);
