<template>
  <div id="app">
    <Header/>
    <Content/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Content from './components/Content.vue'
import Header from './components/Header.vue'
@Component({
  components: {
    Header,
    Content,
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
<style>
@import "./css/index.css"
</style>
