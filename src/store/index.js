import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: () => ({
    products: [],
    cartProducts: [],
  }),
  getters: {
    getTotalCost: (state) => {
      return state.cartProducts.reduce((acc, el) => {
        return acc + el.price * el.count;
      }, 0);
    },
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
    addToCart: (state, payload) => {
      let match = false;
      state.cartProducts = state.cartProducts.map((el) => {
        if (el.id === payload.id) {
          match = true;
          return { ...payload, count: ++payload.count };
        } else {
          return el;
        }
      });
      if (!match) {
        state.cartProducts = [...state.cartProducts, payload];
      }
    },
    removeFromCart: (state, payload) => {
      state.cartProducts = state.cartProducts.filter((el) => {
        if (el.id !== payload.id) {
          return el;
        }
      });
    }
  },
  actions: {
    getProducts: async (context) => {
      const res = await fetch(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      const data = await res.json();
      context.commit(
        "setProducts",
        data.map((item) => {
          return { ...item, price: Math.floor(Math.random() * 1000), count: 1 };
        })
      );
    },
  },
});
