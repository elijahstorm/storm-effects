<script lang="ts">
	import { onMount } from 'svelte'

	let canvas: HTMLCanvasElement
	let context: CanvasRenderingContext2D
	let t = 0

	onMount(() => {
		context = canvas.getContext('2d') as CanvasRenderingContext2D
		if (context === null) return
		run()
	})

	const col = (x: number, y: number, r: number, g: number, b: number) => {
		context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
		context.fillRect(x, y, 1, 1)
	}

	const R = (x: number, y: number, t: number) =>
		Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t))

	const G = (x: number, y: number, t: number) =>
		Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300))

	const B = (x: number, y: number, t: number) =>
		Math.floor(
			192 +
				64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)
		)

	const run = () => {
		for (let x = 0; x <= 35; x++) {
			for (let y = 0; y <= 35; y++) {
				col(x, y, R(x, y, t), G(x, y, t), B(x, y, t))
			}
		}

		t = t + 0.012

		window.requestAnimationFrame(run)
	}
</script>

<section>
	<canvas bind:this={canvas} id="rainbow-bg" width="32" height="32" />
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template: 1fr / 1fr;
		min-height: 100%;
	}
	section > * {
		grid-column: 1;
		grid-row: 1;
	}

	canvas {
		overflow: hidden;
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>
