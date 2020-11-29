<template>
  <Layout>
    <div class="common">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <div class="message">
    <div class="subtext">This is me</div>
    </div>
    <div class="end"/>
    <div class="name">Rohini Senthil</div>
    <div class="tagline">Software <div style="color: black">Developer</div> and Self-taught <div style="color: black">Artist</div></div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Rohini Senthil'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.common{
  font-family: 'Poppins', sans-serif;
}

.name{
  font-size: 52px;
  font-weight: 700;
}

.tagline {
  display: flex;
  white-space: pre;
  color: #757575;
}

.subtext{
  font-size: 12px;
  font-weight: 500;
  width:fit-content;
}

.message {
  background-color: #e0e0e0;
  padding: 8px;
  border-radius: 10px 15px 15px 0px;
  color: black;
  width: fit-content;
}

</style>
