<template>
	<div class="flex-grow flex h-full flex-col space-y-32 justify-end" x-data="{show:false}" x-on:fade.window="show = !show">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 text-white items-center my-auto relative z-10">
			<!-- text-3xl md:text-5xl lg: -->
			<div class="font-bold text-5xl lg:text-7xl leading-none tracking-tight transition-all duration-300 ease-in-out transform" x-bind:class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
				{{headline}}
			</div>
			<div class="lg:ml-auto lg:px-10 text-sm font-light leading-loose transition-all duration-300 delay-150 ease-in-out transform max-w-lg" x-bind:class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
				{{subhead}}
			</div>
		</div>
		<div class="bg-white h-48 px-20 lg:pl-20 lg:pr-0 flex flex-col justify-center relative z-10">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
				<div class="font-bold text-2xl leading-snug tracking-tight transform transition-all ease-in-out duration-150 delay-100" x-bind:class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
					{{cta}}
				</div>
				<div class="text-center lg:text-left w-full lg:max-w-lg text-xs font-medium uppercase leading-relaxed tracking-widest lg:ml-auto px-0 lg:px-10">
					<div class="inline-flex items-center " >
						let's talk.
						<div class="text-bukwild-yellow">
							<svg class="w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="absolute inset-0 z-0 bg-cover bg-center transition-all ease-in-out duration-300 delay-300" x-bind:class="show ? 'opacity-100' : 'opacity-0 '" :style="'background-image:url(assets/'+background+')'" style="margin-top: -8rem;"></div>
	</div>
</template>

<script>
	export default {
		props: ['headline', 'subhead', 'cta', 'background'],
	}
</script>