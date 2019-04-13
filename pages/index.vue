<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">MOVIE Blog</h1>
          <h2 class="subtitle">some movie info</h2>
        </div>
      </div>
    </section>
    <Slider :posts="posts"></Slider>
    <br>
    <div class="columns is-desktop">
      <div class="column" v-for="(item, key, index) in posts" :key="index">
        <div class="card">
          <div class="card-content">
            <p class="title">{{item.title}}</p>
            <div class="content ellipsis">{{item.content.slice(1,100)}}...</div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
               <nuxt-link class="is-prime" :to="{path: `posts/${item.title}`}">More</nuxt-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/Slider";
import axios from "axios";
import https from "https";
export default {
  components: {
    Slider
  },
  async asyncData() {
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    let { data } = await axios.get(`${process.env.API_URL}post/allPosts`, {
      httpsAgent: agent
    });
    return { posts: data.data };
  }
};
</script>
<style>
</style>
<style lang="scss" scoped>
.hero-body {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Plum_trees_Kitano_Tenmangu.jpg/1200px-Plum_trees_Kitano_Tenmangu.jpg);
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
