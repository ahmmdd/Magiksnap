<script>
    import {enhance} from "$app/forms";
  import ContractForm from "$lib/components/ContractForm.svelte";

  let date = new Date();
    
    let minDatePicker = new Date().toISOString().split("T")[0];

</script>
<form action="?/booking" method="POST" use:enhance>
  <h1>Book an Event</h1>
  <div class="two-col">
    <div>
      <label for="first_name">First Name</label>
      <input type="text" name="first_name" value="John" required/>
    </div>
    <div>
      <label for="last_name">Last Name</label>
      <input type="text" name="last_name" value="Smith" required/>
    </div>
  </div>
  <div class="two-col">
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" value="test@magiknsap.ca" required/>
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="number" id="phone" name="phone" value="4168813415" minlength="10" maxlength="10" inputmode="numeric" required />
    </div>
  </div>
  <div class="two-col">
    <div>
      <label for="event_location">Location</label>
      <input type="text" name="event_location" value="scarborough" required/>
    </div>
    <div>
      <label for="event_date">Event Date</label>
      <input type="date"  min={minDatePicker} value={minDatePicker} name="event_date" required>
    </div>
  </div>
  <div class="one-col">
    <label for="comment">Additional Info</label>
    <textarea name="comment" cols="13" rows="10" required></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
<style lang="scss">
  form{
    max-width: 960px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h1{
    color:#fff;
  }
  form label{
    color:#fff;
  }
  form input{
    line-height: 1.5em;
  }
    .two-col{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap:20px;
    }
    .two-col div, .one-col{
      display: flex;
      flex-direction: column;
      gap:10px;
    }
    button{
      padding:15px 0;
      cursor: pointer;
    }
</style>