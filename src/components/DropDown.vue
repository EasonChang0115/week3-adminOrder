<template>
  <div class="drop-down">
    <button class="btn" :style="{backgroundColor: selectedLists[id].color}" @click="toggleSelectList">
      {{ selectedLists[id].name }}
      <i class="fas fa-caret-down"></i>
    </button>
    <ul class="select-list" v-if="isOpenlist">
      <li class='select-item' v-for="list in selectedLists">
        <a href="#">{{ list.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ["id"],
  data() {
    return {
      selectedLists: [
        {id: 0, name: 'Paid', color: "#7ED321"}, 
        {id: 1, name: 'UnPaid', color: "#757575"},
        {id: 2, name: 'Shopping', color: "#F5A623"},
        {id: 3, name: 'Done', color: "#4A90E2"},
      ],
      isOpenlist: false
    }
  },
  methods: {
    toggleSelectList() {
      this.isOpenlist = !this.isOpenlist
    },
    handleSelected(id) {
      
    }
  }
}
</script>

<style lang="sass">
.drop-down
  .select-list
    box-shadow: 1px 2px 10px 0 #9B9B9B
    background-color: white
    margin-top: 8px
    position: absolute
    top: 32px
    left: 0px
    z-index: 99
    .select-item
      a
        display: inline-block
        width: 100%
        color: black
        font-size: 16px
        font-weight: bold
        color: black
        text-align: center
        padding: 8px 16px
        transition: .3s
        &:hover
          background-color: black
          color: white
</style>
