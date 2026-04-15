<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
   // Delay in ms - stagger siblings by passing 100, 200, etc.
   delay: {
      type: Number,
      default: 0,
   },
   // Slide direction on entry
   direction: {
      type: String,
      default: "up",
      validator: (v) => ["up", "left", "right", "none"].includes(v),
   },
});

const sectionEl = ref(null);
const isVisible = ref(false);

let observer = null;

const translateMap = {
   up: "translateY(28px)",
   left: "translateX(-28px)",
   right: "translateX(28px)",
   none: "none",
};

onMounted(() => {
   observer = new IntersectionObserver(
      ([entry]) => {
         if (entry.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
         }
      },
      {
         threshold: 0.1,
         rootMargin: "0px 0px -40px 0px",
      },
   );

   if (sectionEl.value) observer.observe(sectionEl.value);
});

onUnmounted(() => {
   observer?.disconnect();
});
</script>

<template>
   <div
      ref="sectionEl"
      :style="{
         opacity: isVisible ? 1 : 0,
         transform: isVisible ? 'none' : translateMap[direction],
         transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }"
   >
      <slot />
   </div>
</template>
