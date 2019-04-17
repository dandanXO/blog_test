<template>
  <section class="container">
    <div class="columns ">
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
  </section>
</template>

<script>

export default {
  async asyncData(context) {
    let { data } = await context.app.$axios.get(`${process.env.API_URL}post/allPosts`);
    return { posts: data.data };
  }
};
</script>

<style>
</style>
<style lang="scss" scoped>
.title {
  color: $black;
}
</style>
