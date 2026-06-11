import re, os

HOME = r'C:\Pravaltech\Developer\OneDrive - Praval\Desktop\CSHRentals\src\public\custom-elements\home-page.js'

with open(HOME, encoding='utf-8') as f:
    code = f.read()

# ─── 1. Replace 5 drop-wrap blocks with rr-btn buttons ───
for port in ['1', '2', '3', '4', '5']:
    old = (
        '            <div class="drop-wrap">\n'
        '              <button class="drop-trigger" type="button">&#128202; Portfolio Financials <span class="drop-arrow">&#9660;</span></button>\n'
        '              <div class="drop-menu">\n'
        '                <button class="drop-item pl-btn" type="button" data-port="' + port + '" data-year="2024">&#128202; 2024 Profit &amp; Loss Statement</button>\n'
        '                <button class="drop-item pl-btn" type="button" data-port="' + port + '" data-year="2025">&#128202; 2025 Profit &amp; Loss Statement</button>\n'
        '              </div>\n'
        '            </div>'
    )
    new = '            <button class="p-cta rr-btn" type="button" data-port="' + port + '">&#128200; Financials (Rent Roll)</button>'
    if old in code:
        code = code.replace(old, new)
        print('Replaced drop-wrap for portfolio ' + port)
    else:
        print('WARNING: drop-wrap not found for portfolio ' + port)

# ─── 2. Insert RRDATA after PL_DATA closing brace ───
RRDATA_JS = """
    var RRDATA = {
      '1': {
        name: 'McKinley Presidential Library & Museum',
        props: [
          {address:'635 Greenfield Ave SW', rent:1200},
          {address:'2923 Helen Pl NW', rent:1350},
          {address:'307 Bellflower Ave NW', rent:1375},
          {address:'2945 15th St NW', rent:1300}
        ],
        monthly:5225, annual:62700, value:590000
      },
      '2': {
        name: 'Malone University / Pro Football Hall of Fame Area 1',
        props: [
          {address:'806 23rd St NW', rent:1200},
          {address:'2007 Kirk Ct NW', rent:1350},
          {address:'818 25th St NW', rent:1250},
          {address:'519 21st St NW', rent:1385},
          {address:'523 21st St NW', rent:1200},
          {address:'1430 19th St NW', rent:1325},
          {address:'1919 Frazer Ave NW', rent:1200},
          {address:'1708 18th St NW', rent:1100},
          {address:'1734 Woodland Ave NW', rent:1055},
          {address:'2211 Myrtle Ave NW', rent:1250},
          {address:'800 22nd St NW', rent:1450},
          {address:'725 22nd St NW', rent:1150}
        ],
        monthly:14915, annual:178980, value:1645000
      },
      '3': {
        name: 'Malone University / Pro Football Hall of Fame Area 2',
        props: [
          {address:'1338 25th St NW', rent:1400},
          {address:'1344 24th St NW', rent:1150},
          {address:'1540 Norwood Pl NW', rent:1260},
          {address:'1507 Ridgeway Pl NW', rent:1300},
          {address:'1569 25th St NW', rent:1275},
          {address:'1600 27th St NW', rent:1400},
          {address:'1701 27th St NW', rent:1300},
          {address:'1341 Ridgeway Pl NW', rent:1450},
          {address:'1611 25th St NW', rent:1300},
          {address:'1502 37th St NW', rent:1150},
          {address:'1511 23rd St NW', rent:1300}
        ],
        monthly:14285, annual:171420, value:1552900
      },
      '4': {
        name: 'Colonial Heights',
        props: [
          {address:'804 29th St NE', rent:1450},
          {address:'1012 28th St NE', rent:1545},
          {address:'1203 25th St NE', rent:1200},
          {address:'1206 24th St NE', rent:1645},
          {address:'1207 Colonial Blvd NE', rent:1400},
          {address:'1210 25th St NE', rent:1430},
          {address:'1219 24th St NE', rent:1320},
          {address:'1306 22nd St NE', rent:1515},
          {address:'1326 24th St NE', rent:1550},
          {address:'1330 24th St NE', rent:1400},
          {address:'1335 22nd St NE', rent:1200}
        ],
        monthly:15655, annual:187860, value:1716000
      },
      '5': {
        name: 'High-End Portfolio',
        props: [
          {address:'426 Vince Ave NW', rent:1550},
          {address:'244 Harter Ave NW', rent:1640},
          {address:'300 Montrose Ave NW', rent:2330},
          {address:'2631 Demington Ave NW', rent:2100},
          {address:'1103 22nd St NW', rent:1850},
          {address:'225 Grandview Ave NW', rent:1600}
        ],
        monthly:11070, annual:132840, value:1180300
      }
    };
"""

