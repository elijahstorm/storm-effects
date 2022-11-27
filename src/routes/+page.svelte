<script lang="ts">
	import HardLightHoles from '$lib/UI/Effects/HardLightHoles.svelte'
	import RainbowBackground from '$lib/UI/Effects/RainbowBackground.svelte'
	import WaterDrop from '$lib/UI/Effects/WaterDrop.svelte'
	import { onMount } from 'svelte'

	let dotPlacement = 0

	onMount(() => {
		dotPlacement = Math.random() * Math.PI * 2
	})

	const radius = 250
</script>

<section>
	<RainbowBackground>
		<HardLightHoles>
			<WaterDrop size={radius + 100} />
			<WaterDrop
				size={50}
				left={Math.cos(dotPlacement) * radius + radius / 2 + 20}
				top={Math.sin(dotPlacement) * radius + radius / 2 + 20}
			/>
			<WaterDrop
				size={20}
				left={35 + Math.cos(dotPlacement) * radius + radius / 2 + 20}
				top={-15 + Math.sin(dotPlacement) * radius + radius / 2 + 20}
			/>
			<WaterDrop
				size={10}
				left={45 + Math.cos(dotPlacement) * radius + radius / 2 + 20}
				top={55 + Math.sin(dotPlacement) * radius + radius / 2 + 20}
			/>
		</HardLightHoles>
	</RainbowBackground>
</section>

<style>
	section {
		user-select: none;
	}
</style>
