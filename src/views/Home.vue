<template>
  <div class="pt-16">
    <!-- Loading Animation -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-dark-background z-50">
      <div class="breathing-circle"></div>
    </div>

    <!-- 主页英雄区 - Noira风格 -->
    <section v-show="!isLoading" class="bg-dark-background min-h-screen flex items-center py-12 lg:py-24 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-start gap-16">
          <!-- 左侧内容区 -->
          <div class="w-full lg:w-1/2 lg:pt-0">
            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
              <span v-show="animate.title1" class="block" :class="[animate.title1 ? 'animation-fadeUp' : '']">YANG</span>
              <span v-show="animate.title2" class="block text-white" :class="[animate.title2 ? 'animation-fadeUp' : '']">YUXUAN</span>
              <span v-show="animate.title3" class="bg-white text-dark-background px-6 py-2 inline-block mt-4 rounded-lg" :class="[animate.title3 ? 'animation-bounceIn' : '']">CREATOR.</span>
            </h1>
            
            <p v-show="animate.description" class="text-lg text-dark-text-secondary mt-8 max-w-lg" :class="[animate.description ? 'animation-fadeUp' : '']">
              汇聚技术与创新，卡内基梅隆大学硕士，成功创业者，专注于AI驱动的全栈开发解决方案。
            </p>
            
            <div v-show="animate.buttons" class="flex gap-4 mt-10" :class="[animate.buttons ? 'animation-fadeUp' : '']">
              <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-dark-background rounded-full font-medium transition duration-150">
                联系我
              </router-link>
              <router-link to="/services" class="inline-flex items-center justify-center px-8 py-3 border border-white text-white hover:bg-white hover:bg-opacity-10 rounded-full font-medium transition duration-150">
                查看服务
              </router-link>
            </div>
          </div>
          
          <!-- 右侧图像区 -->
          <div v-show="animate.image" class="w-full lg:w-1/2 mt-10 lg:mt-0 lg:self-center" :class="[animate.image ? 'animation-fadeLeft' : '']">
            <div class="relative aspect-square md:max-w-lg mx-auto">
              <!-- 主图片 -->
              <img 
                src="/images/个人照片.jpg" 
                alt="杨宇轩个人照片" 
                class="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              
              <!-- 悬浮元素 -->
              <div class="absolute -bottom-4 -left-4 p-3 bg-dark-card rounded-lg shadow-lg transform rotate-6">
                <img src="/images/CMU.jpg" alt="卡内基梅隆大学" class="w-16 h-16 rounded-lg object-cover" />
              </div>
              
              <div class="absolute -top-4 -right-4 p-3 bg-dark-card rounded-lg shadow-lg transform -rotate-3">
                <img src="/images/SWJTU.jpg" alt="西南交通大学" class="w-16 h-16 rounded-lg object-cover" />
              </div>
            </div>
            
            <!-- 照片下方的导航索引 -->
            <div class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
              <router-link to="/services" class="px-6 py-3 bg-dark-card border border-gray-700 rounded-full text-white text-center hover:bg-white hover:text-dark-background transition duration-200 group">
                <span class="group-hover:font-medium">全栈开发</span>
              </router-link>
              <router-link to="/services" class="px-6 py-3 bg-dark-card border border-gray-700 rounded-full text-white text-center hover:bg-white hover:text-dark-background transition duration-200 group">
                <span class="group-hover:font-medium">人工智能</span>
              </router-link>
              <router-link to="/services" class="px-6 py-3 bg-dark-card border border-gray-700 rounded-full text-white text-center hover:bg-white hover:text-dark-background transition duration-200 group">
                <span class="group-hover:font-medium">创业管理</span>
              </router-link>
              <router-link to="/services" class="px-6 py-3 bg-dark-card border border-gray-700 rounded-full text-white text-center hover:bg-white hover:text-dark-background transition duration-200 group">
                <span class="group-hover:font-medium">产品设计</span>
              </router-link>
              <router-link to="/services" class="px-6 py-3 bg-dark-card border border-gray-700 rounded-full text-white text-center hover:bg-white hover:text-dark-background transition duration-200 group">
                <span class="group-hover:font-medium">教育科技</span>
              </router-link>
              <router-link to="/services" class="px-6 py-3 bg-dark-card border border-gray-700 rounded-full text-white text-center hover:bg-white hover:text-dark-background transition duration-200 group">
                <span class="group-hover:font-medium">技术咨询</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Journey 成长之路时间线板块 -->
    <section class="journey-section bg-gradient-to-b from-dark-background to-black py-24 relative">
      <!-- DNA粒子动画背景 - 性能优化版 -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <iframe
          v-if="shouldLoadDNA"
          src="https://my.spline.design/dnaparticles-mCM39A89Us5ar30hIcJh0gqU/"
          frameborder="0"
          loading="lazy"
          width="100%"
          height="100%"
          style="pointer-events: none; will-change: transform; transform: translateZ(0);"
          allowfullscreen
        ></iframe>
        <!-- 未加载时显示渐变占位符 -->
        <div v-else class="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black"></div>
      </div>
      
      <!-- 半透明遮罩提高可读性 -->
      <div class="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">成长之路 Journey</h2>
          <p class="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            从生物工程到人工智能，从学术科研到创业实践，见证我的每一次跨界成长与突破。
          </p>
        </div>
        <div class="relative border-l-4 border-purple-500 pl-8 space-y-16">
          <!-- 2020-2022 SWJTU -->
          <div class="flex items-start">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-6">1</div>
            <div>
              <h3 class="text-2xl font-semibold text-white mb-2">西南交通大学（SWJTU）</h3>
              <p class="text-gray-300 mb-1">生物工程学士（双学位项目） | 2020/09 - 2022/06</p>
              <p class="text-gray-400 mb-2">主修分子生物学、前沿生物技术，打下坚实的科研基础。</p>
            </div>
          </div>
          <!-- 2022-2024 GSU -->
          <div class="flex items-start">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-6">2</div>
            <div>
              <h3 class="text-2xl font-semibold text-white mb-2">乔治亚州立大学（GSU）</h3>
              <p class="text-gray-300 mb-1">生物科学学士，数学辅修 | 2022/08 - 2024/06</p>
              <p class="text-gray-400 mb-2">专注生物统计、机器学习，GPA 3.78/4.3，获多项奖学金。</p>
            </div>
          </div>
          <!-- 2024-至今 CMU -->
          <div class="flex items-start">
            <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mr-6">3</div>
            <div>
              <h3 class="text-2xl font-semibold text-white mb-2">卡内基梅隆大学（CMU）</h3>
              <p class="text-gray-300 mb-1">自动化科学硕士 | 2024/08 - 至今</p>
              <p class="text-gray-400 mb-2">跨界统计、Go编程与自动化实验，探索AI驱动的科学创新。</p>
            </div>
          </div>
          <!-- 科研/项目/获奖 -->
          <div class="flex items-start">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-6">4</div>
            <div>
              <h3 class="text-2xl font-semibold text-white mb-2">科研与项目实践</h3>
              <ul class="list-disc pl-5 text-gray-300 space-y-1">
                <li>3D CNN肺结节自动检测、奶牛乳腺炎预测等AI科研项目</li>
                <li>黑八追分微信小程序、Go粘菌城市交通模拟等创新开发</li>
                <li>荣获GSU荣誉奖学金、银奖学金、机器人挑战赛三等奖等</li>
              </ul>
            </div>
          </div>
          <!-- 2023-至今 创业 -->
          <div class="flex items-start">
            <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-6">5</div>
            <div>
              <h3 class="text-2xl font-semibold text-white mb-2">创业与自我突破</h3>
              <ul class="list-disc pl-5 text-gray-300 space-y-1">
                <li>EGO：AI驱动的教育SaaS平台，获百万种子轮融资</li>
                <li>奕辰自习室：9个月盈亏平衡，年收入20万+，会员300+</li>
                <li>自媒体内容创作，粉丝增长率120%，多平台同步运营</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 创业经历突出显示 -->
    <section class="bg-black py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4"><span class="bg-white text-dark-background px-6 py-2 rounded-lg">重新定义</span> 创业的意义</h2>
          <p class="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            从出色的营销资产到高性能的活动和落地页，了解我们如何将创意转化为现实
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- EGO -->
          <div class="bg-dark-card rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple group">
            <div class="aspect-video bg-dark-surface flex items-center justify-center overflow-hidden relative">
              <video class="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105" src="/images/EGO/录屏2025-05-10 上午2.10.15.mov?url" controls autoplay muted loop playsinline>
                Your browser does not support the video tag.
              </video>
              <div class="absolute inset-0 bg-black opacity-0 transition-all duration-500 group-hover:opacity-20"></div>
              <div class="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-all duration-300 group-hover:h-1/3 group-hover:opacity-50"></div>
            </div>
            <div class="p-8 transform transition-all duration-300 group-hover:bg-dark-surface">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-dark-surface group-hover:bg-dark-card rounded-full text-xs text-dark-text-secondary transition-all duration-300">
                  AI集成
                </span>
                <span class="px-3 py-1 bg-dark-surface group-hover:bg-dark-card rounded-full text-xs text-dark-text-secondary transition-all duration-300">
                  SaaS平台
                </span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-purple-300">EGO - AI驱动的教育平台</h3>
              <p class="text-dark-text-secondary transition-all duration-300 group-hover:text-white">
                构思并推出了AI驱动的就业和青少年教育SaaS平台，结合个性化职业服务和灵活的AIGC内容工作空间。
              </p>
            </div>
          </div>
          
          <!-- 奕辰自习室 -->
          <div class="bg-dark-card rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple group">
            <div class="aspect-video bg-indigo-600 flex items-center justify-center overflow-hidden relative">
              <img src="/images/奕辰自习室/奕辰自习室外.jpg" alt="奕辰自习室" class="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-indigo-600 opacity-0 transition-all duration-500 group-hover:opacity-30"></div>
              <div class="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-all duration-300 group-hover:h-1/3 group-hover:opacity-60"></div>
            </div>
            <div class="p-8 transform transition-all duration-300 group-hover:bg-dark-surface">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-dark-surface group-hover:bg-dark-card rounded-full text-xs text-dark-text-secondary transition-all duration-300">
                  空间管理
                </span>
                <span class="px-3 py-1 bg-dark-surface group-hover:bg-dark-card rounded-full text-xs text-dark-text-secondary transition-all duration-300">
                  会员计划
                </span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-indigo-300">奕辰自习室 - 学习空间经营</h3>
              <p class="text-dark-text-secondary transition-all duration-300 group-hover:text-white">
                将200平方米店面改造为全天候私人学习中心，9个月内实现盈亏平衡，年收入20万元。
              </p>
            </div>
          </div>
          
          <!-- 可以增加第三个项目，如果有的话 -->
          <div class="bg-dark-card rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple group">
            <div class="aspect-video bg-blue-600 flex items-center justify-center overflow-hidden relative">
              <div class="absolute inset-0 bg-blue-600 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500 flex items-center justify-center">
                <span class="text-4xl font-bold text-white transform transition-all duration-300 group-hover:scale-125">NEXT</span>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-all duration-300 group-hover:h-1/3 group-hover:opacity-60"></div>
            </div>
            <div class="p-8 transform transition-all duration-300 group-hover:bg-dark-surface">
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-dark-surface group-hover:bg-dark-card rounded-full text-xs text-dark-text-secondary transition-all duration-300">
                  即将推出
                </span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-blue-300">下一个创业项目</h3>
              <p class="text-dark-text-secondary transition-all duration-300 group-hover:text-white">
                敬请期待我的下一个创业项目，将结合前沿技术与创新理念，打造全新市场价值。
              </p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/entrepreneurship" class="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-dark-background rounded-full font-medium transition duration-150">
            更多项目
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- 自习室介绍 - 网格布局数据展示 -->
    <section class="bg-black py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-white mb-2 text-center">奕辰自习室</h2>
          <p class="text-xl text-gray-400 text-center max-w-3xl mx-auto">打造专注学习的理想空间，让每一分钟都充满效率</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- 会员数量 -->
          <div class="bg-dark-card bg-opacity-50 p-10 rounded-lg">
            <h3 class="text-xl font-medium text-white mb-8">会员数量</h3>
            <div class="flex flex-col items-end">
              <p class="text-7xl font-bold text-white mb-4">300+</p>
              <p class="text-gray-400 text-right">活跃用户持续增长</p>
            </div>
          </div>
          
          <!-- 月留存率 -->
          <div class="bg-dark-card bg-opacity-50 p-10 rounded-lg md:col-span-2 flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 class="text-xl font-medium text-white mb-8">月留存率</h3>
              <div class="flex flex-col items-start">
                <p class="text-7xl font-bold text-white mb-4">85%</p>
                <p class="text-gray-400">超高会员留存体验</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 flex items-center justify-center">
              <img src="/images/奕辰自习室/491746810093_.pic_hd.jpg" alt="奕辰自习室环境" class="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          
          <!-- 图片展示 -->
          <div class="bg-dark-card bg-opacity-50 p-10 rounded-lg md:row-span-2">
            <img src="/images/奕辰自习室/481746810090_.pic_hd.jpg" alt="奕辰自习室空间" class="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          
          <!-- 盈亏平衡时间 -->
          <div class="bg-dark-card bg-opacity-50 p-10 rounded-lg col-span-1 md:col-span-2 lg:col-span-1">
            <h3 class="text-xl font-medium text-white mb-8">盈亏平衡时间</h3>
            <div class="flex flex-col items-end">
              <p class="text-7xl font-bold text-white mb-4">9个月</p>
              <p class="text-gray-400 text-right">高效运营管理模式</p>
            </div>
          </div>
          
          <!-- 空间面积 -->
          <div class="bg-dark-card bg-opacity-50 p-10 rounded-lg md:col-span-2">
            <h3 class="text-xl font-medium text-white mb-8">成功案例</h3>
            <div class="flex flex-col items-end">
              <p class="text-7xl font-bold text-white mb-4">200㎡</p>
              <p class="text-gray-400 text-right">精心打造的学习空间，配备人体工学椅和专业照明系统</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/entrepreneurship" class="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-dark-background rounded-full font-medium transition duration-150">
            了解更多
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- 自媒体博主风采 -->
    <section class="bg-black py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">自媒体博主风采</h2>
          <p class="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            展示我在自媒体内容创作、粉丝互动及平台运营中的高光时刻。
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 数据卡片 1: 粉丝增长率 -->
          <div class="bg-black rounded-lg p-8 md:p-10 relative overflow-hidden">
            <h3 class="text-2xl font-bold text-white mb-6">粉丝增长率</h3>
            <div class="mt-8">
              <p class="text-7xl md:text-8xl font-bold text-white mb-6">120%</p>
              <p class="text-gray-300 max-w-md">年度粉丝增长，内容持续吸引新关注</p>
            </div>
            <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          </div>

          <!-- 数据卡片 2: 内容发布量 -->
          <div class="bg-black rounded-lg p-8 md:p-10 relative overflow-hidden">
            <h3 class="text-2xl font-bold text-white mb-6">内容发布量</h3>
            <div class="mt-8 flex flex-col items-start">
              <p class="text-7xl md:text-8xl font-bold text-white mb-6">300+</p>
              <p class="text-gray-300 max-w-md">原创视频/图文内容，覆盖多个平台</p>
            </div>
            <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
          </div>

          <!-- 数据卡片 3: 互动量 -->
          <div class="bg-black rounded-lg p-8 md:p-10 relative overflow-hidden">
            <h3 class="text-2xl font-bold text-white mb-6">互动量</h3>
            <div class="mt-8 flex flex-col items-start">
              <p class="text-7xl md:text-8xl font-bold text-white mb-6">50w+</p>
              <p class="text-gray-300 max-w-md">评论、点赞、转发等粉丝互动总量</p>
            </div>
            <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-green-500 opacity-20 blur-3xl"></div>
          </div>

          <!-- 数据卡片 4: 平台覆盖数 -->
          <div class="bg-black rounded-lg p-8 md:p-10 relative overflow-hidden">
            <h3 class="text-2xl font-bold text-white mb-6">平台覆盖数</h3>
            <div class="mt-8 flex flex-col items-start">
              <p class="text-7xl md:text-8xl font-bold text-white mb-6">6+</p>
              <p class="text-gray-300 max-w-md">主流自媒体平台同步运营</p>
            </div>
            <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-red-500 opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <!-- 自媒体活动图片展示 -->
        <div class="mt-24">
          <h3 class="text-2xl font-bold text-white mb-10 text-center">内容创作精彩瞬间</h3>
          <!-- 大图展示 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="md:col-span-2 aspect-video bg-dark-card rounded-lg overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <img src="/images/奕辰自习室/481746810090_.pic_hd.jpg" alt="自媒体拍摄现场" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute bottom-6 left-6">
                <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">短视频拍摄</span>
                <h4 class="text-xl font-bold text-white mt-2">高效内容制作流程</h4>
              </div>
            </div>
            <div class="aspect-video bg-dark-card rounded-lg overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <img src="/images/奕辰自习室/491746810093_.pic_hd.jpg" alt="自媒体直播" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute bottom-6 left-6">
                <span class="px-3 py-1 bg-green-500 text-white text-xs rounded-full">直播互动</span>
                <h4 class="text-xl font-bold text-white mt-2">与粉丝实时交流</h4>
              </div>
            </div>
          </div>
          <!-- 小图展示 -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="aspect-square bg-purple-900 rounded-lg overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-lg font-bold">内容策划</span>
              </div>
            </div>
            <div class="aspect-square bg-blue-900 rounded-lg overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-lg font-bold">剪辑制作</span>
              </div>
            </div>
            <div class="aspect-square bg-green-900 rounded-lg overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-lg font-bold">平台运营</span>
              </div>
            </div>
            <div class="aspect-square bg-red-900 rounded-lg overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-lg font-bold">粉丝互动</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 视频展示 -->
        <div class="mt-24">
          <h3 class="text-2xl font-bold text-white mb-10 text-center">自媒体视频集锦</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 视频卡片 1 -->
            <div class="bg-dark-card rounded-lg overflow-hidden">
              <div class="aspect-video bg-gray-900 flex items-center justify-center relative">
                <video class="w-full h-full object-cover" poster="/images/奕辰自习室/491746810093_.pic_hd.jpg" controls>
                  <source src="/images/EGO/录屏2025-05-10 上午2.10.15.mov?url" type="video/mp4">
                  您的浏览器不支持视频标签
                </video>
              </div>
              <div class="p-6">
                <h4 class="text-xl font-bold text-white mb-2">爆款短视频案例</h4>
                <p class="text-gray-400">热门内容创作与传播策略实录</p>
              </div>
            </div>
            <!-- 视频内容介绍 -->
            <div class="bg-dark-card rounded-lg overflow-hidden p-8 flex flex-col justify-center">
              <h4 class="text-xl font-bold text-white mb-4">内容创作与运营亮点</h4>
              <p class="text-gray-300 mb-6">聚焦内容策划、剪辑、平台分发与粉丝互动，助力账号持续成长。</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-blue-400 mr-2">•</span>
                  <span class="text-gray-300">短视频内容策划与拍摄</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">•</span>
                  <span class="text-gray-300">多平台同步分发</span>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-400 mr-2">•</span>
                  <span class="text-gray-300">数据分析与粉丝运营</span>
                </li>
                <li class="flex items-start">
                  <span class="text-red-400 mr-2">•</span>
                  <span class="text-gray-300">直播与社群互动</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目展示 -->
    <section class="bg-dark-surface py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">技术项目</h2>
          <p class="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            探索我的技术项目和开发作品
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="index" class="bg-dark-card rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple">
            <div class="aspect-video bg-primary-dark flex items-center justify-center">
              <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
            </div>
            <div class="p-8">
              <p class="text-dark-text-secondary mb-6">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="px-3 py-1 bg-dark-surface rounded-full text-xs text-dark-text-secondary">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/projects" class="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-dark-background rounded-full font-medium transition duration-150">
            查看所有项目
          </router-link>
        </div>
      </div>
    </section>

    <!-- 技能滚动展示 -->
    <SkillsCarousel />
    
    <!-- CTA 联系区域 -->
    <section class="bg-dark-background py-24 border-t border-dark-border">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">准备好一起创造了吗？</h2>
        <p class="text-xl text-dark-text-secondary mb-10">
          无论是讨论项目合作，分享研究见解，还是探讨创业机会，我都很乐意与您交流。
        </p>
        <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-dark-background rounded-full font-medium transition duration-150">
          立即联系
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import SkillsCarousel from '@/components/SkillsCarousel.vue'

