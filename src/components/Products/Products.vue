<template>
  <div>
    <ul class="products">
      <li class="products__item" v-for="(product, index) in this.$store.state.products" :key="index">
        <product
        :title="product.title"
        :aboutText="product.aboutText"
        :link="product.link"
        :price="product.price"
        />
        <button class="products__del" type="button"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import Product from "./Product/Product";
import {mapActions} from 'vuex'

export default {
  name: 'products',
  components: {Product},
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss" scoped>
.products {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
}

.products__del {
  position: absolute;
  top: -14px;
  right: -14px;
  border: none;
  box-sizing: border-box;
  background: #FF8484;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 32px;
  height: 32px;
  display: none;

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    right: 8px;
    background-color: transparent;
    background-image: url("../../assets/img/del.svg");
  }

  &:hover {
    background: #FF8484;
    border: 1px solid #f85050;
    &::after {
      top: 7px;
      right: 7px;
    }
  }

  &:active {
    background: #f85050;
  }
}

.products__item {
  width: 332px;
  min-height: 423px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;

  &:hover {
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

    .products__del {
      display: block;
    }
  }
}
</style>
