import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
	
	state: {
		showModalCart: false,
		showModalSearch: false,
		showModalProduct: false,
		products: [],
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

		modalProduct: state => state.modalProduct,
	},
	
	/*
	 * Mutations 
	 */
	mutations: {
		toggleModalCart (state) {
			state.showModalCart = !state.showModalCart
		},
		
		toggleModalSearch (state) {
			state.showModalSearch = !state.showModalSearch
		},

		toggleModalProduct(state) {
			state.showModalProduct = !state.showModalProduct
		},

		getProducts (state, value) {
			state.products = value
		},

		getModalProduct (state, value) {
			state.modalProduct = value
		}
	},
	
	/*
	 * Actions 
	 */
	actions: {
		toggleModalCart (context) {
			context.commit('toggleModalCart');
		},
		
		toggleModalSearch (context) {
			context.commit('toggleModalSearch');
		},

		toggleModalProduct (context) {
			context.commit('toggleModalProduct');
		},

		fetchProducts(context) {
			this.$axios.get('/products').then(
				response => {
					console.log(response);
					context.commit('getProducts', response.data.data)
				},
				error => console.log('error products'),
			)
		},

		getModalProduct(context, payload) {
			context.commit('toggleModalProduct');
			context.commit('getModalProduct', payload);
		}
	}
});

export default store