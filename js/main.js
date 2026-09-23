/* ==========================================================
   main.js —— 项目渲染 + 滚动淡入 + 导航高亮
   ========================================================== */

/* 标记 JS 已启用（淡入样式只在此标记下生效，无 JS 时内容仍可见） */
document.documentElement.classList.add("js");

/* ---------- 渲染项目列表 ---------- */
const list = document.getElementById("project-list");

/* 项目之间的手绘波浪分隔线 */
const PROJECT_DIVIDER =
  '<svg class="project-divider" viewBox="0 0 180 12" aria-hidden="true">' +
  '<path d="M2 7 Q 14 2 26 6 T 50 6 T 74 6 T 98 6 T 122 6 T 146 6 T 178 6" vector-effect="non-scaling-stroke"/></svg>';

function projectHTML(p) {
  const tech = p.tech.map((t) => `<li>${t}</li>`).join("");
  return `
    <article class="project reveal">
      <figure class="project-media">
        ${p.svg}
      </figure>
      <div class="project-info">
        <p class="project-meta">
          <span class="cat">${p.category}</span>
          <time>${p.time}</time>
        </p>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.intro}</p>
        <ul class="tech">${tech}</ul>
      </div>
    </article>`;
}

list.innerHTML = PROJECTS
  .map((p, i) => projectHTML(p) + (i < PROJECTS.length - 1 ? PROJECT_DIVIDER : ""))
  .join("");

/* ---------- 滚动淡入 ---------- */
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealIO.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

/* ---------- 侧栏导航滚动高亮 ---------- */
const navLinks = Array.from(document.querySelectorAll(".side-nav a"));
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spyIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spyIO.observe(s));
}

/* ---------- 主题切换 ---------- */
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}
