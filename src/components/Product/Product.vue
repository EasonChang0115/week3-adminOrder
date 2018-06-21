<template>
  <div class="main-order">
    <div class="container">
      <div class="unit-tools">
        <div class="left">
          <input type="checkbox" name="" id="">
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="right">
          <button class="btn black">ADD NEW PRODUCT<i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Original</th>
              <th>Discount</th>
              <th>Size</th>
              <th>Color</th>
              <th>Inventory</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,pindex) in ProductListData" :key="pindex">
              <td><input type="checkbox" name="" id=""></td>
              <td>{{ product.name }}</td>
              <td>${{ product.original }}</td>
              <td>${{ product.discount }}</td>
              <td>
                <div class="size-list">
                  <div class="size" v-for="(size,sindex) in product.sizelist" :key="sindex">
                    {{size.size}}
                  </div>
                </div>
              </td>
              <td>
                <div class="size-list">
                  <div class="size" v-for="(size,sindex) in product.sizelist" :key="sindex">
                    <div class="size" v-for="(color,cindex) in size.color" :key="cindex">
                      {{color.name}}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="size-list">
                  <div class="size" v-for="(size,sindex) in product.sizelist" :key="sindex">
                    <div class="size" v-for="(color,cindex) in size.color" :key="cindex">
                      {{color.inventory}}
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <paginaion :totalPage="totalPage" :currentPage="currentPage" @changePage="changePage"></paginaion>
    </div>
  </div>
</template>

<script>
import DropDown from '../DropDown'
import Paginaion from '../Paginaion'
export default {
  name: 'Product',
  data () {
    return {
      ProductListData: [
        {
          name: 'Mauris non tem.',
          original: '3200',
          discount: '2800',
          sizelist: [
            {
              size: 'L',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            },
            {
              size: 'M',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            },
            {
              size: 'S',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            }
          ],
          status: 1
        },{
          name: 'Curabitur lobo.',
          original: '3200',
          discount: '2800',
          sizelist: [
            {
              size: 'L',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            },
            {
              size: 'M',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            },
            {
              size: 'S',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            }
          ],
          status: 1
        },
        {
          name: 'Curabitur lobo.',
          original: '3200',
          discount: '2800',
          sizelist: [
            {
              size: 'L',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            },
            {
              size: 'M',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            },
            {
              size: 'S',
              color: [{name: "Gray", inventory: 15},{name: "Black", inventory: 20}],
            }
          ],
          status: 0
        }
      ],
      totalPage: 10,
      currentPage: 1,
    }
  },
  components: {
    DropDown,
    Paginaion
  },
  methods: {
    changePage(page){
      this.currentPage = page
    },
    computedTotal(array){
      let total = 0;
      array.forEach(item=>{
        total += (item.price * item.quantity)
      })
      return total;
    },
    computedTime(string){
      return string.split(" ");
    }
  }
}
</script>

<style lang="sass">
@import '../../style/Order/main-order.sass'
</style>
