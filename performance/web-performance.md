# 🚀 Web Performance Optimization Guide

This guide covers practical strategies to improve key web performance metrics:

- **TTFB** (Time to First Byte)
- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **TTI** (Time to Interactive)

---

## 🧠 1. TTFB (Time to First Byte)
**Goal**: Reduce the time between request and receiving the first byte.

### ✅ How to Improve:
- **Use CDN**: Cache static content closer to the user.
- **Server-Side Rendering (SSR)**: Render content on the server for faster delivery.
- **Reduce server response time**:
  - Optimize database queries
  - Enable caching (e.g. Redis, HTTP cache headers)
- **Compress responses** with Gzip or Brotli.
- **Minimize redirects** – fewer hops to the server.

---

## 🎨 2. FCP (First Contentful Paint)
**Goal**: Make something (text/image/etc) appear ASAP.

### ✅ How to Improve:
- **Minimize critical CSS**: Inline important styles in `<head>`.
- **Defer non-critical JS**:
  ```html
  <script src="app.js" defer></script>
  ```
- **Lazy load fonts** or use `font-display: swap` in CSS.
- **Use `preload`** for key assets:
  ```html
  <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  ```
- **Avoid large JavaScript bundles** on first load.
---
🚀 Resource Loading Attribute Comparison
### 🚀 Resource Loading Attribute Comparison

| Attribute      | Tag                | Purpose                                     | When It Loads       | When It Runs/Applies      | Execution Order | Notes                                                  |
|----------------|--------------------|---------------------------------------------|----------------------|----------------------------|------------------|--------------------------------------------------------|
| `defer`        | `<script>`         | Load script async, run after DOM parsed     | In parallel          | After HTML parsed          | ✅ Yes           | Use for scripts that need the DOM                      |
| `async`        | `<script>`         | Load and run script ASAP                    | In parallel          | Immediately after load     | ❌ No            | Best for independent scripts                           |
| `preload`      | `<link>`           | Pre-fetch resource for current page         | Immediately          | When used (e.g., by browser)| N/A              | Must specify `as="script"`, `as="style"`, etc.         |
| `prefetch`     | `<link>`           | Pre-fetch for **future navigation**         | Low priority         | Later (future use)         | N/A              | Great for next-page assets                             |


## 🏗️ 3. LCP (Largest Contentful Paint)
**Goal**: Quickly load the biggest visible element (hero image, heading, etc).

### ✅ How to Improve:
- **Optimize hero images**:
  - Use modern formats (WebP/AVIF)
  - Use `loading="lazy"` and `fetchpriority="high"` for the main image:
    ```html
    <img src="hero.webp" fetchpriority="high" />
    ```
- **Preload key images**:
  ```html
  <link rel="preload" as="image" href="/images/hero.webp">
  ```
- **Avoid render-blocking CSS/JS**:
  - Split CSS
  - Use tree-shaking and code-splitting in JS
- **Use efficient layout**: Avoid layout shifts on load.

---

## 🚀 4. TTI (Time to Interactive)
**Goal**: Make the page fully usable quickly.

### ✅ How to Improve:
- **Code-splitting**: Load only what's needed on the initial route.
  ```js
  import('./heavyComponent.js'); // dynamically load after page load
  ```
- **Defer JavaScript** and avoid large synchronous scripts.
- **Use web workers** for heavy computation:
  ```js
  const worker = new Worker('worker.js');
  worker.postMessage(data);
  ```
- **Reduce main thread blocking**:
  - Optimize React/Vue rendering
  - Break long tasks with `requestIdleCallback` or `setTimeout` batching

---

## 🔍 Tools to Audit:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools → Performance tab
- `web-vitals` JS library (for real-user monitoring)

---
