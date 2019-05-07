// 用swiper插件实现图片轮播
window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // 是否循环播放
        loop: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
//              scrollbar: {
//                  el: '.swiper-scrollbar',
//              },
    })
}