<svelte:options
	customElement={{
		tag: 'svelte-counter',
		shadow: 'open',
	}}
/>

<script lang="ts">
	import styles from './app.css?inline';
	import svelte from './assets/svelte.svg';

	let stylesTag = `<sty` + `le>${styles}</sty` + `le>`;

	export let backgroundColor = 'white';
	export let color = 'black';
	export let rounded = 'false';

	let count: number = 0;
	const increment = () => {
		count += 1;
	};
	const decrement = () => {
		count -= 1;
	};

	let hereSvelte = false;

	const handleMouseenter = () => (hereSvelte = true);
	const handleMouseleave = () => (hereSvelte = false);
</script>

{@html stylesTag}

<div
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
	style={`background-color: ${backgroundColor}; color: ${color}; border-radius: ${
		rounded === 'true' ? '1rem' : '0'
	}`}
	class="p-4 shadow-md"
	role="banner"
>
	<h2>Shopify Theme App Extension with Svelte</h2>
	<p>
		This is a simple counter component that is rendered as a custom element.
	</p>

	<div class="h-10 w-32">
		<div
			class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
		>
			<button
				on:click={decrement}
				class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
			>
				<span class="m-auto text-2xl font-thin">−</span>
			</button>
			<span
				class="flex-1 focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
			>
				{count}
			</span>
			<button
				on:click={increment}
				class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
			>
				<span class="m-auto text-2xl font-thin">+</span>
			</button>
		</div>
	</div>
</div>

<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<img
	class:curious={hereSvelte}
	alt="Svelte wants to know what's going on"
	src={svelte}
/>

<style>
	img {
		position: fixed;
		right: 0;
		bottom: 0;
		transform: translate(100%, 100%);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
		width: 320px;
	}

	.curious {
		transform: translate(0, 0);
	}

	:global(body) {
		overflow: hidden;
	}
</style>
