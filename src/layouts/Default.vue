<template>
  <div class="layout">
    <header class="header">
        <g-link to="/" style="text-decoration: none; color:  rgb(187, 100, 97);">About</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/resume">Resume</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      © 2020 Rohini Senthil.  All rights reserved.
    </footer>
  </div>
</template>

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

.nav__link {
  margin-left: 20px;
  text-decoration: none;
  color: rgb(101, 152, 147);
}

.footer {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 11px;
  color: #bdbdbd;
}
</style>
