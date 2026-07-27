+++
date = '2026-07-26T19:00:00+08:00'
draft = false
title = '30 個常用 HTML + CSS 小技巧'
+++
本來想寫 markdown 語法的，但官網已經說明得很清楚了，請看 https://markdown.tw/

所有的顏色跟文字都可以自行替換，祝大家玩得開心！

<div id="custom-toc"></div>

---

### 1. 強調打點

```
<span style="text-emphasis: filled circle; -webkit-text-emphasis: filled circle;">關鍵重點</span>
```

<span style="text-emphasis: filled circle; -webkit-text-emphasis: filled circle;">關鍵重點</span>

<br>

### 2. 螢光筆

```
<span style="background: linear-gradient(to top, rgba(255, 138, 61, 0.4) 40%, transparent 40%);">螢光筆畫線</span>
```

<span style="background: linear-gradient(to top, rgba(143, 221, 115, 0.5) 40%, transparent 40%);">螢光筆畫線</span>

<br>

### 3. 底線

```
<span style="text-decoration: underline wavy #ff7675; text-underline-offset: 4px;">波浪底線</span>  
<span style="text-decoration: underline double #0984e3; text-underline-offset: 4px;">雙重底線</span>  
<span style="text-decoration: underline dotted #e17055; text-underline-offset: 4px;">點點底線</span>  
<span style="background: linear-gradient(90deg, #ff7675, #fdcb6e, #00b894); background-size: 100% 3px; background-repeat: no-repeat; background-position: bottom; padding-bottom: 3px;">彩虹條紋底線</span>
```

<span style="text-decoration: underline wavy #ff7675; text-underline-offset: 4px;">波浪底線</span>  
<span style="text-decoration: underline double #0984e3; text-underline-offset: 4px;">雙重底線</span>  
<span style="text-decoration: underline dotted #e17055; text-underline-offset: 4px;">點點底線</span>  
<span style="background: linear-gradient(90deg, #ff7675, #fdcb6e, #00b894); background-size: 100% 3px; background-repeat: no-repeat; background-position: bottom; padding-bottom: 3px;">彩虹條紋底線</span>

<br>

### 4. 拼音標註

```
<ruby>你<rt>ni</rt>好<rt>how</rt></ruby>
```

<ruby>你<rt>ni</rt>好<rt>how</rt></ruby>

>但好像大家都<ruby>用<rt>抱</rt>來<rt>怨</rt></ruby>……

<br>

### 5. 鍵盤按鍵

```
<kbd style="background-color: #eee; border: 1px solid #b4b4b4; border-radius: 3px; box-shadow: 0 1px 1px rgba(0,0,0,0.2), 0 2px 0 0 rgba(255,255,255,0.7) inset; color: #333; display: inline-block; font-size: 0.85em; font-weight: 700; line-height: 1; padding: 2px 6px;">Ctrl</kbd>
```

<kbd style="background-color: #eee; border: 1px solid #b4b4b4; border-radius: 3px; box-shadow: 0 1px 1px rgba(0,0,0,0.2), 0 2px 0 0 rgba(255,255,255,0.7) inset; color: #333; display: inline-block; font-size: 0.85em; font-weight: 700; line-height: 1; padding: 2px 6px;">Ctrl</kbd>

>`<kbd>Ctrl</kbd>` 通常可以直接渲染。或者直接用前後的 ` 也有同樣框起來的效果。

<br>

### 6. 漸層文字色

```
<span style="background: linear-gradient(45deg, #f39c12, #e74c3c); -webkit-background-clip: text; color: transparent; font-weight: bold;">漸層色彩文字</span>
```

<span style="background: linear-gradient(45deg, #f39c12, #e74c3c); -webkit-background-clip: text; color: transparent; font-weight: bold;">漸層色彩文字</span>

<br>

### 7. 發亮效果

```
<span style="color: #fff; text-shadow: 0 0 5px #ff7b23, 0 0 10px #ff7b23, 0 0 15px #ff6b0b;">🥕</span>
```

<span style="color: #fff; text-shadow: 0 0 5px #ff7b23, 0 0 10px #ff7b23, 0 0 15px #ff6b0b;">🥕</span>

<br>

### 8. 自訂字距行距

```
<p style="letter-spacing: 2px; line-height: 1.8;">這是一段字距寬，<br>閱讀舒適的文字。</p>
```

<p style="letter-spacing: 2px; line-height: 1.8;">這是一段字距寬，<br>閱讀舒適的文字。</p>

>`<br>`是換行，以免有人不知道。

<br>

### 9. 對齊文字
```
<p style="text-align: left;">這是一段置左的文字</p>

