<script setup>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
</script>

<template>
   <div>
      <TheNavbar />
      <main class="pt-16">
         <ContactSection />
      </main>
      <TheFooter />
   </div>
</template>
