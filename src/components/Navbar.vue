<template>
  <nav class="backdrop-blur-xl bg-black bg-opacity-60 px-4 py-4 sm:px-6 lg:px-8 border-b border-gray-700 border-opacity-50 fixed w-full top-0 z-50 transition-all duration-300 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- 左侧Logo -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <span class="text-2xl font-bold text-white">杨宇轩</span>
        </router-link>
      </div>
      
      <!-- 中间导航链接 -->
      <div class="hidden md:flex items-center space-x-10">
        <router-link 
          v-for="item in primaryNavItems" 
          :key="item.path" 
          :to="item.path"
          class="text-white text-base font-medium hover:text-primary-light transition-colors duration-200" 
          :class="[$route.path === item.path ? 'text-primary-light' : '']"
        >
          {{ item.name }}
        </router-link>
      </div>
      
      <!-- 右侧按钮 -->
      <div class="flex items-center space-x-4">
        <router-link to="/contact" class="hidden md:flex items-center justify-center px-6 py-2 bg-white hover:bg-gray-100 text-dark-background rounded-full font-medium transition duration-150">
          联系我
        </router-link>
        
        <button class="w-10 h-10 rounded-full bg-dark-card border border-gray-700 flex items-center justify-center text-white hover:bg-opacity-80 transition duration-200">
          <span class="text-lg">YY</span>
        </button>
        
        <!-- 移动端菜单按钮 -->
        <button 
          type="button" 
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg 
            class="h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div class="md:hidden" v-show="mobileMenuOpen">
      <div class="pt-2 pb-3 space-y-1 bg-dark-surface border-t border-dark-border mt-2">
        <router-link 
          v-for="item in allNavItems" 
          :key="item.path" 
          :to="item.path"
          class="block px-4 py-2 text-white hover:text-primary-light transition-colors duration-200"
          :class="[$route.path === item.path ? 'text-primary-light' : '']"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      primaryNavItems: [
        { name: '关于', path: '/about' },
        { name: '作品', path: '/projects' },
        { name: '博客', path: '/blog' },
        { name: '联系', path: '/contact' }
      ],
      secondaryNavItems: [
        { name: '技能', path: '/skills' },
        { name: '教育经历', path: '/education' },
        { name: '创业经历', path: '/entrepreneurship' }
      ]
    }
  },
  computed: {
    allNavItems() {
      return [...this.primaryNavItems, ...this.secondaryNavItems];
    }
  }
}
</script>

<style scoped>
.purple-glow {
  text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
}

nav {
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
}
</style> 