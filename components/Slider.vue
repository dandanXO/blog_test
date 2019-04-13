<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(item, key, index) in posts" :key="index">{{item}}</div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import Swipercss from "swiper/dist/css/swiper.min.css";
import axios from "axios";
export default {
 props:['posts'],
  head() {
    return {
      link: [{ rel: "stylesheet", href: Swipercss }]
    };
  },
  mounted: function() {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }
};
</script>
<style lang="scss">
.swiper-container {
  width: 600px;
  height: 300px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
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
</style>