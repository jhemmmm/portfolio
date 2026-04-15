<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { Github, Linkedin } from "lucide-vue-next";

const roles = ["Full-Stack Developer", "Backend Engineer", "Systems Architect"];
const displayedRole = ref("");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
   const current = roles[roleIndex];
   if (!deleting) {
      displayedRole.value = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
         deleting = true;
         setTimeout(typeRole, 1800);
         return;
      }
   } else {
      displayedRole.value = current.slice(0, --charIndex);
      if (charIndex === 0) {
         deleting = false;
         roleIndex = (roleIndex + 1) % roles.length;
      }
   }
   setTimeout(typeRole, deleting ? 50 : 80);
}

onMounted(() => setTimeout(typeRole, 600));

const socials = [
   { label: "GitHub", href: "https://github.com/jhemmmm", icon: Github },
   { label: "LinkedIn", href: "https://www.linkedin.com/in/jheamuel-p-30084b211/", icon: Linkedin },
];
</script>

<template>
   <section class="relative min-h-screen overflow-hidden bg-white dark:bg-[#111111]">
      <div class="max-w-7xl mx-auto relative min-h-screen flex">
         <!-- Left: circular portrait (desktop only) -->
         <div class="hidden lg:flex flex-1 items-center justify-center py-24">
            <div class="relative w-[420px] h-[420px] rounded-full overflow-hidden ring-4 ring-accent-400/30 shadow-2xl shadow-black/50">
               <img src="/photo.png" alt="Jheamuel Panuelos" class="w-full h-full object-cover" @error="(e) => (e.target.style.display = 'none')" />
            </div>
         </div>

         <!-- Right: content -->
         <div class="relative z-10 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-24 w-full lg:w-[55%] flex-shrink-0">
            <!-- "I'M" label -->
            <p class="text-xs font-mono font-bold tracking-[0.35em] uppercase text-gray-400 dark:text-gray-500 mb-5">I'M</p>

            <!-- Name -->
            <h1 class="text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem] font-extrabold tracking-tight leading-[1.05] mb-6">
               <span class="text-gray-900 dark:text-white">Jheamuel</span><br />
               <span class="text-accent-400">Panuelos</span>
            </h1>

            <!-- Typewriter role -->
            <div class="flex items-center gap-0 h-8 mb-8">
               <span class="text-base sm:text-lg font-mono text-gray-500 dark:text-gray-400">
                  {{ displayedRole }}
               </span>
               <span class="animate-pulse text-accent-500 font-mono text-lg leading-none">|</span>
            </div>

            <!-- Tagline -->
            <p class="text-gray-500 dark:text-gray-400 leading-relaxed max-w-[400px] mb-10 text-sm sm:text-base">10+ years building scalable full-stack applications, high-performance backend systems, and distributed platforms handling high-traffic workloads.</p>

            <!-- CTAs -->
            <div class="flex flex-wrap items-center gap-4 mb-12">
               <RouterLink to="/contact" class="px-7 py-3 rounded-full border-2 border-accent-400 text-accent-400 font-semibold text-sm hover:bg-accent-400 hover:text-gray-900 transition-all duration-200"> Contact Me </RouterLink>
               <RouterLink to="/projects" class="px-7 py-3 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"> View Projects → </RouterLink>
            </div>

            <!-- Social icons -->
            <div class="flex items-center gap-5">
               <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label" target="_blank" rel="noopener noreferrer" class="text-gray-400 dark:text-gray-500 hover:text-accent-400 dark:hover:text-accent-400 transition-colors duration-200">
                  <component :is="social.icon" :size="20" />
               </a>

               <div class="w-px h-4 bg-gray-300 dark:bg-gray-700" />

               <RouterLink to="/about" class="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-accent-400 dark:hover:text-accent-400 transition-colors"> More About Me → </RouterLink>
            </div>
         </div>
      </div>
      <!-- /max-w-7xl -->
   </section>
</template>
