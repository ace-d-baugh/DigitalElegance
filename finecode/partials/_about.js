class About extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
					<div class="about-me-container">
				<div class="about-me-section">
					<h1 class="about-me-header">About Me</h1>
					<div class="about-me-who">Who Am I?</div>
					<div class="about-me-title">I am Ace Baugh, a Full Stack Developer</div>
					<p class="about-me justify">I currently work for the Walt Disney Company in sunny Central Florida. I am passionate about coding, photography, and my family. I am a rapid learner when it comes to technology and hope to work for a company that wants to push the envelope and keep moving forward. I recently received my Bachelor's Degree as a Full Stack Web Development at Bellevue University.</p>
					<div class="about-me-buttons">
						<a href="#bucket-list" class="btn btn-primary">My Bucket List</a>
						<a href="resume.html" class="btn btn-primary">My Resume/CV</a>
					</div>
				</div>
				<div class="about-me-image">
					<img src="public/images/me.jpg" alt="Ace Baugh" />
				</div>
			</div>
`;
	}
}

customElements.define('about-component', About);
