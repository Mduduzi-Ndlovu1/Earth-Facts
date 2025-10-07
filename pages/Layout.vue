<script setup lang="ts">

import Navbar from "~~/components/layout/Navbar.vue";
import ContentSection from "~~/components/layout/ContentSection.vue";
</script>

<template>
  <UMain>
    <MapboxMap>
      <Navbar/>
      <ContentSection/>
    </MapboxMap>

  </UMain>
</template>

<style scoped>

</style>