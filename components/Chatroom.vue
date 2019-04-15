<template>
  <div>
    <a class="chat button is-primary" @click="toggle = !toggle">chat room</a>

    <div class="chat-dialog dropdown is-up" :class="{'is-active':toggle}">
      <div class="dropdown-trigger"></div>
      <div class="dropdown-menu" id="dropdown-menu7" role="menu">
        <div class="dropdown-content">
          <article class="message is-link">
            <div class="message-header">
              <p>Testing for chat room</p>
              <button class="delete" @click="toggle=!toggle" aria-label="delete"></button>
            </div>
            <div class="message-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false
    };
  }
};
</script>
<style lang="scss" scoped>
.chat {
  z-index: 3;
  position: fixed;
  bottom: 15px;
  right: 15px;
}
.chat-dialog {
  z-index: 3;
  position: fixed;
  bottom: 50px;
  left: 70%;
  width: 30%;
}

@media screen and (max-width: 600px) {
  .chat-dialog {
    left: 50%;
    width: 50%;
  }
}
</style>