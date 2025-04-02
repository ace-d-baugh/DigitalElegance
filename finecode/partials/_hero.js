class Hero extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let year = new Date().getFullYear();

		this.innerHTML = `
      <div class="hero px-5">
         <div class="hero-image"></div>
         <div class="hero-text">
            <h1 class="hero-title">Elevate Your Digital Success</h1>
            <h4 class="hero-subtitle">Expert full-stack web solutions driving business growth and online success with Digital Elegance.</h4>
            <button>
               <span class="text">About Me</span>
               <span class="shimmer"></span>
            </button>
            <button class="ml-5">
               <span class="text">My Projects</span>
               <span class="shimmer"></span>
            </button>
         </div>
      </div>
      `;
	}
}



customElements.define('hero-component', Hero);
