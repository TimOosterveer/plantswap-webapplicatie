<script>
    import {onDestroy, onMount} from 'svelte';
    import image1 from '$lib/assets/carousel-img-1.avif';
    import image2 from '$lib/assets/carousel-img-2.avif';
    import image3 from '$lib/assets/carousel-img-3.avif';
    import ButtonGelijkSwappen from '$lib/atoms/buttons/ButtonGelijkSwappen.svelte';

    export let data;



    let intervalId;

    onMount(() => {
        const carrouselContainer = document.querySelector('.carrousel');
        const carrousel = document.querySelector('.carrousel-a');

        const interval = 8000;

        intervalId = setInterval(() => {
            const currentScroll = carrousel.scrollLeft;
            const itemWidth = carrouselContainer.clientWidth;
            const totalWidth = carrousel.scrollWidth;

            const nextScroll = (currentScroll + itemWidth) % totalWidth;

            carrousel.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
        }, interval);
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

<main>
    <div class="carrousel" aria-label="Carousel">
        <div class="overlay"></div>

        <h1>Swap nu je stekjes!</h1>

        <!--{data.headers[0].imagesCarousel.url}-->

        <ButtonGelijkSwappen/>
        <div class="carrousel-a" role="list" tabindex="0" aria-live="polite">
            <div class="carrousel-picture">
                <img src={image1} alt="Slide 1" aria-label="foto-van-stekjes"/>
            </div>
            <div class="carrousel-picture">
                <img src={image2} loading="”lazy”" alt="Slide 2" aria-label="foto-van-stekjes"/>
            </div>
            <div class="carrousel-picture">
                <img src={image3} loading="”lazy”" alt="Slide 3" aria-label="foto-van-een-stekje-die-word-gepot"/>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        background-color: var(--background-color);
    }

    .carrousel {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;

    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 99.5%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
        z-index: 1;
    }

    .carrousel h1 {
        position: absolute;
        z-index: 1;
        width: 80%;
        font-size: 2.5rem;
        color: var(--text-color);
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        line-height: 1.1em;
        margin-bottom: 2rem;
        view-transition-name: h1;
    }

    .carrousel img {
        width: 100%;
        height: 100vh;
        object-fit: cover;

    }

    .carrousel-a {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;

    }

    .carrousel-a::-webkit-scrollbar {
        display: none;

    }

    .carrousel-picture {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: start;
    }

    /* MEDIA QUERY TABLET*/
    @media screen and (min-width: 48rem) {

        .carrousel h1 {
            width: 80%;
            height: 45%;
            font-size: 4rem;
            margin-bottom: 5rem;
            view-transition-name: h1;
        }
    }

    /* MEDIA QUERY DESKTOP */
    @media screen and (min-width: 64rem) {

        .carrousel h1 {
            width: 60%;
            height: 100%;
            font-size: 8vw;
            line-height: 9rem;
            view-transition-name: h1;
        }
    }
</style>
