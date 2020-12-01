<template>
  <Layout>
    <div class="resume-container">
      <div class="section-wrapper">
        <div class="align-to-right">
          <TextBubble message="Click here to download my resume" :sender="true"/>
        </div>
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
    title: 'Resume'
  },
  components: {
    TextBubble,
    Separator,
  }
}
</script>

<style>
.resume-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}
</style>