<p style="text-align: center;">這是一段置中的文字</p>

<p style="text-align: right;">這是一段置右的文字</p>
```

<p style="text-align: left;">這是一段置左的文字</p>

<p style="text-align: center;">這是一段置中的文字</p>

<p style="text-align: right;">這是一段置右的文字</p>

<br>

### 10. 防雷效果

```
<span style="filter: blur(4px); transition: 0.3s;" onmouseover="this.style.filter='none'" onmouseout="this.style.filter='blur(4px)'">不要看啦</span>
```

<span style="filter: blur(4px); transition: 0.3s;" onmouseover="this.style.filter='none'" onmouseout="this.style.filter='blur(4px)'">不要看啦</span>

>註：手機點擊可獲得效果，點擊空白處即可恢復。
<br>

### 11. 摺疊內容

```
<details style="border: 1px solid #ccc; padding: 10px; border-radius: 6px;">
  <summary style="font-weight: bold; cursor: pointer;">點擊展開詳細說明</summary>
  <p>哈囉！</p>
</details>
```

<details style="border: 1px solid #ccc; padding: 10px; border-radius: 6px;">
  <summary style="font-weight: bold; cursor: pointer;">點擊展開詳細說明</summary>
  <p>哈囉！</p>
</details>

<br>

### 12. 警告方塊

```
<div style="background: #ffebee; border-left: 5px solid #ef5350; color: #c62828; padding: 12px 16px; border-radius: 4px;">
  ⚠️ <b>警告：</b> 請看完本篇文章！
</div>
```

<div style="background: #ffebee; border-left: 5px solid #ef5350; color: #c62828; padding: 12px 16px; border-radius: 4px;">
  ⚠️ <b>警告：</b> 請看完本篇文章！
</div>

<br>

### 13. 圓角標籤

```
<span style="background: #ff8a3d; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">新手教學</span>
```

<span style="background: #ff8a3d; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">新手教學</span>

<br>

### 14. 漂浮卡片

```
<div style="display:inline-block; padding:20px; border-radius:12px; background:#fff; color:#ff8a3d; font-weight:bold; border:1px solid rgba(255,138,61,0.3); box-shadow:0 4px 12px rgba(255,138,61,0.15); transition:.3s; cursor:pointer;"
 onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 12px 25px rgba(255,138,61,0.35)'"
 onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(255,138,61,0.15)'">✨ 滑鼠移過來看看</div>


```

<br>

<div style="display:inline-block; padding:20px; border-radius:12px; background:#fff; color:#ff8a3d; font-weight:bold; border:1px solid rgba(255,138,61,0.3); box-shadow:0 4px 12px rgba(255,138,61,0.15); transition:.3s; cursor:pointer;" onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 12px 25px rgba(255,138,61,0.35)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(255,138,61,0.15)'">✨ 滑鼠移過來看看</div>

>註：手機點擊可獲得效果，點擊空白處即可恢復。

<br>

### 15. 分隔線加文字

```
<div style="display: flex; align-items: center; text-align: center; color: #888; margin: 20px 0;">
  <div style="flex: 1; border-bottom: 1px solid #ccc;"></div>
  <span style="padding: 0 10px;">分隔文字</span>
  <div style="flex: 1; border-bottom: 1px solid #ccc;"></div>
</div>
```

<div style="display: flex; align-items: center; text-align: center; color: #888; margin: 20px 0;">
  <div style="flex: 1; border-bottom: 1px solid #ccc;"></div>
  <span style="padding: 0 10px;">分隔文字</span>
  <div style="flex: 1; border-bottom: 1px solid #ccc;"></div>
</div>

<br>

### 16. 兩欄並排

```
<div style="display: flex; gap: 15px;">
  <div style="flex: 1; background: rgba(255, 138, 61, 0.08); padding: 12px; border-radius: 6px;">左欄內容</div>
  <div style="flex: 1; background: rgba(255, 138, 61, 0.08); padding: 12px; border-radius: 6px;">右欄內容</div>
