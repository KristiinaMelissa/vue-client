<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Blog</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-post" class="nav-link">Add Post</router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <router-link to="/edit-categories" class="nav-link">Edit categories</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/edit-posts" class="nav-link">Edit posts</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {Options, Vue} from "vue-class-component";
import {RouterLink} from "vue-router";
@Options ({
  components: {RouterLink}
})

export default class Header extends Vue{
}
</script>

<style scoped>

</style>