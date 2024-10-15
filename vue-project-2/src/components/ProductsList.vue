<script setup>
import Product from "./Product.vue";
defineProps(["products"]);
</script>

<template>
  <h1>Liste des produits</h1>
  <ul>
    <Product v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<style scoped>
  h1 {
    color : #EEEEEE;
  }
</style>
