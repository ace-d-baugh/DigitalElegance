class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let year = new Date().getFullYear();

		this.innerHTML = `
      <div class="footer d-flex flex-column justify-content-center">
         <ul class="nav footer-links mb-2">
            <li class="footer-link mx-2"><a href="index.html">Home</a></li>
            <li class="footer-link mx-2"><a href="about.html">About</a></li>
            <li class="footer-link mx-2"><a href="resume.html">Resume</a></li>
            <li class="footer-link mx-2"><a href="index.html#projects">Projects</a></li>
         </ul>
         <div class="footer-links mb-2">
            <div class="footer-link"><a href="https://github.com/ace-d-baugh" target="_blank"><i class="nf nf-cod-github"></i> My GitHub</a></div>
         </div>
      <div class="copyright mb-1">&copy; ${year} All Rights Reserved | Ace Baugh</div>
   </div>`;
	}
}

customElements.define('footer-component', Footer);
