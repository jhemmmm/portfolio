<script setup>
import { ref, reactive } from "vue";
import AnimatedSection from "@/components/ui/AnimatedSection.vue";
import { Github, Linkedin, Twitter, Mail, Phone, Send, CheckCircle } from "lucide-vue-next";

const form = reactive({ name: "", email: "", message: "" });
const errors = reactive({ name: "", email: "", message: "" });
const submitted = ref(false);
const loading = ref(false);

const socials = [
   { label: "GitHub", href: "https://github.com/jhemmmm", icon: Github, handle: "github.com/jhemmmm" },
   { label: "LinkedIn", href: "https://www.linkedin.com/in/jheamuel-p-30084b211/", icon: Linkedin, handle: "linkedin.com/in/jheamuel-p-30084b211" },
   { label: "Email", href: "mailto:jheamuel@pogimail.net", icon: Mail, handle: "jheamuel@pogimail.net" },
   { label: "Phone", href: "tel:+639194784474", icon: Phone, handle: "+63 919 478 4474" },
];

function validate() {
   errors.name = form.name.trim().length < 2 ? "Name must be at least 2 characters." : "";
   errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? "Enter a valid email address." : "";
   errors.message = form.message.trim().length < 10 ? "Message must be at least 10 characters." : "";
   return !errors.name && !errors.email && !errors.message;
}

async function handleSubmit() {
   if (!validate()) return;
   loading.value = true;

   await fetch("https://formspree.io/f/xgoroelg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
   });

   submitted.value = true;
   loading.value = false;
   form.name = form.email = form.message = "";
}
</script>

<template>
   <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-surface-raised">
      <div class="max-w-6xl mx-auto">
         <AnimatedSection class="text-center mb-16">
            <p class="text-accent-600 dark:text-accent-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3">Let's connect</p>
            <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Get In Touch</h2>
            <div class="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600" />
            <p class="mt-5 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Whether you have a project in mind, a role that needs a backend engineer, or just want to talk systems - my inbox is open.</p>
         </AnimatedSection>

         <div class="grid lg:grid-cols-2 gap-16">
            <!-- Form -->
            <AnimatedSection :delay="100">
               <div v-if="submitted" class="flex flex-col items-center gap-4 text-center py-16">
                  <CheckCircle :size="52" class="text-accent-500" />
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                  <p class="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button @click="submitted = false" class="mt-2 text-sm text-accent-600 dark:text-accent-400 hover:underline">Send another message</button>
               </div>

               <form v-else @submit.prevent="handleSubmit" class="space-y-5" novalidate>
                  <div>
                     <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Your Name</label>
                     <input id="name" v-model="form.name" type="text" autocomplete="name" placeholder="Jane Smith" :class="['w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 bg-white dark:bg-surface-card border focus:outline-none focus:ring-2 focus:ring-accent-400/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500', errors.name ? 'border-red-400' : 'border-gray-200 dark:border-surface-border hover:border-accent-400 focus:border-accent-400']" />
                     <p v-if="errors.name" class="mt-1.5 text-xs text-red-500">{{ errors.name }}</p>
                  </div>

                  <div>
                     <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                     <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="jane@example.com" :class="['w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 bg-white dark:bg-surface-card border focus:outline-none focus:ring-2 focus:ring-accent-400/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500', errors.email ? 'border-red-400' : 'border-gray-200 dark:border-surface-border hover:border-accent-400 focus:border-accent-400']" />
                     <p v-if="errors.email" class="mt-1.5 text-xs text-red-500">{{ errors.email }}</p>
                  </div>

                  <div>
                     <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                     <textarea id="message" v-model="form.message" rows="5" placeholder="Tell me about your project or role…" :class="['w-full px-4 py-3 rounded-xl text-sm resize-none transition-all duration-200 bg-white dark:bg-surface-card border focus:outline-none focus:ring-2 focus:ring-accent-400/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500', errors.message ? 'border-red-400' : 'border-gray-200 dark:border-surface-border hover:border-accent-400 focus:border-accent-400']" />
                     <p v-if="errors.message" class="mt-1.5 text-xs text-red-500">{{ errors.message }}</p>
                  </div>

                  <button type="submit" :disabled="loading" class="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-gray-900 bg-accent-400 hover:bg-accent-500 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-accent-500/20 hover:-translate-y-0.5 transition-all duration-200">
                     <Send :size="15" :class="{ 'animate-pulse': loading }" />
                     {{ loading ? "Sending…" : "Send Message" }}
                  </button>
               </form>
            </AnimatedSection>

            <!-- Contact info -->
            <AnimatedSection :delay="200" direction="right">
               <div class="space-y-6">
                  <div>
                     <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Other ways to reach me</h3>
                     <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Based in Naga City, Philippines. Available for remote roles worldwide. I typically respond within 24 hours on weekdays.</p>
                  </div>

                  <div class="space-y-3">
                     <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-surface-border bg-white dark:bg-surface-card hover:border-accent-400/50 hover:shadow-md group transition-all duration-200">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-50 dark:bg-surface-muted text-accent-600 dark:text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-all duration-200">
                           <component :is="social.icon" :size="18" />
                        </div>
                        <div>
                           <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ social.label }}</p>
                           <p class="text-xs text-gray-500 dark:text-gray-500">{{ social.handle }}</p>
                        </div>
                     </a>
                  </div>
               </div>
            </AnimatedSection>
         </div>
      </div>
   </section>
</template>
