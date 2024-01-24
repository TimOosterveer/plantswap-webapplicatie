<script>
  export let data;
</script>

<section class="image-section">
  <img
    height="100%"
    width="100%"
    src={data.stekje.fotos[0].url}
    alt={`Foto van ${data.naam}`}
    loading="lazy"
  />
  <h1>{data.stekje.naam}</h1>
</section>

<style>
  /* Algemene styling voor de section*/
  section {
    position: relative;
    width: 100%;
    background-color: var(--background-color);
  }

  /* Specifieke opmaak voor het gedeelte met de img */
  .image-section {
    height: 90vh; /* 90% van de viewport hoogte */
  }

  img {
    object-fit: cover; /* Behoudt de beeldverhouding en bedekt het gehele pagina */
  }

  /* Naam van het stekje */
  h1 {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    color: var(--text-color);
	font-size: 40px;
  view-transition-name: h1;
  }
</style>
