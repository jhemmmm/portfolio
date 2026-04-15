<script setup>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
</script>

<template>
   <div>
      <TheNavbar />
      <main class="pt-16">
         <AboutSection />
      </main>
      <TheFooter />
   </div>
</template>
