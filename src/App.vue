<script>
export default {
  data: () => {
    return {
      firstProduct: {
        id: '1',
        class: 'One',
        src: '/img/2.png',
        alt: 'First Image',
        title: 'HYUNDAI ACCENT',
        description: 'Седан',
        price: '8.000.000тг'
      },
      secondProduct: {
        id: '2',
        class: 'Two',
        src: '/img/1.png',
        alt: 'Second Image',
        title: 'KIA RIO XLINE',
        description: 'Универсал ',
        price: '8.200.000тг'
      }
    };
  },
  computed: {},
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="card">
      <img v-bind:id="firstProduct.id" 
           v-bind:class="firstProduct.class" 
           v-bind:src="firstProduct.src"
           v-bind:alt="firstProduct.alt" 
           style="width: 130px; height: 100px;" />
      <h2>{{ firstProduct.title }}</h2>
      <p>{{ firstProduct.description }}</p>
      <p>{{ firstProduct.price }}</p>
    </div>
    <div class="card">
      <img v-bind:id="secondProduct.id" 
           v-bind:class="secondProduct.class" 
           v-bind:src="secondProduct.src"
           v-bind:alt="secondProduct.alt" 
           style="width: 130px; height: 100px;" />
      <h2>{{ secondProduct.title }}</h2>
      <p>{{ secondProduct.description }}</p>
      <p>{{ secondProduct.price }}</p>
    </div>
  </div>

</template>

<style scoped>
.container {
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
}

.card {
  width: 300px;
  border-radius: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  background-color: bisque;
}
</style>
