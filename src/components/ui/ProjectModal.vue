<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { X, Github, ExternalLink, Calendar, Tag, Maximize2 } from "lucide-vue-next";

const props = defineProps({
   project: { type: Object, required: true },
});

const emit = defineEmits(["close"]);

const lightboxOpen = ref(false);

function handleKey(e) {
   if (e.key === "Escape") {
      if (lightboxOpen.value) lightboxOpen.value = false;
      else emit("close");
   }
}

onMounted(() => {
   document.addEventListener("keydown", handleKey);
   document.body.style.overflow = "hidden";
});

onUnmounted(() => {
   document.removeEventListener("keydown", handleKey);
   document.body.style.overflow = "";
});
</script>

<template>
   <Teleport to="body">
      <Transition name="modal">
         <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" role="dialog" :aria-label="project.title" aria-modal="true">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="emit('close')" />

            <!-- Panel -->
            <div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-surface-card shadow-2xl shadow-black/50 border border-gray-200 dark:border-surface-border">
               <!-- Header image area -->
               <div class="relative h-56 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-surface-muted dark:to-surface rounded-t-3xl overflow-hidden flex items-center justify-center">
                  <template v-if="project.screenshot">
                     <img :src="project.screenshot" :alt="project.screenshotAlt" class="w-full h-full object-cover cursor-zoom-in" @click="lightboxOpen = true" />
                     <!-- Fullscreen hint -->
                     <button @click="lightboxOpen = true" class="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs font-medium hover:bg-black/70 transition-colors"><Maximize2 :size="12" /> View fullscreen</button>
                  </template>
                  <div v-else class="text-accent-400/50 dark:text-accent-600/40 text-center">
                     <div class="text-6xl font-extrabold font-mono opacity-30">{ }</div>
                     <p class="text-xs font-mono mt-1 text-accent-500/60">{{ project.year }}</p>
                  </div>

                  <!-- Close button -->
                  <button @click="emit('close')" class="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 dark:bg-surface-card/80 text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-white dark:hover:bg-surface-muted transition-all shadow" aria-label="Close modal">
                     <X :size="18" />
                  </button>

                  <span v-if="project.featured" class="absolute top-4 left-4 px-2.5 py-1 text-xs font-bold rounded-full bg-accent-400 text-gray-900">Featured</span>
               </div>

               <!-- Body -->
               <div class="p-6 sm:p-8 space-y-5">
                  <div class="flex items-start justify-between gap-4">
                     <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white leading-snug">{{ project.title }}</h2>
                     <span class="flex items-center gap-1.5 shrink-0 text-xs font-mono text-gray-500 dark:text-gray-500 mt-1"> <Calendar :size="12" /> {{ project.year }} </span>
                  </div>

                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                     {{ project.longDescription || project.description }}
                  </p>

                  <div>
                     <div class="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide"><Tag :size="12" /> Tech Stack</div>
                     <div class="flex flex-wrap gap-2">
                        <span v-for="tag in project.techTags" :key="tag" class="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-accent-50 dark:bg-surface-muted text-accent-700 dark:text-accent-400 border border-accent-200/60 dark:border-surface-border">{{ tag }}</span>
                     </div>
                  </div>

                  <div class="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-surface-border">
                     <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"> <Github :size="15" /> View Code </a>
                     <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors"> <ExternalLink :size="15" /> Live Demo </a>
                  </div>
               </div>
            </div>
         </div>
      </Transition>

      <!-- Lightbox -->
      <Transition name="lightbox">
         <div v-if="lightboxOpen && project.screenshot" class="fixed inset-0 z-[200] flex items-center justify-center bg-black/95" @click="lightboxOpen = false">
            <button class="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="Close fullscreen" @click.stop="lightboxOpen = false">
               <X :size="20" />
            </button>
            <img :src="project.screenshot" :alt="project.screenshotAlt" class="max-w-[92vw] max-h-[92vh] object-contain rounded-xl shadow-2xl" @click.stop />
         </div>
      </Transition>
   </Teleport>
</template>

<style scoped>
.modal-enter-active {
   transition: all 0.2s ease;
}
.modal-leave-active {
   transition: all 0.15s ease;
}
.modal-enter-from {
   opacity: 0;
   transform: scale(0.95) translateY(10px);
}
.modal-leave-to {
   opacity: 0;
   transform: scale(0.96);
}

.lightbox-enter-active {
   transition: all 0.2s ease;
}
.lightbox-leave-active {
   transition: all 0.15s ease;
}
.lightbox-enter-from {
   opacity: 0;
}
.lightbox-leave-to {
   opacity: 0;
}
</style>
