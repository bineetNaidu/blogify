<script>
  import Button from "../components/Button.svelte";
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  .container {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Blogify</title>
</svelte:head>

<div class="container">
  <h1>Blofigy</h1>
  <p>Publish your passions, your way</p>
  <Button type="secondary" flat>Create your Blog</Button>
</div>
