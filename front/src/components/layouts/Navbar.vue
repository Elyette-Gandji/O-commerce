<script setup>
import CartIcon from "../utilities/CartIcon.vue";
</script>
<template>
  <nav class="navbar bg-base">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">O'Commerce</a>
    </div>

    <div class="gap-3 hidden sm:flex">
      <button class="btn btn-primary">se connecter</button>
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
