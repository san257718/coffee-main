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

            <main>
              

                <div class="flex flex-wrap justify-evenly">

                  <card v-for="item in items" :key="item.id" v-bind="item" />
                  
                </div>
            </main>
       
     

        <footer>
          <div class="flex justify-center items-center md:pt-16 pt-16">
            <p class="text-2xl">© 2022 cafe Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  

</template>

<script>
import Coffee_items from '../assets/coffee.json'
import card from '../components/card.vue'
import footer_1 from '../components/footer_1.vue'
export default {
  
  data() {
    return {
      items: Coffee_items
    }
  },
  components:{
   footer_1,
   card
  }
};
</script>

<style>

</style>