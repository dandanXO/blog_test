<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(item, key, index) in posts" :key="index">
          <div
            class="bg-image"
            v-bind:style="{ 'background-image': 'url(' + item.picture + ')',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover'}"
          ></div>
          <div class="bg-text">
            <nuxt-link
              class="is-prime"
              :to="{path: `posts/${item.title}`}"
              :style="{}"
              :class="{link:true}"
            >{{item.title}}</nuxt-link>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import Swipercss from "swiper/dist/css/swiper.min.css";

export default {
  props: ["posts","direction","loop","needPagination","needNavigation","needScrollbar"],
  mounted: function() {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: this.direction,
      loop: this.loop,
      // If we need pagination
      pagination: {
        el: this.needPagination?".swiper-pagination":""
      },
      // Navigation arrows
      navigation: {
        nextEl: this.needNavigation?".swiper-button-next":"",
        prevEl:  this.needNavigation?".swiper-button-prev":""
      },
      // And if we need scrollbar
      scrollbar: {
        el: this.needScrollbar?".swiper-scrollbar":""
      }
    });
  },
   data() {
    return {
      toggle: true
    };
  }
};
</script>
<style lang="scss">
.swiper-container {
  width: 900px;
  margin-top: 10px;
  height: 300px;
}
.bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
.bg-image {
  /* Add the blur effect */
  filter: blur(3px);
  -webkit-filter: blur(3px);
  /* Full height */
  height: 100%; 
  width: 100%;
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.link {
  color: white;
  font-size: 0.8cm;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  color: black;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
@media screen and (max-width: 900px) {
  .swiper-container {
    width: 100vw;
    height: 300px;
  }
}
</style>