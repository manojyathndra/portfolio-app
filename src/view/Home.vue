<template>
  <div>
    <div class="parallax-container">
      <Charter />
    </div>
    <div class="parallax-container">
      <Infosys />
    </div>
  </div>
</template>

<script setup>
import Charter from '@/components/Charter.vue'
import Infosys from '@/components/Infosys.vue'
</script>

<style>
.parallax-container {
  height: 100vh; /* Set the height of each container to the full viewport height */
}
</style>
