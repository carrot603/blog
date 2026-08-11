+++
date = '2026-08-03T16:01:00+08:00'
draft = false
title = '大蘿蔔圖鑑'
+++
Nicopy 的大蘿蔔，這是他的相簿。

<div class="gallery"> 

<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot31.jpg" alt="以前從他的官網存下來的，現在網站已經找不到了！我保留在這裡，廠商不會來告我吧？">
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot32.jpg" alt="我沒有拿來營利喔！">
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot33.jpg" alt="大蘿蔔頭像。">
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot30.jpg" />
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot26.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot25.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot1.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot6.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot5.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot4.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot3.jpg" />
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/20230320.jpg" />

</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // 1. 自動幫 .gallery 裡面的圖片包裹 <a> 標籤，並設定 Fancybox 屬性與 Caption
  document.querySelectorAll('.gallery img').forEach(img => {
    const a = document.createElement('a');
    a.dataset.fancybox = "gallery";
    a.href = img.src;

    // 關鍵修改：自動擷取圖片的 alt 屬性作為 Fancybox 的說明文字
    // 如果圖片有 alt 或是 title，就帶入 caption
    const captionText = img.getAttribute('alt') || img.getAttribute('title') || '';
    if (captionText) {
      a.dataset.caption = captionText;
    }
    
    // 讓包裹圖片的 <a> 標籤不會影響 CSS Grid 排版
    a.style.display = "block";
    a.style.width = "100%";
    a.style.height = "100%";

    img.parentNode.insertBefore(a, img);
    a.appendChild(img);
  });

  // 2. 綁定 Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["slideshow", "fullscreen", "thumbs", "close"],
      },
    },
  });
});
</script>

<style>
  /* 自訂 Fancybox 下方說明文字樣式 */
  .fancybox__caption {
    font-size: 1rem !important;
    color: #f0f0f0 !important;
    text-align: center;
    padding: 12px 20px !important;
    background: rgba(0, 0, 0, 0.75) !important; /* 半透明黑底 */
    border-top: 3px solid #ff8a3d; /* 莫蘭迪橘邊條 */
  }
</style>