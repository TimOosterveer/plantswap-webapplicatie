<script>
	export let workshop;
</script>

<div class="background-image">
	<img src={workshop.foto[0].url} alt="" height="100%" width="100%" />
</div>

<style>
	.background-image {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
	}

	img {
		border-radius: var(--bradius);
		object-fit: cover;
	}
</style>
