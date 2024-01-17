<script>
    import ContactInfo from '$lib/atoms/sections/ContactInformatie.svelte';
</script>

<section>
<ContactInfo/>

<form>
    <label for="name">Voornaam:</label>
    <input type="text" id="name" name="name" placeholder="Voer je voornaam in">

    <label for="lastname">Achternaam:</label>
    <input type="text" id="lastname" name="lastname" placeholder="Voer je achternaam in">

    <label for="message">Bericht:</label>
    <textarea id="message" name="message" cols="30" rows="10" placeholder="Typ hier je bericht"></textarea>

    <input type="submit" value="Verzenden">
</form>
</section>


<style>

    section{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-right: var(--padding);
    }
    
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 4px;
        margin-top: 2rem;
    }

    input[type="text"]{
        border: none;
        padding: 0.5rem;
        border-radius: var(--bradius);
    }

    textarea{
        border: none;
        padding: 0.5rem;
        border-radius: var(--bradius);
    }

    input[type="submit"]{
        margin-top: 1rem;
        border: none;
        border-radius: var(--bradius);
        padding: 0.5rem;
        width: 6rem;
        background-color: var(--button-color);
        color: var(--text-color);
        font-weight: bold;
    }

    input[type="submit"]:hover{
        color: var(--button-color);
        background-color: var(--text-color);
    }

    @media screen and (max-width: 700px) {

   section{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 0;
    }
}

    
</style>