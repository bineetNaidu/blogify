<script context="module">
  import axios from "axios";
  export async function preload(page, session) {
    const res = await axios.get("http://localhost:4242/blogs");
    const blogs = res.data;
    return { blogs };
  }
</script>

<script>
  import BlogCard from "../../components/BlogCard.svelte";

  export let blogs;
</script>

<style>
  .jobs__tile {
    color: rgb(167 101 80);
  }
</style>

<svelte:head>
  <title>Blogify | Blogs</title>
</svelte:head>

<h1 class="jobs__tile">Recent Blogs</h1>

{#each blogs as blog (blog.id)}
  <BlogCard {...blog} />
{/each}
