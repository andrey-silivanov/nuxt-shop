<template>
    <div class="slider-wrapper">
    <no-ssr>
        <flickity ref="flickity" :options="flickityOptions">
            <div class="carousel-cell">
                <div class="item-slick1" :style="{ backgroundImage: 'url(' + require(`~/assets/images/slider/1.jpg`) + ')' }">
                    <div class="container h-full">
                        <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                            <div class="layer-slick1" data-appear="fadeInDown" data-delay="0">
								<span class="ltext-101 cl2 respon2">
									Women Collection 2018
								</span>
                            </div>

                            <div class="layer-slick1" data-appear="fadeInUp" data-delay="800">
                                <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                    NEW SEASON
                                </h2>
                            </div>

                            <div class="layer-slick1" data-appear="zoomIn" data-delay="1600">
                                <a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="item-slick1" :style="{ backgroundImage: 'url(' + require(`~/assets/images/slider/2.jpg`) + ')' }">
                    <div class="container h-full">
                        <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                            <div class="layer-slick1" data-appear="fadeInDown" data-delay="0">
								<span class="ltext-101 cl2 respon2">
									Women Collection 2018
								</span>
                            </div>

                            <div class="layer-slick1" data-appear="fadeInUp" data-delay="800">
                                <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                    NEW SEASON
                                </h2>
                            </div>

                            <div class="layer-slick1" data-appear="zoomIn" data-delay="1600">
                                <a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="item-slick1" :style="{ backgroundImage: 'url(' + require(`~/assets/images/slider/3.jpg`) + ')' }">
                    <div class="container h-full">
                        <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                            <div class="layer-slick1" data-appear="fadeInDown" data-delay="0">
								<span class="ltext-101 cl2 respon2">
									Women Collection 2018
								</span>
                            </div>

                            <div class="layer-slick1" data-appear="fadeInUp" data-delay="800">
                                <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                    NEW SEASON
                                </h2>
                            </div>

                            <div class="layer-slick1" data-appear="zoomIn" data-delay="1600">
                                <a href="product.html" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </flickity>
    </no-ssr>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                sliderItems: '~/assets/images/slider/1.jpg',
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true,
                    autoPlay: 3000,
                }
            }
        },
    }
</script>
<style lang="scss">
    .carousel-cell {
        width: 100%;
    }
</style>