</div>
```

<div style="display: flex; gap: 15px;">
  <div style="flex: 1; background: rgba(255, 138, 61, 0.08); padding: 12px; border-radius: 6px;">左欄內容</div>
  <div style="flex: 1; background: rgba(255, 138, 61, 0.08); padding: 12px; border-radius: 6px;">右欄內容</div>
</div>

<br>

### 17. 毛玻璃卡片

```
<div style="background:rgba(255,138,61,0.08); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); 
border:1px solid rgba(255,138,61,0.25); border-radius:12px; padding:20px; 
color:#ff8a3d; font-weight:bold; box-shadow:0 8px 32px rgba(255,138,61,0.1);">✨ bling bling</div>
```

<div style="background:rgba(255,138,61,0.08); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); border:1px solid rgba(255,138,61,0.25); border-radius:12px; padding:20px; color:#ff8a3d; font-weight:bold; box-shadow:0 8px 32px rgba(255,138,61,0.1);">✨ bling bling</div>
<br>

### 18. 日期選擇器

HTML

```
<label>選擇日期：<input type="date" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc;"></label>
```

<label>選擇日期：<input type="date" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc;"></label>

<br>

### 19. 顏色選擇器

```
<label>挑選顏色：<input type="color" value="#ff8a3d" style="border: none; cursor: pointer;"></label>
```

<label>挑選顏色：<input type="color" value="#ff8a3d" style="border: none; cursor: pointer;"></label>

<br>

### 20. 進度條

```
<label>寫作進度：<progress value="70" max="100" style="width: 200px; accent-color: #ff8a3d;"></progress> 70%</label>
```

<label>寫作進度：<progress value="70" max="100" style="width: 200px; accent-color: #ff8a3d;"></progress> 70%</label>

<br>

### 21. 建議清單

```
<input list="browsers" placeholder="選擇瀏覽器...">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
```

<input list="browsers" placeholder="選擇瀏覽器...">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>

<br>

### 22. 延遲載入

```
<img src="/share.png" alt="範例圖" loading="lazy">
```

<img src="/share.png" alt="範例圖" loading="lazy">

<br>

>lazy 的效果是快滾到下面才載入，適合圖片很多的文章，但實際是否生效仍取決於瀏覽器與網站設定。

<br>

### 23. 限制圖片大小

```
<img src="/share.png" style="width: 200px; height: 200px; object-fit: cover; border-radius: 8px;">
```

<img src="/share.png" style="width: 200px; height: 200px; object-fit: cover; border-radius: 8px;">

>裁切圖片以維持比例，不會拉伸變形。

<br>

### 24. 懸停放大圖片

```
<div style="overflow: hidden; border-radius: 8px; width: 300px;">
  <img src="/share.png" style="width: 100%; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
</div>
```

<div style="overflow: hidden; border-radius: 8px; width: 300px;">
  <img src="/share.png" style="width: 100%; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
</div>

<br>

### 25. 跑馬燈

```
<div style="overflow: hidden; white-space: nowrap; background: rgba(255, 138, 61, 0.1); color: #ff8a3d; padding: 10px 0; border-radius: 6px; border: 1px solid #ff8a3d;">
  <div style="display: inline-block; padding-left: 100%; animation: marquee 12s linear infinite;" onmouseover="this.style.animationPlayState='paused'" onmouseout="this.style.animationPlayState='running'">
    🚀 歡迎來到我的部落格！感謝您看到這裡！
  </div>
