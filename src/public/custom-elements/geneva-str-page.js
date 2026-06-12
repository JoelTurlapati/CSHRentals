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

<div class="hero-img">
  <img src="https://static.wixstatic.com/media/64b604_2977e61099b74dfd84efd15af03370dd~mv2.jpeg" alt="Geneva on the Lake vacation rental" />
  <div class="hero-img__overlay">
    <span class="hero-img__badge">Short-Term Rental</span>
    <h1 class="hero-img__title">Geneva on the Lake</h1>
    <p class="hero-img__location">Geneva-on-the-Lake, Ohio</p>
  </div>
</div>

<div class="photos">
  <h2>Photos</h2>
  <div class="photos__grid">
    <img src="https://static.wixstatic.com/media/64b604_2977e61099b74dfd84efd15af03370dd~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_5ea751320b474ee7ae6edd69157491f6~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_872c7e3ac3a4428a8a448c5dd1c44f84~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_2006be719a834de78a375ebf855685f8~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_523186930e5946028762053d55f0b1ce~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_c9e73982d6194845ba795fbc4cdae945~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_3a6d2c1e80204c4280c3cd6a13f512a4~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_9e363d43d0494979a574fd7a3b50676b~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_b02b163940664a65bc84c530c5a81fee~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_eb52e4d9ca8c4c888db787b8bdc4f9aa~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_82857d6e4fbc4f2b9355f8c6e1c9b1ff~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_6c9032bdcab541ebb294afc300d33a36~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_59837074eef94f8cb4178fee18644d2e~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_9ad948fd9884401c9e4f8c3cf63b5561~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_6e4c5afca63b4bcfa615b2024f0e90b9~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_7bd280037fe54170b8f223bb94f71eb2~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_44500f8175af4d6f9bee682b7f92b69a~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_7c2a0ed587dd403fa9d7b56f9f4fda42~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_befebc2cee0b4ff182b564a4c4908f74~mv2.jpeg" alt="Geneva property aerial"/>
    <img src="https://static.wixstatic.com/media/64b604_80213895d1a545278781ecfa3f429968~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_48e2d40c5a544c318c70a41ebe44d1b5~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_3d791034cc244baa9aa51bb3f18627de~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_f44f8fe96ad942f4936e7cd8ea7eb6e1~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_1f7b7fa232f84dcfb4ac8e25e76e78c4~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_0d8188dfec7f4112bdf81099b439cdfb~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_75503cda2c4b4ac3bb503c6a29d09021~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_420ffecd895f406c9996add2900ac594~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_ba563646acdb4cb9b2cb1599a152497a~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_eaf12081dc2842dda79c25ccb440e2be~mv2.jpeg" alt="Geneva property exterior"/>
    <img src="https://static.wixstatic.com/media/64b604_a448fb7f2bd34e46beac4e3648c2b38f~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_797d5fa46d8048eb880628bf9001eff3~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_cc2c51e02bdc4e1792a1c0da6f05df58~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_ad936ad898894d4da3e0f2869270d6cb~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_137960f8786243cda8ef9ca304b9c62d~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_2a8ecc4e19134746af1ab14f59970fa8~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_49556e028ce444e2be2459758da9abf9~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_a484eaa371d640328dbf492c372f6626~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_07590b31ffaf4bf1adc085963702ee19~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_156e39fa2ad04095baa32268d27152a1~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_095aeb579c41403d9da39d94f5c8a633~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_47a02fc45a354c02824530f5029e11d5~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_e634b05a03684819b5bb8cac7bfcfbd4~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_733af89787244cd989e46f07dd800021~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_dc558fe1a1814bd7bceff2ed6d4eb878~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_8c7aedcac24b4499ad4abb6d47fff125~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_80cfa4a18f784c669b0caa9eacf5ce27~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_081d5304cd70482fa4e77d100ae80fca~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_212828865ce149c194111b2923bf474e~mv2.jpeg" alt="Geneva property interior"/>
    <img src="https://static.wixstatic.com/media/64b604_428a3b386b2843b2906627f2a512c352~mv2.jpeg" alt="Geneva property interior"/>
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
