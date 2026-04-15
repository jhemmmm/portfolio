<script setup>
import AnimatedSection from "@/components/ui/AnimatedSection.vue";
import { GraduationCap, Award, Briefcase, Download } from "lucide-vue-next";

const timeline = [
   {
      icon: GraduationCap,
      year: "2023 – 2026",
      title: "B.Sc. Information Technology",
      place: "STI College Naga",
      detail: "Currently completing a Bachelor's degree in IT while continuing active self-directed backend engineering work.",
   },
   {
      icon: Briefcase,
      year: "2021 – 2022",
      title: "Video Hosting Platform (Golang)",
      place: "Self-Directed Project",
      detail: "Rebuilt a video hosting backend from PHP to Golang. Designed distributed storage, FFmpeg encoding pipelines, and NGINX load balancing across multiple VPS nodes.",
   },
   {
      icon: Briefcase,
      year: "2020 – 2021",
      title: "Full-Stack Video Platform",
      place: "Self-Directed Project",
      detail: "Built a complete video hosting system with Laravel + Vue.js, managing a 10+ server cluster with Redis/Memcached caching for high-read workloads.",
   },
   {
      icon: Award,
      year: "2016 – Present",
      title: "Backend Systems Engineering",
      place: "Independent / Freelance",
      detail: "Engineered high-traffic content platforms, configured Linux server infrastructure, implemented DDoS mitigation, and optimised distributed systems at scale.",
   },
];
</script>

<template>
   <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-surface-raised">
      <div class="max-w-6xl mx-auto">
         <AnimatedSection class="text-center mb-16">
            <p class="text-accent-600 dark:text-accent-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">Get to know me</p>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">About Me</h2>
            <div class="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600" />
         </AnimatedSection>

         <div class="grid lg:grid-cols-2 gap-16 items-start">
            <!-- Bio -->
            <AnimatedSection :delay="100">
               <div class="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p class="text-lg">
                     I'm a <span class="font-semibold text-gray-900 dark:text-white">Full-Stack Engineer</span> based in Naga City, Philippines, with
                     <span class="text-accent-600 dark:text-accent-400 font-semibold">10+ years of self-directed experience</span>
                     building high-traffic web platforms and distributed systems.
                  </p>
                  <p>My engineering journey began in 2016 with content platforms that scaled to serve large concurrent audiences. Since then, I’ve evolved from PHP monoliths to Golang-based services, working across frontend interfaces, backend systems, distributed architectures, video encoding pipelines, and Linux infrastructure.</p>
                  <p>
                     I care deeply about
                     <span class="text-accent-600 dark:text-accent-400 font-medium">system performance</span>, <span class="text-accent-600 dark:text-accent-400 font-medium">infrastructure reliability</span>, and <span class="text-accent-600 dark:text-accent-400 font-medium">scalable architecture</span>. If it handles high traffic, I want to understand why it works - and make it work better.
                  </p>
                  <p>Currently seeking full-stack or backend-focused engineering roles where performance and scalability are critical.</p>
               </div>

               <!-- Resume download -->
               <div class="mt-8">
                  <a href="/Jheamuel_Panuelos_Resume.pdf" download="Jheamuel_Panuelos_Resume.pdf" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-gray-900 bg-accent-400 hover:bg-accent-500 shadow-lg shadow-accent-500/25 hover:-translate-y-0.5 transition-all duration-200">
                     <Download :size="16" />
                     Download Resume
                  </a>
               </div>

               <!-- Quick stats -->
               <div class="grid grid-cols-3 gap-4 mt-10">
                  <div
                     v-for="stat in [
                        { value: '10+', label: 'Years Experience' },
                        { value: '5+', label: 'Major Projects' },
                        { value: '20+', label: 'Servers Managed' },
                     ]"
                     :key="stat.label"
                     class="text-center p-4 rounded-2xl bg-white dark:bg-surface-card border border-gray-200 dark:border-surface-border shadow-sm"
                  >
                     <div class="text-2xl font-extrabold text-accent-600 dark:text-accent-400">{{ stat.value }}</div>
                     <div class="text-xs text-gray-500 dark:text-gray-500 mt-1 leading-tight">{{ stat.label }}</div>
                  </div>
               </div>
            </AnimatedSection>

            <!-- Timeline -->
            <AnimatedSection :delay="200">
               <ol class="relative border-l-2 border-gray-200 dark:border-surface-border space-y-8 pl-8">
                  <li v-for="(item, i) in timeline" :key="i" class="relative">
                     <div class="absolute -left-[2.85rem] flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-surface-card border-2 border-accent-400 dark:border-accent-500 shadow-sm shadow-accent-400/20">
                        <component :is="item.icon" :size="16" class="text-accent-600 dark:text-accent-400" />
                     </div>
                     <span class="inline-block mb-1.5 text-xs font-mono font-semibold text-accent-700 dark:text-accent-500 tracking-wide">{{ item.year }}</span>
                     <h3 class="text-base font-bold text-gray-900 dark:text-white">{{ item.title }}</h3>
                     <p class="text-sm font-medium text-gray-500 dark:text-gray-500 mb-1">{{ item.place }}</p>
                     <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.detail }}</p>
                  </li>
               </ol>
            </AnimatedSection>
         </div>
      </div>
   </section>
</template>
