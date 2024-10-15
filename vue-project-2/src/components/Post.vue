<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["post"]);
</script>

<template>
  <li>
    <strong>{{ post.title }}</strong>
    - {{ post.content }} €
  </li>
</template>

<style scoped>
  li {
  color : yellow;
  list-style-type: none;
}
</style>
