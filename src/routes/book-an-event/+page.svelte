<script>
  import { enhance } from "$app/forms";
  import ContractForm from "$lib/components/ContractForm.svelte";

  let date = new Date();

  export let form;

  let minDatePicker = new Date().toISOString().split("T")[0];
</script>

<svelte:head>
  <title>Magik Snap | Book a Photobooth Event</title>
  <meta name="description" content="Book your Photobooth Event in Toronto now" />
  <meta
    name="keywords"
    content="Book your photobooth Event Toronto, Photobooth, Photobooth Rentals, Events, Toronto, Missasauga, Oakville, Kitchner"
  />
</svelte:head>
<div class="wrapper flex full-page-height">
  <h1>Book an Event</h1>
  {#if form?.success}
    <div class="success">
      <p class="bold">
        Thank You, your event details have been submitted.<br />A team member
        will contact you shortly.
      </p>
    </div>
  {:else}
    <p>
      Book your photobooth event now by filling in the form below and our team
      will get back to you.
    </p>
    <form action="?/booking" method="POST" use:enhance>
      <div class="two-col">
        <div>
          <label for="first_name">First Name</label>
          <input type="text" name="first_name" required />
        </div>
        <div>
          <label for="last_name">Last Name</label>
          <input type="text" name="last_name" required />
        </div>
      </div>
      <div class="two-col">
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            minlength="10"
            maxlength="10"
            inputmode="numeric"
            required
          />
        </div>
      </div>
      <div class="two-col">
        <div>
          <label for="event_location">Location</label>
          <input type="text" name="event_location" required />
        </div>
        <div>
          <label for="event_date">Event Date</label>
          <input
            type="date"
            min={minDatePicker}
            value={minDatePicker}
            name="event_date"
            required
          />
        </div>
      </div>
      <div class="one-col">
        <label for="comment">Additional Info</label>
        <textarea name="comment" cols="13" rows="10" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  {/if}
</div>

<style lang="scss">
  form {
    width: 100%;
    // max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: var(--default-gap);
  }
  // h1 {
  //   color: #fff;
  // }
  form label {
    color: #fff;
  }
  form input {
    line-height: 2em;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @include sm-screen {
      grid-template-columns: 1fr;
    }
  }
  .two-col div,
  .one-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
