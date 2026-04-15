import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import SkillsPage from "@/pages/SkillsPage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import BlogPostPage from "@/pages/BlogPostPage.vue";

const routes = [
   { path: "/", name: "home", component: HomePage },
   { path: "/about", name: "about", component: AboutPage },
   { path: "/skills", name: "skills", component: SkillsPage },
   { path: "/projects", name: "projects", component: ProjectsPage },
   { path: "/contact", name: "contact", component: ContactPage },
   { path: "/blog", name: "blog", component: BlogPage },
   { path: "/blog/:slug", name: "blog-post", component: BlogPostPage },
   { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { top: 0, behavior: "smooth" };
   },
});

export default router;
