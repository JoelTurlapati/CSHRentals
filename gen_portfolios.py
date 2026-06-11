import re, os

BASE = r'C:\Pravaltech\Developer\OneDrive - Praval\Desktop\CSHRentals\src\public\custom-elements'

def rf(name):
    with open(os.path.join(BASE, name), encoding='utf-8') as f:
        return f.read()

def wf(name, content):
    with open(os.path.join(BASE, name), 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)

def extract_props(code):
    m = re.search(r'var PROPERTIES = \[', code)
    if not m: return {}
    start = m.end(); depth = 1; i = start
    while i < len(code) and depth > 0:
        if code[i] == '[': depth += 1
        elif code[i] == ']': depth -= 1
        i += 1
    arr_content = code[start:i-1].strip()
    props = {}; j = 0
    while j < len(arr_content):
        if arr_content[j] == '{':
            depth = 1; k = j + 1
            while k < len(arr_content) and depth > 0:
                if arr_content[k] == '{': depth += 1
                elif arr_content[k] == '}': depth -= 1
                k += 1
            obj_text = arr_content[j:k].strip()
            am = re.search(r"address: '([^']+)'", obj_text)
            if am: props[am.group(1)] = obj_text
            j = k
        else: j += 1
    return props

wp = extract_props(rf('portfolio-west-page.js'))
np_ = extract_props(rf('portfolio-nw-page.js'))
cp = extract_props(rf('portfolio-central-page.js'))
ep = extract_props(rf('portfolio-ne-page.js'))
hp = extract_props(rf('portfolio-highend-page.js'))

print('Extracted:', len(wp), len(np_), len(cp), len(ep), len(hp))

