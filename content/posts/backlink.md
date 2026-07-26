+++
date = '2026-07-15T05:00:00+08:00'
draft = false
title = '引用語法最佳化'
+++
![無法載入](https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/backlink.jpg)

把引用語法修改，對 Hugo 主機不影響，但在 Obsidian 內讀取，就能直接連結！

```
before: [範例]({{</* relref "example.md" */>}})

after: [範例](/posts/example)
```

以往的 ```[範例]({{</* relref "example.md" */>}})``` Obsidian 都以為是純文字，自動建立名為 "{{&lt;" 的檔案。現在改成絕對路徑，不只 backlink 能直接瀏覽，連 graph 都能一目了然！

用看的就能知道誰跟誰最有關聯，也可以藉此檢查有沒有尚未建立的雙向連結。比如本篇跟[超連結](/posts/hyperlink)，前後呼應，這段寫完回頭去補網址，就算觀眾看到舊文，也有機會看到我的最新進度！

![無法載入](https://pub-cbe0ce0485dd4255ac47a58d28e50e0d.r2.dev/backlink1.jpg)

如此便實現上週的圖表願望！看著密密麻麻的線連來連去，感覺自己腦內的神經也變得四通八達（？

{{< note >}}
2026-07-26 的我：我也畫出自己的[知識圖譜](/posts/graph-view)了！
{{< /note >}}
