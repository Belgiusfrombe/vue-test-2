<script setup>
const props = defineProps(["product"]);
import { store } from "../stores/store";
</script>

<template>
  <li>
    <strong>{{ product.name }}</strong>
    - {{ product.price }} € - COUNT: {{ store.count }}
    <input type="number" v-model="store.count" />
  </li>
</template>

<style scoped></style>
