<script setup>
const props = defineProps(["product"]);
</script>

<template>
  <li>
    <strong>{{ product.name }}</strong>
    - {{ product.price }} €
  </li>
</template>

<style scoped></style>
