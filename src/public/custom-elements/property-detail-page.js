// @ts-nocheck
class CshPropertyDetail extends HTMLElement {
  connectedCallback() {
    var BACK_SLUGS = {
      'West — 44708':              'portfolio-west',
      'Northwest Central — 44709': 'portfolio-northwest',
      'Northeast — 44714':         'portfolio-northeast',
      'Central — 44703':           'portfolio-central'
    };

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-property-detail { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:68px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:40px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:8px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:8px 14px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:34px;height:34px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:14px;transition:background .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}

.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 44px 32px 40px; text-align: center; }
.hero__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin-bottom: 16px; }
.hero__address { font-size: clamp(24px, 4.5vw, 44px); font-weight: 900; line-height: 1.15; margin-bottom: 10px; }
.hero__meta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 6px; }
.hero__meta-item { font-size: 14px; color: rgba(255,255,255,0.75); display: flex; align-items: center; gap: 6px; }
.hero__meta-sep { color: rgba(255,255,255,0.3); }

.gallery-wrap { max-width: 900px; margin: 40px auto 0; padding: 0 24px; }

.gallery-main { position: relative; border-radius: 12px; overflow: hidden; background: #000; line-height: 0; }
.gallery-main__img { width: 100%; max-height: 540px; object-fit: contain; display: block; transition: opacity 0.3s; background: #0a0f1a; }
.gallery-main__img.fade { opacity: 0; }

.gallery-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; background: rgba(0,0,0,0.45); border: 2px solid rgba(255,255,255,0.3); color: #fff; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 22px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; backdrop-filter: blur(4px); line-height: 1; }
.gallery-arrow:hover { background: rgba(0,0,0,0.7); }
.gallery-arrow--prev { left: 14px; }
.gallery-arrow--next { right: 14px; }
.gallery-counter { position: absolute; bottom: 14px; right: 16px; background: rgba(0,0,0,0.55); color: rgba(255,255,255,0.9); font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; z-index: 2; }

.gallery-thumbs { display: flex; gap: 10px; margin-top: 14px; overflow-x: auto; padding-bottom: 8px; scrollbar-width: thin; }
.gallery-thumbs::-webkit-scrollbar { height: 5px; }
.gallery-thumbs::-webkit-scrollbar-thumb { background: #ccc; border-radius: 2px; }
.gallery-thumb { flex-shrink: 0; width: 140px; height: 100px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: border-color 0.2s, opacity 0.2s; }
.gallery-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.gallery-thumb.active { border-color: #C8962A; }
.gallery-thumb:not(.active) { opacity: 0.65; }
.gallery-thumb:hover:not(.active) { opacity: 0.9; }

.prop-info { max-width: 900px; margin: 28px auto 0; padding: 0 24px; }
.prop-info__card { background: #fff; border-radius: 12px; padding: 24px 28px; box-shadow: 0 2px 14px rgba(0,0,0,0.07); display: flex; flex-wrap: wrap; gap: 20px; align-items: center; }
.prop-info__detail { display: flex; flex-direction: column; gap: 3px; }
.prop-info__label { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #999; }
.prop-info__value { font-size: 15px; font-weight: 700; color: #0D1F35; }
.prop-info__divider { width: 1px; height: 36px; background: #e8eaec; align-self: center; }

.contact { max-width: 900px; margin: 28px auto 64px; padding: 0 24px; }
.contact__card { background: #fff; border-radius: 12px; padding: 36px 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); text-align: center; }
.contact__title { font-size: 22px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.contact__text { font-size: 15px; color: #555; line-height: 1.65; margin-bottom: 28px; }
.contact__actions { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media (min-width: 480px) { .contact__actions { flex-direction: row; justify-content: center; } }
.btn-primary { display: inline-block; padding: 14px 32px; background: #C8962A; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-decoration: none; transition: background 0.2s; }
.btn-primary:hover { background: #b5841f; }
.btn-secondary { display: inline-block; padding: 14px 32px; background: transparent; color: #1A3557; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-decoration: none; border: 2px solid #1A3557; transition: all 0.2s; }
.btn-secondary:hover { background: #1A3557; color: #fff; }

.not-found { max-width: 480px; margin: 80px auto; padding: 0 24px; text-align: center; }
.not-found h2 { font-size: 20px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.not-found p { font-size: 14px; color: #777; margin-bottom: 24px; }
</style>

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

<div id="main-content">
  <section class="hero">
    <div id="hero-badge" class="hero__badge"></div>
    <h1 id="hero-address" class="hero__address"></h1>
    <div class="hero__meta">
      <span id="hero-beds" class="hero__meta-item"></span>
      <span class="hero__meta-sep">|</span>
      <span id="hero-baths" class="hero__meta-item"></span>
      <span class="hero__meta-sep">|</span>
      <span id="hero-type" class="hero__meta-item">Single Family</span>
      <span class="hero__meta-sep">|</span>
      <span id="hero-city" class="hero__meta-item"></span>
    </div>
  </section>

  <div class="gallery-wrap">
    <div class="gallery-main">
      <img id="gallery-img" class="gallery-main__img" src="" alt="Property photo" />
      <button class="gallery-arrow gallery-arrow--prev" id="gal-prev">&#8249;</button>
      <button class="gallery-arrow gallery-arrow--next" id="gal-next">&#8250;</button>
      <div class="gallery-counter"><span id="gal-cur">1</span> / <span id="gal-total">1</span></div>
    </div>
    <div id="gallery-thumbs" class="gallery-thumbs"></div>
  </div>

  <div class="prop-info">
    <div class="prop-info__card">
      <div class="prop-info__detail">
        <span class="prop-info__label">Bedrooms</span>
        <span id="info-beds" class="prop-info__value"></span>
      </div>
      <div class="prop-info__divider"></div>
      <div class="prop-info__detail">
        <span class="prop-info__label">Bathrooms</span>
        <span id="info-baths" class="prop-info__value"></span>
      </div>
      <div class="prop-info__divider"></div>
      <div class="prop-info__detail">
        <span class="prop-info__label">Type</span>
        <span class="prop-info__value">Single Family</span>
      </div>
      <div class="prop-info__divider"></div>
      <div class="prop-info__detail">
        <span class="prop-info__label">Portfolio</span>
        <span id="info-portfolio" class="prop-info__value"></span>
      </div>
    </div>
  </div>

  <div class="contact">
    <div class="contact__card">
      <h2 class="contact__title">Interested in This Property?</h2>
      <p class="contact__text">Contact us for rental rates, availability, and to schedule a showing.<br/>We typically respond within one business day.</p>
      <div class="contact__actions">
        <a class="btn-primary" href="mailto:customstarkhomes@gmail.com">Email Us</a>
        <a id="contact-back-btn" class="btn-secondary" href="/investors">View All Portfolios</a>
      </div>
    </div>
  </div>
</div>

<div id="not-found" style="display:none;">
  <div class="not-found">
    <h2>No Property Selected</h2>
    <p>Please select a property from one of the portfolio pages.</p>
    <a class="btn-primary" href="/investors">View Portfolios</a>
  </div>
</div>
`;

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(window.location.origin + _b + href);
    });

    var data = {};
    try { data = JSON.parse(localStorage.getItem('csh_prop') || '{}'); } catch(e) {}

    var backSlug = BACK_SLUGS[data.portfolio] || 'investors';
    document.getElementById('back-btn').setAttribute('href', '/' + backSlug);
    document.getElementById('contact-back-btn').setAttribute('href', '/' + backSlug);

    if (!data.address) {
      document.getElementById('main-content').style.display = 'none';
      document.getElementById('not-found').style.display = 'block';
      return;
    }

    document.getElementById('hero-address').textContent = data.address;
    document.getElementById('hero-badge').textContent = data.portfolio || '';
    document.getElementById('hero-city').textContent = data.city || 'Canton, Ohio';
    document.getElementById('hero-beds').textContent = (data.beds || 3) + ' Bedrooms';
    document.getElementById('hero-baths').textContent = (data.baths || 1) + ' Bathroom';
    document.getElementById('info-beds').textContent = (data.beds || 3) + ' Bed';
    document.getElementById('info-baths').textContent = (data.baths || 1) + ' Bath';
    document.getElementById('info-portfolio').textContent = data.portfolio || '';

    var photos = (data.photos && data.photos.length) ? data.photos : [];
    if (!photos.length) {
      document.getElementById('gallery-img').style.display = 'none';
      document.getElementById('gal-prev').style.display = 'none';
      document.getElementById('gal-next').style.display = 'none';
      document.querySelector('.gallery-counter').style.display = 'none';
      return;
    }

    var curIdx = 0;
    var mainImg = document.getElementById('gallery-img');
    var curEl = document.getElementById('gal-cur');
    var totalEl = document.getElementById('gal-total');
    var thumbsEl = document.getElementById('gallery-thumbs');

    totalEl.textContent = photos.length;
    if (photos.length < 2) {
      document.getElementById('gal-prev').style.display = 'none';
      document.getElementById('gal-next').style.display = 'none';
      document.querySelector('.gallery-counter').style.display = 'none';
    }

    mainImg.src = photos[0];

    photos.forEach(function(url, i) {
      var thumb = document.createElement('div');
      thumb.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
      var img = document.createElement('img');
      img.src = url;
      img.alt = 'Photo ' + (i + 1);
      thumb.appendChild(img);
      thumb.addEventListener('click', function() { goToPhoto(i); });
      thumbsEl.appendChild(thumb);
    });

    function goToPhoto(n) {
      curIdx = ((n % photos.length) + photos.length) % photos.length;
      mainImg.classList.add('fade');
      setTimeout(function() {
        mainImg.src = photos[curIdx];
        mainImg.classList.remove('fade');
      }, 200);
      curEl.textContent = curIdx + 1;
      thumbsEl.querySelectorAll('.gallery-thumb').forEach(function(t, i) {
        t.classList.toggle('active', i === curIdx);
      });
      var activeThumb = thumbsEl.querySelectorAll('.gallery-thumb')[curIdx];
      if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    document.getElementById('gal-prev').addEventListener('click', function() { goToPhoto(curIdx - 1); });
    document.getElementById('gal-next').addEventListener('click', function() { goToPhoto(curIdx + 1); });
  }
}
customElements.define('csh-property-detail', CshPropertyDetail);
