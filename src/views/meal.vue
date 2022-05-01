<template>
  <div class="h-screen w-screen relative overflow-hidden">
      <img class="object-cover opacity-90 -z-50 h-full w-full" src="../assets/meal/西餐背景.png" alt="">
        <div class=" absolute top-0 overflow-y-auto  h-full w-full">

            <header_1 />

            <div class="flex flex-wrap justify-evenly cursor-pointer 2xl:grid-cols-4">
                
                <meal_card v-for="item in items" :key="item.id" v-bind="item" />

            </div>



            <footer_1 />
        </div>
  </div>
</template>

<script>
import light_meal from '../assets/light_meal.json'
import header_1 from '../components/header_1.vue'
import footer_1 from '../components/footer_1.vue'
import meal_card from '../components/meal_card.vue'
import meal_cart from '../components/meal_cart.vue'
export default {
  data() {
      return {
          items: light_meal,
      }
  },
  
  
  
    
  components:{
   header_1,
   footer_1,
   meal_card,
   meal_cart
  }
};
</script>

<style>


</style>