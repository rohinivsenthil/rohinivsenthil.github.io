<template>
    <div class="social-links">
      <font-awesome :icon="['fab', 'github']" class="social-icon github" title="Github"/>
      <font-awesome :icon="['fab', 'twitter']" class="social-icon twitter" title="Twitter"/>
      <font-awesome :icon="['fab', 'instagram']" class="social-icon instagram" title="Instagram"/>
      <font-awesome :icon="['fab', 'linkedin']" class="social-icon linkedin" title="LinkedIn"/>
      <font-awesome :icon="['far', 'envelope']" class="social-icon mail" title="Mail"/>
    </div>
</template>

<script>
export default {}
</script>

<style>
.social-links {
  margin: 6px;
  cursor: pointer;
}

.social-icon {
  margin: 6px; 
  font-size: 30px;
  color: #616161;
  transition: .4s;
}

.social-icon:last-child {
  margin: 6px 0px 6px 6px;
  font-size: 30px;
  color: #616161;
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
