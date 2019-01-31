<template>
    <section class="bg0 p-t-23 p-b-140">
        <div class="container">
            <div class="p-b-10">
                <h3 class="ltext-103 cl5">
                    Product Overview
                </h3>
            </div>
            <products-filter></products-filter>
            <transition-group name="list" tag="div" class="row isotope-grid">
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35" v-for="product in listProducts"
                     :key="product.id">
                    <!-- Block2 -->
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <img :src="product.image" alt="IMG-PRODUCT">

                            <a href="#"
                               class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                               @click.prevent="previewProduct(product)">
                                Quick View
                            </a>
                        </div>

                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l ">
                                <nuxt-link class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                           :to="{ name: 'products-id', params: { id: product.id }}">{{ product.title }}
                                </nuxt-link>

                                <span class="stext-105 cl3">
									${{ product.price }}
								</span>
                            </div>

                            <div class="block2-txt-child2 flex-r p-t-3">
                                <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                    <img class="icon-heart1 dis-block trans-04"
                                         src="~assets/images/icons/icon-heart-01.png" alt="ICON">
                                    <img class="icon-heart2 dis-block trans-04 ab-t-l"
                                         src="~assets/images/icons/icon-heart-02.png" alt="ICON">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>


            <!-- Load more -->
            <div class="flex-c-m flex-w w-full p-t-45" v-if="showPaginate">
                <a href="#" class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                   @click.prevent="loadMoreProducts">
                    Load More
                </a>
            </div>
        </div>
        <modal-product></modal-product>
    </section>
</template>
<script type="text/babel">
    import {mapGetters, mapActions} from 'vuex';
    import ModalProduct from '~/components/ModalProduct'
    import ProductsFilter from '~/components/ProductsFilter'

    export default {
        data: () => ({
            sizePaginate: 8,
        }),
        components: {
            ModalProduct,
            ProductsFilter
        },
        computed: {
            ...mapGetters([
                'products',
            ]),
            showPaginate() {
                return this.sizePaginate < this.products.length;
            },
            listProducts() {
                return this.products.slice(0, this.sizePaginate);
            }
        },
        methods: {
            ...mapActions([
                'toggleModalProduct',
                'getOneProduct'
            ]),
            loadMoreProducts() {
                this.sizePaginate += this.sizePaginate
            },
            previewProduct(product) {
                this.toggleModalProduct();
                this.getOneProduct(product);
            },
        }
    }
</script>
<style lang="scss" scoped>

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }


    .slide-enter-active {
        -moz-transition-duration: 0.1s;
        -webkit-transition-duration: 0.1s;
        -o-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -moz-transition-timing-function: linear;
        -webkit-transition-timing-function: linear;
        -o-transition-timing-function: linear;
        transition-timing-function: linear;
    }

    .slide-leave-active {
        -moz-transition-duration: 0.1s;
        -webkit-transition-duration: 0.1s;
        -o-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -moz-transition-timing-function: linear;
        -webkit-transition-timing-function: linear;
        -o-transition-timing-function: linear;
        transition-timing-function: linear;
    }

    .slide-enter-to, .slide-leave {
        max-height: 100px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
    }
</style>