<template>
  <div>
    <section
      class="hero is-info is-medium is-bold"
      v-bind:style="{ 'background-image': 'url(' + movie.picture + ')',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
       'height': '33vh'}"
    >
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{movie.title}}</h1>
        </div>
      </div>
    </section>
    <div class="card article">
      <div class="video-container">
        <iframe :src="movie.yLink" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content has-text-centered">
            <p class="title article-title">{{movie.title}}</p>
          </div>
        </div>
        <div class="content article-body">{{movie.content}}</div>
      </div>
    </div>
    <div class="columns is-desktop other">
      <div class="column" v-for="(item, key, index) in otherpost" :key="index">
        <div class="card">
          <div class>
            <p class="title">{{item.title}}</p>
            <div class="content ellipsis">{{item.content.slice(1,100)}}...</div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <nuxt-link class="is-prime" :to="{path: `/posts/${item.title}`}">More</nuxt-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import https from "https";
import axios from "axios";
export default {
  async asyncData(context) {
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    let { data } = await axios.get(`${process.env.API_URL}post/getpost`, {
      params: {
        name: context.params.id
      },
      httpsAgent: agent
    });
    let otherpost = await axios.get(`${process.env.API_URL}post/getotherpost`, {
      params: {
        expcept: context.params.id
      },
      httpsAgent: agent
    });
    return { movie: data.data, otherpost: otherpost.data.otherpost };
  }
};
</script>

<style>
</style>
<style scoped lang="scss" scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 50%;
}
.card-content {
  margin-top: -30%;
}
.other {
  margin: 0 14%;
}
.content {
  padding: 0 15%;
}
@media screen and (max-width: 600px) {
  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .card-content {
    margin-top: -1%;
  }
  .other {
    margin: 0 1%;
  }
}
</style>
