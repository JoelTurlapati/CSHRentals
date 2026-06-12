// @ts-nocheck
class CshTenants extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-tenants { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }

.site-header { background: #fff; border-bottom: 1px solid #e0e4ea; padding: 14px 32px; display: flex; align-items: center; gap: 16px; }
.site-header img { height: 48px; width: auto; cursor: pointer; }
.site-header__back { margin-left: auto; font-size: 13px; font-weight: 600; color: #1A3557; text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s; }
.site-header__back:hover { opacity: 1; }

.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 48px 32px 44px; text-align: center; }
.hero__eyebrow { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 14px; }
.hero__title { font-size: clamp(24px, 4vw, 40px); font-weight: 800; margin-bottom: 10px; }
.hero__sub { font-size: 15px; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto; line-height: 1.6; }

.form-section { max-width: 860px; margin: 48px auto 64px; padding: 0 24px; }
.form-section__heading { font-size: 16px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; }

.cognito-wrap { background: #fff; border-radius: 10px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); overflow: hidden; }
.cognito-wrap iframe { display: block; width: 100%; height: 820px; border: none; }

.footer { background: #0D1F35; padding: 20px 32px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.6; }
</style>

<header class="site-header">
  <a href="/"><img src="https://static.wixstatic.com/media/64b604_646bc5dcd19547abb135695264b23b0f~mv2.png" alt="CSH Rentals" /></a>
  <a class="site-header__back" href="/">&larr; Home</a>
</header>

<section class="hero">
  <div class="hero__eyebrow">Tenant Application</div>
  <h1 class="hero__title">Pre-Approval Form</h1>
  <p class="hero__sub">Complete the form below to begin your rental application. We'll be in touch shortly.</p>
</section>

<div class="form-section">
  <div class="form-section__heading">Rental Pre-Approval</div>
  <div class="cognito-wrap">
    <iframe src="https://www.cognitoforms.com/TheAffinityGroup1/CSHRentalsPreApprovalForm" title="Tenant Pre-Approval Form" allowfullscreen></iframe>
  </div>
</div>

<footer class="footer">
  &copy; 2025 CSH Rentals &nbsp;&middot;&nbsp; 1428 Market Ave N, Canton, OH 44714 &nbsp;&middot;&nbsp; customstarkhomes@gmail.com
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
customElements.define('csh-tenants', CshTenants);
