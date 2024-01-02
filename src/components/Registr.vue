<template>
  <div class="circle" ref="circle"></div>
  <div class="main">
  <h1>КИНОПОИСК</h1>
    <h2>РЕГИСТРАЦИЯ</h2>
    <div class="form">
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button @click="register">Регистрация</button>
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
    this.moveCircle(); // Запуск анимации при загрузке компонента
  },
  methods: {
    register() {
      if (!this.password || !this.email) {
        alert('Введите все корректно');
      } else {
        // Сохранение в localStorage
        localStorage.setItem('pass', this.password);
        localStorage.setItem('email', this.email);

        // Используем Vue Router для перехода на другую страницу
        this.$router.push('/avtor');
      }
    },
    moveCircle() {
      const circle = this.$refs.circle;
      let angle = 0;
      const radius = 450; // Радиус для движения в форме бесконечности

      const animate = () => {
        const x = radius * Math.sin(angle); // Вычисляем координаты x
        const y = radius * Math.sin(angle) * Math.cos(angle); // Вычисляем координаты y

        circle.style.left = `${window.innerWidth / 2 + x}px`; // Обновляем позицию по горизонтали
        circle.style.top = `${window.innerHeight / 2 + y}px`; // Обновляем позицию по вертикали

        angle += 0.02; // Увеличиваем угол для плавного движения
        requestAnimationFrame(animate); // Запуск анимации следующего кадра
      };

      animate(); // Запуск анимации
    }
  }
};
</script>

<style>
body {
  padding-top: 100px;
  background-color: #FCE09B;
}

h1 {
  color: #B2533E;
  margin-bottom: 5px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #B2533E;
  position: absolute;
  transition: left 0.05s, top 0.05s; /* Анимация плавного перемещения */
  z-index: 1;
  box-shadow: #B2533E 0px 0px 60px 30px;
}

.main {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 10px solid #186F65;
  border-radius: 15px;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  z-index: 2;
  position: relative;
}

.form {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
button {
  width: 70%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #B2533E;
  padding: 5px;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  background-color: #B2533E;
  color: white;
  border: none;
}
</style>
