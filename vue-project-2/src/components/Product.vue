<script setup>
const props = defineProps(["product"]);
</script>

<template>
  <li>
    <strong>{{ product.name }}</strong>
    - {{ product.price }} €
  </li>
</template>

<style scoped>
li {
  color: orange;
  list-style-type: none;
}
</style>
