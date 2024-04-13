<script>
  import Memories from "$lib/components/Memories.svelte";
  import Packages from "$lib/components/Packages.svelte";
  import Booking from "$lib/components/Booking.svelte";
  import Backdrops from "$lib/components/Backdrops.svelte";
</script>
<title>Magik Snap</title>
  <meta name="description" content="MagikSnap Corp. provides photo booth rental services for Weddings, corporate events, private parties and more. Our photo booths are portable, stylish and sophisticated.">
  <meta name="keywords" content="Photobooth Rental Services, Toronto, Missasauga, Oakville, Oshawa, Hamilton">
<div class="wrapper flex flex-column">
  <div id="home">
    <p>
      <span class="yellow">MagikSnap Corp.</span> provides
      <span class="yellow">photo booth</span>
      rental services for <span class="yellow">Weddings</span>,
      <span class="yellow">corporate events, private parties</span> and more. Our
      photo booths are portable, stylish and sophisticated.
    </p>
    <div>
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="/images/magik-snap-photo-booth-intro-image.jpg"
        alt="Magik Snap Photo Booth"
      />
    </div>
  </div>
  <Memories />
  <Packages />
  <Backdrops />
  <a href="/book-an-event" class="btn">Book Your Photobooth Now</a>
</div>

<style>
  
  #home {
    width: 100%;
    max-width: 1440px;
    padding: 0 20px;
    margin: 0px auto;
    min-height: calc(100vh - 178px);
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  #home p {
    color: #e6e7e8;
    font-size: 38px;
  }
  #home img {
    width: 100%;
    height: auto;
    border: none;
  }
  span.yellow {
    color: #f7e033;
  }
  @media screen and (max-width: 756px) {
    #home {
      grid-template-columns: 100%;
    }
  }
</style>
