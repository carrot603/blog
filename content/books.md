+++
date = '2026-07-09T08:00:00+08:00'
draft = false
title = 'books'
+++
{{< note >}}
我的閱讀筆記，不想看廢文的話就來看些有營養的。最後更新於：2026-07-17。
{{< /note >}}

<div id="custom-toc"></div>

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

---

### 千本好書

[《追憶似水年華》](/posts/proust) 唯一推薦！

參考[中文圖書分類法](https://catweb.ncl.edu.tw/class2007/96-1-1.htm)，列成五大清單：

- [**哲學**](/philosophy)：100 哲學
- [**科學**](/science)：300 科學、400 應用科學
- [**社會**](/society)：500 社會科學、600 中國歷史、700 世界歷史＆傳記
- [**工具**](/tool)：177 勵志書、494 商管書之類
- [**藝術**](/art)：000 總類、800 文學、900 藝術

---

### 蘿蔔書單🥕

>沒什麼特別的，只是因為有蘿蔔。

<br>

[紅蘿蔔蛋糕](https://webpac.taichung.gov.tw/bookDetail/865218)：在[茉莉](https://www.mollie.com.tw/Mobile/Books.asp)買的第一本二手書，意義非凡

[吃胡蘿蔔的七種方法](https://webpac.taichung.gov.tw/bookDetail/779041)

[我種出了一個好朋友](https://taichunggov.ebook.hyread.com.tw/bookDetail.jsp?id=481685)

[透明的紅蘿蔔](https://ipac.nlpi.edu.tw/bookDetail/566901)：莫言的中篇小說集

[紅蘿蔔的煩惱](https://findbook.com.tw/9789863331391)

[一起吃胡蘿蔔餅乾](https://findbook.com.tw/9786267405482)

[胡蘿蔔妖怪](https://findbook.com.tw/4713482022304)

[紅蘿蔔幼稚園](https://findbook.com.tw/9786263144880)

[動物模仿遊戲](https://findbook.com.tw/9786267429334)：在誠品一看到封面馬上就買了！超級無敵可愛！
<style>
  /* 目錄的極簡樣式 */
  #custom-toc {
      background-color: var(--theme, #f5f5f5); /* 自動適應 PaperMod 暗黑/白天模式 */
      border-left: 4px solid #137333;
      padding: 15px 20px;
      margin: 20px 0;
      border-radius: 4px;
  }
  #custom-toc h4 { margin: 0 0 10px 0; color: inherit; }
  #custom-toc ul { list-style-type: none; padding-left: 20px; margin: 0; }
  #custom-toc li { margin: 8px 0; }
  #custom-toc a { text-decoration: none; color: #137333; font-weight: 500; }
  #custom-toc a:hover { text-decoration: underline; }
  .toc-h3 { padding-left: 15px; font-size: 0.95rem; opacity: 0.85; }
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
