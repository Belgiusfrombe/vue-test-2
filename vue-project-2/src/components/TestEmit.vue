<script setup>
import { ref } from "vue";
const props = defineProps(["prenom"]);
const prenom = ref(props.prenom);
const emits = defineEmits(["onSoydan", "prenomChanged"]);

const emitSoydan = (message) => {
  emits("onSoydan", message);
};

const emitPrenomChanged = (newPrenom) => {
  emits("prenomChanged", newPrenom);
};

</script>

<template>
  <h2>Ceci est le component TestEmit</h2>
  <div>{{ prenom }} <input type="text" v-model="prenom" /></div>
  <div>
    <a href="" @click.prevent="$emit('onSoydan', 'Wouayy !')">HOP</a>
    <a href="" @click.prevent="emitSoydan('Wouayy 2 !')">HOP2</a>
    <br />

    <!-- Emettre un événement prenomChanged en envoyant le nouveau prenom
         Dans le parent, vous créez une fonction updatePrenom qui modifie 
         la data prenom du parent -->
    <a href="#" @click.prevent="$emit('prenomChanged', prenom)">REHOP</a><br />
    <a href="#" @click.prevent="emitPrenomChanged(prenom)">REHOP2</a>
  </div>
</template>
