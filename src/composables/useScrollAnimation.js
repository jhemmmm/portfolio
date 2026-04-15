import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation(options = {}) {
   const el = ref(null);
   const isVisible = ref(false);

   let observer = null;

   onMounted(() => {
      observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               isVisible.value = true;
               observer.disconnect();
            }
         },
         {
            threshold: options.threshold ?? 0.12,
            rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
         },
      );

      if (el.value) observer.observe(el.value);
   });

   onUnmounted(() => {
      observer?.disconnect();
   });

   return { el, isVisible };
}