PL = {
    '1': {
        '2024': {'title': 'Portfolio 1 — McKinley Presidential Library & Museum',
                 'period': 'January – December 2024',
                 'income': [['LTR Rents', 45630], ['Late Fees', 600], ['Cash Receipts', 14396], ['Security Deposits', 1300]],
                 'totalIncome': 61926,
                 'expenses': [['Repair Labor', 13274], ['Real Estate Taxes', 6850], ['Other Fees', 30]],
                 'totalExpenses': 20154, 'noi': 41773},
        '2025': {'title': 'Portfolio 1 — McKinley Presidential Library & Museum',
                 'period': 'January – December 2025',
                 'income': [['LTR Rents', 38905], ['Late Fees', 540], ['Cash Receipts', 20000]],
                 'totalIncome': 59445,
                 'expenses': [['Repair & Maintenance', 1434], ['Repair Labor', 1279], ['Real Estate Taxes', 8914]],
                 'totalExpenses': 11627, 'noi': 47818},
    },
    '2': {
        '2024': {'title': 'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 1',
                 'period': 'January – December 2024',
                 'income': [['LTR Rents', 133893], ['Late Fees', 1419], ['Cash Receipts', 19634], ['Security Deposits', 11725]],
                 'totalIncome': 166671,
                 'expenses': [['Repair Labor', 23351], ['Repair Materials', 732], ['Real Estate Taxes', 17026]],
                 'totalExpenses': 41109, 'noi': 125563},
        '2025': {'title': 'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 1',
                 'period': 'January – December 2025',
                 'income': [['LTR Rents', 114910], ['Late Fees', 6490], ['Cash Receipts', 52194], ['Security Deposits', 3950]],
                 'totalIncome': 177544,
                 'expenses': [['Lawncare', 930], ['Pest Control', 138], ['Repair & Maintenance', 3683], ['Repair Labor', 16038], ['Repair Materials', 51], ['Real Estate Taxes', 16041]],
                 'totalExpenses': 36882, 'noi': 140663},
    },
    '3': {
        '2024': {'title': 'Portfolio 3 — Malone University / Pro Football Hall of Fame Area 2',
                 'period': 'January – December 2024',
                 'income': [['LTR Rents', 142300], ['Late Fees', 1040], ['Cash Receipts', 10320], ['Security Deposits', 6115]],
                 'totalIncome': 159775,
                 'expenses': [['QuickBooks Fees', 1720], ['Repair Labor', 19957], ['Repair Materials', 18], ['Real Estate Taxes', 15433]],
                 'totalExpenses': 37128, 'noi': 122647},
        '2025': {'title': 'Portfolio 3 — Malone University / Pro Football Hall of Fame Area 2',
                 'period': 'January – December 2025',
                 'income': [['LTR Rents', 120865], ['Late Fees', 2005], ['Cash Receipts', 39548], ['Security Deposits', 3810]],
                 'totalIncome': 166228,
                 'expenses': [['Lawncare', 440], ['Repair & Maintenance', 6342], ['Repair Labor', 13839], ['Repair Materials', 69], ['Real Estate Taxes', 15228]],
                 'totalExpenses': 35918, 'noi': 130310},
    },
    '4': {
        '2024': {'title': 'Portfolio 4 — Colonial Heights',
                 'period': 'January – December 2024',
                 'income': [['LTR Rents', 169935], ['Late Fees', 2560], ['Cash Receipts', 3387], ['Security Deposits', 4350]],
                 'totalIncome': 180232,
                 'expenses': [['Repair Labor', 16856], ['Repair Materials', 1631], ['Real Estate Taxes', 18867]],
                 'totalExpenses': 37354, 'noi': 142878},
        '2025': {'title': 'Portfolio 4 — Colonial Heights',
                 'period': 'January – December 2025',
                 'income': [['LTR Rents', 158087], ['Late Fees', 2200], ['Cash Receipts', 11123], ['Security Deposits', 4120]],
                 'totalIncome': 175530,
                 'expenses': [['Lawncare', 480], ['Pest Control', 217], ['Repair & Maintenance', 4010], ['Repair Labor', 13649], ['Repair Materials', 1895], ['Real Estate Taxes', 19473]],
                 'totalExpenses': 39724, 'noi': 135806},
    },
    '5': {
        '2024': {'title': 'Portfolio 5 — Higher Value, Higher Rent Portfolio',
                 'period': 'January – December 2024',
                 'income': [['LTR Rents', 83315], ['Late Fees', 60], ['Cash Receipts', 10651], ['Security Deposits', 7650]],
                 'totalIncome': 101676,
                 'expenses': [['Advertising', 100], ['Repair Labor', 29311], ['Real Estate Taxes', 14232]],
                 'totalExpenses': 43643, 'noi': 58033},
        '2025': {'title': 'Portfolio 5 — Higher Value, Higher Rent Portfolio',
                 'period': 'January – December 2025',
                 'income': [['LTR Rents', 157080], ['Late Fees', 250], ['Cash Receipts', 5080]],
                 'totalIncome': 162410,
                 'expenses': [['Pest Control', 554], ['Repair & Maintenance', 145], ['Repair Labor', 17000], ['Repair Materials', 2132], ['Real Estate Taxes', 13876]],
                 'totalExpenses': 33708, 'noi': 128702},
    },
}

def pl_js(pnum):
    rows = []
    for yr in ('2024', '2025'):
        d = PL[pnum][yr]
        inc = '[' + ','.join("['%s',%s]" % (i[0].replace("'", "\\'"), i[1]) for i in d['income']) + ']'
        exp = '[' + ','.join("['%s',%s]" % (i[0].replace("'", "\\'"), i[1]) for i in d['expenses']) + ']'
        rows.append(
            "'%s':{title:'%s',period:'%s',income:%s,totalIncome:%s,expenses:%s,totalExpenses:%s,noi:%s}" % (
                yr,
                d['title'].replace("'", "\\'"),
                d['period'].replace("'", "\\'"),
                inc, d['totalIncome'], exp, d['totalExpenses'], d['noi']
            )
        )
    return '{' + ','.join(rows) + '}'

