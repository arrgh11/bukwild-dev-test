<template>
	<div class="flex justify-between items-center pt-6 relative z-10">
		<div x-data="{menu:false}" x-on:click="menu = !menu" class="relative">
			<img class="w-20 cursor-pointer" src="assets/abc_logo.svg">
			<div 
				x-show="menu" 
				x-transition:enter="ease-in duration-200"
				x-transition:enter-start="opacity-0 translate-y-2"
				x-transition:enter-end="opacity-100 translate-y-0"
				x-transition:leave="ease-out duration-300"
				x-transition:leave-start="opacity-100 translate-y-0"
				x-transition:leave-end="opacity-0 translate-y-2"
				class="absolute transform transition-all mt-4 text-white font-bold text-sm flex flex-col space-y-2" x-on:click.away="menu = false">
				<router-link to="/industries" class="hover:text-bukwild-yellow-hover leading-relaxed">Industries</router-link>
				<router-link to="/services" class="hover:text-bukwild-yellow-hover leading-relaxed">Services</router-link>
				<router-link to="/about-us" class="hover:text-bukwild-yellow-hover leading-relaxed">About Us</router-link>
			</div>
		</div>
		<div>
			<a href="#" class="border border-white rounded-none text-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-150 ease-out px-6 py-3 text-bukwild">
				Contact Us
			</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>