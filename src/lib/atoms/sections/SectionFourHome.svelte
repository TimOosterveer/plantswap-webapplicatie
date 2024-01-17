<script>
	export let data;
</script>

<main>
	<div class="flex-wrapper-2">
		<svg
				class="svg-leaf"
				width="282"
				height="605"
				viewBox="0 0 282 605"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
		>
			<path
					d="M-112.732 469.473C-121.286 469.003 -131.96 467.556 -144.436 463.462C-173.627 453.317 -167.116 449.366 -144.072 455.464C-130.934 459.107 -109.299 457.448 -93.7835 454.628C-90.9259 451.712 -88.0683 448.797 -85.2107 445.882C-101.159 438.825 -132.739 423.042 -158.258 402.646C-193.741 374.023 -190.308 361.997 -151.699 392.366C-123.61 414.401 -91.8188 429.072 -75.7653 435.573C-74.3365 434.115 -73.4639 432.552 -72.0351 431.094C-66.8762 425.158 -61.6117 418.666 -56.3472 412.174C-68.1432 398.413 -97.7006 362.847 -124.266 326.696C-157.592 280.62 -134.777 297.046 -115.846 324.835C-101.422 346.008 -61.5366 381.804 -44.2841 397.176C-29.1525 378.149 -13.3591 358.673 3.09588 338.745C-5.70809 324.4 -25.5701 292.4 -40.4549 258.464C-60.5666 212.589 -46.7855 224.997 -26.4152 263.431C-11.5883 291.594 5.75121 315.625 13.6248 325.761C36.8785 297.327 60.2377 268.337 82.0626 241.361C75.9342 228.099 56.9636 185.321 54.5552 155.479C51.8304 127.305 57.3159 131.803 63.9342 160.715C69.5165 185.973 87.0771 220.993 91.7189 229.94C154.23 152.484 160.397 147.315 160.397 147.315C160.397 147.315 81.7563 255.132 56.6809 290.134C63.0679 295.955 74.9117 303.386 90.8308 307.557C115.093 313.31 119.811 318.814 92.9025 314.864C72.6682 312.18 55.1568 304.25 47.6863 301.105C29.5151 327.045 10.7875 352.88 -6.06041 377.918C-0.0186988 382.521 13.7336 392.043 39.348 399.781C75.3193 410.635 79.194 420.588 37.4497 409.792C9.39952 402.745 -7.76654 396.033 -16.244 392.121C-25.2097 405.978 -33.9646 418.723 -42.1631 431.573C-29.4657 446.657 5.33739 484.946 34.1648 503.088C70.808 525.593 73.9633 530.225 31.8924 508.995C-0.694179 492.445 -38.0861 461.732 -52.8741 448.556C-56.1535 453.696 -58.7713 458.386 -61.9453 462.969C-57.6198 473.585 -48.2306 490.922 -33.2028 505.872C-9.87963 528.732 -13.5809 536.097 -41.9389 509.401C-56.0651 495.775 -64.2841 484.421 -68.4752 476.136C-80.6047 506.679 -66.1706 539.954 -56.7049 553.849C3.06215 645.848 153.84 601.261 218.115 511.463C267.604 441.908 103.025 416.464 130.804 385.432C159.246 353.948 272.862 490.153 280.986 325.751C284.79 250.991 188.031 290.264 180.933 257.804C169.663 207.843 278.462 284.363 281.153 209.392C282.024 174.41 279.75 146.898 273.38 98.4425C267.011 49.9872 255.779 15.0148 255.779 15.0148C255.779 15.0148 210.488 38.1175 168.187 27.2159C125.331 16.2088 69.3436 -19.7592 32.0606 15.8095C-32.7148 77.8557 33.5925 168.79 -5.52395 165.406C-36.1919 163.049 -48.8637 84.0127 -38.1443 45.712C-26.0249 3.0672 -130.169 14.4347 -142.268 81.2832C-160.465 171.175 -69.2824 240.322 -79.2161 268.4C-92.6111 305.617 -144.4 223.198 -159.927 180.496C-175.455 137.795 -273.268 182.629 -292.04 281.632C-315.769 406.775 -214.974 537.667 -112.732 469.473Z"
					fill="#FF8D06"
					fill-opacity="0.35"
			/>
		</svg>

		<svg
				class="svg-arrow"
				width="44"
				height="47"
				viewBox="0 0 44 47"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
		>
			<path
					d="M40.4919 18.7885L8.94272 1.03288C4.94308 -1.21808 0 1.67214 0 6.26168V40.9658C0 45.5033 4.84225 48.3987 8.83946 46.2514L40.3886 29.3028C44.5558 27.0642 44.6143 21.1085 40.4919 18.7885Z"
					fill="#FF8D06"
			/>
		</svg>

		<div class="container-text-four">
			<h5>Beschikbare stekjes</h5>
			<p>
				Dit zijn de meest recente stekjes die je kunt ruilen, en het enige wat je hoeft te doen is
				je eigen stekje meenemen.
			</p>
		</div>

		<div class="flex-wrapper-recent-stekjes">
			{#each data.stekjes.slice(0, 4) as stekje}
				<a href={stekje.slug}>
					<img src={stekje.fotos[0].url} alt="foto van een stekje" width="100" />
				</a>
			{/each}
		</div>
	</div>
</main>

<style>
	h5 {
		font-size: 1.5rem;
		color: var(--background-color);
		margin-bottom: 1rem;
	}

	p {
		color: var(--background-color);
	}

	main {
		margin-bottom: 5rem;
	}

	.svg-leaf {
		z-index: -1;
		position: absolute;
		width: 40%;
	}

	.svg-arrow {
		visibility: hidden;
	}

	.container-text-four {
		padding-top: 3rem;
		padding-left: 2rem;
		padding-bottom: 2rem;
		width: 95%;
	}

	.flex-wrapper-2 {
		z-index: 1;
		position: relative;
		background-color: var(--background-color-light);
	}

	.flex-wrapper-recent-stekjes {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem;
		padding-bottom: 5rem;
	}

	.flex-wrapper-recent-stekjes img {
		width: 15rem;
		border-radius: 30px;
	}

	/* MEDIA TABLET*/
	@media screen and (min-width: 48rem) {
		h5 {
			font-size: 3rem;
		}

		.svg-leaf {
			width: 20%;
			top: -10%;
		}

		.flex-wrapper-2 {
			display: flex;
			flex-direction: column;
			margin-top: 5rem;
			margin-left: 5%;
			width: 90%;
			border-radius: 40px;

		}

		.container-text-four {
			margin-top: 2rem;
			margin-bottom: 0rem;
			padding-left: 4rem;
			width: 40rem;
			height: 20rem;
		}

		.flex-wrapper-recent-stekjes {
			flex-direction: row;
			flex-wrap: wrap;
			margin-top: 0;
		}
	}

	/* MEDIA QUERY DESKTOP */
	@media screen and (min-width: 64rem) {
		h5 {
			font-size: 6rem;
			line-height: 8rem;
			margin-bottom: 2rem;
		}

		.svg-leaf {
			width: 40%;
			top: 20%;
		}

		.svg-arrow {
			visibility: visible;
			margin-top: 8rem;
			margin-left: 3rem;
		}

		.flex-wrapper-2 {
			display: flex;
			flex-direction: row;
			margin-top: 5rem;
			margin-left: 5%;
			width: 90%;
			border-radius: 40px;
			height: 120vh;
		}

		.container-text-four {
			margin-top: 3rem;
			padding-left: 4rem;
			width: 40rem;
		}

		.flex-wrapper-recent-stekjes {
			padding-top: 8rem;
			width: 50%;
		}
	}
</style>
