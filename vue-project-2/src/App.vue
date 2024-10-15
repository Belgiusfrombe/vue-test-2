<script setup>
// Importez un component Product
import ProductsList from "./components/ProductsList.vue";
import PostsList from "./components/PostsList.vue";
import Test from "./components/Test.vue";
import TestEmit from "./components/TestEmit.vue";
import { ref, reactive, computed } from "vue";

// Créez une liste de 3 produits (id, name et price)
const products = reactive([
  { id: 1, name: "Chaise", price: 10 },
  { id: 2, name: "Table", price: 20 },
  { id: 3, name: "Bouteille", price: 30 },
]);

const products2 = reactive([
  { id: 1, name: "Taboulé", price: 10 },
  { id: 2, name: "Téléphone", price: 20 },
  { id: 3, name: "Orange", price: 30 },
]);

const posts = reactive([
  { id: 1, title: "Post 1", content: "Content 1" },
  { id: 2, title: "Post 2", content: "Content 2" },
  { id: 3, title: "Post 3", content: "Content 3" },
]);

const prenom = ref("Alexandre");

// Créez une computed avec les produits dans l'ordre aphabétique
const sortedProducts = computed(() => {
  return products.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
});

const sortedPosts = computed(() => {
  return posts.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
});

const test = (message) => {
  alert(message);
};

</script>

<template>
  <ProductsList :products="sortedProducts" />
  <PostsList :posts="sortedPosts" />
  <ProductsList :products="products2" />
  <Test>Salut ça va</Test>
  <TestEmit :prenom="prenom" @emitEvent="test" />
</template>

<style scoped>

</style>
