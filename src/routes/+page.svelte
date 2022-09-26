<script lang="ts">
    import { fly } from 'svelte/transition';
import Memories from '$lib/components/Memories.svelte';
import Packages from '$lib/components/Packages.svelte';
import Booking from '$lib/components/Booking.svelte';


   
</script>

<div id="home">
    <p transition:fly="{{ y: 50, duration: 1500 }}">
        <span class="yellow">Magik Snap</span> provides <span class="yellow">photo booth</span> rental services for <span class="yellow">Weddings</span>, <span class="yellow">corporate events, private parties</span> and more. Our photo booths are portable, stylish and sophisticated.
    </p>
    <div>
        <img transition:fly="{{ y: 50, duration: 2000, delay:100 }}" src="/images/magik-snap-photo-booth-intro-image.jpg" alt="Photo Booth" />
    </div>
</div>
<!-- <img transition:fly="{{ y: 50, duration: 3000, delay:100 }}" src="/images/magik-snap-photo-booth-intro-image.jpg" alt="Photo Booth" /> -->
<Memories />
<Packages/>
<Booking/>
<style>
    #home{
        width: 100%;
        max-width: 1440px;
        padding:0 20px;
        margin:0px auto;
        min-height: calc(100vh - 178px);
        display: grid;
        grid-template-columns: 50% 50%;
        justify-content: space-between;
        align-items: center;
        gap:40px;
    }
    #home p{
        color:#e6e7e8;
        font-size:38px;
    }
    #home img{
        width: 100%;
        height: auto;
        border: none;
    }
    span.yellow{
        color:#f7e033;
    }
</style>