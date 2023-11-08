<template>
  <div class="main">
    <div class="microphone"></div>
    <div class="data__output">{{ data__output }}</div>
    <div class="result__output">{{ result__output }}</div>
    <div class="top__buttons">
      <div class="button clear blue" @click="handleClick('C')">C</div>
      <div class="button division blue" @click="handleClick('=')">=</div>
    </div>
    <div class="buttons">
      <button class="button" @click="handleClick('7')">7</button>
      <button class="button" @click="handleClick('8')">8</button>
      <button class="button" @click="handleClick('9')">9</button>
      <button class="button blue" @click="handleClick('*')">x</button>
      <button class="button" @click="handleClick('4')">4</button>
      <button class="button" @click="handleClick('5')">5</button>
      <button class="button" @click="handleClick('6')">6</button>
      <button class="button blue" @click="handleClick('-')">-</button>
      <button class="button" @click="handleClick('1')">1</button>
      <button class="button" @click="handleClick('2')">2</button>
      <button class="button" @click="handleClick('3')">3</button>
      <button class="button blue" @click="handleClick('+')">+</button>
      <button class="button" @click="handleClick('.')">.</button>
      <button class="button" @click="handleClick('0')">0</button>
      <button class="button back" @click="handleClick('<')">b</button>
      <button class="button blue" @click="handleClick('/')">/</button>
    </div>
    <div class="microphone__buttom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data__output: '',
      result__output: '',
    };
  },
  methods: {
    handleClick(otvet) {
      if (otvet === 'C') {
        this.data__output = '';
        this.result__output = '';
      } else if (otvet === '=') {
        this.result__output = this.calculate(this.data__output);
      } else if (otvet === '<') {
        let start = this.data__output.split('');
        start.pop();
        this.data__output = start.join('');
      } else {
        this.data__output += otvet;
      }
    },
    calculate(expression) {
      try {
        return new Function('return ' + expression)();
      } catch (error) {
        return 'Ошибка';
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  margin: 50px auto;
  width: 375px;
  height: 812px;
  background-color: rgba(0, 0, 0, 0.925);
  border-radius: 20px;
}

.microphone {
  margin: 0 auto;
  width: 164px;
  height: 31px;
  border-radius: 0 0 20px 20px;
  background-color: black;
}

.data__output {
  width: 335px;
  height: 96px;
  margin: 0 auto;
  margin-top: 86px;
  background-color: black;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  color: white;
}

.result__output {
  width: 335px;
  height: 96px;
  margin: 0 auto;
  background-color: black;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: 62px;
  font-weight: 900;
  color: white;
}

.top__buttons {
  width: 335px;
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  gap: 16px;
}

.division {
  width: 159.5px;
  height: 72px;
  background: #4B5EFC;
  border-radius: 24px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.division:hover {
  background: #fcb54b;
  color: rgb(0, 140, 255);
  font-size: 45px;
  transform: scale(1.1);
}

.clear {
  width: 159.5px;
  height: 72px;
  background: #4E505F;
  border-radius: 24px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.clear:hover {
  background-color: #a7a8a8;
  color: rgb(0, 140, 255);
  font-size: 45px;
  transform: scale(1.1);
}

.buttons {
  width: 335px;
  margin: 0 auto;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 71.75px 71.75px 71.75px 71.75px;
  grid-template-rows: 71px 71px 71px 71px;
  gap: 16px;
}

.back {
  background: #4E505F;
  border-radius: 24px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
}

.back:hover {
  background-color: #a7a8a8;
  color: rgb(0, 140, 255);
  font-size: 45px;
  transform: scale(1.1);
}

.button {
  background: #4E505F;
  border-radius: 24px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
}

.button:hover {
  background-color: #a7a8a8;
  background: #fcb54b;
  font-size: 45px;
  transform: scale(1.1);
}

.microphone__buttom {
  width: 134px;
  height: 5px;
  background: #FFFFFF;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 53px;
}

.blue {
  background: #4B5EFC;
}

.blue:hover {
  background: #fcb54b;
}
</style>
