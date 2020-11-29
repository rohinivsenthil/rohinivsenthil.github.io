<template>
  <Layout>
    <div class="common">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <div class="wrap">
      <div class="message">
    <div class="subtext">This is me</div>
    </div>
    <div class="name">Rohini Senthil</div>
    <div class="tagline">Software <div style="color: #03a9f4">Developer</div> and Self-taught <div style="color: #03a9f4">Artist</div></div>
   <div class="align">
    <div class="message2">
    <div class="subtext2">Let's get in touch</div>
    </div>
    <div class="icons">
      <font-awesome :icon="['fab', 'github']" style="margin: 6px; font-size: 22px" title="Github"/>
      <font-awesome :icon="['fab', 'twitter']" style="margin: 6px; font-size: 22px" title="Twitter"/>
      <font-awesome :icon="['fab', 'instagram']" style="margin: 6px; font-size: 22px" title="Instagram"/>
      <font-awesome :icon="['fas', 'envelope']" style="margin: 6px 0px 6px 6px; font-size: 22px" title="Mail"/>
    </div>
    </div>
    </div>
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

.icons {
  margin-top: 6px;
}

.tagline {
  display: flex;
  white-space: pre;
  color: #757575;
}
.align {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.subtext{
  font-size: 12px;
  font-weight: 500;
  width:fit-content;
}

.wrap {
  width: 100%;
}

.message {
  background-color: #e0e0e0;
  padding: 8px;
  border-radius: 10px 15px 15px 0px;
  color: black;
  width: fit-content;
}

.subtext2{
  font-size: 13px;
  font-weight: 500;
  width:fit-content;
}

.message2 {
  margin-top: 16px;
  background-color: #03a9f4;
  padding: 10px;
  border-radius: 15px 10px 0px 15px;
  color: white;
  width: fit-content;
  /* text-decoration: underline; */
}

</style>
