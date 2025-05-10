<template>
  <div class="bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">创业经历</h1>
      
      <div class="space-y-24 pt-12 lg:pt-16">
        <!-- EGO 项目 -->
        <div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <!-- Video Column -->
            <div class="lg:col-span-1">
              <div class="rounded-lg overflow-hidden shadow-xl aspect-video bg-dark-surface mb-6">
                <img class="w-full h-full object-cover" src="/images/EGO/截屏2025-05-04 上午10.19.38.png" alt="EGO平台预览">
              </div>
              <h2 class="text-2xl font-bold text-purple-400 mb-2 text-center lg:text-left">EGO</h2>
              <p class="text-gray-400 text-center lg:text-left">AI驱动的教育平台</p>
              <p class="text-gray-400 text-center lg:text-left">2025/01 - 至今</p>
            </div>
            
            <!-- Details Column -->
            <div class="lg:col-span-2">
              <div class="bg-dark-card rounded-lg p-8 h-full">
                <h3 class="text-xl font-semibold mb-4 text-white">创始人 & 项目负责人</h3>
                <div class="space-y-4 text-gray-300">
                  <p>构思并推出了EGO，这是一个AI驱动的就业和青少年教育SaaS平台，结合个性化职业服务和灵活的AIGC内容工作空间；我独立构建了完整的MVP（Vue 3、Vite、Python微服务），并带领一个10人跨职能团队。</p>
                  <p>设计了模块化推理层，集成了不断扩展的大模型目录，包括豆包、DeepSeek、千问、GPT、Gemini和多模态生成器。</p>
                  <p>在5个校区的300名大学生中推出了封闭测试版；部署了千问3简历点评和职位匹配代理，将用户参与度提高到38% DAU/MAU。</p>
                  <p>获得了100万元种子资金，并与3个当地培训中心签订了合作协议，建立了平台的首个经常性收入流，使EGO进入了扩张阶段。</p>
                </div>
                
                <div class="mt-8">
                  <h4 class="font-medium mb-2 text-white">核心技术</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(tech, index) in egoTechs" :key="index" class="px-3 py-1 bg-dark-surface rounded-full text-sm text-purple-300">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <div class="mt-8">
                  <h4 class="font-medium mb-2 text-white">关键成就</h4>
                  <ul class="list-disc pl-5 space-y-2 text-gray-300">
                    <li v-for="(achievement, index) in egoAchievements" :key="index">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 一尘自习室 -->
        <div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1 flex flex-col items-center justify-center order-1 lg:order-2">
              <div class="w-48 h-48 rounded-full bg-indigo-600 bg-opacity-20 flex items-center justify-center mb-6">
                <span class="text-6xl font-bold text-indigo-400">YC</span>
              </div>
              <h2 class="text-2xl font-bold text-indigo-400 mb-2 text-center">奕辰自习室</h2>
              <p class="text-gray-400 text-center">自习室创业项目</p>
              <p class="text-gray-400 text-center">2023/05 - 至今</p>
            </div>
            
            <div class="lg:col-span-2 order-2 lg:order-1">
              <div class="bg-dark-card rounded-lg p-8 h-full">
                <h3 class="text-xl font-semibold mb-4 text-white">创始人 & 经营者</h3>
                <div class="space-y-4 text-gray-300">
                  <p>将一个200平方米的店面改造成全天候私人学习中心；在9个月内实现盈亏平衡，现在年收入达20万元。</p>
                  <p>开发了分层会员计划，开展有针对性的线下推广，吸引了300多名高度参与的会员，并保持了85%的月保留率，会员推荐率达40%。</p>
                  <p>指导了100多名学生，其中65%报告成功的大学录取。</p>
                </div>
                
                <div class="mt-8">
                  <h4 class="font-medium mb-2 text-white">经营要点</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(point, index) in yichenPoints" :key="index" class="px-3 py-1 bg-dark-surface rounded-full text-sm text-indigo-300">
                      {{ point }}
                    </span>
                  </div>
                </div>
                
                <div class="mt-8">
                  <h4 class="font-medium mb-2 text-white">增长数据</h4>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div v-for="(stat, index) in yichenStats" :key="index" class="bg-dark-surface rounded-lg border border-gray-800 p-4 text-center">
                      <p class="text-3xl font-bold mb-2" :class="index % 2 === 0 ? 'text-indigo-400' : 'text-purple-400'">{{ stat.value }}</p>
                      <p class="text-sm text-gray-400">{{ stat.label }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 创业精神 -->
      <div class="mt-24">
        <h2 class="text-2xl font-bold text-center text-white mb-10">创业精神</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(skill, index) in entrepreneurialSkills" :key="index" class="bg-dark-card rounded-lg p-8 text-center">
            <div class="h-16 w-16 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
              <component :is="skill.icon" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-medium mb-3 text-white">{{ skill.title }}</h3>
            <p class="text-gray-300">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entrepreneurship',
  data() {
    return {
      egoTechs: [
        'Vue 3', 'Vite', 'Python', '微服务', 'AI集成', '大语言模型', 'SaaS', 'AIGC'
      ],
      egoAchievements: [
        '构建完整的全栈MVP',
        '集成多种大型语言模型',
        '38% DAU/MAU用户参与度',
        '获得100万元种子资金',
        '与3个培训中心建立合作关系'
      ],
      yichenPoints: [
        '空间管理', '会员计划', '社区建设', '学习氛围', '商业运营'
      ],
      yichenStats: [
        { value: '200m²', label: '空间面积' },
        { value: '300+', label: '会员人数' },
        { value: '85%', label: '月留存率' },
        { value: '20万', label: '年收入' }
      ],
      entrepreneurialSkills: [
        {
          title: '商业敏锐度',
          description: '识别市场机会，开发创新商业模式，确保业务可持续发展。',
          icon: 'ChartBarIcon'
        },
        {
          title: '领导能力',
          description: '带领团队实现共同目标，激发团队成员潜力，推动项目成功。',
          icon: 'UserGroupIcon'
        },
        {
          title: '创新思维',
          description: '将技术与商业融合，开发创新解决方案，满足用户需求。',
          icon: 'LightBulbIcon'
        }
      ]
    }
  },
  components: {
    ChartBarIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      `
    },
    UserGroupIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      `
    },
    LightBulbIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      `
    }
  }
}
</script> 