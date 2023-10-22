<template>
  <div class="container">
    <textarea v-model="inputText" @input="format" placeholder="Введите текст..."></textarea>
    <div>
      <div class="italik" v-html="textItalik"></div>
      <div class="bold" v-html="textBold"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      textItalik: 'Италик',
      textBold: 'Жирный',
    };
  },
  methods: {
    format() {
      const boldText = `<b>${this.inputText}</b> `;
      const italicText = `<i>${this.inputText}</i>`;
      this.textItalik = italicText;
      this.textBold = boldText;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

textarea {
  width: 300px;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
}

.italik {
  background-color: aqua;
  padding: 10px;
}
.bold {
  margin-top: 20px;
  background-color: rgb(0, 255, 76);
  padding: 10px;
}
</style>