</div>
<style>
@keyframes marquee {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100%, 0); }
}
</style>
```

<br>

<div style="overflow: hidden; white-space: nowrap; background: rgba(255, 138, 61, 0.1); color: #ff8a3d; padding: 10px 0; border-radius: 6px; border: 1px solid #ff8a3d;">
  <div style="display: inline-block; padding-left: 100%; animation: marquee 12s linear infinite;" onmouseover="this.style.animationPlayState='paused'" onmouseout="this.style.animationPlayState='running'">
    🚀 歡迎來到我的部落格！感謝您看到這裡！
  </div>
</div>
<style>
@keyframes marquee {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100%, 0); }
}
</style>

<br>

### 26. 一鍵複製文字

```
<div style="display: inline-flex; align-items: center; border: 1px solid #ff8a3d; border-radius: 6px; overflow: hidden;">
  <span id="copy-text" style="padding: 6px 12px; background: rgba(255, 138, 61, 0.08); color: #ff8a3d; font-weight: bold;">CARROT2026</span>
  <button onclick="navigator.clipboard.writeText('CARROT2026'); alert('已複製！');" style="border: none; background: #ff8a3d; color: white; padding: 6px 12px; cursor: pointer; font-weight: bold;">
    📋 複製
  </button>
</div>
```

<br>

<div style="display: inline-flex; align-items: center; border: 1px solid #ff8a3d; border-radius: 6px; overflow: hidden;">
  <span id="copy-text" style="padding: 6px 12px; background: rgba(255, 138, 61, 0.08); color: #ff8a3d; font-weight: bold;">CARROT2026</span>
  <button onclick="navigator.clipboard.writeText('CARROT2026'); alert('已複製！');" style="border: none; background: #ff8a3d; color: white; padding: 6px 12px; cursor: pointer; font-weight: bold;">
    📋 複製
  </button>
</div>

<br><br>

>我的網站本身用 ` ``` ``` ` 包起來就可以複製內文了。

<br>

### 27. 脈衝呼吸燈
```
<span style="display: inline-flex; align-items: center; gap: 6px; background: #ffe3e3; color: #e03131; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 0.85em;">
  <span style="width: 8px; height: 8px; background-color: #e03131; border-radius: 50%; animation: pulse 1.5s infinite;"></span>
  這個名字很酷吧
</span>

<style>
@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(224, 49, 49, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(224, 49, 49, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(224, 49, 49, 0); }
}
</style>
```
<br>

<span style="display: inline-flex; align-items: center; gap: 6px; background: #ffe3e3; color: #e03131; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 0.85em;">
  <span style="width: 8px; height: 8px; background-color: #e03131; border-radius: 50%; animation: pulse 1.5s infinite;"></span>
  這個名字很酷吧
</span>

<style>
@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(224, 49, 49, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(224, 49, 49, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(224, 49, 49, 0); }
}
</style>

<br><br>

### 28. 提示文字

```
<style>
.tooltip{
    position:relative;
    display:inline-block;
    cursor:help;
}

.tooltip .tip{
    visibility:hidden;
    opacity:0;

    position:absolute;
    left:50%;
    transform:translateX(-50%);
    bottom:140%;

    background:#333;
    color:#fff;

    padding:6px 10px;
    border-radius:6px;

    white-space:nowrap;

    transition:.25s;
}

.tooltip:hover .tip{
    visibility:visible;
    opacity:1;
}
</style>

<span class="tooltip">
    滑鼠移過來
    <span class="tip">
        喵！
    </span>
</span>
```
<br>

<style>
.tooltip{
    position:relative;
    display:inline-block;
    cursor:help;
}

.tooltip .tip{
    visibility:hidden;
    opacity:0;

    position:absolute;
    left:50%;
    transform:translateX(-50%);
    bottom:140%;

    background:#333;
    color:#fff;

    padding:6px 10px;
    border-radius:6px;

    white-space:nowrap;

    transition:.25s;
}

.tooltip:hover .tip{
    visibility:visible;
    opacity:1;
}
</style>

<span class="tooltip">
    滑鼠移過來
    <span class="tip">
        喵！
    </span>
</span>

>註：手機點擊可獲得效果，點擊空白處即可恢復。

<br><br>

### 29. 卡片標籤

```
<div style="position: relative; width: 320px; padding: 20px; border:1px solid #ddd; border-radius:10px;">
  我是一張卡片

  <span style="
    position:absolute;
    top:12px;
    right:-30px;
    background:#ff4d4f;
    color:white;
    padding:4px 35px;
    font-size:12px;
    font-weight:bold;
    transform:rotate(45deg);
    box-shadow:0 2px 6px rgba(0,0,0,.2);
  ">
    NEW
  </span>
