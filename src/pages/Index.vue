<template>
  <Layout>
    <div class="index-container">
      <div class="section-wrapper">
        <TextBubble message="This is me" :sender="false"/>
        <NameWithTagline/>
        <div class="align-to-right">
          <TextBubble message="Let's get in touch" :sender="true"/>
          <SocialLinks/>
        </div>
      </div>
      <Separator/>
      <div class="section-wrapper">
        <WhatIDo/>
      </div>
      <Separator/>
      <div class="section-wrapper">
          <BehindTheScreen/>
      </div>
    </div>
  </Layout>
</template>

<script>
import TextBubble from '../components/shared/TextBubble.vue';
import SocialLinks from '../components/shared/SocialLinks.vue';
import Separator from '../components/shared/Separator';
import NameWithTagline from '../components/index/NameWithTagline';
import WhatIDo from '../components/index/WhatIDo';
import BehindTheScreen from '../components/index/BehindTheScreen';
export default {
  metaInfo: {
    title: 'About'
  },
  components: {
    TextBubble,
    SocialLinks,
    Separator,
    NameWithTagline,
    WhatIDo,
    BehindTheScreen
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
  padding: 80px 0px 80px 0px;
}

.align-to-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
