<template>
  <div class="web-site">
    <div class="image-box">
      <img :src="websiteObj.image" alt="">
    </div>
    <div class="url-name">{{ websiteObj.url }}</div>
    <div class="number">{{ websiteObj.value.toLocaleString('en-US') }}</div>
    <div :class="websiteObj.isgood ? 'degree good' : 'degree bad'">
      <i :class="websiteObj.isgood ? 'fas fa-arrow-up' :'fas fa-arrow-down'"></i>
      {{ websiteObj.percent + '%' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Website',
  props: {
    websiteObj: Object
  },
  data () {
    return {
      msg: 'Website'
    }
  }
}
</script>