CSS = (
    "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\n"
    "TAGNAME{display:block;font-family:'Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}\n"
    ".csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:88px;position:sticky;top:0;z-index:200}\n"
    ".csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}\n"
    ".csh-hdr__logo-img{height:52px;width:auto;border-radius:4px;display:block;object-fit:cover}\n"
    ".csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}\n"
    ".csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}\n"
    ".csh-hdr__btn{padding:10px 18px;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}\n"
    ".csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}\n"
    ".csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}\n"
    ".csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}\n"
    ".csh-hdr__email{width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;transition:background .2s,border-color .2s}\n"
    ".csh-hdr__email:hover{background:rgba(255,255,255,.1)}\n"
    ".csh-hdr__burger{display:none;flex-direction:column;justify-content:space-between;width:26px;height:19px;background:none;border:none;cursor:pointer;padding:0;margin-left:auto;flex-shrink:0}\n"
    ".csh-hdr__burger span{display:block;width:100%;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:transform .25s,opacity .25s}\n"
    ".csh-hdr__burger.open span:nth-child(1){transform:translateY(8.5px) rotate(45deg)}\n"
    ".csh-hdr__burger.open span:nth-child(2){opacity:0}\n"
    ".csh-hdr__burger.open span:nth-child(3){transform:translateY(-8.5px) rotate(-45deg)}\n"
    ".csh-mob-nav{display:none;position:absolute;top:94px;left:0;right:0;background:#0a1628;border-top:1px solid rgba(255,255,255,.08);z-index:199;box-shadow:0 8px 32px rgba(0,0,0,.35)}\n"
    ".csh-mob-nav.open{display:block}\n"
    ".csh-mob-nav__inner{display:flex;flex-direction:column;padding:8px 0 16px}\n"
    ".csh-mob-nav__link{padding:15px 20px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.85);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s}\n"
    ".csh-mob-nav__link:hover{background:rgba(255,255,255,.06)}\n"
    ".csh-mob-nav__link:last-child{border-bottom:none}\n"
    ".csh-mob-nav__link--gold{color:#c8962a}\n"
    "@media(max-width:768px){.csh-hdr{padding:0 16px}.csh-hdr__nav{display:none}.csh-hdr__burger{display:flex}}\n"
    ".csh-back{display:block;padding:10px 28px;font-size:13px;font-weight:700;color:#5a6b85;text-decoration:none;letter-spacing:.05em;text-transform:uppercase;border-bottom:1px solid #e0e4ea;background:#fff}\n"
    ".csh-back:hover{color:#0d1f35}\n"
    ".prop-card__rent{font-size:18px;font-weight:800;color:#c8962a;margin-bottom:12px}\n"
    ".hero{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 60%,#1e3f68 100%);color:#fff;padding:52px 32px 48px;text-align:center}\n"
    ".hero__badge{display:inline-block;background:#C8962A;color:#fff;font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:16px}\n"
    ".hero__title{font-size:clamp(24px,4.8vw,46px);font-weight:900;margin-bottom:8px}\n"
    ".hero__sub{font-size:18px;color:rgba(255,255,255,0.68)}\n"
    ".pl-bar{background:#fff;padding:14px 28px;border-bottom:1px solid #e0e4ea;display:flex;align-items:center;gap:12px;flex-wrap:wrap}\n"
    ".pl-bar__label{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6b85;white-space:nowrap}\n"
    ".pl-year-btn{padding:9px 16px;background:#0d1f35;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .2s;font-family:inherit}\n"
    ".pl-year-btn:hover{background:#1a3557}\n"
    ".section-head{max-width:1040px;margin:48px auto 20px;padding:0 24px;display:flex;align-items:baseline;justify-content:space-between}\n"
    ".section-head h2{font-size:22px;font-weight:800;color:#0D1F35;text-transform:uppercase;letter-spacing:.08em}\n"
    ".section-head span{font-size:16px;color:#888}\n"
    ".prop-grid{max-width:1040px;margin:0 auto 64px;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:24px}\n"
    ".prop-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);transition:transform .22s,box-shadow .22s;display:flex;flex-direction:column;cursor:pointer}\n"
    ".prop-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(0,0,0,0.16)}\n"
    ".prop-card__img-wrap{position:relative;height:220px;overflow:hidden}\n"
    ".prop-card__cover{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s}\n"
    ".prop-card:hover .prop-card__cover{transform:scale(1.06)}\n"
    ".prop-card__badge{position:absolute;top:12px;left:12px;background:#C8962A;color:#fff;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:12px}\n"
    ".prop-card__info{padding:18px 20px 20px;display:flex;flex-direction:column;flex:1}\n"
    ".prop-card__address{font-size:20px;font-weight:800;color:#0D1F35;margin-bottom:4px;line-height:1.3}\n"
    ".prop-card__city{font-size:14px;color:#999;margin-bottom:10px}\n"
    ".prop-card__specs{font-size:16px;color:#555;font-weight:600;margin-bottom:18px;flex:1}\n"
    ".prop-card__btn{width:100%;padding:12px;background:#1A3557;color:#fff;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:7px;text-align:center}\n"
    ".prop-card:hover .prop-card__btn{background:#0D1F35}\n"
    ".pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px}\n"
    ".pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}\n"
    ".pl-modal__box{position:relative;background:#fff;border-radius:16px;max-width:520px;width:100%;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}\n"
    ".pl-modal__head{padding:20px 52px 18px 24px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}\n"
    ".pl-modal__title{font-size:14px;font-weight:800;color:#fff;line-height:1.35}\n"
    ".pl-modal__period{font-size:11px;color:#c8962a;font-weight:700;margin-top:5px;letter-spacing:.1em;text-transform:uppercase}\n"
    ".pl-modal__close{position:absolute;top:14px;right:16px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}\n"
    ".pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}\n"
    ".pl-modal__body{overflow-y:auto;padding:22px 24px 24px;flex:1}\n"
    ".pl-section{margin-bottom:20px}\n"
    ".pl-section-hdr{font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#5a6b85;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid rgba(10,30,60,.10)}\n"
    ".pl-row{display:flex;justify-content:space-between;align-items:center;padding:7px 8px;border-radius:5px}\n"
    ".pl-row:nth-child(even){background:#f9fafc}\n"
    ".pl-row__label{font-size:13.5px;color:#5a6b85}\n"
    ".pl-row__value{font-size:13.5px;font-weight:600;color:#0d1f35;font-variant-numeric:tabular-nums}\n"
    ".pl-divider{height:1px;background:rgba(10,30,60,.10);margin:4px 0 8px}\n"
    ".pl-row--total{background:#f0f4fa!important;padding:10px;border-radius:7px;margin-top:2px}\n"
    ".pl-row--total .pl-row__label{font-weight:800;color:#0d1f35;font-size:14px}\n"
    ".pl-row--total .pl-row__value{font-weight:900;color:#0d1f35;font-size:15px}\n"
    ".pl-noi{background:linear-gradient(135deg,#0a1628,#0d2545);border-radius:11px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;margin-top:8px;border:1px solid rgba(200,150,42,.35)}\n"
    ".pl-noi__label{font-size:14px;font-weight:700;color:rgba(255,255,255,.85)}\n"
    ".pl-noi__value{font-size:22px;font-weight:900;color:#c8962a;font-variant-numeric:tabular-nums}\n"
)

