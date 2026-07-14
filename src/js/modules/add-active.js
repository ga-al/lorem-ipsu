function addActive() {
	const postsContainer = document.querySelector('.posts__scroll');
	if (!postsContainer) return;

	postsContainer.addEventListener('click', (event) => {
		const post = event.target.closest('.post');
		if (!post) return;

		event.preventDefault();

		const current = postsContainer.querySelector('.post.active');
		if (current) {
			current.classList.remove('active');
		}

		post.classList.add('active');
	});
}

export default addActive;
