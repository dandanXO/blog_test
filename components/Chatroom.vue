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
            <div class="message-body" v-html="roomMessage"></div>
          </article>
          <div class="field">
            <div class="columns is-mobile">
              <input
                class="input is-info column is-one-fifth"
                type="text"
                placeholder="name"
                v-model="name"
              >
              <input
                class="input is-info column"
                type="text"
                placeholder="message"
                v-model="message"
              >
            </div>
            <button class="button is-primary" @click="sendtext()" type="button">送出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      toggle: false,
      name: "",
      message: "",
      roomMessage: "",
      socket: io.connect("https://dandan.tw:3001", { secure: true })
    };
  },
  mounted() {
    this.socket.on("message", data => {
      this.roomMessage = `${this.roomMessage}<div class="">${data.name}:  ${
        data.msg
      }<br/></div>`;
    });
  },
  updated(){
    this.$nextTick(() => {
      
    })
     
      

  },
  methods: {
    sendtext() {
      this.socket.emit("message", {
        name: this.name,
        msg: this.message
      });
      this.message = "";
    }
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
.message-body {
  max-height: 300px;
  overflow-y: auto;
}
.columns {
  margin: 0em;
}
.dropdown-menu {
  width: 100%;
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