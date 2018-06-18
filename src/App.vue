<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import './style/unit/bootstrap.scss';
import MyHeader from './components/MyHeader'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>
