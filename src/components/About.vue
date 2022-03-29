<template>
  <main ref="vantaRef" class="flex h-screen">
    <div class="m-auto text-white">
      <h1 class="text-6xl font-bold text-center">Daniel Williams</h1>
      <p class="text-center m-3">
        See this on
        <a
          href="https://github.com/danielbeans/v2"
          class="font-bold link link-underline link-underline-black"
        >
          Github
        </a>
      </p>
    </div>
  </main>
</template>

<script>
import NET from "vanta/src/vanta.net";
import * as THREE from "three";

export default {
  mounted() {
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      THREE: THREE,
      color: 0x5582b9,
      backgroundColor: 0x20420,
      spacing: 17.0,
      mouseControls: false,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>
