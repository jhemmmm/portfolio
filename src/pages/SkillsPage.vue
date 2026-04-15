<script setup>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
</script>

<template>
   <div>
      <TheNavbar />
      <main class="pt-16">
         <SkillsSection />
      </main>
      <TheFooter />
   </div>
</template>
