<template>
  <Layout>
    <div class="blog-container">
      <div class="header-wrapper">
        <TextBubble message="Read my thoughts and learnings" :sender="false"/>
        <div class="header-title">Blogs</div>
        <div class="header-subtitle">Alternatively, you can also find my writings on 
          <a href="https://dev.to/rohinivsenthil" target="__blank" class="external-link text-highlight">dev.to</a>
        </div>
      </div>
      <Separator/>
    </div>
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

.header-wrapper {
  width: 100%;
  padding: 20px 0px 40px 0px;
}

.header-title {
  font-size: 42px;
  font-weight: 700;
  margin: 12px 0px 10px 0px;
}

.header-subtitle {
  color: #757575;
  margin-bottom: 20px;
}
</style>
