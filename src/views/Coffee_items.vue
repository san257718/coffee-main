<template>
  
      <div class="h-screen w-screen relative overflow-hidden">
      <img class=" object-cover opacity-80 -z-50 h-full w-full" src="../assets/background/購物車背景.png" alt=""/>
        <div class=" absolute top-0 h-full w-full overflow-y-auto">
            <header class="flex flex-wrap justify-around">
                <img class=" flex justify-center items-center" src="../assets/background/Logo-咖啡.png" alt=""/>
                    <div class="flex flex-wrap md:flex-wrap justify-center items-center px-16 text-black">
                        <router-link to="/" class="text-xl mx-16">首頁</router-link>
                        <router-link to="/About" class="text-xl mx-16">關於我們</router-link>
                        <router-link to="/Coffee_bag" class="text-xl mx-16">線上購物</router-link>
                        <router-link to="/Shopping" class="text-xl mx-16">購物車</router-link>
                    </div>
            </header>

            <div class="flex flex-wrap justify-evenly pt-20">
              <div>
                <img :src="`/image/${currentItem.img}`">
              </div>

              <div class="flex-wrap">
                <p class="text-4xl font-bold pb-14 pt-8">{{currentItem.name}}</p>
                <p class="text-xl font-semibold pb-5">烘培度 : {{currentItem.roast}}</p>
                <p class="text-xl font-semibold pb-5">產地 : {{currentItem.Origin}}</p>
                <p class="text-xl font-semibold pb-5">處理法 : {{currentItem.method}}</p>
                <p class="text-xl font-semibold pb-5">風味 : {{currentItem.flavour}}</p>
                  <div class="border-b py-6"></div>
                  <div class="flex pt-6 flex-wrap justify-evenly">
                    <div>
                      <p class="text-lg ">{{currentItem.unit}}g / {{currentItem.price}} TWD</p>
                    </div>
                  </div>

                  <div class="flex py-12 justify-evenly flex-wrap">
                    <div class="flex relative ">
                      <div class="flex items-center cursor-pointer border px-4">
                          <div @click="sub">-</div>
                      </div>

                        <div class="flex px-4 border">
                          <input type="text" size="1" v-model="count" class="">
                        </div>

                        <div class="flex items-center cursor-pointer border px-4">
                          <div @click="add">+</div>
                        </div>
                    </div>

                    <div class="relative ">
                      <div class="flex justify-center border w-32 p-4 cursor-pointer bg-black text-white" @click="addToCart()">
                        加到購物車
                      </div>
                    </div>
                  </div>
              </div>
            </div>


            <footer>
              <div class="flex justify-center items-center md:pt-16 pt-16">
                <p class="text-2xl">© 2022 cafe Rights Reserved.</p>
              </div>
            </footer>

            
        </div>
    </div>    
  

</template>

<script>
import footer_1 from '../components/footer_1.vue'
import Coffee_items from '../assets/coffee.json'
export default {
  data() {
    return {
      items: Coffee_items,
      id: 1,
      name:"",
      unit: 0,
      count: 1
      
    }
  },
   mounted() {
    // 頁面一進來，捕捉目前網址中的 id
    this.id = this.$router.currentRoute._value.params.id

    // 在 router 裡面註冊一個 網址解析前 的觸發事件
    // 這只會在網址改變時才會觸發
    // 把改變後的網址的 id 存回去 this.id
    this.$router.beforeResolve(to => {
      if(to.path === "/Shopping/"){
        this.id = to.params.id
      }
      
    })
  },
  computed:{
    currentItem(){
      return this.items.filter(item => {
       return item.id == this.id
      })[0]
    }
  },
  methods:{
      add(){
        this.count++
      },
      sub(){
        if (this.count > 1){
          this.count--
        }else{
          this.count=1
        }
      },
      addToCart(){
        const carts = JSON.parse(window.localStorage.getItem("coffee.carts")) ?? []

        if(carts.some(c => c.id === this.id)){
          carts.forEach(c => {
           if(c.id == this.id){
             c.count = Number(c.count) + this.count
           }
        })

        }else{
          carts.push({
            id: this.id,
            count: this.count
          })
        }

         window.localStorage.setItem("coffee.carts", JSON.stringify(carts))
         this.$router.push("/Shopping/")
      }
      
    
  },
  components:{
   footer_1
  }
}


</script>

<style>

</style>