</div>
```

<br>

<div style="position: relative; width: 320px; padding: 20px; border:1px solid #ddd; border-radius:10px;">
  我是一張卡片

  <span style="
    position:absolute;
    top:12px;
    right:-30px;
    background:#ff4d4f;
    color:white;
    padding:4px 35px;
    font-size:12px;
    font-weight:bold;
    transform:rotate(45deg);
    box-shadow:0 2px 6px rgba(0,0,0,.2);
  ">
    NEW
  </span>
</div>

<br>

### 30. 打字機

```
<h2 class="typing">歡迎來到我的部落格！</h2>

<style>
.typing{
    width: 18ch;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #ff8a3d;

    animation:
        typing 2s steps(10),
        blink .7s infinite;
}

@keyframes typing{
    from{ width:0;}
    to{ width:18ch;}
}

@keyframes blink{
    50%{ border-color:transparent;}
}
</style>
```

<h2 class="typing">歡迎來到我的部落格！</h2>

<style>
.typing{
    width: 18ch;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #ff8a3d;

    animation:
        typing 2s steps(10),
        blink .7s infinite;
}

@keyframes typing{
    from{ width:0;}
    to{ width:18ch;}
}

@keyframes blink{
    50%{ border-color:transparent;}
}
</style>

>註：已經跑出來的話請重新整理。

---

參考資料：  
[Markdown 語法說明](https://markdown.tw/)  
[HTML語法大全 - HackMD](https://hackmd.io/@asd0713/Sk4DmtBFn)  
[善用 MarkDown / HTML+CSS | KAI BLOG](https://kaiblog.is-a.dev/blog/markdown)  
[社群媒體不讓你用的那些格式 | Wiwi.Blog](https://wiwi.blog/blog/format-as-rhetoric/)


<style>
  /* 目錄的極簡樣式 */
  #custom-toc {
      background-color: var(--theme, #f5f5f5); /* 自動適應 PaperMod 暗黑/白天模式 */
      border-left: 4px solid #ff8a3d;
      padding: 15px 20px;
      margin: 20px 0;
      border-radius: 4px;
  }
  #custom-toc h4 { margin: 0 0 10px 0; color: inherit; }
  #custom-toc ul { list-style-type: none; padding-left: 0; margin: 0; } /* 預設 padding 設為 0，由 li 的 class 控制縮排 */
  #custom-toc li { margin: 8px 0; }
  #custom-toc a { text-decoration: none; color: #ff8a3d; font-weight: 500; }
  #custom-toc a:hover { text-decoration: underline; }
  
  /* 根據標題等級動態縮排，讓層級更清晰 */
  .toc-h1 { padding-left: 0px; font-size: 1.05rem; font-weight: bold; }
  .toc-h2 { padding-left: 15px; font-size: 1rem; }
  .toc-h3 { padding-left: 30px; font-size: 0.95rem; opacity: 0.9; }
  .toc-h4 { padding-left: 45px; font-size: 0.9rem; opacity: 0.85; }
  .toc-h5 { padding-left: 60px; font-size: 0.85rem; opacity: 0.8; }
  .toc-h6 { padding-left: 75px; font-size: 0.8rem; opacity: 0.75; }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const tocContainer = document.getElementById("custom-toc");
    if (!tocContainer) return;

    // 1. 修改抓取範圍：加入 h1, h2, h3, h4, h5, h6
    const headers = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6");
    if (headers.length === 0) {
      tocContainer.style.display = "none"; // 沒標題就隱藏
      return;
    }

    // 建立目錄標題
    tocContainer.innerHTML = "<h4>📋 文章目錄</h4><ul id='toc-list'></ul>";
    const tocList = document.getElementById("toc-list");

    headers.forEach((header, index) => {
      // 如果標題本來沒有 ID，就幫它建立一個，這樣超連結才連得過去
      if (!header.id) {
          header.id = "toc-anchor-" + index;
      }

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + header.id;
      a.textContent = header.textContent;

      // 2. 動態判斷標題標籤（例如 "h2"、"h3"），並加上對應的 CSS class
      const tagName = header.tagName.toLowerCase(); // 取得 "h1" ~ "h6"
      li.classList.add("toc-" + tagName);          // 變成 "toc-h1" ~ "toc-h6"

      li.appendChild(a);
      tocList.appendChild(li);
    });
  });
</script>
