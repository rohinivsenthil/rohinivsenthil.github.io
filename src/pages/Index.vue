<template>
  <Layout>
    <div class="common">
      <div class="wrap">
        <TextBubble message="This is me" :sender="false"/>
        <div class="name">Rohini Senthil</div>
        <div class="tagline">Software <div style="color: rgb(101, 152, 147); font-weight: 600">Developer</div> and Self-taught <div style="color: rgb(187, 100, 97); font-weight: 600">Artist</div></div>
        <div class="align">
          <TextBubble message="Let's get in touch" :sender="true"/>
          <SocialLinks />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TextBubble from '../components/TextBubble.vue';
import SocialLinks from '../components/SocialLinks.vue'
export default {
  metaInfo: {
    title: 'Rohini Senthil'
  },
  components: {
    TextBubble,
    SocialLinks,
  }
}
</script>

<style>
.common{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  border-width: 0px 0px 2px 0px;
  border-color: #e0e0e0;
  border-style: solid;
  padding-top: 70px;
  padding-bottom: 70px;
}

.name{
  font-size: 52px;
  font-weight: 700;
}

.tagline {
  display: flex;
  white-space: pre;
  color: #757575;
  margin-bottom: 16px;
}
.align {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.wrap {
  width: 100%;
}
</style>
