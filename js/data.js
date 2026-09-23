/* ==========================================================
   data.js —— 项目数据
   新增项目时只需在此数组中追加一条记录，页面会自动渲染
   ========================================================== */

const PROJECTS = [
  {
    name: "墨迹手账",
    category: "Web 应用",
    time: "2025.05",
    intro: "一款手绘风格的在线手账应用，支持自由涂鸦、贴纸拼贴和每日心情记录。采用 Canvas 实现绘图引擎，所有数据持久化在浏览器本地（IndexedDB），无需后端即可离线使用。",
    tech: ["TypeScript", "Vue 3", "HTML/CSS", "Canvas", "IndexedDB"],
    image: "assets/projects/journal.svg",
    alt: "墨迹手账：手账页面涂鸦占位图",
  },
  {
    name: "智能代码审查助手",
    category: "AI 应用",
    time: "2025.11",
    intro: "一个基于大语言模型的开发者辅助工具。用户提交代码片段或 Git 仓库链接后，系统通过静态分析结合 RAG 检索技术，自动指出潜在 Bug、代码规范问题，并提供优化建议和重构方案。",
    tech: ["Python", "FastAPI", "LangChain", "大语言模型 API", "Chroma"],
    image: "assets/projects/review.svg",
    alt: "智能代码审查助手：终端审查占位图",
  },
  {
    name: "校园任务协同平台",
    category: "Web 平台",
    time: "2026.03",
    intro: "一个面向校园团队的在线协作与任务管理平台，包含任务看板、实时协同编辑和站内消息推送。负责后端 RESTful API 设计、MySQL 数据库表结构优化及前端组件交互开发。",
    tech: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    image: "assets/projects/kanban.svg",
    alt: "校园任务协同平台：任务看板占位图",
  },
  {
    name: "开发者效能数据大屏",
    category: "数据可视化",
    time: "2026.07",
    intro: "一个面向开发团队的数据可视化面板。通过聚合 Git 提交记录和 Issue 数据，利用 ECharts 和 Canvas 渲染团队开发效率、代码质量趋势及系统运行状态，帮助团队快速定位项目瓶颈。",
    tech: ["TypeScript", "HTML/CSS", "ECharts", "React", "Node.js"],
    image: "assets/projects/dashboard.svg",
    alt: "开发者效能数据大屏：图表占位图",
  },
];