export default {
  name: 'Home',
  components: {
    SkillsCarousel
  },
  data() {
    return {
      isLoading: true, // 新增：控制加载动画的显示
      // 控制各元素动画的显示状态
      animate: {
        title1: false,
        title2: false,
        title3: false,
        description: false,
        buttons: false,
        image: false
      },
      featuredProjects: [
        {
          title: '黑八追分 - 微信小程序',
          description: '为8球台球比赛开发的实时多人记分小程序，支持复杂规则和负分追踪。',
          tags: ['Vue3', 'uniapp', '微信小程序', '前端开发']
        },
        {
          title: '基于Go的粘菌城市交通网络模拟',
          description: '利用Go语言模拟粘菌寻路行为，探索高效城市交通网络设计。',
          tags: ['Go', '并发编程', '生物仿真', '城市规划']
        }
      ],
      shouldLoadDNA: false // 控制DNA动画是否加载
    }
  },
  mounted() {
    // 页面加载完成后，延迟触发动画
    setTimeout(() => {
      this.isLoading = false; // 隐藏加载动画
      this.startAnimationSequence(); // 开始主内容动画
    }, 2000); // 等待2秒再开始动画序列

    // 监听滚动事件，当用户滚动到Journey部分时加载DNA动画
    window.addEventListener('scroll', this.checkScrollPosition);
    
    // 初始检查，如果用户已经在Journey部分加载页面
    this.$nextTick(() => {
      this.checkScrollPosition();
    });
  },
  beforeUnmount() {
    // 组件销毁前移除事件监听
    window.removeEventListener('scroll', this.checkScrollPosition);
  },
  methods: {
    // 按顺序触发各元素的动画
    startAnimationSequence() {
      const sequence = [
        { element: 'title1', delay: 0 },
        { element: 'title2', delay: 300 },
        { element: 'title3', delay: 600 },
        { element: 'description', delay: 900 },
        { element: 'buttons', delay: 1200 },
        { element: 'image', delay: 400 }
      ];
      
      sequence.forEach(item => {
        setTimeout(() => {
          this.animate[item.element] = true;
        }, item.delay);
      });
    },
    // 检查滚动位置，决定是否加载DNA动画
    checkScrollPosition() {
      if (this.shouldLoadDNA) return; // 如果已经加载了，就不再检查
      
      const journeySection = document.querySelector('.journey-section');
      if (!journeySection) return;
      
      const rect = journeySection.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      
      // 当Journey部分进入视图时加载DNA动画
      if (rect.top <= viewHeight && rect.bottom >= 0) {
        this.shouldLoadDNA = true;
      }
    }
  }
}
</script>

<style scoped>
/* Breathing Circle Loader */
.breathing-circle {
  width: 60px; /* 调整了大小 */
  height: 60px; /* 调整了大小 */
  border-radius: 50%;
  background-color: #fff; /* 白色圆圈 */
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5); /* 添加辉光效果 */
  animation: breath 1.8s ease-in-out infinite;
}

@keyframes breath {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1); /* 调整了放大比例 */
    opacity: 1;
  }
}

.animation-fadeUp {
  animation: fadeUp 0.8s ease forwards;
}

.animation-fadeLeft {
  animation: fadeLeft 0.8s ease forwards;
}

.animation-bounceIn {
  animation: bounceIn 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
}

/* 技术风格背景动画 */
.tech-dots {
  background-image: radial-gradient(circle, rgba(128, 90, 213, 0.8) 1px, transparent 1px);
  background-size: 30px 30px;
  width: 200%;
  height: 200%;
  animation: moveDots 60s linear infinite;
  transform: translateZ(0);
}

@keyframes moveDots {
  0% {
    transform: translate(-25%, -25%) rotate(0deg);
  }
  100% {
    transform: translate(-25%, -25%) rotate(360deg);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style> 