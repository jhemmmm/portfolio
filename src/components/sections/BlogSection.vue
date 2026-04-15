<script setup>
import { RouterLink } from "vue-router";
import AnimatedSection from "@/components/ui/AnimatedSection.vue";
import BlogCard from "@/components/ui/BlogCard.vue";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-vue-next";

// Show only the 3 most recent posts on the homepage; /blog shows all
const latestPosts = blogPosts.slice(0, 3);
</script>

<template>
   <section id="blog" class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
         <!-- Section header -->
         <AnimatedSection class="text-center mb-16">
            <p class="text-accent-500 dark:text-accent-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">Thoughts & articles</p>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Blog</h2>
            <div class="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600" />
            <p class="mt-5 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Writing about backend patterns, system design, and lessons from the trenches.</p>
         </AnimatedSection>

         <!-- Post grid -->
         <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection v-for="(post, i) in latestPosts" :key="post.id" :delay="i * 100" class="h-full">
               <BlogCard :post="post" />
            </AnimatedSection>
         </div>

         <!-- View all posts CTA -->
         <AnimatedSection :delay="350" class="text-center mt-12">
            <RouterLink to="/blog" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 border-accent-400/60 dark:border-accent-600/50 text-accent-600 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 hover:gap-3 transition-all duration-200">
               View All Posts
               <ArrowRight :size="16" />
            </RouterLink>
         </AnimatedSection>
      </div>
   </section>
</template>
