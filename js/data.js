/* ==========================================================
   data.js —— 项目数据
   新增项目时只需在此数组中追加一条记录，页面会自动渲染
   图片使用内联 SVG，颜色由 CSS 变量控制，可随主题切换
   ========================================================== */

const PROJECTS = [
  {
    name: "墨迹手账",
    category: "Web 应用",
    time: "2025.05",
    intro: "一款手绘风格的在线手账应用，支持自由涂鸦、贴纸拼贴和每日心情记录。采用 Canvas 实现绘图引擎，所有数据持久化在浏览器本地（IndexedDB），无需后端即可离线使用。",
    tech: ["TypeScript", "Vue 3", "HTML/CSS", "Canvas", "IndexedDB"],
    svg: `<svg viewBox="0 0 800 500" role="img" aria-label="墨迹手账：手账页面涂鸦占位图" xmlns="http://www.w3.org/2000/svg">
      <rect class="frame" x="16" y="16" width="768" height="468" rx="12"/>
      <path class="stroke-main" d="M232 148 C 300 138, 356 140, 400 152 C 444 140, 500 138, 568 148 L 568 356 C 500 346, 444 348, 400 360 C 356 348, 300 346, 232 356 Z"/>
      <path class="stroke-thin" d="M400 152 L 400 360"/>
      <path class="stroke-dim" d="M268 208 C 305 202, 340 210, 368 204"/>
      <path class="stroke-dim" d="M268 244 C 300 238, 338 246, 366 240"/>
      <path class="stroke-dim" d="M268 280 C 312 274, 342 282, 366 276"/>
      <path class="stroke-main" d="M470 206 l9 18 20 3 -14 14 3 20 -18 -10 -18 10 3 -20 -14 -14 20 -3 Z" stroke-width="2.5"/>
      <path class="stroke-main" d="M516 268 c -9 -11 -25 -2 -18 10 c 4 8 18 16 18 16 c 0 0 14 -8 18 -16 c 7 -12 -9 -21 -18 -10" stroke-width="2.5"/>
      <rect class="fill-main" x="376" y="128" width="48" height="24" rx="3" opacity="0.25" transform="rotate(-5 400 140)"/>
      <text class="text-caption" x="232" y="452">// 手绘手账 · Canvas + IndexedDB</text>
    </svg>`,
  },
  {
    name: "智能代码审查助手",
    category: "AI 应用",
    time: "2025.11",
    intro: "一个基于大语言模型的开发者辅助工具。用户提交代码片段或 Git 仓库链接后，系统通过静态分析结合 RAG 检索技术，自动指出潜在 Bug、代码规范问题，并提供优化建议和重构方案。",
    tech: ["Python", "FastAPI", "LangChain", "大语言模型 API", "Chroma"],
    svg: `<svg viewBox="0 0 800 500" role="img" aria-label="智能代码审查助手：终端审查占位图" xmlns="http://www.w3.org/2000/svg">
      <rect class="frame" x="16" y="16" width="768" height="468" rx="12"/>
      <path class="stroke-main" d="M172 118 C 320 110, 480 112, 628 120 C 636 200, 636 300, 628 372 C 470 380, 320 378, 174 370 C 166 292, 166 196, 172 118 Z"/>
      <path class="stroke-thin" d="M173 170 C 320 163, 480 164, 627 171"/>
      <circle class="stroke-main" cx="212" cy="144" r="7" stroke-width="2"/>
      <circle class="stroke-main" cx="240" cy="143" r="7" stroke-width="2"/>
      <circle class="stroke-main" cx="268" cy="144" r="7" stroke-width="2"/>
      <text class="text-main" x="212" y="240">&gt; review --full</text>
      <text class="text-status" x="212" y="288">analyzing ...</text>
      <g class="stroke-dim" stroke-width="2.5">
        <ellipse cx="520" cy="284" rx="10" ry="14"/>
        <circle cx="520" cy="262" r="6"/>
        <path d="M516 257 L 511 250 M 524 257 L 529 250"/>
        <path d="M510 276 L 498 271 M 510 284 L 496 284 M 511 292 L 500 299 M 530 276 L 542 271 M 530 284 L 544 284 M 529 292 L 540 299"/>
      </g>
      <g class="stroke-main" stroke-width="3">
        <path d="M494 308 L 548 252"/>
        <path d="M494 252 L 548 308"/>
      </g>
      <text class="text-caption" x="172" y="448">// LLM + RAG 代码审查</text>
    </svg>`,
  },
  {
    name: "校园任务协同平台",
    category: "Web 平台",
    time: "2026.03",
    intro: "一个面向校园团队的在线协作与任务管理平台，包含任务看板、实时协同编辑和站内消息推送。负责后端 RESTful API 设计、MySQL 数据库表结构优化及前端组件交互开发。",
    tech: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    svg: `<svg viewBox="0 0 800 500" role="img" aria-label="校园任务协同平台：任务看板占位图" xmlns="http://www.w3.org/2000/svg">
      <rect class="frame" x="16" y="16" width="768" height="468" rx="12"/>
      <path class="stroke-main" d="M204 142 C 330 136, 460 137, 596 144 C 602 220, 602 300, 596 362 C 460 368, 330 367, 206 360 C 200 288, 200 214, 204 142 Z"/>
      <path class="stroke-dim-thin" d="M336 146 L 335 358 M 466 146 L 466 358"/>
      <path class="stroke-dim" d="M222 186 C 320 182, 480 183, 580 187"/>
      <rect class="stroke-main" x="224" y="212" width="88" height="46" rx="6" stroke-width="2.5"/>
      <rect class="stroke-dim" x="224" y="272" width="88" height="60" rx="6" stroke-width="2.5"/>
      <rect class="stroke-dim" x="354" y="224" width="88" height="52" rx="6" stroke-width="2.5"/>
      <rect class="stroke-main" x="484" y="212" width="88" height="48" rx="6" stroke-width="2.5"/>
      <rect class="stroke-dim" x="484" y="274" width="88" height="42" rx="6" stroke-width="2.5"/>
      <path class="stroke-main" d="M244 236 L 258 250 L 284 224" stroke-width="3"/>
      <text class="text-caption" x="204" y="448">// 任务看板 · Spring Boot + Vue</text>
    </svg>`,
  },
  {
    name: "开发者效能数据大屏",
    category: "数据可视化",
    time: "2026.07",
    intro: "一个面向开发团队的数据可视化面板。通过聚合 Git 提交记录和 Issue 数据，利用 ECharts 和 Canvas 渲染团队开发效率、代码质量趋势及系统运行状态，帮助团队快速定位项目瓶颈。",
    tech: ["TypeScript", "HTML/CSS", "ECharts", "React", "Node.js"],
    svg: `<svg viewBox="0 0 800 500" role="img" aria-label="开发者效能数据大屏：图表占位图" xmlns="http://www.w3.org/2000/svg">
      <rect class="frame" x="16" y="16" width="768" height="468" rx="12"/>
      <path class="stroke-dim" d="M180 372 L 620 372 M 180 372 L 180 156" stroke-width="2"/>
      <rect class="fill-main" x="226" y="272" width="48" height="100" opacity="0.3"/>
      <rect class="fill-main" x="312" y="228" width="48" height="144" opacity="0.45"/>
      <rect class="fill-main" x="398" y="188" width="48" height="184" opacity="0.65"/>
      <rect class="fill-main" x="484" y="252" width="48" height="120" opacity="0.4"/>
      <path class="stroke-main" d="M250 268 C 320 240, 360 250, 422 208 C 470 178, 520 190, 560 160" stroke-width="2.5"/>
      <circle class="trend-dot" cx="250" cy="268" r="5"/>
      <circle class="trend-dot" cx="422" cy="208" r="5"/>
      <circle class="trend-dot" cx="560" cy="160" r="5"/>
      <text class="text-caption" x="180" y="448">// 开发效能趋势 · ECharts</text>
    </svg>`,
  },
];