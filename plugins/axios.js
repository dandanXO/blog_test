import Axios from 'axios'
import https from "https"
export default function (ctx, inject) {
const agent = new https.Agent({
        rejectUnauthorized: false
      });
  const axios = Axios.create({
    httpsAgent: agent
  })
  /* 注入 Nuxt Instance Property */
  ctx.$axios = axios
  inject('axios', axios)
}