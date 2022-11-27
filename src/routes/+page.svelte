<script lang="ts">
	import FallingRainDrop from '$lib/UI/Effects/FallingRainDrop.svelte'
	import HardLightHoles from '$lib/UI/Effects/HardLightHoles.svelte'
	import RainbowBackground from '$lib/UI/Effects/RainbowBackground.svelte'
	import WaterDrop from '$lib/UI/Effects/WaterDrop.svelte'

	let viewportWidth: number
	let viewportHeight: number
	const dropMargin = 100

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
				x: Math.random() * (viewportWidth - dropMargin * 2) - dropMargin,
				y: Math.random() * (viewportHeight - dropMargin * 2) - dropMargin,
				content: e.key
			}
		]
	}
</script>

<svelte:window
	on:keypress={type}
	bind:innerWidth={viewportWidth}
	bind:innerHeight={viewportHeight}
/>

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
