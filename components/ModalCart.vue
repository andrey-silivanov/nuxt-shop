<template>
    <transition name="slide-fade">
    <div class="wrap-header-cart js-panel-cart" v-if="showModalCart">
        <div class="s-full js-hide-cart"></div>

        <div class="header-cart flex-col-l p-l-65 p-r-25">
            <div class="header-cart-title flex-w flex-sb-m p-b-8">
				<span class="mtext-103 cl2">
					Your Cart
				</span>

                <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart" @click="$store.dispatch('toggleModalCart')">
                    <i class="zmdi zmdi-close"></i>
                </div>
            </div>

            <div class="header-cart-content flex-w js-pscroll">
                <ul class="header-cart-wrapitem w-full">
                    <li class="header-cart-item flex-w flex-t m-b-12" v-for="product in cartProducts" :key="product.id">
                        <div class="header-cart-item-img" @click="removeProductFromCart(product)">
                            <img :src="product.image" alt="IMG">
                        </div>

                        <div class="header-cart-item-txt p-t-8">
                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                {{ product.name }}
                            </a>

							<span class="header-cart-item-info">
								{{ product.count }} x ${{ product.price }}
							</span>
                        </div>
                    </li>
                </ul>

                <div class="w-full">
                    <div class="header-cart-total w-full p-tb-40">
                        Total: ${{ totalCartAmount }}
                    </div>

                    <div class="header-cart-buttons flex-w w-full">
                        <a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                            View Cart
                        </a>

                        <a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                            Check Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>
<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
           ...mapGetters([
               'showModalCart',
               'cartProducts'
           ]),
            totalCartAmount() {
                let pricesArray = [];
                this.cartProducts.forEach(product => pricesArray.push((product.price * product.count)));

                return pricesArray.reduce((a, b) => a + b, 0);
            }
        },
        methods: {
            ...mapActions([
                'toggleModalProduct',
                'removeProductFromCart',
            ]),
            removeProductFromCart(product) {
                this.$store.dispatch('removeProductFromCart', product)
            },
        }
    };
</script>
<style scoped>
    .slide-fade-enter-active,
    .slide-fade-leave-active
    {
        transition: all .5s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(200px);
        opacity: 0;
    }
</style>