HDR = (
    '<header class="csh-hdr">\n'
    '  <a href="/" class="csh-hdr__logo">\n'
    '    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>\n'
    '    <span class="csh-hdr__logo-text">CSH RENTALS</span>\n'
    '  </a>\n'
    '  <nav class="csh-hdr__nav">\n'
    '    <a class="csh-hdr__btn" href="/tenants">Tenant Pre-Approval</a>\n'
    '    <a class="csh-hdr__btn csh-hdr__btn--gold" href="/contact">Contact</a>\n'
    '    <a class="csh-hdr__email" href="mailto:customstarkhomes@gmail.com" title="Email Us">&#9993;</a>\n'
    '  </nav>\n'
    '  <button class="csh-hdr__burger" id="csh-burger" aria-label="Open menu" aria-expanded="false">\n'
    '    <span></span><span></span><span></span>\n'
    '  </button>\n'
    '</header>\n'
    '<div class="csh-mob-nav" id="csh-mob-nav">\n'
    '  <div class="csh-mob-nav__inner">\n'
    '    <a class="csh-mob-nav__link" href="/tenants">Tenant Pre-Approval</a>\n'
    '    <a class="csh-mob-nav__link csh-mob-nav__link--gold" href="/contact">Contact</a>\n'
    '    <a class="csh-mob-nav__link" href="mailto:customstarkhomes@gmail.com">&#9993;&nbsp; Email Us</a>\n'
    '  </div>\n'
    '</div>\n'
)

