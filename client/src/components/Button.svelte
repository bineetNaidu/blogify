<script>
  export let type = "primary";
  export let flat = true;
</script>

<style>
  button {
    padding: 10px 25px;
    /* border: 0; */
    border-width: 0;
  }

  button.primary {
    background: #a1e2a1;
  }

  button.secondary {
    background: #ff5353;
    color: white;
  }

  button.flat {
    box-shadow: 1px 2px 3px #0704046e;
  }
</style>

<button class={type} on:click class:flat>
  <slot />
</button>
