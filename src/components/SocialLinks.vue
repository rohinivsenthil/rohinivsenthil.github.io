<template>
    <div class="social-links">
      <font-awesome :icon="['fab', 'github']" class="social-icon" title="Github"/>
      <font-awesome :icon="['fab', 'twitter']" class="social-icon" title="Twitter"/>
      <font-awesome :icon="['fab', 'instagram']" class="social-icon" title="Instagram"/>
      <font-awesome :icon="['fab', 'linkedin']" class="social-icon" title="LinkedIn"/>
      <font-awesome :icon="['fas', 'envelope']" class="social-icon-end" title="Mail"/>
    </div>
</template>

<script>
export default {
  props: {
    message: String,
    sender:  Boolean,
  },
}
</script>

<style>
.social-links {
  margin: 6px;
}

.social-icon {
  margin: 6px; 
  font-size: 22px
}

.social-icon-end {
  margin: 6px 0px 6px 6px;
  font-size: 22px
}
</style>
