<script>
  // @ts-nocheck
  
    // Import Swiper styles
  
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
  
  
    let isInView = false;
    //pnpm run dev
  </script>
  
  <div id="photo-templates">
    <div class="container"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
    >
    {#if isInView}
      <h2 transition:fly="{{ y: 50, duration: 500 }}">Magiksnap Photo Booth Templates</h2>
      <p transition:fly="{{ y: 50, duration: 500, delay:250 }}">
        Select the template for your event from our vast library of ready templates made for you.
      </p>
      <div transition:fly="{{ y: 50, duration: 500, delay:500 }}">
        <div class="photo-templates-gallery">
              <div>
                <a href="./templates/strip">
                  <h3 class="text-heading" style="text-align: center;">Strip(2X6) Templates</h3>
                  <img
                      src="/images/templates/all/062.png"
                      alt="Magiksnap Strip Tempalates"
                      height="85%"
                  />
               </a>
            </div>
            <div>
              <a href="./templates/postcard">
                <h3 class="text-heading" style="text-align: center;">Postcard(4X6) Templates</h3>
                <img
                    src="/images/templates/all/124.png"
                    alt="Magiksnap Strip Tempalates"
                    height="90%"
                />
             </a>
          </div>
      </div>
      </div>
      {/if}
    </div>
  </div>
  
  <style>
    .text-heading {
          color: black;
      }
    #photo-templates {
      /* background: #e6e7e8; */
      border-radius: 25px;
    }
    #photo-templates .container {
      display: flex;
      /* margin:80px auto; */
      padding: 100px;
      flex-direction: column;
      justify-content: center;
    }
    #photo-templates h2 {
      color:#e6e7e8;
      font-size: 42px;
      text-align: center;
      margin: 0;
    }
    #photo-templates p {
      font-size: 24px;
      color:#e6e7e8;
      text-align: center;
      max-width: 1100px;
      margin: 20px auto;
    }
    .container {
      max-width: 1440px;
      margin: 80px auto;
    }
    .photo-templates-gallery{
      display: grid;
      grid-template-columns: 50% 50%;
      gap:30px;
    }
    .photo-templates-gallery div{
      height: 500px;
      background: #e6e7e8;
      padding:15px;
      border-radius: 15px;
      cursor: pointer;
    }
    .photo-templates-gallery div a{
      cursor: pointer;
      height: 500px;
    }
    .photo-templates-gallery img{
      width: 100%;
      object-fit: contain;
    }
    @media screen and (max-width:756px){
      .photo-templates-gallery{
      display: grid;
      grid-template-columns: 100%;
    }
  }
  </style>
  