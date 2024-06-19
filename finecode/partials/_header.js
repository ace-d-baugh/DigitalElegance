class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light navbar-light bg-primary justify-content-between">
         <a href="index.html" class="navbar-brand">Ace Baugh</a>
         <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
            <span class="shimmer"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
               <li class="nav-item mx-2 my-1 active">
                  <a href="index.html">
                     <i class="nf nf-fa-house d-flex">
                        <span class="icon-name ml-1">Home</span>
                     </i>
                  </a>
               </li>
               <li class="nav-item mx-2 my-1 active">
                  <a href="index.html">
                     <i class="nf nf-oct-person_fill d-flex">
                        <span class="icon-name ml-1">About</span>
                     </i>
                  </a>
               </li>
               <li class="nav-item mx-2 my-1 active">
                  <a href="index.html">
                     <i class="nf nf-dev-redis d-flex">
                        <span class="icon-name ml-1">Projects</span>
                     </i>
                  </a>
               </li>
               <li class="nav-item mx-2 my-1 active">
                  <a href="index.html">
                     <i class="nf nf-oct-log d-flex">
                        <span class="icon-name ml-1">Resume/CV</span>
                     </i>
                  </a>
               </li>
               <li class="nav-item mx-2 my-1 active">
                  <a href="index.html">
                     <i class="nf nf-fa-book_journal_whills d-flex">
                        <span class="icon-name ml-1">Blog</span>
                     </i>
                  </a>
               </li>
               <li class="nav-item mx-2 my-1 active">
                  <a href="index.html">
                     <i class="nf nf-md-email_newsletter d-flex">
                        <span class="icon-name ml-1">Contact</span>
                     </i>
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   `;

	}
}

customElements.define('header-component', Header);
