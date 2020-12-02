<template>
  <div class="layout">
    <header class="header">
        <g-link to="/" :class="path == '' ? 'active-link' : 'default-link'">About</g-link>
      <nav class="nav">
        <g-link :class="path == 'blog' ? 'space active-link' : 'space default-link'" to="/blog">Blog</g-link>
        <g-link :class="path == 'resume' ? 'space active-link' : 'space default-link'" to="/resume">Resume</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      © 2020 Rohini Senthil.  All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {

  data() {
    const pathArray = window.location.pathname.split( '/' );
    return {
      path: pathArray[1],
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 850px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.default-link {
  text-decoration: none;
  color: rgb(101, 152, 147);
}

.space {
  margin-left: 20px;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 11px;
  color: #bdbdbd;
}

.active-link {
  color: rgb(187, 100, 97);
  text-decoration: none;
}

</style>
