<template>
    <div class="container">
        <div class="bg0 p-tb-100 p-b-30 p-lr-15-lg how-pos3-parent">


            <div class="row">
                <div class="col-md-6 col-lg-7 p-b-30">
                    <div class="row h-100 justify-content-center align-items-center">
                        <img :src="product.image" alt="IMG-PRODUCT">
                    </div>
                </div>

                <div class="col-md-6 col-lg-5 p-b-30">
                    <div class="p-r-50 p-t-5 p-lr-0-lg">
                        <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                            {{ product.name }}
                        </h4>
                        <span class="mtext-106 cl2">
								<strong>Price: </strong>{{ product.price }}
							</span>

                        <p class="stext-102 cl3 p-t-23">
                            {{ product.description }}
                        </p>

                        <!--  -->
                        <div class="p-t-33">
                            <div class="total-amount flex-c-m stext-101 ">
                                <strong>Total: </strong> {{ amountProduct }}
                            </div>
                            <div class="flex-w flex-r-m p-b-10">
                                <div class="flex-w flex-m respon6-next">

                                    <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                                        <div @click="decrementCountProduct(product)" v-if="product.count > 1"
                                             class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                            <i class="fs-16 zmdi zmdi-minus"></i>
                                        </div>
                                        <div v-else
                                             class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                            <i class="fs-16 zmdi zmdi-minus"></i>
                                        </div>

                                        <input class="mtext-104 cl3 txt-center num-product" type="number"
                                               name="num-product" :value="product.count">

                                        <div @click="incrementCountProduct(product)"
                                             class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                            <i class="fs-16 zmdi zmdi-plus"></i>
                                        </div>
                                    </div>

                                    <button @click="addProductToCart(product)" v-if="!showCartButton"
                                            class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                        Add to cart
                                    </button>
                                    <button @click="removeProductFromCart(product)" v-else
                                            class="flex-c-m stext-101 cl0 size-101 bg3 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                        Remove
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
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "one-product",
        data: () => ({
            productTmp: {}
        }),
        computed: {
            ...mapGetters([
                'product',
                'productInCart',
                'getProductById'
            ]),
            showCartButton() {
                return this.productInCart(this.product)
            },
            amountProduct() {
                return this.product.price * this.product.count
            }
        },
        created() {
            this.productTmp = this.getProductById(this.$route.params.id);
            if (!this.productTmp) this.fetchProduct();
            else this.getOneProduct(this.productTmp)
        },
        methods: {
            ...mapActions([
                'getOneProduct',
                'addProductToCart',
                'removeProductFromCart',
                'incrementCountProduct',
                'decrementCountProduct'
            ]),
            fetchProduct() {
                console.log('prod');
                this.$axios.get(`/products/${this.$route.params.id}`).then(
                    response => this.getOneProduct(response.data.data), //this.productTmp = response.data.data,
                    () => console.log('error products'),
                )
            },
        }
    }
</script>

<style scoped>

</style>