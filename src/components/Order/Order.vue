<template>
  <div class="main-order">
    <div class="container">
      <div class="unit-tools">
        <div class="left">
          <input type="checkbox" name="" id="">
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="right">
          <select name="" id="">
            <option value="">EDIT SECTION</option>
            <option value="">EDIT SECTION2</option>
            <option value="">EDIT SECTION3</option>
          </select>
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
      <div class="table-responsive">

        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Product List</th>
              <th>Total</th>
              <th>Add to Cart</th>
              <th>Check-out</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,oindex) in OrderListData" :key="oindex">
              <td><input type="checkbox" name="" id=""></td>
              <td>{{ order.Customer }}</td>
              <td style="width: 160px">
                <div v-for="(product,pindex) in order.products" class="product" :key="pindex">
                  <div class="product-name">{{ product.name }}</div>
                  <div class="product-price-quantity">
                    <div class="price">${{ product.price.toLocaleString('en-US') }}</div>
                    <div class="quantity">{{ product.quantity }}</div>
                  </div>
                  <hr v-if="pindex !== (order.products.length - 1)">
                </div>
              </td>
              <td>
                {{ '$' + computedTotal(order.products).toLocaleString('en-US') }}
              </td>
              <td>
                <div class="date">{{ computedTime(order.addCartTime)[0] }}</div>
                <div class="time">{{ computedTime(order.addCartTime)[1] }}</div>
              </td>
              <td>
                <div class="date">{{ computedTime(order.checkOutTime)[0] }}</div>
                <div class="time">{{ computedTime(order.checkOutTime)[1] }}</div>
              </td>
              <td style="width: 160px;">{{ order.address }}</td>
              <td>
                <drop-down :id="order.status"></drop-down>
              </td>
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
  name: 'Order',
  data () {
    return {
      OrderListData: [
        {
          Customer: "Ian Medina",
          products: [
            {
              name: "Vestibulum.",
              price: 1400,
              quantity: 1
            },
            {
              name: "Fusce vehicu.",
              price: 800,
              quantity: 1
            }
          ],
          addCartTime: "2018/6/8 13:39",
          checkOutTime: "2018/6/8 20:23",
          address: "386 Windler Drives Apt. 358",
          status: 0
        },{
          Customer: "Manuel Stephens",
          products: [
            {
              name: "Donec facili.",
              price: 1400,
              quantity: 1
            },
          ],
          addCartTime: "2018/6/8 13:39",
          checkOutTime: "2018/6/8 20:23",
          address: "531 Orval Mission Suite 134",
          status: 0
        },{
          Customer: "Daisy Reynolds",
          products: [
            {
              name: "Curabitur lo.",
              price: 1400,
              quantity: 1
            },
            {
              name: "Donec facili.",
              price: 800,
              quantity: 1
            },
            {
              name: "Nam porttito.",
              price: 800,
              quantity: 1
            }
          ],
          addCartTime: "2018/6/8 13:39",
          checkOutTime: "2018/6/8 20:23",
          address: "38 Juston Islands Apt. 012",
          status: 2
        },{
          Customer: "Daisy Reynolds",
          products: [
            {
              name: "Lorem ipsum.",
              price: 1400,
              quantity: 1
            },
            {
              name: "Nam porttito.",
              price: 1400,
              quantity: 1
            },
          ],
          addCartTime: "2018/6/8 13:39",
          checkOutTime: "2018/6/8 20:23",
          address: "38 Juston Islands Apt. 012",
          status: 3
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
