<template>
  <Layout>
    <div class="blog-container">
      <div class="section-wrapper">
        <TextBubble message="Check out my blogs" :sender="false"/>
      </div>
    </div>
    <Separator/>
  </Layout>
</template>

<script>
import TextBubble from '../components/shared/TextBubble.vue';
import Separator from '../components/shared/Separator.vue';
export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    TextBubble,
    Separator,
  }
}
</script>

<style>
.blog-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}
</style>
