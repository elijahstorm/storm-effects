<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	export let size: number
	export let left: number
	export let top: number
	export let splash: Function

	const timeTilLand = 800

	onMount(() => {
		setTimeout(splash, timeTilLand)
	})

	const easeInCubic = (x: number): number => {
		return x * x * x
	}
</script>

<div
	in:fly={{ opacity: 0, y: -500, duration: timeTilLand, easing: easeInCubic }}
	class="rain-drop"
	style="translate: {left + size / 2}px {top + size / 2}px;"
/>

<style>
	.rain-drop {
		width: 50px;
		height: 100px;
		margin: 50px;
		background-color: rgba(128, 128, 128, 0.733);
		box-shadow: inset 20px 20px 20px rgb(0 0 0 / 0.05), 25px 35px 20px rgb(0 0 0 / 0.05),
			25px 30px 30px rgb(0 0 0 / 0.05), inset -20px -20px 25px rgb(255 255 255 / 0.45);
		filter: blur(0.5px);
		border-radius: 50% 50% 50% 50% / 81% 81% 19% 19%;
	}
</style>
