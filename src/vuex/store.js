import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        },
        SET_PRODUCT: (state, product) => {
            state.products.push(product)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return Axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        ADD_PRODUCT (context, product) {
            const data = product
            Axios
                .post('http://localhost:3000/products', data)
                .then(response => {
                    context.commit('ADD_PRODUCT', response.data)
                });
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        }
    },
})

export default store
