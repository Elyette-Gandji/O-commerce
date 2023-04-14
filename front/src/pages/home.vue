<script setup>
import { useSeoMeta } from "@unhead/vue";
/**
 * j'utilise la fonction useSeoMeta pour pouvoir utiliser le composant SeoMeta
 * qui va me permettre de gérer les meta tags de ma page
 * et me permettre d'optimiser le référencement du site
 */
useSeoMeta({
  title: "Bienvenue sur O'Commerce",
  description: "Bienvenue sur O'Commerce",
  keywords: "home, accueil",
});
</script>
<template>
  <div>
    <h1>Page home</h1>
  </div>
</template>
