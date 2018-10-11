import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
	
	state: {
		showModalCart: false,
		showModalSearch: false,

		products: []
	},
	
	/*
	 * Getters 
	 */
	getters: {
		showModalCart: state => state.showModalCart,
		
		showModalSearch: state => state.showModalSearch,
		
		products: state => state.products,
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

		getProducts (state, value) {
			state.products = value
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

		fetchProducts(context) {
			this.$axios.get('/products').then(
				response => context.commit('getProducts', response.data.data),
				error => console.log('n'),
			)
		}
	}
});

export default store