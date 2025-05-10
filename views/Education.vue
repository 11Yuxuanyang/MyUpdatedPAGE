<template>
  <div class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl md:text-4xl font-bold text-primary text-center mb-16">教育经历</h1>
      
      <div class="space-y-8">
        <!-- CMU -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-500">
          <div class="p-6">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-3xl font-bold text-blue-500 mb-2">卡内基梅隆大学</h2>
                <h3 class="text-2xl font-semibold text-gray-800 mb-1">自动化科学硕士</h3>
                <p class="text-gray-600 mb-6">2024 - 2026</p>
                
                <ul class="space-y-2 text-gray-600 list-disc pl-5">
                  <li>计算机科学学院</li>
                  <li>专注于自动化科学发现</li>
                  <li>编程语言：Go, Python</li>
                  <li>机器学习与人工智能应用</li>
                </ul>
              </div>
              <img src="/images/CMU.jpg" alt="卡内基梅隆大学校徽" class="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
        
        <!-- GSU -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-500">
          <div class="p-6">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-3xl font-bold text-blue-500 mb-2">乔治亚州立大学</h2>
                <h3 class="text-2xl font-semibold text-gray-800 mb-1">生物科学学士，数学辅修</h3>
                <p class="text-gray-600 mb-6">2022 - 2024</p>
                
                <ul class="space-y-2 text-gray-600 list-disc pl-5">
                  <li>生物统计学课程</li>
                  <li>线性代数</li>
                  <li>Python 机器学习应用</li>
                </ul>
              </div>
              <img src="/images/GSU.jpg" alt="乔治亚州立大学校徽" class="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
        
        <!-- SWJTU -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-blue-500">
          <div class="p-6">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-3xl font-bold text-blue-500 mb-2">西南交通大学</h2>
                <h3 class="text-2xl font-semibold text-gray-800 mb-1">生物工程学士</h3>
                <p class="text-gray-600 mb-6">2020 - 2022</p>
                
                <ul class="space-y-2 text-gray-600 list-disc pl-5">
                  <li>与GSU的双学位项目</li>
                  <li>分子生物学课程</li>
                  <li>生物技术前沿</li>
                </ul>
              </div>
              <img src="/images/SWJTU.jpg" alt="西南交通大学校徽" class="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- GPA 和奖项 -->
      <div class="mt-20 bg-white rounded-lg shadow-sm p-8">
        <h2 class="text-2xl font-bold text-primary mb-6 text-center">学术成就</h2>
        
        <div class="mb-10">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">GPA</h3>
          <div class="flex items-center">
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div class="bg-primary h-4 rounded-full" style="width: 87.9%"></div>
            </div>
            <span class="ml-4 font-medium">3.78/4.30</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4 text-gray-800">奖项</h3>
          <ul class="space-y-4">
            <li v-for="(award, index) in awards" :key="index" class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <svg class="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-base font-medium">{{ award.name }}</p>
                <p class="text-sm text-gray-500">{{ award.year }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      awards: [
        { name: 'GSU荣誉奖学金 – 连续两年获得，表彰持续的学术卓越和领导潜力', year: '2023 & 2024' },
        { name: 'GSU州半学费减免奖学金 – 因学术表现获得50%学费减免', year: '2023 & 2024' },
        { name: 'GSU学院银奖学金 – 获大学生物工程学生最高成绩组别的银奖', year: '2023' },
        { name: '中国机器人大会FIRST技术挑战赛第三名和激励奖（由NASA、高通、谷歌支持）', year: '2018' }
      ]
    }
  }
}
</script>

<style scoped>
.border-blue-500 {
  border-color: #3B82F6;
}
.text-blue-500 {
  color: #3B82F6;
}
</style> 