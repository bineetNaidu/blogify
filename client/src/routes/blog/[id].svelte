<script context="module">
  import axios from "axios";
  export async function preload(page, session) {
    const { id } = page.params;
    console.log(id);
    const res = await axios.get(`http://localhost:4242/blogs/${id}`);
    const blog = res.data;
    return { blog };
  }
</script>

<script>
  export let blog;
  const { published_at, body, author, image, title, label } = blog;
</script>

<style>
  .blog {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .label {
    padding: 5px 15px;
    background-color: rgba(127, 255, 212, 0.159);
    width: fit-content;
    text-align: center;
  }

  .blog__title {
    font-size: 2rem;
    padding: 8px 0;
  }

  .blog__date,
  .blog__author {
    color: #969696;
  }

  .blog__body {
    word-break: break-word;
  }
</style>

<svelte:head>
  <title>Blogify | {title}</title>
</svelte:head>

<div class="blog">
  {#if image}
    <img src={`http://localhost:4242${image?.url}`} alt={blog.title} />
  {/if}
  <p class="label">{label}</p>

  <h1 class="blog__title">{title}</h1>

  <p class="blog__date">{published_at}</p>

  <p class="blog__body">{body}</p>

  <p class="blog__author">- {author}</p>
</div>
