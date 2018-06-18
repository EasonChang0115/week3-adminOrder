<template>
  <header class="my-header">
    <div class="container ">
      <div class="logo">Shoptime</div>
      <ul class="nav-list">
        <li class="nav-item"><router-link active-class to="/">HOME</router-link></li>
        <li class="nav-item"><router-link active-class to="/order">ORDERS</router-link></li>
        <li class="nav-item"><router-link active-class to="/product">PRODUCT</router-link></li> 
      </ul>
      <div class="admin">ADMIN</div>
      <div class="toggle-btn" @click="toggleNav"><i class="fas fa-bars"></i></div>
      <ul :class="isOpenNav ?　'nav-list rwd-dom active' : 'nav-list rwd-dom'">
        <li class="nav-item"><router-link active-class to="/">HOME</router-link></li>
        <li class="nav-item"><router-link active-class to="/order">ORDERS</router-link></li>
        <li class="nav-item"><router-link active-class to="/product">PRODUCT</router-link></li> 
      </ul>
    </div>
  </header>
</template>

<script>
import DropDown from './DropDown';
export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      msg: 'Header',
      isOpenNav: false
    }
  },
  methods: {
    toggleNav() {
      this.isOpenNav = !this.isOpenNav
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../style/my-header.sass'
</style>
