<template>
  <Layout>
    <div class="index-container">
      <div class="section-wrapper">
        <TextBubble message="This is me" :sender="false"/>
        <NameWithTagline />
        <div class="align-to-right">
          <TextBubble message="Let's get in touch" :sender="true"/>
          <SocialLinks />
        </div>
      </div>
      <div class="section-wrapper">
        <TextBubble message="More about what I do" :sender="false"/>
      </div>
      <div class="section-wrapper">
        <div class="align-to-right">
          <TextBubble message="Behind the screen" :sender="true"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TextBubble from '../components/shared/TextBubble.vue';
import SocialLinks from '../components/shared/SocialLinks.vue';
import NameWithTagline from '../components/index/NameWithTagline';
export default {
  metaInfo: {
    title: 'Rohini Senthil'
  },
  components: {
    TextBubble,
    SocialLinks,
    NameWithTagline
  }
}
</script>

<style>
.index-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.section-wrapper {
  width: 100%;
  border-width: 0px 0px 2px 0px;
  border-color: #eeeeee;
  border-style: solid;
  padding-top: 50px;
  padding-bottom: 50px;
}

.align-to-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
