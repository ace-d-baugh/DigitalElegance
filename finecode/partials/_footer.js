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
            <li class="footer-link mx-2"><a href="index.html#about">About</a></li>
            <li class="footer-link mx-2"><a href="resume.html">Resume</a></li>
            <li class="footer-link mx-2"><a href="projects.html">Projects</a></li>
            <li class="footer-link mx-2"><a href="index.html#contact">Contact</a></li>
         </ul>
         <ul class="nav footer-links mb-2">
            <li class="footer-link  mx-2">
               <a href="https://github.com/ace-d-baugh" target="_blank" >
                  <i class="nf nf-fa-github d-flex">
                     <span class="ml-1">GitHub</span>
                  </i>
               </a>
            </li>
            <li class="footer-link  mx-2">
               <a href="https://www.linkedin.com/in/ace-d-baugh/" target="_blank">
                  <i class="nf nf-md-linkedin d-flex">
                     <span class="ml-1">LinkedIn</span>
                  </i>
               </a>
            </li>
            <li class="footer-link  mx-2">
               <a href="https://x.com/acieffe" target="_blank">
                  <i class="nf nf-fa-twitter_square d-flex">
                     <span class="icon-name ml-1">Twitter/X</span>
                  </i>
               </a>
            </li>
         </ul>
      <div class="copyright mb-1">&copy; ${year} All Rights Reserved | Ace Baugh</div>
   </div>`;
	}
}

customElements.define('footer-component', Footer);
