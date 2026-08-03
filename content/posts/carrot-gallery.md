+++
date = '2026-08-03T16:00:00+08:00'
draft = false
title = '蘿蔔圖鑑'
+++
IKEA 買的小蘿蔔，這是他的相簿。

<div class="gallery"> 

<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot28.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot27.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot24.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot23.jpg" />
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot22.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot21.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot20.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot19.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot18.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot17.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot16.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot15.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot14.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot13.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot12.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot11.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot10.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot9.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot8.jpg" />
<img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot2.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot7.jpg" /><img src="https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/carrot29.jpg" />
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