PL_MODAL = (
    '<div id="pl-modal" class="pl-modal" style="display:none" role="dialog" aria-modal="true">\n'
    '  <div class="pl-modal__overlay" id="pl-modal-overlay"></div>\n'
    '  <div class="pl-modal__box">\n'
    '    <div class="pl-modal__head">\n'
    '      <div class="pl-modal__title" id="pl-modal-title"></div>\n'
    '      <div class="pl-modal__period" id="pl-modal-period"></div>\n'
    '      <button class="pl-modal__close" id="pl-modal-close" aria-label="Close">&times;</button>\n'
    '    </div>\n'
    '    <div class="pl-modal__body" id="pl-modal-body"></div>\n'
    '  </div>\n'
    '</div>\n'
)

JS_LOGIC = r"""
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
"""

def rents_js(rents):
    pairs = ["'%s':'%s'" % (k, v) for k, v in rents.items()]
    return '{' + ','.join(pairs) + '}'

def build(class_name, tag, portfolio_title, props_list, rents, badge, title_html, sub_html, stats, pnum):
    css = CSS.replace('TAGNAME', tag)
    props_js = ',\n      '.join(props_list)
    pl_data_js = pl_js(pnum)
    rjs = rents_js(rents)

    cards_js = (
        "    var cardsHtml = PROPERTIES.map(function(p, i) {\n"
        "      var rent = RENTS[p.address] || '';\n"
        "      return '<div class=\"prop-card\" data-idx=\"' + i + '\">' +\n"
        "        '<div class=\"prop-card__img-wrap\">' +\n"
        "        '<img class=\"prop-card__cover\" src=\"' + p.cover + '\" alt=\"' + p.address + '\" loading=\"lazy\" />' +\n"
        "        '<span class=\"prop-card__badge\">For Rent</span>' +\n"
        "        '</div><div class=\"prop-card__info\">' +\n"
        "        '<div class=\"prop-card__address\">' + p.address + '</div>' +\n"
        "        '<div class=\"prop-card__city\">' + p.city + '</div>' +\n"
        "        '<div class=\"prop-card__specs\">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' +\n"
        "        (rent ? '<div class=\"prop-card__rent\">' + rent + '/mo</div>' : '') +\n"
        "        '<div class=\"prop-card__btn\">View Details &rarr;</div>' +\n"
        "        '</div></div>';\n"
        "    }).join('');\n"
    )

    pl_bar = (
        '<div class="pl-bar">\n'
        '  <span class="pl-bar__label">&#128202; Financial Reports:</span>\n'
        '  <button class="pl-year-btn" type="button" data-year="2024">2024 Profit &amp; Loss</button>\n'
        '  <button class="pl-year-btn" type="button" data-year="2025">2025 Profit &amp; Loss</button>\n'
        '</div>\n'
    )

    hero = (
        '<section class="hero">\n'
        '  <div class="hero__badge">' + badge + '</div>\n'
        '  <h1 class="hero__title">' + title_html + '</h1>\n'
        '  <p class="hero__sub">' + sub_html + '</p>\n'
        '</section>\n'
    )

    section_head = '<div class="section-head"><h2>Properties</h2><span>' + stats + '</span></div>\n'

    inner_html = (
        '<style>\n' + css + '</style>\n' +
        HDR +
        '<a class="csh-back" href="/">&larr; Back to All Portfolios</a>\n' +
        hero + pl_bar + section_head +
        '<div class="prop-grid">${cardsHtml}</div>\n' +
        PL_MODAL
    )

    out = (
        '// @ts-nocheck\n'
        'class ' + class_name + ' extends HTMLElement {\n'
        '  connectedCallback() {\n'
        "    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';\n"
        "    var PORTFOLIO = '" + portfolio_title.replace("'", "\\'") + "';\n"
        '    var PL_DATA = ' + pl_data_js + ';\n'
        '    function fmt(n) {\n'
        "      if (n === null || n === undefined || n === '') return '\\u2014';\n"
        '      var num = Math.round(Number(n));\n'
        "      if (isNaN(num)) return String(n);\n"
        "      var s = '$' + Math.abs(num).toLocaleString('en-US');\n"
        "      return num < 0 ? '(' + s + ')' : s;\n"
        '    }\n'
        '    var PROPERTIES = [\n'
        '      ' + props_js + '\n'
        '    ];\n'
        '    var RENTS = ' + rjs + ';\n' +
        cards_js +
        '    this.innerHTML = `\n' + inner_html + '`;\n' +
        JS_LOGIC +
        '  }\n'
        '}\n'
        "customElements.define('" + tag + "', " + class_name + ');\n'
    )
    return out

