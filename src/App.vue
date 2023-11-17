<template>
  <div class="container">
    <div class="allSection">
      <div class="firstSection">
        <div class="firstSection__header">
          <div class="blockBalans">
            <p class="balansText">БАЛАНС:</p>
            <div class="balansContent">
              {{ balansContent }}
            </div>
          </div>
          <div class="blockAdd">
            <MyButton class="addProfit" @click="openProfitModal">Прибыль</MyButton>
            <MyButton class="addExpense" @click="openExpenseModal">Расход</MyButton>
          </div>
        </div>
        <div class="firstSection__main">
          <div class="main__info">
            <div class="maxProfit">
              <p>Max прибыль: </p>
              <div class="maxProfitBalans">{{ calculateMaxProfit }}</div>
            </div>
            <div class="maxExpense">
              <p>Max Расход:</p>
              <div class="maxExpenseBalans"> {{ calculateMaxExpense }}</div>
            </div>
          </div>
          <MyButton class="addCategory" @click="openModal">Добавить категорию</MyButton>
          <div class="blockCategory">
            <div v-for="(category, index) in categories" :key="index" class="categoryItem">
              {{ category }}
            </div>
          </div>
        </div>
      </div>
      <div class="secondSection">
        <h2 class="secondSection__title">СТАТЬИ ПРИБЫЛИ:</h2>
        <div class="ProfitArray">
          <div v-for="(profit, index) in profits" :key="index" class="expenseItem">
            <div>
              <p class="textNameInput">{{ profit.name }} = {{ profit.amount }}</p>
              <p class="textNameInput"> {{ profit.date }}</p>
            </div>
            <button class="buttonDeleteProfit" @click="deleteProfit(index)">Удалить</button>
          </div>
        </div>
        <div class="totalProfit">
          <p>Сумма прибыли:</p>
          <p>{{ totalProfitAmount }}</p>
        </div>
      </div>
      <div class="thirdSection">
        <h2 class="thirdSection__title">СТАТЬИ РАСХОДОВ</h2>
        <div class="ExpenseArray">
          <div v-for="(expense, index) in totalExpense" :key="index" class="expenseItem">
            <div>
              <p class="textNameInput"> {{ expense.description }} = {{ expense.amount }}</p>
              <p class="textCategoryInput"> {{ expense.category }}</p>
              <p class="textNameInput"> {{ expense.date }}</p>
            </div>
            <button class="buttonDeleteExpense" @click="deleteExpense(index)">Удалить</button>
          </div>
          <div class="totalExpense">
            <p>Сумма расходов</p>
            <p> {{ totalExpenseAmount }}</p>
          </div>
        </div>
      </div>
    </div>


    <div v-if="showModal" class="modal">
      <div class="modalContent">
        <input v-model="newCategoryName" placeholder="Названиие категории" class="addCategoryInput" />
        <MyButton class="addCategoryButton" @click="addCategory">Добавить категорию</MyButton>
        <MyButton class="addCategoryButton" @click="closeModal">Закрыть</MyButton>
      </div>
    </div>


    <div v-if="showProfitModal" class="modal">
      <div class="modalContent">
        <input v-model="profitAmount" type="number" placeholder="Напиши сумму" class="addCategoryInput" />
        <input v-model="nameProfit" type="text" placeholder="Откуда прибыль" class="addCategoryInput" />
        <input v-model="dataProfit" type="date" class="profitData" />
        <MyButton class="addCategoryButton" @click="addProfit">Добавить прибыль</MyButton>
        <MyButton class="addCategoryButton" @click="closeProfitModal">Выход</MyButton>
      </div>
    </div>


    <div v-if="showExpenseModal" class="modal">
      <div class="modalContent">
        <input v-model="expenseAmount" type="number" placeholder="Сумма расходов" class="addCategoryInput" />
        <input v-model="expenseDescription" type="text" placeholder="Описание расходов" class="addCategoryInput" />
        <select v-model="selectedCategory" class="addCategoryInput">
          <option v-for="(category, index) in categories" :key="index" :value="category">
            {{ category }}
          </option>
        </select>
        <input v-model="datProfit" type="date" class="profitData" />
        <MyButton class="addCategoryButton" @click="addExpense">Добавить расход</MyButton>
        <MyButton class="addCategoryButton" @click="closeExpenseModal">Выход</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      categories: ['Медицина', 'Развлечение', 'Семья', 'Работа'],
      newCategoryName: "",
      showModal: false,
      showProfitModal: false,
      showExpenseModal: false,
      profitAmount: 0,
      expenseAmount: 0,
      expenseDescription: "",
      balansContent: 0,
      totalExpense: [],
      profits: [],
      selectedCategory: '',
      maxProfit: 0,
      maxExpense: 0,
    };
  },
  computed: {
    calculateMaxProfit() {
      if (this.profits.length > 0) {
        this.maxProfit = this.profits.reduce((max, profit) => {
          return profit.amount > max ? profit.amount : max;
        }, this.profits[0].amount);
      }
      return this.maxProfit;
    },
    calculateMaxExpense() {
      if (this.totalExpense.length > 0) {
        this.maxExpense = this.totalExpense.reduce((max, expense) => {
          return expense.amount > max ? expense.amount : max;
        }, this.totalExpense[0].amount);
      }
      return this.maxExpense;
    },
    totalProfitAmount() {
      return this.profits.reduce((total, profit) => total + profit.amount, 0);
    },
    totalExpenseAmount() {
      return this.totalExpense.reduce((total, expense) => total + expense.amount, 0);
    },

  },
  methods: {
    openProfitModal() {
      this.showProfitModal = true;
    },
    closeProfitModal() {
      this.showProfitModal = false;
      this.profitAmount = 0;
      this.nameProfit = ""
    },
    deleteProfit(index) {
      this.balansContent -= this.profits[index].amount;
      this.profits.splice(index, 1);
    },
    deleteExpense(index) {
      this.balansContent += this.totalExpense[index].amount;
      this.totalExpense.splice(index, 1);
    },
    addProfit() {
      if (this.profitAmount !== 0) {
        this.balansContent += parseFloat(this.profitAmount);
        this.profits.push({
          amount: parseFloat(this.profitAmount),
          name: this.nameProfit.trim(),
          date: this.dataProfit,
        });
        this.closeProfitModal();
      }
    },
    openExpenseModal() {
      this.showExpenseModal = true;
    },
    closeExpenseModal() {
      this.showExpenseModal = false;
      this.expenseAmount = 0;
      this.expenseDescription = "";
    },
    addExpense() {
      if (this.expenseAmount !== 0 && this.expenseDescription.trim() !== "") {
        const expense = {
          amount: parseFloat(this.expenseAmount),
          description: this.expenseDescription.trim(),
          date: this.datProfit,
          category: this.selectedCategory,
        };
        this.balansContent -= expense.amount;
        this.totalExpense.push(expense);
        this.closeExpenseModal();
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.newCategoryName = "";
    },
    addCategory() {
      if (this.newCategoryName.trim() !== "") {
        this.categories.push(this.newCategoryName.trim());
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
.buttonDeleteProfit {
  color: white;
  width: 60px;
  border-radius: 8px;
  border: 3px solid #47604B;
  padding: 10px;
  background: #3c5f41;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonDeleteExpense {
  color: white;
  width: 60px;
  border-radius: 8px;
  border: 3px solid #844154;
  padding: 10px;
  background: #BC5D78;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profitData {
  padding: 10px;
  font-size: 25px;
  border: 4px solid silver;
  border-radius: 5px;
}

.container {
  width: 1440px;
  height: 1024px;
  background: #e4e4e4;
  margin: 0 auto;
}

.allSection {
  width: 1380px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  gap: 40px;
}

.categoryItem {
  width: 500px;
  border-radius: 8px;
  background: #FFF;
  padding: 10px 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContent {
  background: #fff;
  width: 500px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.firstSection {
  width: 600px;
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.firstSection__header {
  width: 500px;
  height: 150px;
  display: flex;
  justify-content: space-between;
}

.addCategoryButton {
  border-radius: 8px;
  border: 3px solid #844154;
  padding: 10px;
  color: #FFF;
  font-weight: 400;
  font-family: Istok Web;
  font-size: 16px;
  background: #BC5D78;
  cursor: pointer;
}

.addCategoryInput {
  width: 272px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 3px solid #F1F1F1;
  color: #B7B7B7;
  font-family: Istok Web;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  background: rgba(241, 241, 241, 0.10);
}

.blockBalans {
  width: 250px;
  height: 150px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.balansText {
  font-family: Istok Web;
  font-size: 20px;
  font-weight: 400;
}

.balansContent {
  width: 210px;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #55885D;
  font-family: Istok Web;
  font-size: 50px;
  font-style: normal;
}


.walletPage {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background: #e4e4e4;
  position: relative;
  left: 185px;
  bottom: 110px;
}

.blockAdd {
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.addProfit {
  width: 200px;
  padding: 10px;
  border-radius: 16px;
  border: 3px solid #3c5f41;
  background: #55885d;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  font-family: "Istok Web", sans-serif;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.addExpense {
  width: 200px;
  padding: 10px;
  border-radius: 16px;
  border: 3px solid #844154;
  background: #bc5d78;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  font-family: "Istok Web", sans-serif;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.firstSection__main {
  margin-top: 50px;
  width: 500px;
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.maxProfit {
  width: 245px;
  height: 43px;
  background: #55885d;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-family: Istok Web;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.main__info {
  display: flex;
  justify-content: space-between;
}

.maxExpense {
  width: 245px;
  height: 43px;
  background: #bc5d78;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-family: Istok Web;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.maxProfitBalans {
  width: 100px;
  height: 43px;
  color: #FFF;
  display: flex;
  font-family: Istok Web;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
}

.maxExpenseBalans {
  width: 100px;
  height: 43px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Istok Web;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.addCategory {
  width: 500px;
  height: 43px;
  border-radius: 8px;
  background: #FFF;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.blockCategory {
  width: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

}

.secondSection {
  width: 350px;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.secondSection__title {
  color: #55885d;
  font-family: Istok Web;
  font-size: 18px;
  font-weight: 700;
}

.totalProfit {
  width: 330px;
  height: 43px;
  border-radius: 16px;
  background: #55885d;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: Istok Web;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.totalExpense {
  width: 330px;
  height: 43px;
  margin-top: 10px;
  border-radius: 16px;
  background: #BC5D78;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: Istok Web;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.thirdSection__title {
  color: #bc5d78;
  font-family: Istok Web;
  font-size: 18px;
  font-weight: 700;
}

.thirdSection {
  width: 350px;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.expenseItem {
  display: flex;
  width: 330px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #000;
  justify-content: space-between;
  align-items: center;
  
}

.textNameInput {
  color: #47604B;
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.textCategoryInput {
  width: 150px;
  color: #47604B;
  font-family: Istok Web;
  font-size: 18px;
  font-weight: 700;
  border-radius: 24px;
  border: 1px solid #844154;
  background: #FFF;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ProfitArray {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
