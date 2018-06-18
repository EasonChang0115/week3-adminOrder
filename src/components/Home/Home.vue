<template>
  <div class="main-home">
    <div class="container">
      <div class="title-bar">
        <div class="title">OVERVIEW</div>
      </div>
      <div class="top-box">
        <div class="sub-block">
          <div class="table-information"><i class="fas fa-hand-holding-usd"></i>TOTAL REVENUE</div>
          <div class="number yellow">{{ totalReverse.toLocaleString('en-US') }}</div>
        </div>
        <div class="sub-block">
          <div class="table-information"><i class="fas fa-th-large"></i>TOTAL COST</div>
          <div class="number red">{{ totalCost.toLocaleString('en-US') }}</div>
        </div>
        <div class="sub-block">
          <div class="table-information"><i class="fas fa-money-bill"></i>NET INCOME</div>
          <div class="number blue">{{ netIncome.toLocaleString('en-US') }}</div>
        </div>
      </div>
      <div class="middle-box">
        <line-chart></line-chart>
      </div>
      <div class="bottom-box">
        <transaction-web></transaction-web>
        <lastest-order></lastest-order>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart'
import TransactionWeb from './TransactionWeb'
import LastestOrder from './LatestOrder'

export default {
  name: 'Home',
  data () {
    return {
      totalReverse: 54540,
      totalCost: 12660,
      netIncome: 41880
    }
  },
  components: {
    LineChart,
    TransactionWeb,
    LastestOrder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../../style/Home/main-home.sass'
.sub-block
  padding: 30px 40px
  background-color: white
  box-shadow: 0 0 10px 5px #EBEBEB
  border-radius: 3px
  display: flex
  flex-direction: column
  align-items: center
</style>
