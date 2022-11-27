<script lang="ts">
	import { onMount } from 'svelte'
	import { fly, scale, type ScaleParams, type TransitionConfig } from 'svelte/transition'

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

	onMount(() => {
		run()
	})

	const SPEED = 0.012
	const MAX = 3
	let intensity = 10
	const run = () => {
		raindropChanges = raindropRadiusValues.map((r) =>
			r.map((v, i) => lerp(0, MAX, t, i % 2 === 0 ? sin : cos))
		)
		shineTop = lerp(0, (MAX * size) / 350, t, sin)
		shineLeft = lerp(0, (MAX * size) / 350, t, cos)

		t = t + SPEED * intensity
		intensity = Math.max(intensity - SPEED * 5, 1)

		window.requestAnimationFrame(run)
	}

	const lerp = (A: number, B: number, t: number, activation = linear) => A + (B - A) * activation(t)
	const linear = (t: number) => t
	const cos = (t: number) => Math.cos(t)
	const sin = (t: number) => Math.sin(t)

	const shake = () => (intensity = Math.min(intensity + 5, 30))
	const disturb = () => (intensity = Math.min(intensity + 10, 30))

	const easeOutElastic = (x: number): number => {
		const c4 = (2 * Math.PI) / 3

		return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
	}
	const easeOutSine = (x: number): number => {
		return Math.sin((x * Math.PI) / 2)
	}
</script>

<div
	in:scale={{ opacity: 0, duration: 1600, easing: easeOutElastic }}
	out:scale={{ opacity: 0, duration: 800, easing: easeOutSine }}
	class="water-drop"
	style="
        width: {size}px;
        height: {size}px;
        translate: {left}px {top}px;
		border-radius: {borderRadius};
    "
	on:mouseenter={shake}
	on:click={disturb}
>
	<div
		class="shine"
		style="
            width: {size / 10}px;
            height: {size / 10}px;
            translate: {shineLeft - size / 4}px {shineTop - size / 4}px;
        "
	/>
	<div
		class="shine"
		style="
            width: {size / 25}px;
            height: {size / 25}px;
            translate:
                {shineLeft + (25 * size) / 350 - size / 4}px
                {shineTop + (30 * size) / 350 - size / 4}px
            ;
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

	.shine {
		position: absolute;
		border-radius: 50%;
		background-color: #fff;
		opacity: 0.45;
		filter: blur(0.5px);
	}
</style>
