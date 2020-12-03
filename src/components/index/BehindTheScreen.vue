<template>
  <div class="bts-wrapper">
    <div class="bts-image">
      <g-image src="~/bts-image.png" width="380"/>
    </div>
    <div class="bts-content">
      <TextBubble message="Behind the screen" :sender="true"/>
      <div class="bts-text">
        I'm a self-taught artist who's passionate about creating both traditional and digital art in my leisure time. Check out the
        <span class="text-highlight">gallery</span>
        to view my recent works.
      </div>
    </div>
  </div>
</template>

<script>
import TextBubble from '../shared/TextBubble.vue';
export default {
  components: {
    TextBubble
  }
}
</script>

<style>
.bts-wrapper {
  display: flex;
  flex-wrap: wrap-reverse;
  color: #757575;
  font-size: 16px;
}

.bts-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  text-align: end;
}

.bts-text {
  padding: 20px 0px 20px 0px;
}

.bts-image {
  display: flex;
  flex: 1;
}
</style>
