<script setup>
defineProps(["post"]);
// faites en sorte que quand on clique sur le bouton 'delete'
// on demande au parent de supprimer ce post:
// 1. On émet un event 'delete' en envoyant l'id du post
// vers le parent (PostsList),

// 2. cet event lance la fonction deleteOneById
// qui émet un nouvel évent deleteOne avec l'id du post à supprimer
// vers App.vue,

// 3. on récupère cet event pour lancer deleteOneById
// qui supprime le post de la liste des posts

// const emit = defineEmits(["delete"]);
// const emitDelete = () => {
//   emit("delete", post.id);
// };
</script>

<template>
  <li>
    {{ post.title }}
    <input type="text" v-model="post.title" />
    <button @click.prevent="$emit('delete')">DELETE</button>
    <!-- <button @click.prevent="emitDelete">DELETE</button> -->
  </li>
</template>
