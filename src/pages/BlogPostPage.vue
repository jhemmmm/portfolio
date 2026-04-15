<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-vue-next";

const route = useRoute();

const post = computed(() => blogPosts.find((p) => p.slug === route.params.slug));

function formatDate(dateStr) {
   return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
}
</script>

<template>
   <div>
      <TheNavbar />

      <main class="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
         <div class="max-w-3xl mx-auto">
            <!-- Back link -->
            <RouterLink to="/blog" class="inline-flex items-center gap-2 mb-10 text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group">
               <ArrowLeft :size="16" class="group-hover:-translate-x-0.5 transition-transform duration-150" />
               Back to Blog
            </RouterLink>

            <!-- 404 fallback -->
            <div v-if="!post" class="text-center py-20">
               <p class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Post Not Found</p>
               <p class="text-gray-600 dark:text-gray-400 mb-8">This article doesn't exist or may have been moved.</p>
               <RouterLink to="/blog" class="text-accent-600 dark:text-accent-400 font-semibold hover:underline"> Browse all articles → </RouterLink>
            </div>

            <!-- Post content -->
            <article v-else>
               <!-- Category tag -->
               <span class="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 border border-accent-200 dark:border-accent-800">
                  {{ post.category }}
               </span>

               <!-- Title -->
               <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-snug mb-6">
                  {{ post.title }}
               </h1>

               <!-- Meta bar -->
               <div class="flex flex-wrap items-center gap-5 mb-10 pb-8 border-b border-gray-200 dark:border-surface-border text-sm text-gray-500 dark:text-gray-500">
                  <span class="flex items-center gap-1.5">
                     <Calendar :size="14" />
                     {{ formatDate(post.date) }}
                  </span>
                  <span class="flex items-center gap-1.5">
                     <Clock :size="14" />
                     {{ post.readTime }} min read
                  </span>
               </div>

               <!-- Rendered HTML content -->
               <div class="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline prose-code:text-accent-600 dark:prose-code:text-accent-400 prose-code:bg-accent-50 dark:prose-code:bg-surface-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 dark:prose-pre:bg-surface prose-pre:rounded-2xl prose-pre:shadow-lg" v-html="post.content" />

               <!-- Tags -->
               <div class="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-gray-200 dark:border-surface-border">
                  <Tag :size="14" class="text-gray-400 dark:text-gray-500 mr-1" />
                  <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-surface-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-surface-border">
                     {{ tag }}
                  </span>
               </div>
            </article>
         </div>
      </main>

      <TheFooter />
   </div>
</template>
