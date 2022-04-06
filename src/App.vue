<template>
  <Header></Header>
  <router-view/>
  <footer-component></footer-component>
</template>

<script>

import {Options, Vue} from "vue-class-component";
import {RouterLink, RouterView} from "vue-router";
import Header from "@/components/Header";
import FooterComponent from "@/components/Footer";

@Options ({
  components: {RouterLink, RouterView, FooterComponent, Header}
})

export default class App extends Vue{

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
