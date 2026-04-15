<script setup>
import { Calendar, Clock, ArrowRight } from "lucide-vue-next";
import { RouterLink } from "vue-router";

defineProps({
   post: { type: Object, required: true },
});

function formatDate(dateStr) {
   return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
}
</script>

<template>
   <article class="group flex flex-col rounded-2xl p-6 border border-gray-200 dark:border-surface-border bg-white dark:bg-surface-card shadow-sm hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300">
      <!-- Category tag -->
      <span class="self-start px-3 py-1 mb-4 text-xs font-semibold tracking-wide uppercase rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-800">
         {{ post.category }}
      </span>

      <!-- Clickable title -->
      <RouterLink :to="`/blog/${post.slug}`">
         <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug hover:underline decoration-accent-400/40 underline-offset-2">
            {{ post.title }}
         </h3>
      </RouterLink>

      <p class="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
         {{ post.excerpt }}
      </p>

      <!-- Meta -->
      <div class="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100 dark:border-surface-border text-xs text-gray-500 dark:text-gray-500">
         <span class="flex items-center gap-1.5"> <Calendar :size="13" /> {{ formatDate(post.date) }} </span>
         <span class="flex items-center gap-1.5"> <Clock :size="13" /> {{ post.readTime }} min read </span>
      </div>

      <!-- Read more -->
      <RouterLink :to="`/blog/${post.slug}`" class="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent-600 dark:text-accent-400 hover:gap-2.5 transition-all duration-200"> Read More <ArrowRight :size="15" /> </RouterLink>
   </article>
</template>
