<script setup>
import PostsListItem from "./PostsListItem.vue";
defineProps(["posts"]);
// const emitDeleteOne = (id) => {
//   emit("deleteOne", id);
// };
</script>

<template>
  <h1>Liste des posts</h1>
  <ul>
    <PostsListItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete="$emit('deleteOne', post.id)"
    />
  </ul>
</template>
