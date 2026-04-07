import "./../src/assets/styles/main.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css/bundle";

import {createApp} from "vue";
import router from "./router";
import App from "./App.vue";
import {createYmaps} from "vue-yandex-maps";
const app = createApp(App);

app.use(
    createYmaps({
        apikey: "146f7156-7ed1-461b-8cdd-bebdeaf0a0de",
    }),
);
app.use(router);

app.mount("#app");
