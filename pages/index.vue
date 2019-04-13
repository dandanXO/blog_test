<template>
  <section class="container">
    <div>
      <h1 class="title">Blog</h1>

      <Slider :posts="posts"></Slider>
    </div>
  </section>
</template>

<script>
import Slider from "~/components/Slider";
export default {
  components: {
    Slider
  },
  asyncData() {
      return { posts: [1, 2, 3] };
  }
};
</script>

<style>
.container {
  margin: 0 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
<style lang="scss">
.title {
  color: $black;
}
</style>
