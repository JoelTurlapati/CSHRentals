// @ts-nocheck
class CshPropertyDetail extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var BACK_SLUGS = {
      'Portfolio 1 — Malone University / Pro Football Hall of Fame Area 1': 'portfolio-northwest',
      'Portfolio 1 — McKinley Presidential Library & Museum':               'portfolio-west',
      'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 2': 'portfolio-central',
      'Portfolio 3 — Colonial Heights':                                      'portfolio-northeast',
      'Portfolio 4 — High-End Portfolio':                                    'portfolio-highend',
      'Portfolio 6 — Premium Individual Properties':                         'portfolio-premium'
    };

    var PHOTO_POOLS = {
      'West — 44708': [
        'https://static.wixstatic.com/media/64b604_952be5d06ea04a69bc9932917a74d19c~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_b0cc918ddd644adba6f403392c2cf8c6~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_18658688112848b3a375b894dc9a9761~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_2f12bc452b22496b9086d6f5a95623ad~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_932f794976474b779eaf5d47aa58498a~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_1fb223dce671438ba6e84041ec1ae218~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_acb37a36f21a43ea937a7f332c0b6169~mv2.jpeg'
      ],
      'Northwest Central — 44709': [
        'https://static.wixstatic.com/media/64b604_d8710688375f47928e359dc9b936e689~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_eba12b8701834579ba2a30b2bd122351~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_3b2ba7ecaa034316951e9df1a6c5ff74~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_33ba492a11134da4bf528511adbc6375~mv2.png',
        'https://static.wixstatic.com/media/64b604_28a42e5cd1994e2a9d2c3c73d0cdbbf4~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_c830989a0cc24dbebee253e0e40a7132~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_90ef583aa5e84c388a54b1091014dae0~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_e54c155ba0154360b5f6da668c16b252~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_f5a8ead372e44655b39aaacd298b3ef3~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_8f2c3ebd9b634367984a41fc52d1e85b~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_3fd8475e03c14f498b65cf38a78c1830~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_911989f2e7ec40449e3af16ec76df729~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_d85ebb0a791444d2bf066d66b56cc28d~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_143fe9a153144f17965e3966f2919892~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_a8cfba711da0401491558d7b672900a3~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_2fadc168b10c4853b32cb35c72fc023b~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_ab764bbc2bd341e593c144de14e3839a~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_6d787ec44dd14bb5820d300ba95679dd~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_4205f0e960d94555857430409d7a840d~mv2.jpeg'
      ],
      'Northeast — 44714': [
        'https://static.wixstatic.com/media/64b604_42982546e42842bda85b0ca6bbcaf941~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_2ad766a98dd9407dbb83a13b6d1fd184~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_0acd871923c148fc9ac34669bba9d555~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_aed71c0306ba4bd08be44753dc10a836~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_776ab6a1bcd14db2b95703e59632b2b4~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_39e32df33f1f47e9939fc964478ac57b~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_7d8fdac44e8643f6a717cf071077bf7c~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_4eebe50b98154767a4488689fc84477b~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_e8e26f04f0c244898fc80b18746dacbb~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_5849d546b0c34c91ac87049e3cd2c186~mv2.jpeg'
      ],
      'Central — 44703': [
        'https://static.wixstatic.com/media/64b604_262b6026b9d3450d8d956c2873ff0df8~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_89794c2ed62144f8b0cce53bb9bf2a23~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_6f3b13e8bbd349f08d4d4cf641557285~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_9848993bc0ac462ebc34dfaf46c27e15~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_5f5afd2ffaac449d835ef226329f2470~mv2.jpeg',
        'https://static.wixstatic.com/media/64b604_c53805e63cfc4e6ea8185865e9574cab~mv2.jpeg'
      ]
    };

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-property-detail { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

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

.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 44px 32px 40px; text-align: center; }
.hero__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin-bottom: 16px; }
.hero__address { font-size: clamp(29px, 5.4vw, 53px); font-weight: 900; line-height: 1.15; margin-bottom: 10px; }
.hero__meta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 6px; }
.hero__meta-item { font-size: 17px; color: rgba(255,255,255,0.75); display: flex; align-items: center; gap: 6px; }
.hero__meta-sep { color: rgba(255,255,255,0.3); }

.gallery-wrap { max-width: 900px; margin: 40px auto 0; padding: 0 24px; }

.gallery-main { position: relative; border-radius: 12px; overflow: hidden; background: #000; line-height: 0; }
.gallery-main__img { width: 100%; max-height: 540px; object-fit: contain; display: block; transition: opacity 0.3s; background: #0a0f1a; }
.gallery-main__img.fade { opacity: 0; }

.gallery-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; background: rgba(0,0,0,0.45); border: 2px solid rgba(255,255,255,0.3); color: #fff; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 22px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; backdrop-filter: blur(4px); line-height: 1; }
.gallery-arrow:hover { background: rgba(0,0,0,0.7); }
.gallery-arrow--prev { left: 14px; }
.gallery-arrow--next { right: 14px; }
.gallery-counter { position: absolute; bottom: 14px; right: 16px; background: rgba(0,0,0,0.55); color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 600; padding: 4px 10px; border-radius: 20px; z-index: 2; }

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
.prop-info__label { font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #999; }
.prop-info__value { font-size: 18px; font-weight: 700; color: #0D1F35; }
.prop-info__divider { width: 1px; height: 36px; background: #e8eaec; align-self: center; }

.contact { max-width: 900px; margin: 28px auto 64px; padding: 0 24px; }
.contact__card { background: #fff; border-radius: 12px; padding: 36px 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); text-align: center; }
.contact__title { font-size: 26px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.contact__text { font-size: 18px; color: #555; line-height: 1.65; margin-bottom: 28px; }
.contact__actions { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media (min-width: 480px) { .contact__actions { flex-direction: row; justify-content: center; } }
.btn-primary { display: inline-block; padding: 14px 32px; background: #C8962A; color: #fff; font-size: 16px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-decoration: none; transition: background 0.2s; }
.btn-primary:hover { background: #b5841f; }
.btn-secondary { display: inline-block; padding: 14px 32px; background: transparent; color: #1A3557; font-size: 16px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-decoration: none; border: 2px solid #1A3557; transition: all 0.2s; }
.btn-secondary:hover { background: #1A3557; color: #fff; }

.not-found { max-width: 480px; margin: 80px auto; padding: 0 24px; text-align: center; }
.not-found h2 { font-size: 20px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.not-found p { font-size: 14px; color: #777; margin-bottom: 24px; }
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

</div>

<div id="not-found" style="display:none;">
  <div class="not-found">
    <h2>No Property Selected</h2>
    <p>Please select a property from one of the portfolio pages.</p>
    <a class="btn-primary" href="/">View Portfolios</a>
  </div>
</div>
`;

    const burger = this.querySelector('#csh-burger');
    const mobNav = this.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

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

    var backSlug = BACK_SLUGS[data.portfolio] || '';
    var bb = document.getElementById('back-btn');
    if (bb) bb.setAttribute('href', '/' + backSlug);

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

    var photos = (data.photos && data.photos.length) ? data.photos : (PHOTO_POOLS[data.portfolio] || []);
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
