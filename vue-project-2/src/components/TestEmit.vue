<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['prenom']);

const prenom = ref(props.prenom);

const test = () => {
    alert('coucou');
}
const event = defineEmits(['prenomChanged']);
</script>

<template>
    <div>
        <h1>Test Emit</h1>
        <div><input type="text" v-model="prenom" placeholder="Votre recherche..">{{ prenom }}</div>
        <a href="#" @click.prevent="$emit('prenomChanged', prenom)">Submit</a>
    </div>
</template>