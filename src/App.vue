<template>
  <div class="container">
    <Form
    @addProduct="addProduct()"
    />
    <Products/>
  </div>
</template>

<script>
import Form from "./components/Form/Form";
import Products from "./components/Products/Products";

export default {
  name: 'App',
  components: {
    Form,
    Products,
  }
}
</script>

<style lang="scss">
.container {
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-gap: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 32px;
}
</style>
