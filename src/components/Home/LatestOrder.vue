<template>
  <div class="latest-order">
    <div class="sub-block">
      <div class="title">Latest Order</div>
      <div style="width: 100%" v-for="(order,index) in orderData" :key="index">
        <order-box :OrderObj="order"></order-box>
        <hr v-if="index!==(orderData.length-1)">
      </div>
      
    </div>
  </div>
</template>

<script>
import OrderBox from './OrderBox'
export default {
  name: 'LatestOrder',
  data () {
    return {
      orderData: [
        {
        productName: "Vintage T-shirt",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1297fa068f9bd048e8e42b6f1ccbd1e&auto=format&fit=crop&w=500&q=60",
        bougthTime: "2018/6/13  13:42",
        bougter: "Belle Willis",
        totalCost: 3200
      },
      {
        productName: "Cowboy Jacket",
        image: "https://images.unsplash.com/photo-1525996250065-6087ee430051?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152612f978fae005917e8dfbd8cc6471&auto=format&fit=crop&w=500&q=60",
        bougthTime: "2018/6/13  10:45",
        bougter: "Adrian Cummings",
        totalCost: 2800
      },
      {
        productName: "Coach Coat",
        image: "https://images.unsplash.com/photo-1510064189423-ea9cbb7d2660?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c03527da90f88ab1bc7184038278ea63&auto=format&fit=crop&w=500&q=60",
        bougthTime: "2018/6/13  8:26",
        bougter: "Lura Holland",
        totalCost: 1600
      }]
    }
  },
  components: {
    OrderBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../../style/Home/latest-order.sass'
</style>
