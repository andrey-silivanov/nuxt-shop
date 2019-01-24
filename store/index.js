import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        showModalCart: false,
        showModalSearch: false,
        showModalProduct: false,
        products: [],
        categories: [],
        brands: [],
        phoneModels: [],
        colors: [],
        tags: [],
        selectedBrand: 0,
        selectedPhoneModel: 0,
        modalProduct: {}
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

        modalProduct: state => state.modalProduct,

        brands: state => state.brands,

        phoneModels: state => state.phoneModels,

        colors: state => state.colors,

        tags: state => state.tags,

        selectedBrand: state => state.selectedBrand,

        selectedPhoneModel: state => state.selectedPhoneModel,

        cartProducts: state => state.products.filter(el => el.isAddedToCart),

        countCartProducts: (state, getters) => getters.cartProducts.length,

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

        getModalProduct(state, value) {
            state.modalProduct = value
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
        decrementCountProduct(state, value) {
            state.products.filter((obj, index) => {
                if (obj.id === value.id) state.products[index].count--
            });
        },

        addProductToCart(state, product) {
            state.products.forEach(el => {
                if (product.id === el.id) el.isAddedToCart = true;
            });
        },
        removeProductFromCart(state, product) {
            state.products.forEach(el => {
                if (product.id === el.id) el.isAddedToCart = false;
            });
        }
    },

    /*
     * Actions
     */
    actions: {
        fetchProducts(context, payload = null) {
            let queryParams = {
                params: {
                    page: (payload !== null && payload.page !== null) ? payload.page : '',
                    categoryId: (payload !== null && payload.categoryId !== null) ? payload.categoryId : '',
                    phoneModelId: context.state.selectedPhoneModel,
                    colorId: (payload !== null && payload.colorId !== null) ? payload.colorId : '',
                    tagId: (payload !== null && payload.tagId !== null) ? payload.tagId : '',
                    search: (payload !== null && payload.search !== null) ? payload.search : ''
                }
            };
            this.$axios.get('/products', queryParams).then(
                response => context.commit('getProducts', response.data.data),
                () => console.log('error products'),
            )
        },

        fetchCategories(context) {
            this.$axios.get('/categories').then(
                response => context.commit('getCategories', response.data.data),
                () => console.log('error categories')
            )
        },

        fetchBrands(context) {
            this.$axios.get('/brands').then(
                response => context.commit('getBrands', response.data.data),
                () => console.log('error brands')
            )
        },

        fetchPhoneModels(context) {
            this.$axios.get(`/phone-models`, {params: {brandId: context.state.selectedBrand}}).then(
                response => context.commit('getPhoneModels', response.data.data),
                () => console.log('error phone models')
            )
        },

        fetchColors(context) {
            this.$axios.get('/colors').then(
                response => context.commit('getColors', response.data.data),
                () => console.log('error colors')
            )
        },

        fetchTags(context) {
            this.$axios.get('/tags').then(
                response => context.commit('getTags', response.data.data),
                () => console.log('error tags')
            )
        },

        toggleModalCart(context) {
            context.commit('toggleModalCart');
        },

        toggleModalSearch(context) {
            context.commit('toggleModalSearch');
        },

        toggleModalProduct(context) {
            context.commit('toggleModalProduct');
        },

        getModalProduct(context, payload) {
            context.commit('getModalProduct', payload);
        },

        selectBrand(context, payload) {
            context.commit('selectBrand', payload);
            context.dispatch('fetchPhoneModels');
        },

        selectPhoneModel(context, payload) {
            context.commit('selectPhoneModel', payload);
            context.dispatch('fetchProducts');
        },

        incrementCountProduct(context, product) {
            context.commit('incrementCountProduct', product)
        },

        decrementCountProduct(context, product) {
            context.commit('decrementCountProduct', product)
        },

        addProductToCart(context, payload) {
            context.commit('addProductToCart', payload);
        },

        removeProductFromCart(context, payload) {
            context.commit('removeProductFromCart', payload)
        }
    }
});

export default store