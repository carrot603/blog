+++
date = '2026-08-03T16:01:00+08:00'
draft = false
title = '大蘿蔔圖鑑'
+++
Nicopy 的大蘿蔔，這是他的相簿。

<div class="gallery"> 

<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot26.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot25.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot1.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot6.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot5.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot4.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot3.jpg" />

</div>


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>

<script>

  // 自動幫 .gallery 裡面的圖片加上點擊放大效果
  document.querySelectorAll('.gallery img').forEach(img => {
    const a = document.createElement('a');
    a.dataset.fancybox = "gallery";
    a.href = img.src;
    img.parentNode.insertBefore(a, img);
    a.appendChild(img);
  });
  Fancybox.bind('[data-fancybox="gallery"]', {});
</script>