# ─── Portfolio 1: McKinley (west file, 4 props) ───
p1 = build(
    'CshPortfolioWest', 'csh-portfolio-west',
    'Portfolio 1 — McKinley Presidential Library & Museum',
    [wp['635 Greenfield Ave SW'], wp['2923 Helen Pl NW'], wp['307 Bellflower Ave NW'], wp['2945 15th St NW']],
    {'635 Greenfield Ave SW': '$1,200', '2923 Helen Pl NW': '$1,350', '307 Bellflower Ave NW': '$1,375', '2945 15th St NW': '$1,300'},
    'Portfolio 1 — McKinley Presidential Library',
    'Portfolio 1: McKinley Presidential Library &amp; Museum',
    '4 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH',
    '4 homes &middot; $5,225/mo &middot; $62,700 Annual', '1'
)
wf('portfolio-west-page.js', p1)
print('P1 written')

# ─── Portfolio 2: Malone Area 1 (nw file, 12 props) ───
p2 = build(
    'CshPortfolioNw', 'csh-portfolio-nw',
    'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 1',
    [wp['806 23rd St NW'], wp['2007 Kirk Ct NW'], wp['818 25th St NW'],
     np_['519 21st St NW'], np_['523 21st St NW'], np_['1430 19th St NW'],
     np_['1919 Frazer Ave NW'], np_['1708 18th St NW'], np_['1734 Woodland Ave NW'],
     np_['2211 Myrtle Ave NW'], np_['800 22nd St NW'], np_['725 22nd St NW']],
    {'806 23rd St NW': '$1,200', '2007 Kirk Ct NW': '$1,350', '818 25th St NW': '$1,250',
     '519 21st St NW': '$1,385', '523 21st St NW': '$1,200', '1430 19th St NW': '$1,325',
     '1919 Frazer Ave NW': '$1,200', '1708 18th St NW': '$1,100', '1734 Woodland Ave NW': '$1,055',
     '2211 Myrtle Ave NW': '$1,250', '800 22nd St NW': '$1,450', '725 22nd St NW': '$1,150'},
    'Portfolio 2 — Malone Area 1',
    'Portfolio 2: Malone University / Pro Football Hall of Fame Area 1',
    '12 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH',
    '12 homes &middot; $14,915/mo &middot; $178,980 Annual', '2'
)
wf('portfolio-nw-page.js', p2)
print('P2 written')

