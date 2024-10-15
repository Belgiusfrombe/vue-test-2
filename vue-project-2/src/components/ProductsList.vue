<script setup>
import ProductsListItem from "./ProductsListItem.vue";
defineProps(["products"]);
</script>

<template>
  <h1>Liste des produits</h1>
  <ul>
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<style scoped></style>
