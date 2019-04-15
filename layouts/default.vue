<template>
  <div>
    <nav class="navbar is-info " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="icon is-medium">
            <i class="fa fa-lg fa-film"></i>
          </span>
          MOVIE
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showNav = !showNav"
          :class="{'is-active':showNav}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':showNav}">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">首頁</nuxt-link>
          <nuxt-link class="navbar-item" to="/posts">文章列表</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
    
    <Chatroom></Chatroom>
  </div>
</template>
<script>
import Chatroom from "~/components/Chatroom";
export default {
  components: {
    Chatroom
  },
  data: function() {
    return {
      showNav: false
    };
  }
};
</script>
<style lang="scss" scoped>
$footer-background-color: #B0C6CE;
$footer-padding: 2rem  3rem ;

.footer{background-color: $footer-background-color;
  padding: $footer-padding;
  position: relative;
  bottom: 0px;
  }
</style>

<style>

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
