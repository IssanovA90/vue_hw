<script>
export default {
  data: () => {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="allSection">
      <div class="firstSection">
        <div class="firstSection__header">
          <div class="blockBalans">
            <p class="balansText">BALANCE:</p>
            <div class="balansContent">
              <div class="walletPage"></div>
            </div>
          </div>
          <div class="blockAdd">
            <MyButton class="addProfit"> add profit </MyButton>
            <MyButton class="addExpense"> add expense </MyButton>
          </div>
        </div>
        <div class="firstSection__main">
          <div class="main__info">
            <div class="maxProfit">
              <p>Max Profit:</p>
              <div class="maxProfitBalans"></div>
            </div>
            <div class="maxExpense">
              <p>Max Expense:</p>
              <div class="maxExpenseBalans"></div>
            </div>
          </div>
          <MyButton class="addCategory">+</MyButton>
        </div>
      </div>
      <div class="secondSection">
        <h2 class="secondSection__title">PROFITS ARTICLES:</h2>
        <div class="totalProfit"></div>
      </div>
      <div class="thirdSection">
        <h2 class="thirdSection__title">EXPENSE ARTICLES:</h2>
        <div class="totalExpense"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1440px;
  height: 1024px;
  background: #e4e4e4;
  margin: 0 auto;
}
.allSection {
  width: 1380px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  gap: 40px;
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
  border: 1px solid black;
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
  width: 105px;
  height: 43px;
  border: 1px solid black;
}
.maxExpenseBalans {
  width: 105px;
  height: 43px;
  border: 1px solid black;
}
.addCategory {
  width: 500px;
  height: 43px;
  border-radius: 16px;
  color: black;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
.totalExpense{
  width: 330px;
  height: 43px;
  border-radius: 16px;
  background: #BC5D78;
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
</style>
