<script>
export default {
  data() {
    return {
      name: '',
      age: null
    };
  },
  methods: {
    submitForm() {
      if (this.age < 0) {
        alert(this.name +  ' Не может быть меньще 0');
      } else if (this.age < 18) {
        alert(this.name +  ' Вы еще не совершеннолетний');
      } else if (this.age > 120) {
        alert(this.name +  ' Вам больще 120 лет!');
      } else {
        alert('Привет, ' + this.name + ' твой возраст: ' +  this.age  );
      }
    }
  },
};
</script>

<template>
  <div class="container">
    <form @submit="submitForm">
      <p>Имя:</p>
      <input type="text" id="name" v-model="name" required>
      <br>
      <p>Возраст:</p>
      <input type="number" id="age" v-model.number="age" required>
      <br>
      <button >Отправить</button>
    </form>
  </div>
</template>
<style scoped>
.container{
  padding: 40px;
}

</style>
