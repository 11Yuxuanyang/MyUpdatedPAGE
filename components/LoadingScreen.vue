<template>
  <div 
    class="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    :class="{ 'loading-exit': !show }"
  >
    <div class="loading-content text-center">
      <div class="logo-container mb-8">
        <h1 class="text-7xl font-bold text-white mb-2">
          YANG<br>
          <span class="text-white">YUXUAN</span>
        </h1>
      </div>
      
      <!-- 圆圈加载动画 -->
      <div class="flex justify-center items-center space-x-3 mb-6">
        <div class="loading-circle"></div>
        <div class="loading-circle animation-delay-200"></div>
        <div class="loading-circle animation-delay-400"></div>
      </div>
      
      <p class="text-gray-400 text-sm">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      progress: 0,
      loadingText: '正在加载...',
      loadingTexts: [
        '正在加载...',
        '准备资源...',
        '加载项目...',
        '即将完成...'
      ],
      interval: null
    }
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    startLoading() {
      let textIndex = 0;
      
      // 更新进度条
      this.interval = setInterval(() => {
        if (this.progress < 100) {
          // 非线性加载，开始快，结束慢
          const increment = this.progress < 80 ? Math.random() * 5 + 1 : Math.random() * 0.5 + 0.2;
          this.progress = Math.min(this.progress + increment, 100);
          
          // 更新文本
          if (this.progress > 25 && textIndex === 0) {
            this.loadingText = this.loadingTexts[1];
            textIndex = 1;
          } else if (this.progress > 65 && textIndex === 1) {
            this.loadingText = this.loadingTexts[2];
            textIndex = 2;
          } else if (this.progress > 90 && textIndex === 2) {
            this.loadingText = this.loadingTexts[3];
            textIndex = 3;
          }
        } else {
          clearInterval(this.interval);
        }
      }, 30);
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
.loading-screen {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.loading-exit {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

.logo-container {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards 0.3s;
}

/* 圆圈加载动画样式 */
.loading-circle {
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  animation: bounce 1s infinite ease-in-out both;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 