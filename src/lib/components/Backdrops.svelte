<script>
    // @ts-nocheck
      import { Navigation } from "swiper";
      import { Swiper, SwiperSlide } from "swiper/svelte";
    
      // Import Swiper styles
      import "swiper/css";
      import "swiper/css/navigation";
    
      import templates from "../data/backdrops.json";

      //pnpm run dev
    </script>
    
    <div id="backdrops">
      <div class="container">
        <h2>Magiksnap Backdrops</h2>
        <p>
          We provide various backdrops for the events.
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
            <SwiperSlide>
              <img
                src="{template.link}"
                alt="{template.description}"
                height="100%"
              />
              <h3 style="text-align: center;">{template.name}</h3>
            </SwiperSlide>
            {/each}
          </Swiper>
        </div>
      </div>
    </div>
    
    <style>
      #backdrops {
    /* max-width: 1440px; */
      }
      #backdrops .container {
        display: flex;
        /* margin:80px auto; */
        padding: 40px 20px;
        flex-direction: column;
        justify-content: center;
      }
      #backdrops img {
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
      }
      :global(.swiper-memories .swiper-slide h3) {
       display: none;
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
      :global(.swiper-memories .swiper-slide-active h3) {
        display: block;
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
    </style>
    