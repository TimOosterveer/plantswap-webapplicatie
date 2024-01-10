<script>
    import ContactInfo from '$lib/atoms/ContactInfo.svelte';
</script>

<section>
    <ContactInfo/>

    <form action="https://api.web3forms.com/submit" method="POST" >

        <input type="hidden" name="access_key" value="59b62920-afbb-4637-be5f-736618bec604">

        <!-- Required: If submitting form without Javascript.
       Default web3forms output is in JSON format. -->
        <!-- Not Required: If javascript, use "window.location.hash" instead -->
        <input type="hidden" name="redirect" value="https://web3forms.com/success">

        <!-- Optional: But Recommended: To Prevent SPAM Submission.
             Make sure its hidden by default -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

        <label for="reason">Reden voor contact:</label>

        <div>
            <input type="radio" id="question" name="contact-reason" value="question" checked>
            <label for="question"> Ik heb een vraag</label>
        </div>

        <div class="radio-2">
            <input type="radio" id="workshop" name="contact-reason" value="workshop">
            <label for="workshop"> Ik wil mij aanmelden voor een workshop</label>
        </div>

        <label for="name">Voornaam:</label>
        <input type="text" id="name" name="name" placeholder="Voer je voornaam in" required>

        <label for="lastname">Achternaam:</label>
        <input type="text" id="lastname" name="lastname" placeholder="Voer je achternaam in" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Voer je e-mailadres in" required>

        <label for="phone-number">Telefoonnummer:</label>
        <input type="tel" id="phone-number" name="phone-number" inputmode="numeric" pattern="[0-9]*"
               placeholder="Voer je telefoonnummer in" required>

        <label for="message">Stel je vraag of vertel voor welke workshop je je wilt aanmelden!</label>
        <textarea id="message" name="message" cols="30" rows="10" placeholder="Typ hier je bericht" required></textarea>

        <input type="submit" value="Verzenden">
    </form>
</section>


<style>

    section {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-right: var(--padding);
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 4px;
        margin-top: 2rem;
    }

    .radio-2 {
        margin-bottom: 0.5rem;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea {
        border: none;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        border-radius: var(--bradius);
        font-family: 'Mulish', sans-serif;
    }

    input[type="submit"] {
        margin-top: 1rem;
        border: none;
        border-radius: var(--bradius);
        padding: 0.5rem;
        width: 6rem;
        background-color: var(--button-color);
        color: var(--text-color);
        font-weight: bold;
    }

    input[type="submit"]:hover {
        color: var(--button-color);
        background-color: var(--text-color);
    }

    @media screen and (max-width: 700px) {

        section {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-right: 0;
        }
    }


</style>