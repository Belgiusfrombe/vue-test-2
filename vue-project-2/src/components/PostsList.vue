<script setup lang="ts">
// On charge le composant Product
import Post from "./Post.vue";
defineProps(['posts']);
</script>

<template>
  <h1>Liste des posts</h1>
  <ul>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<style scoped>
h1 {
    color : #FFFFFF;
  }
</style>
