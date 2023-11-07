
<script> 
export default { 
  data() { 
    return { 
      countSlides: 0, 
      slides: [ 
        { 
          title: "JavaScript", 
          text: "Язык програмирования", 
          blockColor: "#687EFF", 
          titleColor: "#F99417", 
        }, 
        { 
          title: "React", 
          text: "JavaScript-библиотека", 
          blockColor: "#FFDFDF", 
          titleColor: "#F99417", 
        }, 
        { 
          title: "Vue", 
          text: "JavaScript-фреймворк", 
          blockColor: "#D6C7AE", 
          titleColor: "#F99417", 
        }, 
      ], 
    }; 
  }, 
  methods: { 
    next() { 
      if (this.countSlides < this.slides.length - 1) { 
        this.countSlides++; 
      } 
    }, 
    back() { 
      if (this.countSlides > 0) { 
        this.countSlides--; 
      } 
    }, 
  }, 
}; 
</script> 
<template> 
  <div class="slides"> 
    <button @click="back">Назад</button> 
    <div :style="{ backgroundColor: slides[countSlides].blockColor }" class="slide"> 
      <h2 :style="{ color: slides[countSlides].titleColor }"> 
        {{ slides[countSlides].title }} 
      </h2> 
      <p>{{ slides[countSlides].text }}</p> 
    </div> 
    <button @click="next">Вперед</button> 
  </div> 
</template> 
 
<style> 
.slides { 
  width: 500px; 
  margin: 0 auto; 
  margin-top: 100px; 
  gap: 30px; 
  display: flex; 
  align-items: center; 
 
} 
.slide { 
  width: 250px; 
  margin: 20px 0; 
  padding: 20px; 
  color: #F99417; 
  border-radius: 30px; 
  display: flex; 
  justify-content: center; 
  flex-direction: column; 
  text-align: center; 
  box-shadow: silver 10px 10px 10px ; 
} 
button{ 
  width: 70px; 
  border: none; 
  background-color: #1F4172; 
  border-radius: 10px; 
  color: #E8A9A9; 
  box-shadow: silver 10px 10px 10px ; 
   
} 
</style>