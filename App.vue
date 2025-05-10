<template>
  <div class="min-h-screen flex flex-col dark:bg-dark-background dark:text-dark-text-primary">
    <!-- 加载动画 -->
    <LoadingScreen :show="isLoading" />
    
    <!-- 网站内容 -->
    <div :class="{ 'opacity-0': isLoading }">
      <Navbar />
      <main class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    LoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    // 默认使用暗黑模式
    document.documentElement.classList.add('dark')
    
    // 模拟加载完成
    setTimeout(() => {
      this.isLoading = false
    }, 2000) // 2秒后显示网站内容
  }
}
</script>

<style>
:root {
  --purple-glow: 0 0 15px rgba(139, 92, 246, 0.4);
  --purple-text-glow: 0 0 8px rgba(167, 139, 250, 0.7);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  @apply dark:bg-dark-background;
}

/* 网站内容淡入效果 */
div[class*="opacity-0"] {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

div:not([class*="opacity-0"]) {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

.card {
  @apply dark:bg-dark-card dark:border-dark-border dark:text-dark-text-primary rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300;
  box-shadow: var(--purple-glow);
}

.section-container {
  @apply py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto;
}

.section-title {
  @apply text-3xl font-bold mb-12 dark:text-dark-text-primary text-primary;
  text-shadow: var(--purple-glow);
}

.btn {
  @apply px-6 py-2 rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary-dark;
  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.4);
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-dark-background;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-700 rounded-full;
}

/* 定义一些紫色高亮类 */
.purple-gradient-bg {
  @apply bg-gradient-to-r from-primary-dark via-primary to-secondary;
}

.purple-border {
  @apply border-primary border-2;
}

.purple-glow {
  box-shadow: var(--purple-glow);
}

.purple-text-glow {
  text-shadow: var(--purple-text-glow);
}

.shadow-purple {
  box-shadow: 0 4px 20px -2px rgba(139, 92, 246, 0.5);
}
</style> 