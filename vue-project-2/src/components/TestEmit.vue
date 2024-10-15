<script setup lang="ts">
import { ref, defineProps } from 'vue';
const props = defineProps(['prenom']);
const prenom = ref(props.prenom);
const test = () => {
    alert('coucou');
}
</script>

<template>
    <div>
        <h1>Test Emit</h1>
        <div><input type="text" v-model="prenom" placeholder="Votre recherche..">{{ prenom }}</div>
        <a href="#" @click.prevent="$emit('emitEvent', 'Salut les potes')">Envoyer</a>
    </div>
</template>