import { ref } from "vue";

const STORAGE_KEY = "portfolio-theme";

const theme = ref(typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) ?? "dark") : "dark");

function applyTheme(value) {
   if (value === "dark") {
      document.documentElement.classList.add("dark");
   } else {
      document.documentElement.classList.remove("dark");
   }
}

function toggleTheme() {
   theme.value = theme.value === "dark" ? "light" : "dark";
   applyTheme(theme.value);
   localStorage.setItem(STORAGE_KEY, theme.value);
}

export function useTheme() {
   return { theme, toggleTheme };
}
