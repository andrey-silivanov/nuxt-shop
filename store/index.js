import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        showModalCart: false,
        showModalSearch: false,
        showModalProduct: false,
        products: [],
        cartProducts: [],
        categories: [],
        brands: [],
        phoneModels: [],
        colors: [],
        tags: [],
        selectedBrand: 0,
        selectedPhoneModel: 0,
        product: {}
    },

    /*
     * Getters
     */
    getters: {
        showModalCart: state => state.showModalCart,

        showModalSearch: state => state.showModalSearch,

        showModalProduct: state => state.showModalProduct,

        products: state => state.products,

        categories: state => state.categories,

        product: state => state.product,

        brands: state => state.brands,

        phoneModels: state => state.phoneModels,

        colors: state => state.colors,

        tags: state => state.tags,

        selectedBrand: state => state.selectedBrand,

        selectedPhoneModel: state => state.selectedPhoneModel,

        cartProducts: state => state.cartProducts, //state.products.filter(el => el.isAddedToCart),

        countCartProducts: (state, getters) => getters.cartProducts.length,

        productInCart: (state) => (product) => state.cartProducts.some(item => item.id === product.id),

        getProductById: state => id => {
            return state.products.find(product => product.id == id);
        },
    },

    /*
     * Mutations
     */
    mutations: {
        toggleModalCart(state) {
            state.showModalCart = !state.showModalCart
        },

        toggleModalSearch(state) {
            state.showModalSearch = !state.showModalSearch
        },

        toggleModalProduct(state) {
            state.showModalProduct = !state.showModalProduct
        },

        getProducts(state, value) {
            state.products = value
        },

        getCartProducts(state, value) {
            state.cartProducts = value
        },

        getCategories(state, value) {
            state.categories = value;
        },

        getBrands(state, value) {
            state.brands = value
        },

        getPhoneModels(state, value) {
            state.phoneModels = value
        },

        getColors(state, value) {
            state.colors = value
        },

        getTags(state, value) {
            state.tags = value
        },

        getOneProduct(state, value) {
            state.product = value
        },

        selectBrand(state, value) {
            state.selectedBrand = value
        },

        selectPhoneModel(state, value) {
            state.selectedPhoneModel = value
        },

        incrementCountProduct(state, value) {
            state.products.filter((obj, index) => {
                if (obj.id === value.id) state.products[index].count++
            });
        },

        incrementCountCartProduct(state, value) {
            state.cartProducts.filter((obj, index) => {
                if (obj.id === value.id) {
                    state.cartProducts[index].count++;
                    window.localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
                }
            });
        },

        decrementCountProduct(state, value) {
            state.products.filter((obj, index) => {
                if (obj.id === value.id) state.products[index].count--
            });
        },

        decrementCountCartProduct(state, value) {
            state.cartProducts.filter((obj, index) => {
                if (obj.id === value.id) {
                    state.cartProducts[index].count--;
                    window.localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
                }
            });
        },

        addProductToCart(state, product) {
            if (!state.cartProducts.some(item => item.id === product.id)) {
                state.cartProducts.push(product);
                window.localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
            }
        },

        removeProductFromCart(state, product) {
            let index = state.cartProducts.findIndex(function (item) {
                return item.id === product.id;
            });
            if (index !== -1) {
                state.cartProducts.splice(index, 1);
                window.localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
            }
        }
    },

    /*
     * Actions
     */
    actions: {
        fetchProducts({commit, state}, payload = null) {
            let queryParams = {
                params: {
                    page: (payload !== null && payload.page !== null) ? payload.page : '',
                    categoryId: (payload !== null && payload.categoryId !== null) ? payload.categoryId : '',
                    phoneModelId: state.selectedPhoneModel,
                    colorId: (payload !== null && payload.colorId !== null) ? payload.colorId : '',
                    tagId: (payload !== null && payload.tagId !== null) ? payload.tagId : '',
                    search: (payload !== null && payload.search !== null) ? payload.search : ''
                }
            };
            return this.$axios.get('/products', queryParams).then(
                response => {
                    commit('getProducts', response.data.data);
                    return Promise.resolve('PRODUCTS');
                },
                () => console.log('error products'),
            );
        },

        fetchCartProducts({commit}) {
                let value = [],
                    localStorage = window.localStorage.getItem('cartProducts');
                if (localStorage) value = JSON.parse(localStorage);

                commit('getCartProducts', value)
        },

        fetchCategories({commit}) {
            return this.$axios.get('/categories').then(
                response => {
                    commit('getCategories', response.data.data);
                    return Promise.resolve('CATEGORIES');
                },
                () => console.log('error categories')
            )
        },

        fetchBrands({commit}) {
            return this.$axios.get('/brands').then(
                response => {
                    commit('getBrands', response.data.data);
                    return Promise.resolve('BRANDS');
                }, () => console.log('error brands')
            )
        },

        fetchPhoneModels({commit, state}) {
            this.$axios.get(`/phone-models`, {params: {brandId: state.selectedBrand}}).then(
                response => {
                    commit('getPhoneModels', response.data.data);
                    return Promise.resolve('PHONE_MODELS')
                },
                () => console.log('error phone models')
            )
        },

        fetchColors({commit}) {
            return this.$axios.get('/colors').then(
                response => {
                    commit('getColors', response.data.data)
                    return Promise.resolve('COLORS');
                },
                () => console.log('error colors')
            )
        },

        fetchTags({commit}) {
            return this.$axios.get('/tags').then(
                response => {
                    commit('getTags', response.data.data);
                    return Promise.resolve('TAGS');
                },
                () => console.log('error tags')
            )
        },

        toggleModalCart({commit}) {
            commit('toggleModalCart');
        },

        toggleModalSearch({commit}) {
            commit('toggleModalSearch');
        },

        toggleModalProduct({commit}) {
            commit('toggleModalProduct');
        },

        getOneProduct({commit, state, getters}, payload) {
            if(getters.productInCart(payload)) {
                state.cartProducts.filter((obj, index) => {
                    if (obj.id === payload.id) commit('getOneProduct', obj);
                });
            } else {
                commit('getOneProduct', payload);
            }
        },

        selectBrand({commit, dispatch}, payload) {
            commit('selectBrand', payload);
            dispatch('fetchPhoneModels');
        },

        selectPhoneModel({commit, dispatch}, payload) {
            commit('selectPhoneModel', payload);
            dispatch('fetchProducts');
        },

        incrementCountProduct({commit, getters}, product) {
            if(getters.productInCart(product)) commit('incrementCountCartProduct', product);
            else commit('incrementCountProduct', product)
        },

        decrementCountProduct({commit, getters}, product) {
            if(getters.productInCart(product)) commit('decrementCountCartProduct', product);
            else commit('decrementCountProduct', product)
        },

        addProductToCart({commit}, payload) {
            commit('addProductToCart', payload);
        },

        removeProductFromCart({commit}, payload) {
            commit('removeProductFromCart', payload)
        },
    },
});

export default store