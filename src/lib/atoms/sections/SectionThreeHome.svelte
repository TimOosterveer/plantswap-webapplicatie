<script>
    import ButtonDeKast from "$lib/atoms/buttons/ButtonDeKast.svelte";
</script>

<section>
    <div class="container-text-three">
        <h4>Over PlantSwap</h4>
        <p>De Buurtcampus-Oost heeft als doel Amsterdam-Oost duurzamer, inclusiever en gezonder te maken. PlantSwap
            Amsterdam zorgt ervoor dat plantenliefhebbers elkaar ontmoeten in de bibliotheek. Daarnaast hebben planten in
            huis een positief effect op je lichamelijke en geestelijke gezondheid. Veel mensen weten niet goed hoe ze voor
            planten moeten zorgen en kopen nieuwe als ze dood gaan. In het kader van duurzaamheid, gezondheid en meer
            sociale connectie, is PlantSwap Amsterdam een plek van sociale ontmoeting, waar mensen samen leren over
            planten.</p>
        <ButtonDeKast/>
    </div>
</section>


<style>
    h4 {
        color: var(--text-color);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    p {
        color: var(--text-color);
    }

    .container-text-three {
        width: 95%;
    }

    /* MEDIA TABLET*/
    @media screen and (min-width: 48rem) {

        h4 {
            font-size: 2rem;

        }

        .container-text-three {
            width: 80%;
            margin-left: 6rem;
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

        h4 {
            font-size: 5rem;
            font-weight: 700;
            line-height: 1em;
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        .container-text-three {
            width: 100%;
            text-align: left;
        }
    }


</style>