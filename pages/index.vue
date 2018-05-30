<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        global-components
      </h1>
      <h2 class="subtitle">
        Global components example
      </h2>

      <global-component />

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Vue from 'vue'

export default {
  components: {
    AppLogo
  },
  fetch() {
    console.log('Global components in pages/index.vue:fetch():', Object.keys(Vue.options.components))
  },
  created() {
    console.log('Global components in pages/index.vue:created():', Object.keys(Vue.options.components))
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
