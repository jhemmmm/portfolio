<script setup>
import { Sun, Moon } from "lucide-vue-next";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<template>
   <button @click="toggleTheme" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" class="relative flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-gray-100 dark:hover:bg-surface-card transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400">
      <!-- Sun icon - visible in dark mode (click to go light) -->
      <Sun v-if="theme === 'dark'" :size="20" class="transition-transform duration-300 rotate-0 hover:rotate-12" />
      <!-- Moon icon - visible in light mode (click to go dark) -->
      <Moon v-else :size="20" class="transition-transform duration-300 rotate-0 hover:-rotate-12" />
   </button>
</template>
