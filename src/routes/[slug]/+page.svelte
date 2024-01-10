<script>
	export let data;
	import NavDark from '$lib/organisms/NavDark.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import MobileMenu from '$lib/organisms/MobileMenu.svelte';
	import VectorPlant from '$lib/assets/vectorplant.svg';
	import ImageStekje from '$lib/atoms/headers/imageStekje.svelte';
	import StekjeDescription from '$lib/organisms/StekjeDescription.svelte';
</script>

<NavDark />
<MobileMenu />
<ImageStekje data={data} />
<StekjeDescription data={data} />
<Footer />


