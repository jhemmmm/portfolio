<script setup>
import { Github, ExternalLink, ImageOff, ArrowUpRight } from "lucide-vue-next";

defineProps({
   project: { type: Object, required: true },
});

const emit = defineEmits(["open"]);
</script>

<template>
   <article class="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-surface-border bg-white dark:bg-surface-card shadow-sm hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer" @click="emit('open', project)" role="button" :aria-label="`View details for ${project.title}`" tabindex="0" @keydown.enter="emit('open', project)">
      <!-- Screenshot -->
      <div class="relative h-48 flex items-center justify-center bg-gradient-to-br from-accent-50 to-accent-100 dark:from-surface-muted dark:to-surface-card overflow-hidden">
         <img v-if="project.screenshot" :src="project.screenshot" :alt="project.screenshotAlt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
         <div v-else class="flex flex-col items-center gap-2 text-accent-400/50 dark:text-accent-500/30">
            <ImageOff :size="32" />
            <span class="text-xs font-mono text-accent-500/70">preview coming soon</span>
         </div>

         <span v-if="project.featured" class="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full bg-accent-400 text-gray-900"> Featured </span>

         <!-- "Click to view" hint that appears on hover -->
         <div class="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-colors duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 dark:bg-surface-card/90 text-sm font-semibold text-accent-600 dark:text-accent-400 shadow-lg">
               <ArrowUpRight :size="15" />
               View Details
            </div>
         </div>
      </div>

      <!-- Body -->
      <div class="flex flex-col flex-1 p-6 gap-4">
         <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
               {{ project.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
               {{ project.description }}
            </p>
         </div>

         <div class="flex flex-wrap gap-1.5">
            <span v-for="tag in project.techTags" :key="tag" class="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-accent-50 dark:bg-surface-muted text-accent-700 dark:text-accent-400 border border-accent-200/60 dark:border-surface-border">{{ tag }}</span>
         </div>

         <!-- Links - stop propagation so clicking them doesn't also open the modal -->
         <div class="flex items-center gap-3 mt-auto pt-2">
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" @click.stop class="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"> <Github :size="16" /> Code </a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" @click.stop class="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"> <ExternalLink :size="16" /> Live Demo </a>
         </div>
      </div>
   </article>
</template>
