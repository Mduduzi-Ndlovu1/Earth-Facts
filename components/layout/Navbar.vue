<script setup lang="ts">
import { navItems } from "~~/utils/navItems"
</script>

<template>
  <UNavigationMenu
      :items="navItems"
      :ui="{
    item: 'hover:bg-slate-800 px-4 py-2 rounded-md transition',
    icon: 'w-5 h-5 text-emerald-400',
    label: 'ml-2 font-medium',

  }"
      class="w-full justify-center"
  />
</template>

<style scoped>

</style>