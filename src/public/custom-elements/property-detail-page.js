class CshPropertyDetail extends HTMLElement {
  connectedCallback() {
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

.site-header { background: #fff; border-bottom: 1px solid #e0e4ea; padding: 14px 32px; display: flex; align-items: center; gap: 16px; }
.site-header img { height: 48px; width: auto; cursor: pointer; }
.site-header__back { margin-left: auto; font-size: 13px; font-weight: 600; color: #1A3557; text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s; cursor: pointer; }
.site-header__back:hover { opacity: 1; }

.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 48px 32px 44px; text-align: center; }
.hero__portfolio { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 14px; }
.hero__address { font-size: clamp(22px, 4vw, 38px); font-weight: 800; line-height: 1.2; margin-bottom: 6px; }
.hero__city { font-size: 15px; color: rgba(255,255,255,0.65); }

.gallery { max-width: 960px; margin: 36px auto 0; padding: 0 24px; }
.gallery h2 { font-size: 16px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
.gallery__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
.gallery__grid img { width: 100%; height: 180px; object-fit: cover; border-radius: 6px; display: block; transition: opacity 0.2s; cursor: pointer; }
.gallery__grid img:hover { opacity: 0.88; }
.gallery__empty { color: #999; font-size: 14px; font-style: italic; }

.contact { max-width: 680px; margin: 44px auto 60px; padding: 0 24px; }
.contact__card { background: #fff; border-radius: 10px; padding: 36px 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); text-align: center; }
.contact__icon { font-size: 36px; margin-bottom: 14px; }
.contact__title { font-size: 22px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.contact__text { font-size: 15px; color: #555; line-height: 1.65; margin-bottom: 28px; }
.contact__actions { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media (min-width: 480px) { .contact__actions { flex-direction: row; justify-content: center; } }
.btn-primary { display: inline-block; padding: 13px 28px; background: #1A3557; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 6px; text-decoration: none; cursor: pointer; border: none; transition: background 0.2s; }
.btn-primary:hover { background: #0D1F35; }
.btn-secondary { display: inline-block; padding: 13px 28px; background: transparent; color: #1A3557; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 6px; text-decoration: none; cursor: pointer; border: 2px solid #1A3557; transition: all 0.2s; }
.btn-secondary:hover { background: #1A3557; color: #fff; }

.not-found { max-width: 480px; margin: 80px auto; padding: 0 24px; text-align: center; }
.not-found h2 { font-size: 20px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.not-found p { font-size: 14px; color: #777; margin-bottom: 24px; }
</style>

<header class="site-header">
  <a href="/"><img id="logo" src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals" /></a>
  <a id="back-btn" class="site-header__back" href="/investors">&larr; Back</a>
</header>

<div id="main-content">
  <section class="hero">
    <div id="prop-portfolio" class="hero__portfolio"></div>
    <h1 id="prop-address" class="hero__address"></h1>
    <p id="prop-city" class="hero__city"></p>
  </section>
  <div class="gallery">
    <h2>Property Photos</h2>
    <div id="gallery-grid" class="gallery__grid"></div>
  </div>
  <div class="contact">
    <div class="contact__card">
      <div class="contact__icon">&#127968;</div>
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

    // Populate from localStorage after HTML is set
    var data = {};
    try { data = JSON.parse(localStorage.getItem('csh_prop') || '{}'); } catch(e) {}

    var backSlug = BACK_SLUGS[data.portfolio] || 'investors';
    document.getElementById('back-btn').href = '/' + backSlug;

    if (!data.address) {
      document.getElementById('main-content').style.display = 'none';
      document.getElementById('not-found').style.display = 'block';
      return;
    }

    document.getElementById('prop-address').textContent = data.address;
    document.getElementById('prop-city').textContent = 'Canton, Ohio';
    document.getElementById('prop-portfolio').textContent = data.portfolio || '';

    var photos = PHOTO_POOLS[data.portfolio] || [];
    var grid = document.getElementById('gallery-grid');
    if (photos.length === 0) {
      grid.innerHTML = '<p class="gallery__empty">Photos coming soon.</p>';
    } else {
      photos.forEach(function(url) {
        var img = document.createElement('img');
        img.src = url;
        img.alt = 'Property photo';
        grid.appendChild(img);
      });
    }
  }
}
customElements.define('csh-property-detail', CshPropertyDetail);
