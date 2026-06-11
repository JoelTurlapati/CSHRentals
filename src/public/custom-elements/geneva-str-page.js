// @ts-nocheck
class CshGenevaStr extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-geneva-str { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

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

.hero-img { position: relative; width: 100%; height: clamp(280px, 45vw, 520px); overflow: hidden; }
.hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hero-img__overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(13,31,53,0.62) 100%); display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding: 36px 24px; text-align: center; }
.hero-img__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
.hero-img__title { font-size: clamp(29px, 6vw, 55px); font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 6px; }
.hero-img__location { font-size: 18px; color: rgba(255,255,255,0.8); }

.photos { max-width: 960px; margin: 36px auto 0; padding: 0 24px; }
.photos h2 { font-size: 19px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
.photos__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
@media (max-width: 560px) { .photos__grid { grid-template-columns: 1fr; } }
.photos__grid img { width: 100%; height: 220px; object-fit: cover; border-radius: 8px; display: block; transition: opacity 0.2s; cursor: pointer; }
.photos__grid img:hover { opacity: 0.88; }

.about { max-width: 960px; margin: 40px auto 0; padding: 0 24px; }
.about__inner { background: #fff; border-radius: 10px; padding: 32px; box-shadow: 0 2px 14px rgba(0,0,0,0.07); }
.about__title { font-size: 24px; font-weight: 800; color: #0D1F35; margin-bottom: 12px; }
.about__text { font-size: 18px; color: #444; line-height: 1.75; margin-bottom: 24px; }
.highlights { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
.highlight { background: #f5f7fa; border-radius: 8px; padding: 16px; text-align: center; }
.highlight__icon { font-size: 24px; margin-bottom: 6px; }
.highlight__label { font-size: 14px; font-weight: 700; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.07em; }

.booking { max-width: 680px; margin: 40px auto 60px; padding: 0 24px; }
.booking__card { background: #fff; border-radius: 10px; padding: 36px 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); text-align: center; }
.booking__title { font-size: 26px; font-weight: 800; color: #0D1F35; margin-bottom: 10px; }
.booking__text { font-size: 18px; color: #555; line-height: 1.65; margin-bottom: 28px; }
.booking__actions { display: flex; flex-direction: column; gap: 12px; align-items: center; }
@media (min-width: 480px) { .booking__actions { flex-direction: row; justify-content: center; } }
.btn-primary { display: inline-block; padding: 13px 28px; background: #1A3557; color: #fff; font-size: 16px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 6px; text-decoration: none; cursor: pointer; border: none; transition: background 0.2s; }
.btn-primary:hover { background: #0D1F35; }
.btn-secondary { display: inline-block; padding: 13px 28px; background: transparent; color: #1A3557; font-size: 16px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 6px; text-decoration: none; cursor: pointer; border: 2px solid #1A3557; transition: all 0.2s; }
.btn-secondary:hover { background: #1A3557; color: #fff; }
</style>

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

<div class="hero-img">
  <img src="https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg" alt="Geneva on the Lake vacation rental" />
  <div class="hero-img__overlay">
    <span class="hero-img__badge">Short-Term Rental</span>
    <h1 class="hero-img__title">Geneva on the Lake</h1>
    <p class="hero-img__location">Geneva-on-the-Lake, Ohio</p>
  </div>
</div>

<div class="photos">
  <h2>Photos</h2>
  <div class="photos__grid">
    <img src="https://static.wixstatic.com/media/d9828b_60416b463d874134a83e6aa5a5c50a86~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_46a3231b3f6d489bb78c54dcebcec48e~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_6e5e64f327b943cbb61c9d41bd5cbee8~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_164e128a8f8c4de0a68646f0911fae09~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_2bcaeb3dfcee4ac09e02c5ef2b9fc41d~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_c6daf260ec0348d588816030ac681297~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_544633d33bb641ad9c0ffa241ecac34c~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_a2c5527cb00c4a19bd5ce79edec4b317~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_4d15ba9cccbc419eb7ce6b77d634fcb9~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_13451ed4cda542c1a8f48287b551b930~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_a9cddaf95ec7495e833083d74541f3ed~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_1fc67972d1d84efb9e044a5abc0e9dc9~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_b74c87ba04534f4cbe2df8f9c403efb5~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_d725968b79854ca9a0fa2624f9061eac~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_24a477c321b7429eabcebd9342809140~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_d78e16091412484bb05e39908fdba977~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_4ce97538ba0d46a19f1ad781e86584a9~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_1e080b62ad954b2685be55165ccc5450~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_b12cf036b893427198646967b1a20285~mv2.jpg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/d9828b_f8f0a11cb1c7467fa8dc8331962c0a88~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_72f0431cf10b4593b579924de6b36c34~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_9625b1b5eb004118b087c1453eabf856~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_f85cca70e73f454c81e114a01400a535~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_c0111508ee804ea1ad3fbcfe690b95c6~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_10b0b23bc159436dac64204e2a2e02bf~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_88702235d5204eb8a2062465eceac5f9~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_2d0bc00fa92c4aa4aa4bb1a3bab6a374~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_f9c9eedec21d4955b9423bde9c4dcaa0~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_3518999290d0444dac4b4337738e20e0~mv2.jpg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/d9828b_2bd8cae06dfa4e2f9b1c4b454bcbeb8f~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_ccaf87b6733f476e81372e810e924a4b~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_c54592dea6684f10bed556f353837a6f~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_4916395697d64c599fc610663bc68a48~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_55f76086a9aa4ab3ab72c0e03c0eb5fb~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_45740064921c4ec88df2219008df6eda~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_267a37a567a54dc283a11cf9da243555~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_6f31da0b77a546b78addf3917fe24ac5~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_8f277d048e404f0a818d4e257de8cd1a~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_4f98d257421640a4b9c771d859eab93e~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_e73a21e2ec4c4dc9917cd65a8d3bb62b~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_74162ffc3e8b431c8b14254aee25ef71~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_f9b9250c154d451b8f1dbdccd42f062c~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_4d3bfddd5b4741adbd7396696e7d0a9a~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_7147464688fc42de96d874c72a167c6f~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_c59158f9271c4497a3024de73b44c9ff~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_8560fb4ea56c4b25b8551220f8b67ba5~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_e6bac556c9184109a493e123efae98fa~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_795f15ea9c2442dfbd16bf06c1f743d0~mv2.jpg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/d9828b_464d877f650d4a1eb025cecd0e66c08d~mv2.jpg" alt="Geneva property interior"/>
  </div>
</div>

<div class="about">
  <div class="about__inner">
    <h2 class="about__title">About This Property</h2>
    <p class="about__text">Enjoy a relaxing getaway at our vacation rental in Geneva-on-the-Lake, Ohio &mdash; one of the region's most popular lakeside destinations on the shores of Lake Erie. Perfect for weekend escapes, family trips, and group stays.</p>
    <div class="highlights">
      <div class="highlight"><div class="highlight__icon">&#127958;</div><div class="highlight__label">Lake Erie Access</div></div>
      <div class="highlight"><div class="highlight__icon">&#127969;</div><div class="highlight__label">Full Home</div></div>
      <div class="highlight"><div class="highlight__icon">&#128205;</div><div class="highlight__label">Geneva-on-the-Lake, OH</div></div>
      <div class="highlight"><div class="highlight__icon">&#128197;</div><div class="highlight__label">Short-Term Stays</div></div>
    </div>
  </div>
</div>

<div class="booking">
  <div class="booking__card">
    <h2 class="booking__title">Book Your Stay</h2>
    <p class="booking__text">Contact us for availability, nightly rates, and to reserve your dates. We typically respond within one business day.</p>
    <div class="booking__actions">
      <a class="btn-primary" href="mailto:customstarkhomes@gmail.com,ScottPrivate@tagplanning.com">Email to Book</a>
      <a class="btn-secondary" href="/">Back to Home</a>
    </div>
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
customElements.define('csh-geneva-str', CshGenevaStr);
