<script>

import Header from '$lib/components/Header.svelte';
import '../app.scss';
import { onMount } from 'svelte';
  import Footer from '$lib/components/Footer.svelte';
    let ready = false;
  onMount(() => ready = true);
</script>
<!-- <body> -->
    {#if ready}
    <Header/>
    <slot />
    <Footer/>
    {/if}
<!-- </body> -->

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
*{
    box-sizing: border-box;
}
:global(*) {
    box-sizing: border-box;
    }
body{
    margin:0;
    padding:0;
    background:#041e2d;
    font-family: 'Nanum Gothic', sans-serif;
} */
</style>