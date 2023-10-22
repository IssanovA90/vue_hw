<template>
  <div class="container">
    <div class="colors" v-for="(color, index) in colors" :key="index">
      <div class="block" :style="{ backgroundColor: color.hex }"></div>
      <h3>{{ color.name }}</h3>
      <p>{{ color.hex }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: 'Red', hex: '#FF0000' },
        { name: 'Green', hex: '#00FF00' },
        { name: 'Blue', hex: '#0000FF' },
        { name: 'Yellow', hex: '#FFFF00' },
        { name: 'Cyan', hex: '#00FFFF' },
        { name: 'Magenta', hex: '#FF00FF' },
        { name: 'Black', hex: '#000000' },
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.colors {
  width: 200px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

.block {
  height: 100px;
  margin-bottom: 10px;
}
</style>
