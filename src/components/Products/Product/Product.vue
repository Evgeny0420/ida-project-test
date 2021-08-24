<template>
    <div>
      <div>
        <img :src="require('../../../assets/img/' + link)" alt="Photo" class="products-photo" width="332">
      </div>
      <div class="products__about">
        <h3 class="products__title">{{ title }}</h3>
        <p class="products__about-text">{{ aboutText }}</p>
        <p class="products__price">{{ price }} руб.</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
      props: [ 'title', 'aboutText', 'link', 'price']
    };
</script>

<style lang="scss">
.products__photo {
  width: 332px;
}

.products__about {
  padding: 16px;
}

.products__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin: 0 0 16px;
}

.products__about-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 32px;
}

.products__price {
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 8px;
}
</style>
