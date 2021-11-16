<template>
  <div class="cart">
    <h1 class="cart__title">Корзина</h1>
    <hr />
    <ul v-if="cartProducts.length" class="cart__list">
      <li v-for="product in cartProducts" :key="product.id" class="cart__item">
        <span @click="removeFromCart(product)" class="cart__close-btn">X</span>
        <ProductCard
          :name="product.dish"
          :price="product.price"
          :count="product.count"
        />
      </li>
    </ul>
    <div v-else>Корзина пуста</div>
    <hr />
    <h2>Итого: {{ this.getTotalCost }}</h2>
    <button v-if="cartProducts.length" @click="alert" class="cart__btn">
      Оформить
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import ProductCard from "./ProductCard.vue";

export default {
  name: "Cart",
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["cartProducts"]),
    ...mapGetters(["getTotalCost"]),
    productList() {
      let string = "";
      this.cartProducts.forEach((el) => {
        string = `${string}\n ${el.dish} x ${el.count}`;
      });
      return string;
    },
  },
  methods: {
    alert() {
      alert(
        `Вы заказали: ${this.productList} \nИтого: ${this.getTotalCost} рябчиков`
      );
    },
    ...mapMutations(["removeFromCart"]),
  },
};
</script>

<style scoped>
hr {
  margin: 10px 0;
}
.cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
  border: 2px solid gray;
}

.cart__title {
  flex-basis: 100%;
}

.cart__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.cart__item {
  flex-basis: 25%;
  position: relative;
  cursor: pointer;
}

.cart__close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
}

.cart__btn {
  align-self: flex-start;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 20px;
}
</style>
