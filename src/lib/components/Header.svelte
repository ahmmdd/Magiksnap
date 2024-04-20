<script>
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  let menuItems = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/templates",
      name: "Templates",
    },
    {
        link: "/backdrops",
        name: "Backdrops"
    },
    {
        link: "/packages",
        name: "Packages"
    },
    {
        link: "/props",
        name: "Props"
    },
    {
      link: "/book-an-event",
      name: "Book Now",
    },
  ];
</script>

<header>
  <div class="header-container">
    <div>
      <a href="/">
        <img
          src="/images/magik-snap-icon.svg"
          alt="Magik Snap Icon"
          width="40px"
          height="auto"
        />
      </a>
    </div>
    <nav>
      <ul>
        {#each menuItems as menu}
          <li class:active={$page.url.pathname == menu.link}>
            <a href={menu.link}>{menu.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 8px;
    left: 0;
    width: 100vw;
    height: auto;
    z-index: 999;
    @include sm-screen{
           top:0px;
        }
    .header-container {
      max-width: 1440px;
      background: var(--light-bg-color);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: var(--default-gap);
      padding: calc(var(--default-gap) * 1) 100px;
      margin: calc(var(--default-gap)) auto;
      border-radius: 100px;
      box-shadow: 0px 0px 20px 5px rgba(13, 0, 111, 0.3);
      @include sm-screen{
            padding:var(--default-gap) calc(var(--default-gap) * 4);
            margin:0;
            border-radius: 0 0 10px 10px;
        }
      nav {
        @include sm-screen{
            display:none;
        }
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          gap: var(--default-gap);
          li {
            margin: 0;
            padding: 0;
            list-style: none;
            padding: 4px 16px;
            border-radius: 40px;
            &.active {
              background-color: yellow;
            }
            a {
              font-weight: bold;
              text-decoration: none;
              color: var(--primary-color);
            }
          }
        }
      }
    }
    // display: none;
  }
</style>
