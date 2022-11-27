<script lang="ts">
	import { onMount } from 'svelte'

	export let size: number = 350
	export let top: number = 0
	export let left: number = 0

	const raindropRadiusValues = [
		[41, 59, 45, 55],
		[54, 42, 58, 46]
	]
	let raindropChanges: typeof raindropRadiusValues = new Array(raindropRadiusValues.length).fill(
		new Array(raindropRadiusValues[0].length).fill(0)
	)

	let t = 0

	let borderRadius = '41% 59% 45% 55% / 54% 42% 58% 46%'
	let shineTop = 50
	let shineLeft = 85

	$: borderRadius = raindropChanges
		.map((r, i0) => r.map((v, i1) => `${v + raindropRadiusValues[i0][i1]}%`).join(' '))
		.join(' / ')

	$: {
		shineTop = (size / 350) * 50
		shineLeft = (size / 350) * 85
	}

	onMount(() => {
		run()
	})

	const SPEED = 0.012
	const MAX = 2
	let intensity = 10
	const run = () => {
		raindropChanges = raindropRadiusValues.map((r) =>
			r.map((v, i) => lerp(0, MAX, t, i % 2 === 0 ? sin : cos))
		)

		t = t + SPEED * intensity
		intensity = Math.max(intensity - SPEED * 2, 1)

		window.requestAnimationFrame(run)
	}

	const lerp = (A: number, B: number, t: number, activation = linear) => A + (B - A) * activation(t)
	const linear = (t: number) => t
	const cos = (t: number) => Math.cos(t)
	const sin = (t: number) => Math.sin(t)
</script>

<div
	class="water-drop"
	style="
        width: {size}px;
        height: {size}px;
        translate: {left}px {top}px;
		border-radius: {borderRadius};
    "
>
	<div
		class="shine"
		style="
                top: {shineTop}px;
                left: {shineLeft}px;
                width: {size / 10}px;
                height: {size / 10}px;
            "
	/>
	<div
		class="shine"
		style="
                top: {shineTop + (40 * size) / 350}px;
                left: {shineLeft + (25 * size) / 350}px;
                width: {size / 25}px;
                height: {size / 25}px;
            "
	/>
	<slot />
</div>

<style>
	.water-drop {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 50px;
		background-color: rgba(128, 128, 128, 0.733);
		box-shadow: inset 20px 20px 20px rgb(0 0 0 / 0.05), 25px 35px 20px rgb(0 0 0 / 0.05),
			25px 30px 30px rgb(0 0 0 / 0.05), inset -20px -20px 25px rgb(255 255 255 / 0.45);
		filter: blur(0.5px);
	}

	.water-drop:hover {
		border-radius: 41% 59% 29% 71% / 60% 39% 61% 40%;
	}

	.shine {
		position: absolute;
		border-radius: 50%;
		background-color: #fff;
		opacity: 0.45;
		transition: 0.5s;
		filter: blur(0.5px);
	}
</style>
