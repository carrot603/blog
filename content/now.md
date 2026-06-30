+++
date = '2026-06-26T06:00:00+08:00'
draft = false
title = '/now'
+++
{{< note >}}
💡 這是我的 /now 頁面，最後更新於：2026-07-01。

本頁面同時投稿到 https://nownownow.com/

{{< /note >}}

這跟 [about]({{< relref "about.md" >}}) 有什麼差別，老實說我也不清楚。我想 /now 的更新會更頻繁吧！

>6/26：Derek Sivers 回覆我了耶耶耶！！！

>我發現只有我名字打中文，但算了沒關係，可能有一天搜尋[江俊佑](https://nownownow.com/p/01LE)這個頁面就會跑出來了。我似乎是第 39 個臺灣人🇹🇼

我比較內向，如果想跟我打招呼，可以到 carrot603@proton.me

---

[廣告（詳情點我）]({{< relref "frei-aber-froh.md" >}})：

<div class="marquee-container">
  <div class="marquee-text">
    7/9（四）18:30 在臺中寶成演藝廳有一中女中弦樂聯合成發，我會去拉中提，歡迎來看看！
  </div>
</div>

---

### 人生的階段
即將成為[市北]({{< relref "utaipei-announce.md" >}})音樂系大一新生🥳

### 正在讀的書
- 《莊子》  
- 《西方哲學史》（羅素）  
- 《所多瑪和蛾摩拉》  
- 聯經的[聯經中國史](https://events.linkingbooks.com.tw/LNB/top/2024/historyofchina/index.html)系列

### 在練的曲子
- Bach: Sinfonia No.3  
- Bach: BWV 846 Fugue  
- Chopin: Etude Op. 10 No.5  
- Rachmaninoff: Prelude Op. 23 No. 5  
- 音階努力中😬

### 想去哪裡玩
我想要看星星🤩

### 最近的感嘆
希望有人來看我的 blog🥺

### 七月計劃

讀完《世界哲學史》  
學日文五十音  
學會煮菜  
把圖書館的書還掉  
練一首 Concerto  
（希望能夠達成）
<style>
/* 跑馬燈的外框：限制寬度並隱藏超出範圍的文字 */
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: #2a2a2a; /* 深灰色底色 */
  padding: 12px 0;
  box-sizing: border-box;
}

/* 跑馬燈的文字：定義顏色與動畫效果 */
.marquee-text {
  display: inline-block;
  color: #ff7a00;           /* 橘色文字 */
  font-weight: bold;        /* 加粗讓橘色字在深灰底上更清晰 */
  padding-left: 100%;       /* 讓文字一開始從最右側外面開始出現 */
  animation: marquee-move 15s linear infinite; /* 15秒跑完一輪，無限循環 */
}

/* 定義動畫軌跡 */
@keyframes marquee-move {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

/* 當滑鼠懸停時暫停 */
.marquee-container:hover .marquee-text {
  animation-play-state: paused;
}
