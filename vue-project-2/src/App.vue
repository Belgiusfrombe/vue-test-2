<script setup>
// Importez un component Product
import PostsList from "./components/PostsList.vue";
import ProductsList from "./components/ProductsList.vue";
import Test from "./components/Test.vue";
import TestEmit from "./components/TestEmit.vue";
import { ref, reactive, computed } from "vue";

// Créez une liste de 3 produits (id, name et price)
const products = reactive([
  { id: 1, name: "Chaise", price: 10 },
  { id: 2, name: "Table", price: 20 },
  { id: 3, name: "Bouteille", price: 30 },
]);

// Créez une computed avec les produits dans l'ordre aphabétique
const sortedProducts = computed(() => {
  return products.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
});

// Liste de posts
const posts = reactive([
  { id: 1, title: "Post 1", content: "Content 1" },
  { id: 2, title: "Post 2", content: "Content 2" },
  { id: 3, title: "Post 3", content: "Content 3" },
]);

const prenom = ref("Pascal");

const test = (message) => {
  alert(message);
};
const updatePrenom = (newPrenom) => {
  prenom.value = newPrenom;
};

const deleteOneById = (id) => {
  posts.splice(
    posts.findIndex((post) => post.id === id),
    1
  );
};

</script>

<template>
  <ProductsList :products="sortedProducts" />

  <!-- Chargez un PostsList en lui envoyant les posts
    voici le code final:
    h1>Liste des posts
    ul>li>Title
    Components: PostsList et Post
   -->
  <PostsList :posts="posts" @deleteOne="deleteOneById" />

  <Test>
    <template v-slot:header>
      <h2>Coucou</h2>
    </template>
    <template v-slot:subtitle>
      <h3>Oufti</h3>
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quas quis totam placeat a esse vel voluptates? Amet, eos. Officia hic
      fugiat sit doloribus animi eveniet quod natus, harum enim!
    </p>
  </Test>

  <div>{{ prenom }}</div>
  <TestEmit :prenom="prenom" @on-soydan="test" @prenom-changed="updatePrenom" />
</template>

<style scoped></style>
