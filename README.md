# 周燕苹 · 个人作品集

一个手绘涂鸦风格（doodle / hand-drawn）的个人作品集站点，单页静态站点，零依赖、零构建。

## 主要功能

- **个人信息**：头像、关于我、技能标签、联系方式、社交链接
- **项目作品**：4 个项目卡片，含分类、时间、简介、技术栈，配套手绘涂鸦占位图
- **深浅主题切换**：左侧栏底部按钮一键切换，颜色随主题实时变化，选择持久化到 `localStorage`
- **滚动淡入**：项目卡片 / 段落随滚动渐显
- **滚动导航高亮**：点击或滚动时侧栏目录自动高亮当前段落
- **响应式布局**：桌面端左右分栏，移动端单列堆叠

## 技术栈

- **HTML5** — 原生语义化标签
- **CSS3** — CSS 变量、`[data-theme]` 主题、`IntersectionObserver` 触发、媒体查询响应式
- **原生 JavaScript**（ES6+）— 无任何前端框架与第三方 UI 库
- **内联 SVG** — 全部图标与配图均为内联 SVG，线条使用 `currentColor`，由 CSS 变量统一控制颜色，可跟随主题切换
- **字体**：Inter / Noto Sans SC / Caveat / JetBrains Mono（Google Fonts CDN）

## 目录结构

```
lab04/
├── index.html          # 页面骨架
├── css/
│   └── style.css       # 全部样式（含深色主题、SVG 颜色映射）
├── js/
│   ├── data.js         # 项目数据（含内联 SVG 配图）
│   └── main.js         # 渲染 / 滚动 / 导航高亮 / 主题切换
├── assets/
│   └── projects/       # 历史 SVG 资源（已被内联到 data.js，保留作备份）
└── .gitignore
```

## 运行方式

无需构建步骤。任选一种：

1. **直接打开**  
   双击 `index.html` 即可在浏览器中查看。

2. **本地静态服务器**（推荐，避免某些浏览器对本地文件的限制）  
   ```bash
   # Python 3
   python -m http.server 8000

   # 或 Node.js
   npx serve .
   ```
   然后访问 `http://localhost:8000`。

## 新增项目

在 `js/data.js` 的 `PROJECTS` 数组末尾追加一条记录，刷新页面即可看到新卡片：

```js
{
  name: "项目名",
  category: "Web 应用",     // 分类标签
  time: "2026.10",          // 显示时间
  intro: "项目简介 …",
  tech: ["技术1", "技术2"],
  svg: `<svg viewBox="0 0 800 500" …>…</svg>`,  // 配图 SVG
}
```

配图 SVG 内的颜色请使用以下 CSS 类，由 `style.css` 自动绑定主题变量：

| 类名              | 作用                       |
| ----------------- | -------------------------- |
| `.frame`          | 边框 / 容器                |
| `.stroke-main`    | 主线条（紫色，权重 3）     |
| `.stroke-thin`    | 次线条（紫色，权重 2）     |
| `.stroke-dim`     | 弱化线条（灰色，权重 2.5） |
| `.stroke-dim-thin`| 弱化细线（灰色，权重 1.5） |
| `.fill-main`      | 主色填充                   |
| `.trend-dot`      | 趋势点（白色底 + 紫描边）  |
| `.text-main`      | 主色文字                   |
| `.text-status`    | 状态文字（灰色）           |
| `.text-caption`   | 注释文字（灰色）           |

## 主题切换原理

- `<html>` 上的 `data-theme="dark"` 触发 `[data-theme="dark"]` CSS 变量覆盖
- `<head>` 内的内联脚本在 CSS 加载前从 `localStorage` 读取上次选择，避免刷新闪烁
- 内联 SVG 的 `stroke` / `fill` 使用 `currentColor`，由 `.avatar svg` / `.project-media svg` 的 `color` 属性间接控制，从而跟随主题

## License

仅作个人作品集使用。