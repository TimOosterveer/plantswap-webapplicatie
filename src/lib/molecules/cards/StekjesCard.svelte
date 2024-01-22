<script>
  export let data;
  console.log(data);
  import StekjesInfo from '$lib/molecules/InfoStekjes.svelte';
</script>

<section>
  <StekjesInfo />
  {#each data.stekjes as stekje}
    <article class={stekje.categories.naam}>
      <img
        src={stekje.fotos[0].url}
        loading="lazy"
        height="60vh"
        width="25%"
        alt="een volwassen {stekje.naam} stekje "
      />
      <a href={stekje.slug}>
        Bekijk stekje <i class="fa-solid fa-play"></i>
      </a>
      <h3>{stekje.naam}</h3>
    </article>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: var(--padding);
  }

  article {
    position: relative;
    min-height: 60vh;
    width: 25%;
    padding: 1rem;
    border-radius: var(--bradius);
    overflow: hidden;
    margin-top: 1rem;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: relative;
    color: white;
    font-size: 2rem;
    line-height: 1.5em;
    z-index: 5;
  }

  article a {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    text-decoration: none;
    color: white;
    background-color: var(--button-color);
    padding: 0.5rem 1rem;
    border-radius: var(--bradius);
    cursor: pointer;
    z-index: 5;
    transition: 0.2s;
  }

  article a:hover {
    background-color: white;
    color: var(--button-color);
  }

  article a:hover i {
    font: orange;
  }

  article::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(40, 40, 40, 0.199);
    z-index: 1;
  }

  @media (max-width: 750px) {
    article {
      width: 100%;
    }
  }

  @media (min-width: 820px) {
    article {
      width: 40%;
    }
  }

  @media (min-width: 1280px) {
    article {
      width: 25%;
    }
  }
</style>
