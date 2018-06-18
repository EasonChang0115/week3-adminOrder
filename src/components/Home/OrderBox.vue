<template>
  <div class="order">
    <div class="image-box" :style="{backgroundImage: `url(${OrderObj.image})`}"></div>
    <div class="information">
      <div class="sub-title">{{ OrderObj.productName }}</div>
      <div class="bougth-time"><i class="fas fa-clock"></i>{{ OrderObj.bougthTime }}</div>
      <div class="boughter"><i class="fas fa-male"></i>{{ OrderObj.bougter }}</div>
    </div>
    <div class="total-cost">
      <div class="string">Total</div>
      <div class="cost">{{ OrderObj.totalCost.toLocaleString('en-US') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderBox',
  props: {
    OrderObj: Object
  },
  data () {
    return {
      msg: 'OrderBox'
    }
  }
}
</script>
