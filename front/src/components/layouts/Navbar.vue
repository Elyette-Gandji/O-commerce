<script setup>
import CartIcon from "../utilities/CartIcon.vue";
</script>
<template>
  <nav class="navbar bg-base">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case text-xl"
        >O'Commerce</router-link
      >
    </div>

    <div class="gap-3 hidden sm:flex">
      <router-link to="/signin" class="btn btn-primary"
        >se connecter</router-link
      >
      <div class="form-control">
        <input
          type="text"
          placeholder="Rechercher un produit"
          class="input input-bordered"
        />
      </div>
      <CartIcon />
    </div>
  </nav>
</template>
