<template>
  <div class="card">
    <img
      src="../assets/images/6123150777.webp"
      width="150px"
      class="card__image"
    />
    <span class="card__name">Название: {{ name }}</span>
    <span v-show="count" class="card__count">Кол-во: {{ count }}</span>
    <span class="card__price">Цена: {{ price }}</span>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      imgUrl: "",
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: null,
    },
    count: {
      type: Number,
      default: null,
    },
  },
  methods: {},
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card__image,
.card__count,
.card__price {
  margin: 10px 0;
}
</style>
