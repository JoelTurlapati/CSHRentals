// @ts-nocheck
class CshInvestors extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
csh-investors{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;background:#0a1628;color:#fff;line-height:1.6}
:root{
  --navy:#0a1628;--navy-mid:#0d1f35;--navy-lt:#1a3557;
  --gold:#c8962a;--gold-lt:#dba83a;--gold-dk:#a67820;
  --white:#fff;--muted:rgba(255,255,255,.65);--faint:rgba(255,255,255,.38);
  --border:rgba(255,255,255,.10);--border-g:rgba(200,150,42,.28);
}

/* ── HEADER ── */
.hdr{background:rgba(10,22,40,.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;display:flex;align-items:center;height:68px;position:sticky;top:0;z-index:200}
.hdr img{height:38px;width:auto;display:block;cursor:pointer}
.hdr__back{margin-left:auto;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s}
.hdr__back:hover{color:var(--white)}
@media(max-width:640px){.hdr{padding:0 20px}}

/* ── HERO ── */
.hero{background:var(--navy);padding:72px 40px 60px;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(200,150,42,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(200,150,42,.025) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:160px;background:linear-gradient(transparent,var(--navy));pointer-events:none}
.hero__eye{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);border:1px solid var(--border-g);padding:5px 18px;border-radius:20px;margin-bottom:24px;position:relative;z-index:1}
.hero__h1{font-size:clamp(28px,5vw,58px);font-weight:900;color:var(--white);line-height:1.08;letter-spacing:-.025em;margin-bottom:18px;max-width:820px;margin-left:auto;margin-right:auto;position:relative;z-index:1}
.hero__sub{font-size:clamp(14px,1.8vw,17px);color:var(--muted);max-width:660px;line-height:1.75;margin:0 auto 52px;position:relative;z-index:1}
.kpi-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:10px;overflow:hidden;max-width:860px;margin:0 auto 28px;position:relative;z-index:1}
@media(max-width:600px){.kpi-strip{grid-template-columns:repeat(2,1fr)}}
.kpi{background:rgba(255,255,255,.03);padding:26px 14px;text-align:center}
.kpi__val{font-size:clamp(20px,2.6vw,32px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:7px}
.kpi__lbl{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.kpi__note{font-size:10px;color:var(--faint)}
.price-bar{background:linear-gradient(135deg,#0e2448,#0d1f35);border:1px solid var(--border-g);border-radius:10px;padding:24px 32px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;max-width:860px;margin:0 auto;position:relative;z-index:1}
.price-bar__ask{font-size:clamp(24px,3.5vw,42px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:5px}
.price-bar__break{font-size:12.5px;color:var(--muted)}
.price-bar__btn{display:inline-block;padding:12px 24px;background:var(--gold);color:var(--navy);font-size:12px;font-weight:800;letter-spacing:.05em;text-decoration:none;border-radius:6px;white-space:nowrap;transition:background .2s}
.price-bar__btn:hover{background:var(--gold-lt)}

/* ── SECTION SHARED ── */
.sec{padding:72px 40px}
@media(max-width:768px){.sec{padding:56px 24px}}
.wrap{max-width:1200px;margin:0 auto}
.sec-lbl{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
.sec-h2{font-size:clamp(22px,3.2vw,38px);font-weight:800;color:var(--white);line-height:1.12;letter-spacing:-.02em;margin-bottom:12px}
.sec-sub{font-size:15px;color:var(--muted);line-height:1.75;max-width:640px}
.divbar{width:44px;height:3px;background:var(--gold);margin-bottom:22px}

/* ── WHY BUY THIS ── */
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
@media(max-width:820px){.why-grid{grid-template-columns:1fr;gap:40px}}
.why-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:28px}
.wstat{background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:8px;padding:18px 14px;text-align:center}
.wstat__val{font-size:16px;font-weight:800;color:var(--gold);margin-bottom:5px;line-height:1.2}
.wstat__lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.why-box{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:30px}
.why-box__ttl{font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:24px}
.why-item{display:flex;gap:14px;margin-bottom:18px;align-items:flex-start}
.why-item:last-child{margin-bottom:0}
.why-num{flex-shrink:0;width:26px;height:26px;border-radius:50%;background:var(--gold);color:var(--navy);font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;margin-top:1px}
.why-txt{font-size:13.5px;color:var(--muted);line-height:1.65}
.why-txt strong{color:var(--white)}

/* ── PORTFOLIO CARDS ── */
.p-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:44px}
@media(max-width:900px){.p-grid{grid-template-columns:1fr}}
.p-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .2s}
.p-card:hover{border-color:var(--border-g)}
.p-card__img{width:100%;height:180px;object-fit:cover;display:block}
.p-card__body{padding:24px;flex:1;display:flex;flex-direction:column;gap:18px}
.p-card__hdr{display:flex;align-items:flex-start;gap:12px}
.p-letter{flex-shrink:0;width:46px;height:46px;border-radius:50%;background:var(--gold);color:var(--navy);font-size:18px;font-weight:900;display:flex;align-items:center;justify-content:center}
.p-title{font-size:16px;font-weight:800;color:var(--white);line-height:1.2;margin-bottom:3px}
.p-meta{font-size:11.5px;color:var(--muted)}
.p-metrics{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pm{background:rgba(0,0,0,.2);border-radius:6px;padding:11px 13px}
.pm__val{font-size:16px;font-weight:800;color:var(--gold);line-height:1;margin-bottom:3px}
.pm__lbl{font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
/* property list */
.p-homes{list-style:none;display:flex;flex-direction:column;gap:0}
.p-homes li{font-size:12px;color:var(--muted);padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);display:flex;justify-content:space-between;align-items:center;gap:8px}
.p-homes li:last-child{border-bottom:none}
.p-homes li span{font-size:11px;color:var(--gold);font-weight:600;white-space:nowrap}
.p-homes li em{font-size:10px;color:var(--faint);font-style:normal}
/* expandable table */
details summary{cursor:pointer;font-size:11.5px;font-weight:600;color:var(--gold);letter-spacing:.04em;list-style:none;user-select:none;padding:2px 0}
details summary::-webkit-details-marker{display:none}
details summary::after{content:' ↓';font-size:10px}
details[open] summary::after{content:' ↑'}
.tbl-wrap{overflow-x:auto;border-radius:6px;background:rgba(0,0,0,.18);margin-top:8px}
.ptbl{width:100%;border-collapse:collapse;font-size:11px;white-space:nowrap}
.ptbl th{padding:7px 9px;text-align:left;font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);border-bottom:1px solid var(--border)}
.ptbl td{padding:6px 9px;color:var(--muted);border-bottom:1px solid rgba(255,255,255,.04)}
.ptbl tr:last-child td{border-bottom:none}
.ptbl td:nth-child(3),.ptbl td:nth-child(4){color:var(--white);font-weight:600}
/* cta */
.p-cta{display:block;width:100%;padding:12px;background:var(--gold);color:var(--navy);text-align:center;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;border:none;border-radius:6px;cursor:pointer;text-decoration:none;transition:background .2s;margin-top:auto}
.p-cta:hover{background:var(--gold-lt)}
/* combined bar */
.combined{margin-top:22px;background:rgba(200,150,42,.06);border:1px solid var(--border-g);border-radius:10px;padding:20px 28px;font-size:13.5px;color:var(--muted);line-height:1.8}
.combined strong{color:var(--gold);font-weight:800}

/* ── PREMIUM ASSETS ── */
.prem-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:36px}
@media(max-width:1100px){.prem-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:640px){.prem-grid{grid-template-columns:repeat(2,1fr)}}
.prem-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:20px 16px;display:flex;flex-direction:column;gap:10px;position:relative;transition:border-color .2s}
.prem-card:hover{border-color:var(--border-g)}
.prem-badge{position:absolute;top:10px;right:10px;font-size:8px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;background:var(--gold);color:var(--navy);padding:3px 7px;border-radius:3px}
.prem-addr{font-size:13px;font-weight:700;color:var(--white);line-height:1.3;padding-right:48px}
.prem-beds{font-size:11px;color:var(--muted)}
.prem-metrics{display:flex;flex-direction:column;gap:7px;margin-top:auto;padding-top:8px;border-top:1px solid var(--border)}
.prem-row{display:flex;justify-content:space-between;align-items:center;gap:6px}
.prem-row__lbl{font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.prem-row__val{font-size:13px;font-weight:800;color:var(--gold)}

/* ── GENEVA ── */
.gen-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
@media(max-width:820px){.gen-grid{grid-template-columns:1fr;gap:36px}}
.gen-tag{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--navy);background:var(--gold);padding:4px 12px;border-radius:3px;margin-bottom:14px}
.gen-addr{font-size:21px;font-weight:800;color:var(--white);margin-bottom:5px;line-height:1.2}
.gen-specs{font-size:13px;color:var(--muted);margin-bottom:16px}
.gen-desc{font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:22px}
.adu{background:rgba(200,150,42,.05);border:1px solid var(--border-g);border-left:3px solid var(--gold);border-radius:0 8px 8px 0;padding:16px 18px}
.adu__ttl{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:7px}
.adu__txt{font-size:13px;color:var(--muted);line-height:1.75}
.gen-metrics{display:flex;flex-direction:column;gap:12px}
.gm{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:22px 24px}
.gm__val{font-size:clamp(20px,2.5vw,28px);font-weight:900;color:var(--gold);letter-spacing:-.02em;line-height:1;margin-bottom:5px}
.gm__lbl{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.gm__note{font-size:11px;color:var(--faint)}

/* ── WHY CANTON ── */
.wc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:44px}
@media(max-width:900px){.wc-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.wc-grid{grid-template-columns:1fr}}
.wc-card{background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:10px;padding:24px 20px;transition:border-color .2s}
.wc-card:hover{border-color:var(--border-g)}
.wc-icon{font-size:24px;margin-bottom:12px;display:block}
.wc-title{font-size:14px;font-weight:800;color:var(--white);margin-bottom:8px;line-height:1.3}
.wc-txt{font-size:12.5px;color:var(--muted);line-height:1.75}

/* ── FOOTER ── */
.footer{background:rgba(0,0,0,.35);border-top:1px solid var(--border);padding:20px 40px;text-align:center;font-size:11.5px;color:var(--faint)}
</style>

<!-- ══ HEADER ══ -->
<header class="hdr">
  <a href="/"><img src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals"/></a>
  <a class="hdr__back" href="/">&larr; Home</a>
</header>

<!-- ══ HERO ══ -->
<section class="hero">
  <div class="hero__eye">Investment Opportunity &middot; Canton, Ohio &middot; 2025</div>
  <h1 class="hero__h1">45 Single-Family Rental Homes &mdash; Canton, Ohio</h1>
  <p class="hero__sub">A fully stabilized, 100% occupied portfolio available as four investor sub-portfolios, five premium individual assets, or a single bulk acquisition.</p>
  <div class="kpi-strip">
    <div class="kpi">
      <div class="kpi__val">45</div>
      <div class="kpi__lbl">Total Properties</div>
      <div class="kpi__note">44 Canton LTR + 1 Geneva STR</div>
    </div>
    <div class="kpi">
      <div class="kpi__val">$62,882</div>
      <div class="kpi__lbl">Monthly Rent</div>
      <div class="kpi__note">100% occupancy</div>
    </div>
    <div class="kpi">
      <div class="kpi__val">$754,580</div>
      <div class="kpi__lbl">Annual Gross Rent</div>
      <div class="kpi__note">All 45 properties</div>
    </div>
    <div class="kpi">
      <div class="kpi__val">$555,385</div>
      <div class="kpi__lbl">2025 NOI</div>
      <div class="kpi__note">44 Canton properties</div>
    </div>
  </div>
  <div class="price-bar">
    <div>
      <div class="price-bar__ask">$6,948,000</div>
      <div class="price-bar__break">Sale Price &nbsp;&middot;&nbsp; Canton $6,599,000 + Geneva $349,000</div>
    </div>
    <a class="price-bar__btn" href="https://www.crexi.com/properties/1746554/ohio-canton-oh-44-sfh-portfolio" target="_blank">View on CREXI &rarr;</a>
  </div>
</section>

<!-- ══ WHY BUY THIS ══ -->
<section class="sec" id="why-buy" style="background:var(--navy)">
  <div class="wrap">
    <div class="why-grid">
      <div>
        <div class="sec-lbl">The Opportunity</div>
        <h2 class="sec-h2">Why Buy This Portfolio</h2>
        <div class="divbar"></div>
        <p class="sec-sub">44 single-family rental homes across Canton&rsquo;s most supply-constrained neighborhoods. Every property is occupied, managed, and generating verified cash flow as of 2025.</p>
        <div class="why-stats">
          <div class="wstat">
            <div class="wstat__val">100%</div>
            <div class="wstat__lbl">Occupancy Rate</div>
          </div>
          <div class="wstat">
            <div class="wstat__val">$1,380</div>
            <div class="wstat__lbl">Avg Rent / Door / Mo</div>
          </div>
          <div class="wstat">
            <div class="wstat__val">$555,385</div>
            <div class="wstat__lbl">2025 Net Operating Income</div>
          </div>
          <div class="wstat">
            <div class="wstat__val">Newly Remodeled</div>
            <div class="wstat__lbl">All Homes</div>
          </div>
        </div>
      </div>
      <div class="why-box">
        <div class="why-box__ttl">Five Reasons to Buy</div>
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

<!-- ══ FOUR PORTFOLIOS ══ -->
<section class="sec" id="portfolios" style="background:var(--navy-mid);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Investor Portfolios</div>
    <h2 class="sec-h2">The Four Sub-Portfolios</h2>
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
          <div class="p-metrics">
            <div class="pm"><div class="pm__val">$11,700</div><div class="pm__lbl">Monthly Rent</div></div>
            <div class="pm"><div class="pm__val">$140,400</div><div class="pm__lbl">Annual Rent</div></div>
            <div class="pm"><div class="pm__val">$1,300/mo</div><div class="pm__lbl">Avg / Door</div></div>
            <div class="pm"><div class="pm__val">$114,396</div><div class="pm__lbl">2025 NOI &middot; 83.4%</div></div>
          </div>
          <ul class="p-homes">
            <li>806 23rd St NW <em>2bd/1ba</em> <span>$1,200/mo</span></li>
            <li>818 25th St NW <em>3bd/1ba</em> <span>$1,250/mo</span></li>
            <li>2007 Kirk Ct NW <em>3bd/1ba</em> <span>$1,350/mo</span></li>
            <li>426 Vince Ave NW <em>3bd/2ba</em> <span>$1,550/mo</span></li>
            <li>2923 Helen Pl NW <em>3bd/1ba</em> <span>$1,350/mo</span></li>
            <li>635 Greenfield Ave SW <em>2bd/2ba</em> <span>$1,150/mo</span></li>
            <li>307 Bellflower Ave NW <em>3bd/1.5ba</em> <span>$1,425/mo</span></li>
            <li>1502 37th St NW <em>3bd/1ba</em> <span>$1,125/mo</span></li>
            <li>2945 15th St NW <em>3bd/1ba</em> <span>$1,300/mo</span></li>
          </ul>
          <details>
            <summary>View 2025 NOI by property</summary>
            <div class="tbl-wrap">
              <table class="ptbl">
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
          <a class="p-cta" href="/portfolio-west">View Portfolio A &rarr;</a>
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
          <div class="p-metrics">
            <div class="pm"><div class="pm__val">$13,325</div><div class="pm__lbl">Monthly Rent</div></div>
            <div class="pm"><div class="pm__val">$159,900</div><div class="pm__lbl">Annual Rent</div></div>
            <div class="pm"><div class="pm__val">$1,332/mo</div><div class="pm__lbl">Avg / Door</div></div>
            <div class="pm"><div class="pm__val">$108,646</div><div class="pm__lbl">2025 NOI &middot; 71.5%</div></div>
          </div>
          <ul class="p-homes">
            <li>519 21st St NW <em>3bd/1ba</em> <span>$1,385/mo</span></li>
            <li>523 21st St NW <em>3bd/1ba</em> <span>$1,200/mo</span></li>
            <li>1430 19th St NW <em>3bd/1ba</em> <span>$1,325/mo</span></li>
            <li>1919 Frazer Ave NW <em>3bd/2ba</em> <span>$1,450/mo</span></li>
            <li>1708 18th St NW <em>3bd/2ba</em> <span>$1,300/mo</span></li>
            <li>244 Harter Ave NW <em>4bd/1.5ba</em> <span>$1,640/mo</span></li>
            <li>800 22nd St NW <em>4bd/1.5ba</em> <span>$1,450/mo</span></li>
            <li>1511 23rd St NW <em>3bd/2ba</em> <span>$1,300/mo</span></li>
            <li>1734 Woodland Ave NW <em>3bd/1ba</em> <span>$975/mo</span></li>
            <li>725 22nd St NW <em>3bd/1ba</em> <span>$1,300/mo</span></li>
          </ul>
          <details>
            <summary>View 2025 NOI by property</summary>
            <div class="tbl-wrap">
              <table class="ptbl">
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
          <a class="p-cta" href="/portfolio-northwest">View Portfolio B &rarr;</a>
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
          <div class="p-metrics">
            <div class="pm"><div class="pm__val">$11,615</div><div class="pm__lbl">Monthly Rent</div></div>
            <div class="pm"><div class="pm__val">$139,380</div><div class="pm__lbl">Annual Rent</div></div>
            <div class="pm"><div class="pm__val">$1,291/mo</div><div class="pm__lbl">Avg / Door</div></div>
            <div class="pm"><div class="pm__val">$103,624</div><div class="pm__lbl">2025 NOI &middot; 75.9%</div></div>
          </div>
          <ul class="p-homes">
            <li>1338 25th St NW <em>3bd/2ba</em> <span>$1,400/mo</span></li>
            <li>1344 24th St NW <em>3bd/3ba</em> <span>$1,330/mo</span></li>
            <li>1540 Norwood Pl NW <em>3bd/1ba</em> <span>$1,260/mo</span></li>
            <li>1507 Ridgeway Pl NW <em>3bd/1ba</em> <span>$1,250/mo</span></li>
            <li>1569 25th St NW <em>3bd/1ba</em> <span>$1,275/mo</span></li>
            <li>1600 27th St NW <em>4bd/2ba</em> <span>$1,400/mo</span></li>
            <li>1701 27th St NW <em>3bd/1ba</em> <span>$1,250/mo</span></li>
            <li>1341 Ridgeway Pl NW <em>3bd/2ba</em> <span>$1,250/mo</span></li>
            <li>1611 25th St NW <em>3bd/1ba</em> <span>$1,200/mo</span></li>
          </ul>
          <details>
            <summary>View 2025 NOI by property</summary>
            <div class="tbl-wrap">
              <table class="ptbl">
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
          <a class="p-cta" href="/portfolio-central">View Portfolio C &rarr;</a>
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
          <div class="p-metrics">
            <div class="pm"><div class="pm__val">$14,965</div><div class="pm__lbl">Monthly Rent</div></div>
            <div class="pm"><div class="pm__val">$179,580</div><div class="pm__lbl">Annual Rent</div></div>
            <div class="pm"><div class="pm__val">$1,360/mo</div><div class="pm__lbl">Avg / Door</div></div>
            <div class="pm"><div class="pm__val">$132,742</div><div class="pm__lbl">2025 NOI &middot; 75.6%</div></div>
          </div>
          <ul class="p-homes">
            <li>1210 25th St NE <em>3bd/1ba</em> <span>$1,390/mo</span></li>
            <li>1207 Colonial Blvd NE <em>3bd/1ba</em> <span>$1,350/mo</span></li>
            <li>1335 22nd St NE <em>3bd/1ba</em> <span>$1,220/mo</span></li>
            <li>1206 24th St NE <em>4bd/1.5ba</em> <span>$1,625/mo</span></li>
            <li>1012 28th St NE <em>4bd/2ba</em> <span>$1,450/mo</span></li>
            <li>1219 24th St NE <em>4bd/2ba</em> <span>$1,320/mo</span></li>
            <li>1330 24th St NE <em>3bd/2ba</em> <span>$1,325/mo</span></li>
            <li>804 29th St NE <em>4bd/2ba</em> <span>$1,450/mo</span></li>
            <li>1326 24th St NE <em>4bd/1ba</em> <span>$1,140/mo</span></li>
            <li>1203 25th St NE <em>3bd/1ba</em> <span>$1,200/mo</span></li>
            <li>1306 22nd St NE <em>4bd/1.5ba</em> <span>$1,495/mo</span></li>
          </ul>
          <details>
            <summary>View 2025 NOI by property</summary>
            <div class="tbl-wrap">
              <table class="ptbl">
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
          <a class="p-cta" href="/portfolio-northeast">View Portfolio D &rarr;</a>
        </div>
      </div>

    </div><!-- /p-grid -->

    <div class="combined">
      <strong>All 4 Portfolios Combined &mdash; 39 Homes:</strong>
      &nbsp; $51,605/mo &nbsp;&middot;&nbsp; $619,260/yr &nbsp;&middot;&nbsp; $1,323 avg per door &nbsp;&middot;&nbsp;
      <strong>2025 Combined NOI: $459,408</strong>
    </div>

  </div>
</section>

<!-- ══ PREMIUM INDIVIDUAL ASSETS ══ -->
<section class="sec" id="premium" style="background:var(--navy);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Individual Acquisitions</div>
    <h2 class="sec-h2">Premium Individual Assets &mdash; Available Separately</h2>
    <p class="sec-sub">Five stand-alone homes with above-average rents and NOI, available for individual sale or MLS listing.</p>
    <div class="prem-grid">

      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">300 Montrose Ave NW</div>
        <div class="prem-beds">5 bed / 2 bath &nbsp;&middot;&nbsp; ZIP 44708</div>
        <div class="prem-metrics">
          <div class="prem-row"><span class="prem-row__lbl">Mo. Rent</span><span class="prem-row__val">$2,300</span></div>
          <div class="prem-row"><span class="prem-row__lbl">2025 NOI</span><span class="prem-row__val">$22,309</span></div>
        </div>
      </div>

      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">2631 Demington Ave NW</div>
        <div class="prem-beds">3 bed / 2 bath &nbsp;&middot;&nbsp; ZIP 44708</div>
        <div class="prem-metrics">
          <div class="prem-row"><span class="prem-row__lbl">Mo. Rent</span><span class="prem-row__val">$2,000</span></div>
          <div class="prem-row"><span class="prem-row__lbl">2025 NOI</span><span class="prem-row__val">$42,941</span></div>
        </div>
      </div>

      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">1103 22nd St NE</div>
        <div class="prem-beds">4 bed / 2.5 bath &nbsp;&middot;&nbsp; ZIP 44714</div>
        <div class="prem-metrics">
          <div class="prem-row"><span class="prem-row__lbl">Mo. Rent</span><span class="prem-row__val">$1,800</span></div>
          <div class="prem-row"><span class="prem-row__lbl">2025 NOI</span><span class="prem-row__val">$14,909</span></div>
        </div>
      </div>

      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">225 Grandview Ave NW</div>
        <div class="prem-beds">4 bed / 2.5 bath &nbsp;&middot;&nbsp; ZIP 44708</div>
        <div class="prem-metrics">
          <div class="prem-row"><span class="prem-row__lbl">Mo. Rent</span><span class="prem-row__val">$1,600</span></div>
          <div class="prem-row"><span class="prem-row__lbl">2025 NOI</span><span class="prem-row__val">$15,818</span></div>
        </div>
      </div>

      <div class="prem-card">
        <span class="prem-badge">Premium</span>
        <div class="prem-addr">903 23rd St NW</div>
        <div class="prem-beds">4 bed / 1.5 bath &nbsp;&middot;&nbsp; ZIP 44709</div>
        <div class="prem-metrics">
          <div class="prem-row"><span class="prem-row__lbl">Mo. Rent</span><span class="prem-row__val">$1,410</span></div>
          <div class="prem-row"><span class="prem-row__lbl">2025 NOI</span><span class="prem-row__val" style="font-size:11px;color:var(--muted)">Upon Request</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ GENEVA ON THE LAKE ══ -->
<section class="sec" id="geneva" style="background:var(--navy-mid);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Property #45</div>
    <h2 class="sec-h2">Geneva on the Lake</h2>
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
      </div>
      <div class="gen-metrics">
        <div class="gm">
          <div class="gm__val">$26,000</div>
          <div class="gm__lbl">2024 Gross Revenue</div>
          <div class="gm__note">$2,167/mo equivalent</div>
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
        <a class="p-cta" href="/geneva-str" style="margin-top:4px">View Geneva Property &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- ══ WHY CANTON ══ -->
<section class="sec" id="why-canton" style="background:var(--navy);border-top:1px solid var(--border)">
  <div class="wrap">
    <div class="sec-lbl">Market Fundamentals</div>
    <h2 class="sec-h2">Why Canton, Ohio</h2>
    <p class="sec-sub">Six demand drivers within 5 miles of every property in this portfolio.</p>
    <div class="wc-grid">
      <div class="wc-card">
        <span class="wc-icon">&#127944;</span>
        <div class="wc-title">Pro Football Hall of Fame Village</div>
        <div class="wc-txt">All properties within 2 miles. A multi-phase development bringing a waterpark, hotels, restaurants, retail, and gaming. Hundreds of new service-industry jobs directly expand the renter pool.</div>
      </div>
      <div class="wc-card">
        <span class="wc-icon">&#127973;</span>
        <div class="wc-title">Two Major Hospital Systems</div>
        <div class="wc-txt">Cleveland Clinic Mercy and Aultman Hospital are within 5 miles of all homes. Combined 10,000 employees. Traveling nurses and healthcare workers provide strong rental demand year-round.</div>
      </div>
      <div class="wc-card">
        <span class="wc-icon">&#128230;</span>
        <div class="wc-title">Amazon Distribution Center</div>
        <div class="wc-txt">A major Amazon fulfillment center a few miles away sustains 1,000+ workers, the majority of whom are renters. Consistent, low-variance demand anchor.</div>
      </div>
      <div class="wc-card">
        <span class="wc-icon">&#127979;</span>
        <div class="wc-title">Four Colleges &amp; Universities</div>
        <div class="wc-txt">Malone University, Walsh University, Stark State College, and Kent State Stark create a steady stream of students and post-graduate renters every year.</div>
      </div>
      <div class="wc-card">
        <span class="wc-icon">&#128717;</span>
        <div class="wc-title">Belden Village Shopping Corridor</div>
        <div class="wc-txt">One of Ohio&rsquo;s densest retail and restaurant corridors. 80+ retail shops and 90+ restaurants within 5 miles including Gervasi Vineyard. Large and growing service-worker renter base.</div>
      </div>
      <div class="wc-card">
        <span class="wc-icon">&#127963;</span>
        <div class="wc-title">Opportunity Zones</div>
        <div class="wc-txt">Many of these properties fall within federally designated Opportunity Zones, providing potential capital gains tax deferral and exemption benefits for qualifying investors.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  &copy; 2025 CSH Rentals &nbsp;&middot;&nbsp; 1428 Market Ave. N., Canton, OH 44714 &nbsp;&middot;&nbsp; customstarkhomes@gmail.com
</footer>
`;

    const _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', function(e) {
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
customElements.define('csh-investors', CshInvestors);
