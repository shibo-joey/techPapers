
# 防抖 (Debounce) 与 节流 (Throttle)

## ✅ 防抖 (Debounce)

防抖是指在事件触发后一定时间内没有再次触发时，才会执行回调函数。如果在这段时间内再次触发事件，计时器会被清除并重新计时。

### 实现代码：

```js
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 使用示例
window.addEventListener('resize', debounce(() => {
  console.log('窗口大小变化了（防抖）');
}, 500));
```

### 应用场景：
- 用户输入（防止每次键入都触发搜索）
- 按钮点击（防止多次点击触发相同操作）

---

## ✅ 节流 (Throttle)

节流是指在一定时间内，只能触发一次事件。即使事件被连续触发，函数的执行频率也会被限制在设定的时间间隔内。

### 方法一：使用时间戳

```js
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
```

### 方法二：使用定时器

```js
function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

// 使用示例
window.addEventListener('scroll', throttle(() => {
  console.log('页面滚动了（节流）');
}, 300));
```

### 应用场景：
- 页面滚动（避免高频次触发 `scroll` 事件）
- 窗口大小调整（避免频繁触发 `resize` 事件）

---

## 📌 总结对比

| 特性   | 防抖 (Debounce) | 节流 (Throttle) |
|--------|-----------------|-----------------|
| 触发频率 | 最后一次触发后延迟执行 | 固定间隔执行一次 |
| 应用场景 | `input` 输入框、按钮点击防止重复提交 | `scroll`、`resize` 等高频事件 |
