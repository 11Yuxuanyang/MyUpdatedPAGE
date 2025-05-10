<template>
  <div class="skills-carousel-container my-16 overflow-hidden">
    <h2 class="text-2xl font-bold text-white mb-8 text-center">技能与技术栈</h2>
    
    <!-- 滚动容器 -->
    <div class="relative">
      <div class="skills-track flex items-center space-x-16 animate-scroll whitespace-nowrap">
        <div v-for="(skill, index) in skills" :key="index" class="skill-item flex-shrink-0 px-8 py-4 bg-dark-card bg-opacity-50 backdrop-blur-md rounded-lg flex items-center">
          <div class="mr-4">
            <div class="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
              <span class="text-xl font-bold text-white">{{ skill.icon }}</span>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
            <div class="flex space-x-1 mt-2">
              <div 
                v-for="i in 5" 
                :key="i" 
                :class="[
                  i <= skill.level ? 'bg-white' : 'bg-white bg-opacity-30',
                  'w-6 h-1 rounded-full'
                ]"
              ></div>
            </div>
          </div>
        </div>
        
        <!-- 复制第一组技能以实现无缝滚动 -->
        <div v-for="(skill, index) in skills" :key="`dup-${index}`" class="skill-item flex-shrink-0 px-8 py-4 bg-dark-card bg-opacity-50 backdrop-blur-md rounded-lg flex items-center">
          <div class="mr-4">
            <div class="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
              <span class="text-xl font-bold text-white">{{ skill.icon }}</span>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
            <div class="flex space-x-1 mt-2">
              <div 
                v-for="i in 5" 
                :key="i" 
                :class="[
                  i <= skill.level ? 'bg-white' : 'bg-white bg-opacity-30',
                  'w-6 h-1 rounded-full'
                ]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCarousel',
  data() {
    return {
      skills: [
        { name: 'Vue.js', level: 4, icon: 'V' },
        { name: 'React', level: 3, icon: 'R' },
        { name: 'Python', level: 5, icon: 'P' },
        { name: 'Go', level: 4, icon: 'G' },
        { name: '微信小程序', level: 4, icon: 'W' },
        { name: 'JavaScript', level: 4, icon: 'JS' },
        { name: 'MySQL', level: 3, icon: 'S' },
        { name: 'UX/UI设计', level: 3, icon: 'U' },
        { name: '产品管理', level: 4, icon: 'PM' },
        { name: '团队领导', level: 3, icon: 'TL' }
      ]
    };
  }
};
</script>

<style scoped>
.skills-carousel-container {
  position: relative;
  padding: 2rem 0;
}

.skills-carousel-container::before,
.skills-carousel-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 15%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.skills-carousel-container::before {
  left: 0;
  background: linear-gradient(to right, rgb(0,0,0), rgba(0,0,0,0));
}

.skills-carousel-container::after {
  right: 0;
  background: linear-gradient(to left, rgb(0,0,0), rgba(0,0,0,0));
}

.skills-track {
  animation: scroll 30s linear infinite;
  will-change: transform;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2));
  }
}

.skills-track:hover {
  animation-play-state: paused;
}

.skill-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style> 