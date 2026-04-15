<script setup>
import { ref, computed } from "vue";
import AnimatedSection from "@/components/ui/AnimatedSection.vue";
import ProjectCard from "@/components/ui/ProjectCard.vue";
import ProjectModal from "@/components/ui/ProjectModal.vue";
import { projects } from "@/data/projects";

const filters = ["all", "Game Development", "Web System", "Desktop Application"];
const activeFilter = ref("all");
const selectedProject = ref(null);

const visibleProjects = computed(() => (activeFilter.value === "all" ? projects : projects.filter((p) => p.category === activeFilter.value)));
</script>

<template>
   <section id="projects" class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-surface-raised">
      <div class="max-w-6xl mx-auto">
         <AnimatedSection class="text-center mb-16">
            <p class="text-accent-600 dark:text-accent-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">What I've built</p>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Projects</h2>
            <div class="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600" />
            <p class="mt-5 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Scalable platforms and backend systems built and maintained over 10+ years of self-directed engineering.</p>
         </AnimatedSection>

         <!-- Filter tabs -->
         <AnimatedSection :delay="80" class="flex flex-wrap justify-center gap-2 mb-12">
            <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" :class="['px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200', activeFilter === filter ? 'bg-accent-500 text-white shadow-md shadow-accent-500/30' : 'bg-white dark:bg-surface-card border border-gray-200 dark:border-surface-border text-gray-600 dark:text-gray-400 hover:text-accent-700 dark:hover:text-accent-400 hover:border-accent-300 dark:hover:border-accent-600']">{{ filter }}</button>
         </AnimatedSection>

         <Transition name="grid-fade" mode="out-in">
            <div :key="activeFilter" class="grid sm:grid-cols-2 gap-6">
               <ProjectCard v-for="project in visibleProjects" :key="project.id" :project="project" @open="selectedProject = project" />
            </div>
         </Transition>

         <div v-if="visibleProjects.length === 0" class="text-center py-20 text-gray-500 dark:text-gray-500">No projects in this category yet.</div>
      </div>

      <!-- Project detail modal -->
      <ProjectModal v-if="selectedProject" :project="selectedProject" @close="selectedProject = null" />
   </section>
</template>
