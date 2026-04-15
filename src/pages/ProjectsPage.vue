<script setup>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
</script>

<template>
   <div>
      <TheNavbar />
      <main class="pt-16">
         <ProjectsSection />
      </main>
      <TheFooter />
   </div>
</template>
