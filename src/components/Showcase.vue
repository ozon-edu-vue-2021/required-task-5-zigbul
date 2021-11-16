<template>
  <div class="showcase">
    <h1>Витрина</h1>
    <ul class="showcase__list">
      <li
        v-for="product in products"
        :key="product.id"
        @click="addToCart(product)"
        class="showcase__item"
      >
        <ProductCard :name="product.dish" :price="product.price" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Showcase",
  components: {
    ProductCard,
  },
  data() {
    return {
      productsData: this.products,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>

<style scoped>
.showcase {
  padding: 30px;
  border: 2px solid gray;
}

.showcase__list {
  display: flex;
  flex-wrap: wrap;
}

.showcase__item {
  flex-basis: 24%;
  background-color: lightgray;
  list-style-type: none;
  margin: 1% 0 0 1%;
  cursor: pointer;
}
</style>
