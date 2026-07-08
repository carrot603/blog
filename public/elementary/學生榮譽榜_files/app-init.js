/**
 * 應用程式初始化
 * 從 body data-* 屬性讀取伺服器端動態值
 */
(function () {
    function init() {
        var body = document.body;
        if (!body) return;

        // 使用者登入狀態
        window.is_user_login = parseInt(body.dataset.userLogin, 10) || 0;

        // Google Analytics
        var analyticsId = body.dataset.analyticsId;
        if (analyticsId) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', analyticsId);
        }
    }

    // 確保 body 已存在
    if (document.body) {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();
