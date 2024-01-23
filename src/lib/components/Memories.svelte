<script>
// @ts-nocheck

  // import SwiperCore, { Controller } from 'swiper';
  import { Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  import templates from "../data/featuredTemplates.json";

  //pnpm run dev
</script>

<div id="memories">
  <div class="container">
    <h2>Creating Memories</h2>
    <p>
      We provide unlimited high resolution photos for your guests, personalized
      with custom graphics of your choice. We also offer online photo galleries,
      fun props, and more, to help make your event truly unforgettable.
    </p>
    <div class="swiper-memories">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        roundLengths={true}
        loop={true}
        breakpoints={{
          "756": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        on:slideChange={() => console.log("slide change")}
      >
      {#each templates as template, i}
      {#if template.featured == true}
        <SwiperSlide>
          <h3 style="text-align: center;">{template.name}</h3>
          <img
            src="{template.link}"
            alt="{template.description}"
            height="100%"
          />
        </SwiperSlide>
        {/if}
        {/each}
      </Swiper>
    </div>
  </div>
</div>

<style>
  #memories {
    /* background: #e6e7e8; */
    /* border-radius: 55px 55px 0 0; */
    /* margin:40px; */
    /* box-shadow: 0px 0px 55px 35px rgba(0,0,0,.3); */
    /* max-width: 1440px; */
  }
  #memories .container {
    display: flex;
    /* margin:80px auto; */
    /* padding:40px 20px; */
    flex-direction: column;
    justify-content: center;
  }
  #memories img {
    /*max-height: 50%;
    max-width: 50%;*/
    margin: 0 auto;
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
    max-height: 70vh;
    height: auto;
    transform: scale(0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  :global(.swiper-memories .swiper-slide img) {
    /* max-width: 100%; */
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    object-position: center center;
    border-radius: 15px;
    /* box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3); */
  }
  :global(.swiper-memories .swiper-slide-active) {
    transform: scale(1);
    overflow: visible;
  }
  :global(.swiper-memories .swiper-slide-active img) {
    /* box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2); */
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
    #memories a{
    display: inline-block;
    width: auto;
    margin:50px auto;
    padding:10px 30px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    background: #041e2d;
    color:#e2e419;
    border-radius: 15px;
    font-size: 18px;
    line-height: 2.5em;
    transition: .2s all ease-in;
}
#memories a:hover{
    outline:3px solid #e6e7e8;
    box-shadow: 0px 0px 15px 3px rgba(0,0,0,.3);
}
</style>
