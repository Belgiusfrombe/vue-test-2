<script setup>
// Importez un component Product
import PostsList from "./components/PostsList.vue";
import ProductsList from "./components/ProductsList.vue";
import Test from "./components/Test.vue";
import TestEmit from "./components/TestEmit.vue";
import { ref, reactive, computed } from "vue";

import { productsStore } from "@/stores/productsStore";
import { postsStore } from "@/stores/postsStore";

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
  <ProductsList :products="productsStore.products" />

  <PostsList :posts="postsStore.posts" @deleteOne="deleteOneById" />

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
