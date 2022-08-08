<script>
  // import SwiperCore, { Controller } from 'swiper';
  import { Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  // import SwiperComponent from "swiper/esm/svelte/swiper.svelte";
  //   import { Swiper } from "swiper";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  let isInView = false;

  const phototemplates = [
      {
        imageLink: "/images/magik-snap-photo-booth-intro-image.jpg",
        imageDescription: "Image Description",
      },
      {
        imageLink: "/images/magik-snap-photo-booth-intro-image.jpg",
        imageDescription: "Image Description"

      },
  ];
</script>

<div id="memories">
  <div class="container"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
  >
  {#if isInView}
    <h2 transition:fly="{{ y: 50, duration: 1000 }}">Creating Memories</h2>
    <p transition:fly="{{ y: 50, duration: 1000, delay: 500 }}">
      We provide unlimited high resolution photos for your guests, personalized
      with custom graphics of your choice. We also offer online photo galleries,
      fun props, and more, to help make your event truly unforgettable.
    </p>
    <div class="swiper-memories" transition:fly="{{ y: 50, duration: 1000, delay:1000 }}">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        roundLengths={true}
        loop={false}
        on:slideChange={() => console.log("slide change")}
      >
      {#each phototemplates as phototemplate, i}
        <SwiperSlide>
          <img
            src="{phototemplate.imageLink}"
            alt="{phototemplate.imageDescription}"
          />
        </SwiperSlide>
        {/each}
      </Swiper>
    </div>
    {/if}
  </div>
</div>

<style>
  #memories {
    background: #e6e7e8;
    border-radius: 25px;
  }
  #memories .container {
    display: flex;
    /* margin:80px auto; */
    padding: 100px;
    flex-direction: column;
    justify-content: center;
  }
  #memories img {
    max-width: 800px;
    margin: 0 auto;
  }
  #memories h2 {
    font-size: 42px;
    text-align: center;
    margin: 0;
  }
  #memories p {
    font-size: 24px;
    color: #041e2d;
    text-align: center;
    max-width: 1100px;
    margin: 20px auto;
  }
  .container {
    max-width: 1440px;
    margin: 80px auto;
  }
  .swiper-memories {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  :global(.swiper) {
    padding: 50px 0;
  }
  :global(.swiper-memories .swiper-slide) {
    transform: scale(0.8);
  }
  :global(.swiper-memories .swiper-slide img) {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  }
  :global(.swiper-memories .swiper-slide-active) {
    transform: scale(1);
    overflow: visible;
  }
  :global(.swiper-memories .swiper-slide-active img) {
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
  }
  /* .swiper-wrapper{
        max-width: 400px;
        margin:0 auto;
    }
    .swiper-slide img{
        width:100%;
        height:auto;
        overflow: hidden;
    } */
</style>
