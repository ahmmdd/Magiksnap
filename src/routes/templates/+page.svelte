<script>
  // @ts-nocheck
  
    // Import Swiper styles
  
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
  
    import templates from "$lib/data/templates.json";
  
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
      {#each templates as template, i}
              <div>
              <h3 style="text-align: center;">{template.name}</h3>
              <img
                  src="{template.link}"
                  alt="{template.description}"
                  height="100%"
              />
              </div>
      {/each}
      </div>
      </div>
      {/if}
    </div>
  </div>
  
  <style>
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
      grid-template-columns: 33% 33% 33%;
      gap:30px;
    }
    .photo-templates-gallery div{
      height: auto;
      background: #e6e7e8;
      padding:15px;
      border-radius: 15px;
    }
    .photo-templates-gallery img{
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    @media screen and (max-width:756px){
      .photo-templates-gallery{
      display: grid;
      grid-template-columns: 100%;
    }
  }
  </style>
  