<template>
  <div>
    <h1>Добро пожаловать в мир КИНО!</h1>
    <div class="main">
      <h1>КИНОПОИСК</h1>
      <h2>Авторизация</h2>
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <router-link to="/kino">ВХОД</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  mounted() {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      this.email = savedEmail;
    }
  },
  methods: {
    login() {
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('pass');

      if (this.email !== savedEmail || this.password !== savedPassword) {
        alert('Данные не совпадают');
      } else {
        // Используем Vue Router для перехода на другую страницу
        this.$router.push('/kino.vue');
      }
    }
  }
};
</script>

<style>
div {
  width: 100%;
  height: 100vh;
 
}
</style>