marker = "    };\n\n    function fmt(n) {"
if marker in code:
    code = code.replace(marker, "    };\n" + RRDATA_JS + "\n    function fmt(n) {")
    print('Inserted RRDATA')
else:
    print('WARNING: RRDATA insert marker not found')

# ─── 3. Add CSS for rr-btn and rr-modal (before footer CSS) ───
RR_CSS = """
/* ── FINANCIALS (RENT ROLL) BUTTON ── */
.rr-btn{background:transparent;color:var(--gold);border:1.5px solid var(--border-g);font-family:'Inter',sans-serif}
.rr-btn:hover{background:rgba(200,150,42,.09);color:var(--gold-lt)}

/* ── RENT ROLL MODAL ── */
.rr-modal{position:fixed;inset:0;z-index:1001;display:flex;align-items:center;justify-content:center;padding:16px}
.rr-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.rr-modal__box{position:relative;background:#fff;border-radius:16px;max-width:580px;width:100%;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.rr-modal__head{padding:20px 52px 18px 24px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.rr-modal__title{font-size:15px;font-weight:800;color:#fff;line-height:1.3}
.rr-modal__sub{font-size:11px;color:var(--gold);font-weight:700;margin-top:5px;letter-spacing:.1em;text-transform:uppercase}
.rr-modal__close{position:absolute;top:14px;right:16px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.rr-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.rr-modal__body{overflow-y:auto;padding:22px 24px 24px;flex:1}
.rr-table{width:100%;border-collapse:collapse;margin-bottom:18px}
.rr-table th{font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);padding:8px 10px;border-bottom:2px solid var(--border);text-align:left}
.rr-table th:last-child{text-align:right}
.rr-table td{font-size:14px;color:var(--navy);padding:10px 10px;border-bottom:1px solid rgba(10,30,60,.06)}
.rr-table tr:nth-child(even) td{background:#f9fafc}
.rr-table td:last-child{text-align:right;font-weight:700;color:var(--gold)}
.rr-totals{background:linear-gradient(135deg,#0a1628,#0d2545);border-radius:11px;padding:18px 22px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;border:1px solid var(--border-g)}
.rr-totals__item{text-align:center}
.rr-totals__label{font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:6px}
.rr-totals__value{font-size:16px;font-weight:900;color:var(--gold);font-variant-numeric:tabular-nums}
"""

css_footer_marker = "\n/* ── FOOTER ── */"
if css_footer_marker in code:
    code = code.replace(css_footer_marker, RR_CSS + css_footer_marker)
    print('Added rr CSS')
else:
    print('WARNING: footer CSS marker not found')

# ─── 4. Add rr-modal HTML before footer ───
RR_MODAL_HTML = """
<!-- ══ RENT ROLL MODAL ══ -->
<div id="rr-modal" class="rr-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="rr-modal__overlay" id="rr-modal-overlay"></div>
  <div class="rr-modal__box">
    <div class="rr-modal__head">
      <div class="rr-modal__title" id="rr-modal-title"></div>
      <div class="rr-modal__sub" id="rr-modal-sub"></div>
      <button class="rr-modal__close" id="rr-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="rr-modal__body" id="rr-modal-body"></div>
  </div>
</div>

"""

footer_html_marker = "<!-- ══ FOOTER ══ -->"
if footer_html_marker in code:
    code = code.replace(footer_html_marker, RR_MODAL_HTML + footer_html_marker)
    print('Added rr-modal HTML')
else:
    print('WARNING: footer HTML marker not found')

