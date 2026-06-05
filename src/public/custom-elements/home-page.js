// @ts-nocheck
// Home page now uses csh-investors custom element.
// This file is kept as a stub so existing Wix widget references don't break.
class CshHome extends HTMLElement {
  connectedCallback() {
    const _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    window.location.replace(window.location.origin + _b + '/investors');
  }
}
customElements.define('csh-home', CshHome);
