<template>
  <div class="container">
    <div v-for="(column, index) in columns" :key="index" class="oneColumn">
      <input type="text" v-model="column.firstname" :placeholder="'Название'" />
      <input type="number" v-model="column.firstPercent"  @input="firstPercent(index)" />
      <button @click="saveNameFirst(index)">Сохранить</button>
      <div class="block_diagramma">
        <div
          class="diagramma"
          :style="{ height: column.firstPercent + '%', backgroundColor: '#DE8F5F' }"
        ></div>
      </div>
      <p>{{ column.firstPercent }}%</p>
      <p>{{ column.firstSavedName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: Array.from({ length: 3 }, () => ({
        firstname: "",
        firstPercent: 0,
        firstSavedName: "",
      })),
    };
  },
  methods: {
    firstPercent(index) {
      if (this.columns[index].firstPercent < 0) {
        this.columns[index].firstPercent = 0;
      } else if (this.columns[index].firstPercent > 100) {
        this.columns[index].firstPercent = 100;
      }
    },
    saveNameFirst(index) {
      this.columns[index].firstSavedName = this.columns[index].firstname;
    },
  },
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #d6d46d;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  height: 600px
}
.oneColumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.block_diagramma {
  width: 200px;
  height: 300px;
  border: 1px solid #9a4444;
  border-radius: 10px;
}
input {
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background-color: #f4dfb6;
  border: none;
  color: #9a4444;
  padding-left: 10px;
}
button {
  width: 150px;
  height: 30px;
  font-weight: 900;
  border-radius: 10px;
  background-color: #f4dfb6;
  border: none;
  color: #9a4444;
}
.diagramma {
  border-radius: 10px 10px 0 0;
}
</style>
