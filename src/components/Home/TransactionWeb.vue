<template>
  <div class="transaction-Web">
    <div class="sub-block">
      <div class="title">Transaction Website</div>
      <div style="width: 100%" v-for="(web,index) in websitesData" :key="index">
        <Website :websiteObj="web"></Website>
        <hr v-if="index!==(websitesData.length-1)">
      </div>
    </div>
  </div>
</template>

<script>
import Website from './Website'
export default {
  name: 'TransitionWeb',
  data () {
    return {
      msg: 'TransitionWeb',
      websitesData: [
        {
          name: 'facebook',
          image: 'https://png.icons8.com/metro/1600/facebook.png',
          url: 'Facebook.com',
          value: 45836,
          isgood: true,
          percent: 20
        },{
          name: 'google',
          image: 'https://cdn.icon-icons.com/icons2/887/PNG/512/Google_icon-icons.com_68981.png',
          url: 'google.com',
          value: 23582,
          isgood: true,
          percent: 12
        },{
          name: 'shopity',
          image: 'https://cdn.icon-icons.com/icons2/512/PNG/512/shopify_icon-icons.com_50754.png',
          url: 'Shopify.com',
          value: 2489,
          isgood: false,
          percent: 20
        },{
          name: 'wordpress',
          image: 'https://image.freepik.com/free-icon/wordpress-logo-of-a-letter-in-a-circle_318-49857.jpg',
          url: 'Wordpress.com',
          value: 1057,
          isgood: false,
          percent: 20
        }
      ]
    }
  },
  components: {
    Website
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../../style/Home/transaction-web.sass'
</style>
