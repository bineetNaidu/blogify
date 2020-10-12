<script>
  import axios from "axios";
  import UserStore from "../store.js";
  import Button from "../components/Button.svelte";
  import { goto } from "@sapper/app";

  let identifier;
  let password;

  // Functions
  const handleSubmit = async () => {
    if (identifier && password) {
      const res = await axios.post("http://localhost:4242/auth/local", {
        identifier,
        password,
      });
      const data = res.data;
      UserStore.update((user) => ({
        username: data.user.username,
        userJWT: data.jwt,
        confirmed: data.user.confirmed,
        email: data.user.email,
      }));
      identifier = "";
      password = "";
      goto("blog");
    }
  };
</script>

<style>
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    padding: 0 10rem;
  }
  input {
    margin: 5px 0;
    padding: 5px 15px;
    outline-width: 0;
  }
</style>

<svelte:head>
  <title>Blogify | Sign In</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
  <h1>Sign In with Blogify</h1>
  <input type="text" placeholder="UserName" bind:value={identifier} />
  <input type="password" placeholder="Password" bind:value={password} />
  <Button type="primary">Sign In</Button>
</form>
