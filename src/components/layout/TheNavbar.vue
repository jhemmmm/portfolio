<script setup>
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { Menu, X } from "lucide-vue-next";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";

const mobileOpen = ref(false);
const route = useRoute();

watch(
   () => route.path,
   () => {
      mobileOpen.value = false;
   },
);

const navLinks = [
   { label: "Home", to: "/" },
   { label: "About", to: "/about" },
   { label: "Skills", to: "/skills" },
   { label: "Projects", to: "/projects" },
   { label: "Blog", to: "/blog" },
   { label: "Contact", to: "/contact" },
];
</script>

<template>
   <header class="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/90 dark:bg-surface/90 border-b border-gray-200/60 dark:border-surface-border/60 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <nav class="flex items-center justify-between h-16">
            <RouterLink to="/" class="flex items-center group focus:outline-none" aria-label="Home">
               <span class="font-mono font-bold text-lg text-accent-400 group-hover:text-accent-300 transition-colors duration-200"> //JP </span>
            </RouterLink>

            <ul class="hidden md:flex items-center gap-1">
               <li v-for="link in navLinks" :key="link.label">
                  <RouterLink :to="link.to" :class="['px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200', route.path === link.to ? 'text-accent-500 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-surface-card']">{{ link.label }}</RouterLink>
               </li>
            </ul>

            <div class="flex items-center gap-2">
               <ThemeToggle />
               <button @click="mobileOpen = !mobileOpen" class="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-card transition-colors" :aria-label="mobileOpen ? 'Close menu' : 'Open menu'">
                  <X v-if="mobileOpen" :size="20" />
                  <Menu v-else :size="20" />
               </button>
            </div>
         </nav>
      </div>

      <Transition enter-active-class="transition-all duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
         <div v-if="mobileOpen" class="md:hidden px-4 pb-4 border-t border-gray-200/60 dark:border-surface-border/60 bg-white/95 dark:bg-surface/95">
            <ul class="flex flex-col gap-1 pt-3">
               <li v-for="link in navLinks" :key="link.label">
                  <RouterLink :to="link.to" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors', route.path === link.to ? 'text-accent-500 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-surface-card']">{{ link.label }}</RouterLink>
               </li>
            </ul>
         </div>
      </Transition>
   </header>
</template>