# ─── Portfolio 3: Malone Area 2 (central file, 11 props) ───
p3 = build(
    'CshPortfolioCentral', 'csh-portfolio-central',
    'Portfolio 3 — Malone University / Pro Football Hall of Fame Area 2',
    [cp['1338 25th St NW'], cp['1344 24th St NW'], cp['1540 Norwood Pl NW'],
     cp['1507 Ridgeway Pl NW'], cp['1569 25th St NW'], cp['1600 27th St NW'],
     cp['1701 27th St NW'], cp['1341 Ridgeway Pl NW'], cp['1611 25th St NW'],
     wp['1502 37th St NW'], np_['1511 23rd St NW']],
    {'1338 25th St NW': '$1,400', '1344 24th St NW': '$1,150', '1540 Norwood Pl NW': '$1,260',
     '1507 Ridgeway Pl NW': '$1,300', '1569 25th St NW': '$1,275', '1600 27th St NW': '$1,400',
     '1701 27th St NW': '$1,300', '1341 Ridgeway Pl NW': '$1,450', '1611 25th St NW': '$1,300',
     '1502 37th St NW': '$1,150', '1511 23rd St NW': '$1,300'},
    'Portfolio 3 — Malone Area 2',
    'Portfolio 3: Malone University / Pro Football Hall of Fame Area 2',
    '11 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH',
    '11 homes &middot; $14,285/mo &middot; $171,420 Annual', '3'
)
wf('portfolio-central-page.js', p3)
print('P3 written')

# ─── Portfolio 4: Colonial Heights (ne file, 11 props — unchanged) ───
p4 = build(
    'CshPortfolioNe', 'csh-portfolio-ne',
    'Portfolio 4 — Colonial Heights',
    list(ep.values()),
    {'804 29th St NE': '$1,450', '1012 28th St NE': '$1,545', '1203 25th St NE': '$1,200',
     '1206 24th St NE': '$1,645', '1207 Colonial Blvd NE': '$1,400', '1210 25th St NE': '$1,430',
     '1219 24th St NE': '$1,320', '1306 22nd St NE': '$1,515', '1326 24th St NE': '$1,550',
     '1330 24th St NE': '$1,400', '1335 22nd St NE': '$1,200'},
    'Portfolio 4 — Colonial Heights',
    'Portfolio 4: Colonial Heights',
    '11 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH',
    '11 homes &middot; $15,655/mo &middot; $187,860 Annual', '4'
)
wf('portfolio-ne-page.js', p4)
print('P4 written')

# ─── Portfolio 5: High-End (highend file, 6 props — adds 426 Vince) ───
p5 = build(
    'CshPortfolioHighend', 'csh-portfolio-highend',
    'Portfolio 5 — High-End Portfolio',
    [wp['426 Vince Ave NW'], hp['244 Harter Ave NW'], hp['300 Montrose Ave NW'],
     hp['2631 Demington Ave NW'], hp['1103 22nd St NW'], hp['225 Grandview Ave NW']],
    {'426 Vince Ave NW': '$1,550', '244 Harter Ave NW': '$1,640', '300 Montrose Ave NW': '$2,330',
     '2631 Demington Ave NW': '$2,100', '1103 22nd St NW': '$1,850', '225 Grandview Ave NW': '$1,600'},
    'Portfolio 5 — High-End Portfolio',
    'Portfolio 5: High-End Portfolio',
    '6 premium rental homes &nbsp;&middot;&nbsp; Canton, OH',
    '6 homes &middot; $11,070/mo &middot; $132,840 Annual', '5'
)
wf('portfolio-highend-page.js', p5)
print('P5 written')

print('All done!')
