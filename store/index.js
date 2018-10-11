import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
	
	state: {
		showModalCart: false,
		showModalSearch: false
	},
	
	/*
	 * Getters 
	 */
	getters: {
		showModalCart: state => state.showModalCart,
		
		showModalSearch: state => state.showModalSearch,
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
		}
	}
});

export default store