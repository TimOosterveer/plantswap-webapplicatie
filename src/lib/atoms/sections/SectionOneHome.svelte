<script>
	import ButtonLocation from '$lib/atoms/buttons/ButtonLocation.svelte';
</script>

<section>
	<div class="container-text-one">
		<h2>Doe mee!</h2>
		<p>
			Heb jij een of meerdere plantenstekjes over en zou je die graag willen ruilen voor een nieuw
			plantje? Meld je stekje hier aan en ruil ‘m via de app. Schrijf de Latijnse naam van je plant
			en eventuele verzorgingstips op een labeltje en neem ‘m mee naar de OBA Linnaeusstraat in
			Amsterdam.
		</p>
		<ButtonLocation />
	</div>

</section>

<style>
	section {
		padding: 2rem;

	}
	h2 {
		color: var(--text-color);
		margin-bottom: 1rem;
	}

	p {
		color: var(--text-color);
		margin-bottom: 1rem;
	}

	.container-text-one {
		width: 100%;
	}

	/* MEDIA TABLET*/
	@media screen and (min-width: 48rem) {
		h2 {
			font-size: 3rem;
		}

		.container-text-one {
			padding-left: 6rem;
			width: 80%;
		}
	}

	/* MEDIA QUERY DESKTOP */
	@media screen and (min-width: 64rem) {
		section {
			height: 80vh;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25vw;
		}

		h2 {
			font-size: 5rem;
			font-weight: 700;
			line-height: 1em;
		}

		p {
			font-size: 1.1rem;
			margin-bottom: 1rem;
		}

		.container-text-one {
			width: 100%;
			text-align: left;
		}
	}
</style>
