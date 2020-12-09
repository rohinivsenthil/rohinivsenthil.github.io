<template>
    <div class="social-links">
      <a href="https://github.com/rohinivsenthil" target="_blank">
        <font-awesome :icon="['fab', 'github']" class="social-icon github" title="Github" />
      </a>
      <a href="https://twitter.com/rohvsenthil" target="_blank">
        <font-awesome :icon="['fab', 'twitter']" class="social-icon twitter" title="Twitter"/>
      </a>
      <a href="https://instagram.com/rohuehue" target="_blank">
        <font-awesome :icon="['fab', 'instagram']" class="social-icon instagram" title="Instagram"/>
      </a>
      <a href="https://www.linkedin.com/in/rohini-senthil-838389176/" target="_blank">
        <font-awesome :icon="['fab', 'linkedin']" class="social-icon linkedin" title="LinkedIn"/>
      </a>
      <a href="mailto:rohinivsenthil@gmail.com" target="_blank">
        <font-awesome :icon="['far', 'envelope']" class="social-icon mail" title="Mail"/>
      </a>
    </div>
</template>

<script>
export default {}
</script>

<style>
.social-links {
  display: flex;
  align-items: center;
  height: 36px;
  margin: 6px 0px 6px 0px;
  cursor: pointer;
}

.social-icon {
  margin: 6px 0px 6px 18px; 
  font-size: 24px;
  color: #616161;
  transition: .3s;
}

.social-icon:hover {
  font-size: 30px;
}

.github:hover {
  color: black;
}

.twitter:hover {
  color: #1da1f2;
}

.instagram:hover {
  color: #c32aa3;
}

.linkedin:hover {
  color: #0a66c2;
}

.mail:hover {
  color: #aa2200;
}

</style>
