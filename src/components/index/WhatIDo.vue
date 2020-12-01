<template>
  <div class="wid-wrapper">
    <div class="wid-content">
      <TextBubble message="More about what I do" :sender="false"/>
      <div class="wid-text">
        I'm an enthusiastic full stack software developer from Bangalore, India – currently working at
        <span class="text-highlight">McKinsey Digital Labs.</span>
        Check out the recent
        <span class="text-highlight">projects</span>
        I'm working on and
        <span class="text-highlight">blogs</span>
        I've written yada yada. 
      </div>
    </div>
    <div class="wid-image">
      <g-image src="~/buffer.png" width="300"/>
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
.wid-wrapper {
  display: flex;
  flex-wrap: wrap;
  color: #757575;
  font-size: 16px;
}

.wid-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.wid-text {
  padding: 20px 0px 20px 0px;
}

.wid-image {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}

.text-highlight {
  color: #424242; 
  font-weight: 600;
}
</style>
