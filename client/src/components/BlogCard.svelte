<script>
  // Props
  export let published_at;
  export let body;
  export let author;
  export let image;
  export let title;
  export let label;
  // export let created_at;
  export let id;
  // export let updated_at;
</script>

<style>
  p {
    margin: 0;
    padding: 0;
  }
  .blog__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    margin: 1.5rem 0;
    padding: 17px;
    border-radius: 10px;
  }

  .blog__card:hover {
    background-color: #f5efef;
  }

  .blog__card > img {
    object-fit: contain;
    flex: 0.3;
    overflow: hidden;
    width: 100%;
  }

  .blog__card > .blog__details {
    flex: 0.6;
  }

  .label {
    padding: 5px 15px;
    background-color: rgba(127, 255, 212, 0.159);
    width: fit-content;
  }

  .blog__detailHead,
  .blog__detailFooter {
    display: flex;
  }

  .blog__detailHead {
    flex-direction: column;
  }

  .blog__detailFooter {
    justify-content: space-between;
    color: #969696;
    padding-top: 15px;
  }

  .blog__title {
    font-size: larger;
    padding: 8px 0;
  }

  .blog__body {
    font-size: smaller;
    word-break: break-word;
  }
  a {
    color: rgb(66, 66, 186);
  }
</style>

<div class="blog__card">
  {#if image}<img src={`http://localhost:4242${image?.url}`} alt="logo" />{/if}
  <div class="blog__details">
    <div class="blog__detailHead">
      <p class="label">{label}</p>
      <p class="blog__title">{title}</p>
    </div>
    <p class="blog__body">{body.slice(0, 80)}...</p>
    <a rel="prefetch" href={`/blog/${id}`}>Read More...</a>
    <div class="blog__detailFooter">
      <p>{published_at}</p>
      <p>{author}</p>
    </div>
  </div>
</div>