# ─── 5. Add rr-modal JS (after plModal setup, before dropdown handlers) ───
RR_JS = """
    // ── Rent Roll Modal ──
    var rrModal   = self.querySelector('#rr-modal');
    var rrTitle   = self.querySelector('#rr-modal-title');
    var rrSub     = self.querySelector('#rr-modal-sub');
    var rrBody    = self.querySelector('#rr-modal-body');
    var rrClose   = self.querySelector('#rr-modal-close');
    var rrOverlay = self.querySelector('#rr-modal-overlay');

    function openRR(portNum) {
      var d = RRDATA[portNum];
      if (!d) return;
      rrTitle.textContent = 'Portfolio ' + portNum + ': ' + d.name;
      rrSub.textContent   = 'SAL Rent Roll — Current Leases';
      var html = '<table class="rr-table"><thead><tr><th>#</th><th>Property Address</th><th>Monthly Rent</th></tr></thead><tbody>';
      d.props.forEach(function(p, i) {
        html += '<tr><td>' + (i + 1) + '</td><td>' + p.address + '</td><td>$' + p.rent.toLocaleString('en-US') + '</td></tr>';
      });
      html += '</tbody></table>';
      html += '<div class="rr-totals">';
      html += '<div class="rr-totals__item"><div class="rr-totals__label">Monthly Income</div><div class="rr-totals__value">$' + d.monthly.toLocaleString('en-US') + '</div></div>';
      html += '<div class="rr-totals__item"><div class="rr-totals__label">Annual Income</div><div class="rr-totals__value">$' + d.annual.toLocaleString('en-US') + '</div></div>';
      html += '<div class="rr-totals__item"><div class="rr-totals__label">Portfolio Value</div><div class="rr-totals__value">$' + (d.value >= 1000000 ? (d.value / 1000000).toFixed(2).replace(/\\.?0+$/, '') + 'M' : (d.value / 1000).toFixed(0) + 'K') + '</div></div>';
      html += '</div>';
      rrBody.innerHTML = html;
      rrModal.style.display = 'flex';
    }
    function closeRR() { rrModal.style.display = 'none'; }
    if (rrClose)   rrClose.addEventListener('click', closeRR);
    if (rrOverlay) rrOverlay.addEventListener('click', closeRR);

"""

rr_js_marker = "    // ── Navigation & Dropdowns ──"
if rr_js_marker in code:
    code = code.replace(rr_js_marker, RR_JS + "    // ── Navigation & Dropdowns ──")
    print('Added rr modal JS')
else:
    print('WARNING: rr JS insert marker not found')

# ─── 6. Replace click handler: add rr-btn handler, remove dropdown toggling ───
OLD_CLICK = """    self.addEventListener('click', function(e) {
      var plBtn = e.target.closest('.pl-btn');
      if (plBtn) {
        e.preventDefault(); e.stopPropagation();
        self.querySelectorAll('.drop-wrap.open').forEach(function(w) { w.classList.remove('open'); });
        openPL(plBtn.dataset.port, plBtn.dataset.year);
        return;
      }

      var dropTrig = e.target.closest('.drop-trigger');
      if (dropTrig) {
        e.preventDefault(); e.stopPropagation();
        var wrap   = dropTrig.closest('.drop-wrap');
        var isOpen = wrap.classList.contains('open');
        self.querySelectorAll('.drop-wrap.open').forEach(function(w) { w.classList.remove('open'); });
        if (!isOpen) wrap.classList.add('open');
        return;
      }

      if (!e.target.closest('.drop-wrap')) {
        self.querySelectorAll('.drop-wrap.open').forEach(function(w) { w.classList.remove('open'); });
      }

      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault(); e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });"""

NEW_CLICK = """    self.addEventListener('click', function(e) {
      var rrBtn = e.target.closest('.rr-btn');
      if (rrBtn) {
        e.preventDefault(); e.stopPropagation();
        openRR(rrBtn.dataset.port);
        return;
      }

      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault(); e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });"""

if OLD_CLICK in code:
    code = code.replace(OLD_CLICK, NEW_CLICK)
    print('Updated click handler')
else:
    print('WARNING: old click handler not found')

# Write output
with open(HOME, 'w', encoding='utf-8', newline='\n') as f:
    f.write(code)

print('home-page.js patched successfully!')
