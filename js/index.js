$(function() {

    // !! 首页轮播图 !! 

    //轮播图左右箭头
    let leftArrow = $('#index_main_left_arrow')
    let rightArrow = $('#index_main_right_arrow')

    leftArrow.on('click', () => {
        topGallerySwiper.slidePrev()
    })
    rightArrow.on('click', () => {
        topGallerySwiper.slideNext()
    })

    //初始化轮播图
    let topGallerySwiper = new Swiper('#index_main_top_gallery',{
        on:{
            slideChange: function(){
                changeArrowVisibility()
            }
        },
        // autoplay: true,
    })  

    // 缩略图
    let topThumbs = $('#index_main_top_thumbs')
    topThumbs.on('click', (e) => {
        if (e.target.nodeName === 'IMG') {
            topGallerySwiper.slideTo($(e.target).index(), 1000, () => {
                changeArrowVisibility()
            })
        }
    })
    
    // 箭头显示
    function changeArrowVisibility() {
        rightArrow.css('visibility', 'visible')
        leftArrow.css('visibility', 'visible')
        if (topGallerySwiper.slides.length - 1 === topGallerySwiper.activeIndex) {
            rightArrow.css('visibility', 'hidden')
        }
        if (topGallerySwiper.activeIndex === 0) {
            leftArrow.css('visibility', 'hidden')
        }
    }

    function stopGalleryAnimated() {
        $('#index_main_top_thumbs').stop(true, true)
        $('.index_main_top_gallery_title').stop(true, true)
    }

    $('#index_main_slide').mouseenter(() => {
        stopGalleryAnimated()
        $('#index_main_top_thumbs').animate({
            bottom: '0px'
        })
        $('.index_main_top_gallery_title').animate({
            bottom: '46px'
        })
    })

    $('#index_main_slide').mouseleave(() => {
        stopGalleryAnimated()
        $('#index_main_top_thumbs').animate({
            bottom: '-43px'
        })
        $('.index_main_top_gallery_title').animate({
            bottom: '-58px'
        })
    })

    // 中心动态轮播图
    let trendsGallerySwiper = new Swiper('#index_main_trends_gallery',{
        effect: 'fade',
        speed: 500,
        // autoplay: true,
        pagination: {
            el: '#index_main_trends_gallery .swiper-pagination',
            clickable :true
        },
    }) 

})