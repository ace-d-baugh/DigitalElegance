class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let year = new Date().getFullYear();

		this.innerHTML = `<div class="footer col-12">
      <div class="footer-links col-12">
         <div class="footer-link"><a href="index.html">Home</a></div>
         <div class="footer-link"><a href="about.html">About</a></div>
         <div class="footer-link"><a href="resume.html">Resume</a></div>
         <div class="footer-link"><a href="index.html#projects">Projects</a></div>
      </div>
      <div class="footer-links col-12">
         <div class="footer-link"><a href="https://github.com/ace-d-baugh" target="_blank">My GitHub</a></div>
      </div>
      <div class="copyright">&copy; ${year} All Rights Reserved | Ace Baugh</div>
   </div>`;
	}
}

customElements.define('footer-component', Footer);
