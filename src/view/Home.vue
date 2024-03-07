<template>
<v-container>
    <div>
      <Tabs />
    </div>
    <div class="d-flex flex-column fill-height justify-center align-center text-black">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
    </div>
</v-container>
</template>

<script setup>
import About from '@/components/About.vue'
import Charter from '@/components/Charter.vue'
import Infosys from '@/components/Infosys.vue'
import Tabs from '@/components/Tabs.vue'
</script>

<style>
img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
</style>

