import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({

	state: {
		showModalCart: false
	},

	getters: {
		showModalCart: state => state.showModalCart
	},

	mutations: {
		toggleModalCart (state) {
			state.showModalCart = !state.showModalCart
		}
	},

	actions: {
		toggleModalCart (context) {
			context.commit('toggleModalCart');
		}
	}
});

export default store