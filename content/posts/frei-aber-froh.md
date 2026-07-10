+++
date = '2026-07-10T04:59:00+08:00'
draft = false
title = '第四屆弦樂成發'
+++
![無法載入](/images/frei.jpg)
![無法載入](/images/frei1.jpg)

---

一中女中聯合成發，算起來是第四屆了，這也是我第四次參加成發😃

原本只想當觀眾，但大團要拉歌劇魅影，於是決定加入；另一個考量是加了我中提會變六個人，這樣各部都是偶數比較整齊，對很沒有說服力。

曲目只有 [QR code](https://wiwi.blog/blog/concert-phones/) 裡面有寫，還要掏手機出來覺得好麻煩！但好處是可以隨時換曲子也沒人發現🤔

為了方便我把節目單連結放這邊： https://sites.google.com/std.tcfsh.tc.edu.tw/tcfsh-tcgs-annual-concert/%E9%A6%96%E9%A0%81

<div class="marquee-container">
  <div class="marquee-text">
    7/9（四）18:30 在臺中寶成演藝廳有一中女中弦樂聯合成發，我會去拉中提，歡迎來看看！
  </div>
</div>

{{< note >}}
本篇初稿發布於 7/1，名為「廣告：7/9 弦樂成發」，並在 [/now]({{< relref "now.md" >}}) 有跑馬燈宣傳。以下增補心得：
{{< /note >}}

---

好開心。

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