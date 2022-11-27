<section>
	<slot />
</section>

<style>
	section {
		display: grid;
		height: 100vh;
		width: 100vw;
		background-color: rgb(34, 34, 34);
		mix-blend-mode: hard-light;
		grid-template: 1fr / 1fr;
	}

	:global(section > *) {
		grid-column: 1;
		grid-row: 1;
	}
</style>
