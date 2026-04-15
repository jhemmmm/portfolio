<script setup>
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-vue-next";

function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" });
}

const socials = [
   { label: "GitHub", href: "https://github.com/jhemmmm", icon: Github },
   { label: "LinkedIn", href: "https://www.linkedin.com/in/jheamuel-p-30084b211/", icon: Linkedin },
];

const currentYear = new Date().getFullYear();
</script>

<template>
   <footer class="border-t border-gray-200 dark:border-surface-border bg-gray-50 dark:bg-surface-raised">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
         <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p class="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
               © {{ currentYear }} Jheamuel Panuelos · Built with
               <Heart :size="13" class="text-accent-500 fill-current" />
               Vue 3 & Tailwind CSS
            </p>

            <div class="flex items-center gap-2">
               <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 dark:text-gray-500 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-gray-100 dark:hover:bg-surface-card transition-all duration-200">
                  <component :is="social.icon" :size="17" />
               </a>
            </div>

            <button @click="scrollToTop" aria-label="Back to top" class="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors group">
               Back to top
               <ArrowUp :size="15" class="group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
         </div>
      </div>
   </footer>
</template>
