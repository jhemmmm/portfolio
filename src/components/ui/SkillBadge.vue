<script setup>
import { Layers, FileCode, FileType, Code2, Palette, Zap, Server, Globe, Database, HardDrive, Wifi, Terminal, GitBranch, Box, Monitor, Code, RefreshCw, Cpu, Hash, Coffee, Flame, Video, Shield, Cloud } from "lucide-vue-next";

// Static icon map - only imports icons actually used in skills.js.
// Avoids `import *` which would add every Lucide icon to the bundle.
const iconMap = {
   Layers,
   FileCode,
   FileType,
   Code2,
   Palette,
   Zap,
   Server,
   Globe,
   Database,
   HardDrive,
   Wifi,
   Terminal,
   GitBranch,
   Box,
   Monitor,
   Code,
   RefreshCw,
   Cpu,
   Hash,
   Coffee,
   Flame,
   Video,
   Shield,
   Cloud,
};

const props = defineProps({
   label: { type: String, required: true },
   icon: { type: String, default: "Code2" },
});

const IconComponent = iconMap[props.icon] ?? Code2;
</script>

<template>
   <div class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 dark:border-surface-border bg-gray-50 dark:bg-surface-card text-gray-700 dark:text-gray-300 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-surface-muted transition-all duration-200 cursor-default select-none group">
      <component :is="IconComponent" :size="15" class="shrink-0 text-accent-500 dark:text-accent-400 group-hover:scale-110 transition-transform duration-200" />
      <span class="text-sm font-medium">{{ label }}</span>
   </div>
</template>
