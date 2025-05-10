# 杨宇轩个人网站

## 项目概述
这是杨宇轩的个人网站项目，展示我的教育背景、技术项目、创业经历和技能。网站采用现代化设计风格，突出跨学科背景和创新精神。

## 主要功能
- 个人简介与成长历程时间线
- 创业项目展示（EGO、奕辰自习室等）
- 技术项目和研究经历
- 自媒体博主风采
- 技能展示
- 联系方式

## 技术栈
- 前端框架：Vue.js
- UI设计：Tailwind CSS
- 构建工具：Vite
- 动画元素：Spline 3D

## 开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 特色
- DNA粒子动画背景，与生物到AI的跨学科背景呼应
- 时间线式的成长历程展示
- 创业项目数据可视化
- 响应式设计，适配各种设备

## 目录结构

```
个人网站/
├── public/                  # 静态资源目录
├── src/                     # 源代码目录
│   ├── assets/              # 资源文件（CSS、图片等）
│   ├── components/          # Vue组件
│   ├── router/              # 路由配置
│   ├── views/               # 页面视图组件
│   ├── App.vue              # 根组件
│   └── main.js              # 应用入口
├── index.html               # HTML模板
├── package.json             # 项目依赖和脚本
├── vite.config.js           # Vite配置
├── tailwind.config.js       # Tailwind CSS配置
└── postcss.config.js        # PostCSS配置
```

## 安装与使用

### 前提条件

- Node.js (推荐 v16+)
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 本地开发

```bash
npm run dev
# 或
yarn dev
```

应用将在 http://localhost:3000 上运行。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

构建后的文件将生成在 `dist` 目录中。

### 预览生产版本

```bash
npm run serve
# 或
yarn serve
```

## 部署

构建后的应用可以部署到任何静态文件托管服务，如 Netlify、Vercel、GitHub Pages 等。

## 自定义

- 修改 `tailwind.config.js` 以自定义颜色主题和其他样式
- 更新 `src/views/` 目录下的文件以修改网站内容
- 添加或修改 `src/components/` 目录下的组件

## 许可

本项目为个人使用，保留所有权利。 