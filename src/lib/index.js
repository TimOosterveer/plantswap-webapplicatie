import { format } from 'prettier';

// place files you want to import through the `$lib` alias in this folder.
export { default as Header } from '$lib/atoms/headers/HeaderImage.svelte';
export { default as Info } from '$lib/molecules/InfoWorkshop.svelte';
export { default as Card } from '$lib/molecules/cards/CardWorkshop.svelte';
export { default as Footer } from '$lib/organisms/Footer.svelte';
export { default as NavDark } from '$lib/organisms/NavDark.svelte';
export { default as MobileMenu } from '$lib/organisms/MobileMenu.svelte';

export { default as HeaderStekje } from '$lib/atoms/headers/ImageOverzicht.svelte';
export { default as StekjeCard } from '$lib/molecules/cards/StekjesCard.svelte';
export { default as StekjesInfo } from '$lib/molecules/InfoStekjes.svelte';
export { default as FilterFunctie } from '$lib/atoms/filters/Filter.svelte';

export { default as HeaderKast } from '$lib/atoms/headers/KastImage.svelte';
export { default as IntroKast } from '$lib/molecules/IntroKast.svelte';
export { default as TheMaking } from '$lib/molecules/kast/TheMaking.svelte';
export { default as TheMaking2 } from '$lib/molecules/kast/TheMaking2.svelte';
export { default as TheMaking3 } from '$lib/molecules/kast/TheMaking3.svelte';
export { default as TheMaking4 } from '$lib/molecules/kast/TheMaking4.svelte';

export { default as ContactForm } from '$lib/molecules/forms/ContactForm.svelte';
export { default as Location } from '$lib/atoms/iframe/Location.svelte';
export { default as ContactInfo } from '$lib/atoms/sections/ContactInforamtie.svelte';
