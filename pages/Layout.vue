<script setup lang="ts">

import Navbar from "~~/components/layout/Navbar.vue";
import ContentSection from "~~/components/layout/ContentSection.vue";
</script>

<template>
  <UMain>
    <MapboxMap
        map-id="main"
        style="position: absolute; top: 0; bottom: 0; left: 0; width: 100%;"
        :options="{
          style: 'mapbox://styles/mapbox/standard',
          center: [18.604099632328836,-33.91452666107531 ],
          zoom: 20,
          pitch: 60,
          bearing: 290,
          antialias: true,
          hash: true
        }"
    >
      <Navbar/>
      <ContentSection/>
    </MapboxMap>

  </UMain>
</template>

<style scoped>

</style>