<template>
  <div>
    <div class="header">
      <h3>КИНОПОИСК</h3>
      <div class="input">
        <label for="">Поиск по жанру или слову</label>
        <input v-model="searchQuery" type="text" placeholder="пиши сюда">
        <button @click="searchMovies">поиск</button>
      </div>
      <div class="block">
        <div class="basket">
          <img class="imgg" src="img/bookmark_favourite_mark_read_book_icon_133476.png" alt="" @click="goToBasket">
        </div>
        <div class="users">
          <img class="user" src="img/1946429.png" alt="">
          <p>{{ userEmail }}</p>
        </div>
        <div class="exit">
          <img class="imgg" src="img/25376.png" alt="" @click="logout">
        </div>
      </div>
    </div>
    <div class="main">
      <h1>Фильмы</h1>
      <ul>
        <li v-for="film in films" :key="film.id">
          <div class="title">
            {{ film.name }}
            <img :src="film.poster" alt="Poster">
            <button @click="addToFavorites(film)">Добавить в избранное</button>
            <p class="price">235$</p>
          </div>
        </li>
      </ul>
    </div>
    <h1>Kino Page</h1>
    <router-link to="/basket">basket</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      films: [],
      userEmail: ''
    };
  },
  mounted() {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      this.userEmail = savedEmail;
    }
  },
  methods: {
    searchMovies() {
      fetch(`https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=12&query=${this.searchQuery}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-API-KEY': 'WFFVXBQ-G5ZMMV9-PVJPA6Q-8DNZEVD'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.films = data.docs;
          this.searchQuery = '';
        })
        .catch(error => console.error(error));
    },
    addToFavorites(film) {
      const selectedMovies = JSON.parse(localStorage.getItem('selectedMovies')) || [];
      selectedMovies.push({ name: film.name, poster: film.poster });
      localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
    },
    goToBasket() {
      this.$router.push('/basket');
    },
    logout() {
      window.location.href = 'registr.vue';
      localStorage.clear();
    }
  }
};
</script>

<style>
div {
  width: 100%;
  height: 100vh;

}
/* Add your CSS styles for the component here */
</style>
