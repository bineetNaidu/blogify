<script>
  import Button from "../../components/Button.svelte";
  import UserStore from "../../store";
  import { goto } from "@sapper/app";
  import Axios from "axios";

  let title;
  let label;
  let image;
  let body;

  const author = $UserStore.username;
  const jwt = $UserStore.userJWT;

  const handleSubmit = async () => {
    if (!jwt) {
      goto("signin");
    } else {
      if (title && body) {
        try {
          const res = await Axios.post(
            "http://localhost:4242/blogs",
            { title, image, author, body, label },
            {
              headers: { Authorization: "Bearer " + jwt },
            }
          );
          title = "";
          label = "";
          image = "";
          body = "";
          await goto(`blog/${res.data.id}`);
        } catch (err) {
          alert(err.message);
        }
      } else {
        alert("The Title And Body is required");
      }
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
  input,
  textarea {
    margin: 5px 0;
    padding: 5px 15px;
    outline-width: 0;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <h1>Create Blog</h1>
  <input type="text" placeholder="Title" bind:value={title} />
  <input type="text" placeholder="Label" bind:value={label} />
  <input type="text" placeholder="Image" bind:value={image} />
  <textarea cols="30" rows="10" bind:value={body} />
  <Button type="primary">Sign In</Button>
</form>
