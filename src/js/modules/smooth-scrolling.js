function addSmoothScrolling() {
	const postsScroll = document.querySelector('.posts__scroll');
	if (!postsScroll) return;

	postsScroll.addEventListener('wheel', (event) => {
		const dir = event.deltaY > -1;
		const road = postsScroll.scrollHeight - postsScroll.offsetHeight;
		const scrollTop = postsScroll.scrollTop;

		if ((dir && road === scrollTop) || (!dir && scrollTop === 0)) {
			return;
		}

		event.preventDefault();

		const step = postsScroll.scrollHeight / 100 * 10;
		const speed = 4;

		for (let i = 0; i <= step; i++) {
			setTimeout(
				() => (dir ? postsScroll.scrollTop++ : postsScroll.scrollTop--),
				speed * i
			);
		}
	});
}

export default addSmoothScrolling;
