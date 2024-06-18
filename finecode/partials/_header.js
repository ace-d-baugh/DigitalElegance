class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light navbar-light bg-primary justify-content-between">
         <a href="index.html" class="navbar-brand">Ace Baugh</a>
         <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
               <li class="nav-item mx-2 my-1 active"><a href="index.html">Home</a></li>
               <li class="nav-item mx-2 my-1"><a href="about.html">About</a></li>
               <li class="nav-item mx-2 my-1"><a href="projects.html">Projects</a></li>
               <li class="nav-item mx-2 my-1"><a href="resume.html">Resume/CV</a></li>
               <li class="nav-item mx-2 my-1"><a href="index.html#contact">Contact</a></li>
                  <li class="nav-item mx-2 my-1">
                     <a href="https://github.com/ace-d-baugh" target="_blank" >
                        <i class="nf nf-cod-github d-flex">
                           <span class="icon-name ml-1">GitHub</span>
                        </i>
                     </a>
                  </li>
                  <li class="nav-item mx-2 my-1">
                     <a href="https://www.linkedin.com/in/ace-d-baugh/" target="_blank">
                        <i class="nf nf-md-linkedin d-flex">
                           <span class="icon-name ml-1">LinkedIn</span>
                        </i>
                     </a>
                  </li>
                  <li class="nav-item mx-2 my-1">
                     <a href="https://x.com/acieffe" target="_blank">
                        <i class="nf nf-fa-twitter d-flex">
                           <span class="icon-name ml-1">Twitter/X</span>
                        </i>
                     </a>
                  </li>
               </u>
            </ul>
         </div>
      </nav>
   `;

	}
}

customElements.define('header-component', Header);
