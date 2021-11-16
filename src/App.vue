<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/" class="navbar__link">Витрина</router-link>
      <router-link to="/cart" class="navbar__link">Корзина</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  border: 2px solid grey;
  padding: 10px 20px;
}

.navbar__link {
  text-decoration: none;
  font-weight: bold;
  color: grey;
}
</style>
