import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import About from "./components/About.vue";

createApp(App).component("About", About).mount("#app");
