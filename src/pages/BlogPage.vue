<script setup>
import { ref, computed } from "vue";
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import BlogCard from "@/components/ui/BlogCard.vue";
import AnimatedSection from "@/components/ui/AnimatedSection.vue";
import { blogPosts } from "@/data/blogPosts";

// Collect unique categories from all posts for the filter tabs
const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];
const activeCategory = ref("All");

// Search query for filtering by title or excerpt
const searchQuery = ref("");

const filteredPosts = computed(() => {
   const q = searchQuery.value.toLowerCase();
   const cat = activeCategory.value;

   return blogPosts.filter((post) => {
      const matchesCategory = cat === "All" || post.category === cat;
      const matchesSearch = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
   });
});
</script>

<template>
   <div>
      <TheNavbar />

      <main class="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
         <div class="max-w-6xl mx-auto">
            <!-- Page header -->
            <AnimatedSection class="text-center mb-16">
               <p class="text-accent-500 dark:text-accent-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">All articles</p>
               <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Blog</h1>
               <div class="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600" />
               <p class="mt-5 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Notes from the trenches - backend development, system design, tooling, and the occasional opinion piece.</p>
            </AnimatedSection>

            <!-- Search -->
            <AnimatedSection :delay="80" class="max-w-md mx-auto mb-10">
               <input v-model="searchQuery" type="search" placeholder="Search articles…" class="w-full px-5 py-3 rounded-full text-sm bg-white dark:bg-surface-card border border-gray-200 dark:border-surface-border focus:border-accent-400 dark:focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200" />
            </AnimatedSection>

            <!-- Category filter tabs -->
            <AnimatedSection :delay="120" class="flex flex-wrap justify-center gap-2 mb-12">
               <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" :class="['px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200', activeCategory === cat ? 'bg-accent-500 text-white shadow-md shadow-accent-500/30' : 'bg-white dark:bg-surface-card border border-gray-200 dark:border-surface-border text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 hover:border-accent-300 dark:hover:border-accent-600']">
                  {{ cat }}
               </button>
            </AnimatedSection>

            <!-- Results count -->
            <p class="text-sm text-gray-500 dark:text-gray-500 mb-6 text-center">{{ filteredPosts.length }} article{{ filteredPosts.length !== 1 ? "s" : "" }} found</p>

            <!-- Post grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               <AnimatedSection v-for="(post, i) in filteredPosts" :key="post.id" :delay="i * 80" class="h-full">
                  <BlogCard :post="post" />
               </AnimatedSection>
            </div>

            <!-- Empty state -->
            <div v-if="filteredPosts.length === 0" class="text-center py-24 text-gray-500 dark:text-gray-500">
               <p class="text-lg font-medium mb-2">No articles found.</p>
               <p class="text-sm">Try a different search term or category.</p>
            </div>
         </div>
      </main>

      <TheFooter />
   </div>
</template>
