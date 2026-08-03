+++
date = '2026-07-09T08:00:00+08:00'
draft = false
title = 'series'
+++
{{< note >}}
本來叫 books，只是我的閱讀筆記，建立於 2026-07-09。但我需要幫文章分類，所以現在這裡是我的系列文章總目錄！2026-07-24 留。
{{< /note >}}

<div id="custom-toc"></div>

---

### 知識圖譜

{{< mini-graph >}}

酷酷的圖，拖來拖去很好玩喔😁

---

### 閱讀心得

2026-06-20 [《餐桌上的中世紀冷笑話》](/posts/ask-the-past)  
2026-06-23 [《黑天鵝語錄》 ](/posts/taleb)  
2026-06-24  [ 一些時間管理的筆記 ](/posts/time-note)  
2026-06-25 [《閒暇與無聊》 ](/posts/do-nothing)  
2026-06-29 [《佛教經濟學》 ](/posts/minimalism)  
2026-07-08 [《解放時間》 ](/posts/saving-time)  
2026-07-12 [關於閱讀的筆記](/posts/reading-note)  
2026-07-14 [商管＆心理書推薦](/posts/business-inspirational)  
2026-07-17 [學習法](/posts/learning)  
2026-07-19 [沉沒成本與《停損的勝算》](/posts/sunk-cost)  
2026-07-20 [《深度學習的技術》](/posts/deeper-learning)  
2026-07-22 [《死線已是十天前》](/posts/deadline)  
2026-07-23 [《文章作法》](/posts/narrative)  
2026-07-24 [《時間的秩序》](/posts/L'ordine-del-tempo)  
2026-07-26 [《知識複利筆記術》](/posts/zettelkasten)  
2026-07-27 [《台灣磁磚系譜學》](/posts/tile)  
2026-07-27 [《暢銷書潛規則》](/posts/top-book)  
2026-07-30 [《金剛經》教我的人生智慧](/posts/diamond-sutra)  
2026-08-03 [《納瓦爾寶典》](/posts/naval)

---

### 千本好書

<span style="background: linear-gradient(to top, rgba(143, 221, 115, 0.5) 40%, transparent 40%);">[《追憶似水年華》](/posts/proust) </span>唯一推薦！

參考[中文圖書分類法](https://catweb.ncl.edu.tw/class2007/96-1-1.htm)，列成五大清單：

- [**哲學**](/philosophy)：100 哲學
- [**科學**](/science)：300 科學、400 應用科學
- [**社會**](/society)：500 社會科學、600 中國歷史、700 世界歷史＆傳記
- [**工具**](/tool)：177 勵志書、494 商管書之類
- [**藝術**](/art)：000 總類、800 文學、900 藝術

<br>

- [蘿蔔書單🥕](/posts/carrot-book)

---

### 𣈱銷主題挑戰

參考[《暢銷書潛規則》](/posts/top-book)：

- 名人
- 理財
- 國學（淺顯的
- 專業
- 品位

（本清單待更新）

<style>
  /* 目錄的極簡樣式（橘色系 + 字體加大） */
  #custom-toc {
      background-color: var(--theme, #f5f5f5); /* 自動適應 PaperMod 暗黑/白天模式 */
      border-left: 5px solid #ff8a3d; /* 左側邊條改為質感深橘色 */
      padding: 18px 24px;
      margin: 24px 0;
      border-radius: 6px;
  }
  
  /* 目錄標題（加大一級） */
  #custom-toc h4 { 
      margin: 0 0 12px 0; 
      color: #ff8a3d; 
      font-size: 1.25rem; /* 字體加大 */
      font-weight: 600;
  }
  
  #custom-toc ul { 
      list-style-type: none; 
      padding-left: 15px; 
      margin: 0; 
  }
  
  #custom-toc li { 
      margin: 10px 0; 
  }
  
  /* H2 對應連結（橘色 + 字體加大） */
  #custom-toc a { 
      text-decoration: none; 
      color: #ff8a3d; /* 亮橘色文字 */
      font-weight: 500; 
      font-size: 1.1rem; /* 主標題字體加大至 1.1rem */
      transition: color 0.2s ease;
  }
  
  #custom-toc a:hover { 
      text-decoration: underline; 
      color: #BF360C; /* 滑鼠移上去變深橘色 */
  }
  
  /* H3 次標題縮排連結（字體比 H2 稍微小一點點，但依然加大一級） */
  .toc-h3 { 
      padding-left: 18px; 
  }
  
  .toc-h3 a {
      font-size: 1.0rem; /* 次標題字體加大至 1.0rem */
      opacity: 0.9;
  }
</style>

<script>
  (function() {
    function generateCustomTOC() {
      const tocContainer = document.getElementById("custom-toc");
      if (!tocContainer) return;

      // 擴大並精準化抓取範圍：同時相容 PaperMod 的 .post-content 與標準 Hugo 的 article
      const contentArea = document.querySelector(".post-content") || document.querySelector("article");
      if (!contentArea) return;

      // 只抓取該內容區域內的 h2 和 h3
      const headers = contentArea.querySelectorAll("h2, h3");
      
      if (headers.length === 0) {
        tocContainer.style.display = "none";
        return;
      }

      // 建立目錄結構
      tocContainer.innerHTML = "<h4>📋 目錄</h4><ul id='toc-list'></ul>";
      const tocList = document.getElementById("toc-list");

      headers.forEach((header, index) => {
        // 如果標題沒有 ID，自動幫它生成一個乾淨的 ID
        if (!header.id) {
            // 清理標題文字中的特殊符號，讓 ID 符合 HTML 規範
            const safeText = header.textContent.trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5-_]/g, '');
            header.id = "toc-" + (safeText || index);
        }

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + header.id;
        a.textContent = header.textContent.replace(/^[#\s]+/, ""); // 移除可能殘留的 # 符號

        if (header.tagName.toLowerCase() === "h3") {
            li.classList.add("toc-h3");
        }

        li.appendChild(a);
        tocList.appendChild(li);
      });
    }

    // 同時綁定兩個事件，確保無論是初次載入還是主題動態切換都能觸發
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", generateCustomTOC);
    } else {
        generateCustomTOC();
    }
  })();
</script>
