<script setup>
import { RouterView } from "vue-router";
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
   <Analytics />
   <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
         <component :is="Component" :key="route.path" />
      </Transition>
   </RouterView>
</template>
