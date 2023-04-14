<script setup>
import { computed, toRefs } from "vue";
import { useCartStore } from "../../stores/cartStore";
const cartStore = useCartStore();

const { totalQuantity, total } = toRefs(cartStore);

const pluralize = computed(() => {
  return totalQuantity.value > 1
    ? `${totalQuantity.value} produits`
    : `${totalQuantity.value} produit`;
});
</script>
<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <Transition name="fade">
          <span v-if="totalQuantity" class="badge badge-sm indicator-item">{{
            totalQuantity
          }}</span>
        </Transition>
      </div>
    </label>
    <div
      tabindex="0"
      class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
    >
      <div class="card-body">
        <span class="font-bold text-lg"> {{ pluralize }}</span>
        <span class="text-info">Montant total: {{ total }}€</span>
        <div class="card-actions">
          <button class="btn btn-primary btn-block" :disabled="!totalQuantity">
            Consulter mon panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
