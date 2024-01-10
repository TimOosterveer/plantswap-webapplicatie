<script>
	import Vector from '$lib/assets/vector.svg';
	import VectorPlant from '$lib/assets/vectorplant.svg';

	import Paragraph from '$lib/atoms/paragraphs/Pworkshops.svelte'
</script>

<div class="info-workshop">
	<div class="vector">
		<img src={Vector} alt="icon info tekst" />
	</div>

	<Paragraph />

	<div class="info-paragraph">
		<img loading="lazy" id="one" src={VectorPlant} alt="incon plant" />
		<img loading="lazy" id="two" src={VectorPlant} alt="incon plant" />
		<img loading="lazy" id="three" src={VectorPlant} alt="incon plant" />
	</div>

</div>

<style>
	.info-workshop {
		position: relative;
		display: flex;
		gap: var(--padding);
		background-color: var(--background-color-light);
		border-radius: var(--bradius);
		height: 15rem;
		margin: var(--margin) var(--margin) 0 var(--margin);
		padding: var(--padding);
		overflow: hidden;
	}

	#one {
		position: absolute;
		top: 10rem;
		right: 18rem;
	}

	#two {
		position: absolute;
		top: -150px;
		right: 10rem;
		transform: rotate(250deg);
	}
	#three {
		position: absolute;
		top: 6rem;
		right: -7rem;
		transform: rotate(-10deg);
	}

	@media screen and (max-width: 767px) {
		.info-workshop {
			width: 100%;
			margin: 0;
			margin-top: 2rem;
			padding: 1rem;
			height: 100%;
		}

		.vector img {
			width: 30px;
		}
	} 
</style>
