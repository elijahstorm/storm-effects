<script lang="ts">
	import FallingRainDrop from '$lib/UI/Effects/FallingRainDrop.svelte'
	import HardLightHoles from '$lib/UI/Effects/HardLightHoles.svelte'
	import RainbowBackground from '$lib/UI/Effects/RainbowBackground.svelte'
	import WaterDrop from '$lib/UI/Effects/WaterDrop.svelte'
	import { onMount } from 'svelte'

	let dotPlacement = 0

	onMount(() => {
		dotPlacement = Math.random() * Math.PI * 2
	})

	let drops: {
		dropping: boolean
		radius: number
		x: number
		y: number
		content: string
	}[] = []

	const type = (e: KeyboardEvent) => {
		if (drops.length > 10) {
			drops.shift()
		}

		drops = [
			...drops,
			{
				dropping: true,
				radius: Math.random() * 100 + 70,
				x: Math.random() * 1600 + 60,
				y: Math.random() * 600 + 60,
				content: e.key
			}
		]
	}
</script>

<svelte:window on:keypress={type} />

<section>
	<RainbowBackground>
		<HardLightHoles>
			{#each drops as drop (drop)}
				{#if drop.dropping}
					<FallingRainDrop
						size={drop.radius + 100}
						left={drop.x}
						top={drop.y}
						splash={() => (drop.dropping = false)}
					/>
				{:else}
					<WaterDrop size={drop.radius + 100} left={drop.x} top={drop.y}>
						{drop.content}
					</WaterDrop>
				{/if}
			{/each}
		</HardLightHoles>
	</RainbowBackground>
</section>

<style>
	section {
		user-select: none;
	}
</style>
