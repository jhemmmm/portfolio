<script setup>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
</script>

<template>
   <div class="min-h-screen flex flex-col">
      <TheNavbar />
      <main class="flex-1 pt-16">
         <SkillsSection />
      </main>
      <TheFooter />
   </div>
</template>
