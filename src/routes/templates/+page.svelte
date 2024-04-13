<svelte:head>
  <title>Magik Snap | Photobooth Templates Library</title>
  <meta name="description" content="Magiksnap provides the photobooth template for your event from our vast library of ready templates made for you.">
  <meta name="keywords" content="Photobooth, Templates, Strip, Postcard">
</svelte:head>
<div id="photo-templates" class="wrapper flex full-page-height">
    <!-- <div
      class="container"
      use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
      on:change={({ detail }) => {
        isInView = detail.inView;
      }}
    > -->
      <!-- {#if isInView} -->
        <h1>
          Magiksnap Photo Booth Templates
        </h1>
        <p>
          Select the template for your event from our vast library of ready
          templates made for you.
        </p>
        <div>
          <div class="photo-templates-gallery">
            <div>
              <a href="./templates/strip">
                <h3 class="text-heading" style="text-align: center;">
                  Strip(2X6) Templates
                </h3>
                <img
                  src="/images/templates/all/062.png"
                  alt="Magiksnap Strip Tempalates"
                  height="85%"
                />
              </a>
            </div>
            <div>
              <a href="./templates/postcard">
                <h3 class="text-heading" style="text-align: center;">
                  Postcard(4X6) Templates
                </h3>
                <img
                  src="/images/templates/all/124.png"
                  alt="Magiksnap Strip Tempalates"
                  height="90%"
                />
              </a>
            </div>
          </div>
        </div>
      <!-- {/if} -->
    <!-- </div> -->
</div>

<style>
  .text-heading {
    color: black;
  }
  #photo-templates {
    /* background: #e6e7e8; */
    /* width: 100%; */
    /* border-radius: 25px; */
    /* min-height: 80vh; */
  }
  /* #photo-templates p {
    font-size: 24px;
    color: #e6e7e8;
    text-align: center;
    max-width: 1100px;
    margin: 20px auto;
  } */
  .container {
    max-width: 1440px;
    margin: 80px auto;
  }
  .photo-templates-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--default-gap);
  }
  .photo-templates-gallery div {
    height: 500px;
    background: #e6e7e8;
    padding: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
  .photo-templates-gallery div a {
    cursor: pointer;
    height: 500px;
  }
  .photo-templates-gallery img {
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 756px) {
    .photo-templates-gallery {
      display: grid;
      grid-template-columns: 100%;
    }
  }
</style>
