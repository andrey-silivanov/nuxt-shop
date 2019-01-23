<template>
    <!-- Modal1 -->
    <transition name="slide-fade">
        <div class="wrap-modal1 js-modal1 p-t-60 p-b-20" v-if="showModalProduct">
            <div class="overlay-modal1 js-hide-modal1"></div>

            <div class="container">
                <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button class="how-pos3 hov3 trans-04 js-hide-modal1"
                            @click.prevent="$store.dispatch('toggleModalProduct')">
                        <img src="~assets/images/icons/icon-close.png" alt="CLOSE">
                    </button>

                    <div class="row">
                        <div class="col-md-6 col-lg-7 p-b-30">
                            <div class="row h-100 justify-content-center align-items-center">
                                <img :src="modalProduct.image" alt="IMG-PRODUCT">
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-5 p-b-30">
                            <div class="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                                    {{ modalProduct.name }}
                                </h4>
                                <span class="mtext-106 cl2">
								<strong>Price: </strong>{{ modalProduct.price }}
							</span>

                                <p class="stext-102 cl3 p-t-23">
                                    {{ modalProduct.description }}
                                </p>

                                <!--  -->
                                <div class="p-t-33">
                                  <!--  <div class="flex-w flex-r-m p-b-10">
                                        <div class="size-203 flex-c-m respon6">
                                            Brand
                                        </div>

                                        <div class="size-204 respon6-next">
                                            <div class="rs1-select2 bor8 bg0">
                                                <select class="js-select2 form-control" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Size S</option>
                                                    <option>Size M</option>
                                                    <option>Size L</option>
                                                    <option>Size XL</option>
                                                </select>
                                                <div class="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex-w flex-r-m p-b-10">
                                        <div class="size-203 flex-c-m respon6">
                                            Phone model
                                        </div>

                                        <div class="size-204 respon6-next">
                                            <div class="rs1-select2 bor8 bg0">
                                                <select @change="test" v-model="selectedColor"
                                                        class="js-select2 form-control" name="time">
                                                    <option v-for="product in modalProduct.products" :value="product"
                                                            :key="product.id">
                                                        {{ product.color }}
                                                    </option>
                                                </select>
                                                <div class="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div>-->

                                    <div class="flex-w flex-r-m p-b-10">
                                        <div class="size-204 flex-w flex-m respon6-next">
                                            <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i class="fs-16 zmdi zmdi-minus"></i>
                                                </div>

                                                <input class="mtext-104 cl3 txt-center num-product" type="number"
                                                       name="num-product" value="1">

                                                <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i class="fs-16 zmdi zmdi-plus"></i>
                                                </div>
                                            </div>

                                            <button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!--  -->
                                <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div class="flex-m bor9 p-r-10 m-r-11">
                                        <a href="#"
                                           class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                           data-tooltip="Add to Wishlist">
                                            <i class="zmdi zmdi-favorite"></i>
                                        </a>
                                    </div>

                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                       data-tooltip="Facebook">
                                        <i class="fa fa-facebook"></i>
                                    </a>

                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                       data-tooltip="Twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>

                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                       data-tooltip="Google Plus">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/babel">
    import {mapGetters} from 'vuex'

    export default {
        data: () => ({
            preview: "",
            selectedColor: ""
        }),
        computed: {
            ...mapGetters([
                'showModalProduct',
                'modalProduct'
            ]),
        },
        watch: {
            modalProduct(value) {
                console.log(this.modalProduct.products);
                console.log('AAAaaaa1');
                let result = [];
                /*let unique = this.modalProduct.products.filter(item => {
                   console.log('item');
                   console.log(item);
                   console.log(result)
                    result.push(item)
                });
                console.log(unique)*/
                // this.preview = value.mainProduct.preview
            }
        },
        mounted() {
            console.log(this.modalProduct)
            if (this.modalProduct.products) {

            }

        },
        methods: {
            selectPreview(image) {
                this.preview = image
            },
            test(product) {
                console.log('ssdsadadas333')
                console.log(product)
                let modalProduct = {
                    mainProduct: this.selectedColor,
                    products: this.modalProduct.products
                }
                this.$store.dispatch('getModalProduct', modalProduct);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all .5s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */
    {
        transform: translateY(-100%);
        opacity: 0;
    }

    .item-slick3 {
        display: inline-block;
    }

    .thumbnail {
        margin: 15px 5px;
        img {
            width: 80px;
            height: 100px;
        }
    }
</style>
