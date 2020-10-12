<script>
  import UserStore from "../store";
  export let segment;

  // Functions
  const handleLogout = () => {
    UserStore.update(() => ({
      username: null,
      userJWT: null,
      confirmed: null,
      email: null,
    }));
  };
  console.log(segment);
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .current {
    position: relative;
    display: inline-block;
  }

  .current::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a,
  span {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    cursor: pointer;
  }

  .nav__right {
    float: right;
  }
</style>

<nav>
  <ul>
    <li><a class:current={segment === undefined} href=".">Blogify</a></li>
    <li><a class:current={segment === 'about'} href="about">about</a></li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li><a rel=prefetch class:current="{segment === 'blog'}" href="blog">blog</a></li>
    <div class="nav__right">
      {#if $UserStore.username}
        <li><span>@{$UserStore.username}</span></li>
        <li>
          <a class:current={segment === 'add'} href="blog/add">Create new Blog</a>
        </li>
        <li on:click={handleLogout}><span>Log Out</span></li>
      {:else}
        <li>
          <a class:current={segment === 'signin'} href="signin">Signin</a>
        </li>
      {/if}
    </div>
  </ul>
</nav>
