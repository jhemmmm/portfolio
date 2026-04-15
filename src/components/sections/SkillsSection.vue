<script setup>
import { ref, computed } from "vue";
import AnimatedSection from "@/components/ui/AnimatedSection.vue";
import SkillBadge from "@/components/ui/SkillBadge.vue";
import { skillCategories } from "@/data/skills";

const activeCategory = ref(null);

const filteredCategories = computed(() => (activeCategory.value === null ? skillCategories : skillCategories.filter((c) => c.category === activeCategory.value)));
</script>

<template>
   <section id="skills" class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
         <AnimatedSection class="text-center mb-16">
            <p class="text-accent-600 dark:text-accent-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">What I work with</p>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Skills & Technologies</h2>
            <div class="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600" />
            <p class="mt-5 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">A decade's worth of tools across languages, backend frameworks, databases, and infrastructure.</p>
         </AnimatedSection>

         <!-- Filter tabs -->
         <AnimatedSection :delay="100" class="flex flex-wrap justify-center gap-2 mb-12">
            <button @click="activeCategory = null" :class="['px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200', activeCategory === null ? 'bg-accent-500 text-white shadow-md shadow-accent-500/30' : 'bg-gray-100 dark:bg-surface-card text-gray-600 dark:text-gray-400 hover:text-accent-700 dark:hover:text-accent-400']">All</button>
            <button v-for="cat in skillCategories" :key="cat.category" @click="activeCategory = cat.category" :class="['px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200', activeCategory === cat.category ? 'bg-accent-500 text-white shadow-md shadow-accent-500/30' : 'bg-gray-100 dark:bg-surface-card text-gray-600 dark:text-gray-400 hover:text-accent-700 dark:hover:text-accent-400']">{{ cat.category }}</button>
         </AnimatedSection>

         <!--
        Wrapping the category list in a Transition with a key ensures the whole block
        fades out and back in whenever the filter changes - fixing the one-way animation bug
        caused by AnimatedSection's one-shot IntersectionObserver.
      -->
         <Transition name="grid-fade" mode="out-in">
            <div :key="activeCategory ?? 'all'" class="space-y-12">
               <div v-for="group in filteredCategories" :key="group.category">
                  <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-5 flex items-center gap-3">
                     <span>{{ group.category }}</span>
                     <div class="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-surface-border to-transparent" />
                  </h3>

                  <!-- TransitionGroup so individual badges animate in/out smoothly -->
                  <TransitionGroup name="badge" tag="div" class="flex flex-wrap gap-3">
                     <div v-for="skill in group.skills" :key="skill.label">
                        <SkillBadge :label="skill.label" :icon="skill.icon" />
                     </div>
                  </TransitionGroup>
               </div>
            </div>
         </Transition>
      </div>
   </section>
</template>
