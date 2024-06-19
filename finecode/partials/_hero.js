class Hero extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let year = new Date().getFullYear();

		this.innerHTML = `
      <div class="hero">
         <div class="hero-image"></div>
         <div class="hero-text">
            <h1 class="hero-title">Ace Baugh</h1>
            <h2 class="hero-subtitle">Full Stack Web Developer</h2>
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
