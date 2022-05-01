<template>
  

    <div class="h-screen w-screen relative overflow-hidden bg-gray-600">
      <img class=" object-cover opacity-80 -z-50 h-full w-full" src="../assets/background/咖啡背景.jpg" alt=""/>
        <div class=" absolute top-0 overflow-y-auto  h-full w-full">
       
        <header_1 />

        <main>
          <div class="flex flex-wrap justify-center items-center  py-24 ">
            

              <div class="w1:w-[250px] ">
                <div class="relative flex justify-end items-end cursor-pointer">
                  <p class="absolute text-white py-7 mx-3 ">關於我們</p>
                  <p class="absolute text-white py-1 mx-2 ">About Us</p>
                  <router-link to="/About"><img src="../assets/background/咖啡圖片3.png" alt="" class=""></router-link>
                </div>
              </div>
              <div class="inline-block">
                <div class="">
                  <div class="relative flex justify-end items-end cursor-pointer">
                    <p class="absolute text-white py-7 mx-4 ">咖啡飲品</p>
                    <p class="absolute text-white py-1 mx-2 ">coffe drink</p>
                    <router-link to="/meal"><img src="../assets/background/咖啡圖片1.png" alt="" class="ww:w-[300px]"></router-link>
                  </div>
                </div>
                <div class="">
                  <div class="relative flex justify-end items-end cursor-pointer">
                    <p class="absolute text-white py-7 mx-8 ">咖啡豆</p>
                    <p class="absolute text-white py-1 mx-2 ">coffee beans</p>
                    <router-link to="/Coffee_bag"><img src="../assets/background/咖啡圖片2.png" alt="" class="ww:w-[300px]"></router-link>
                  </div>
                </div>
              </div>
              <div class="w1:w-[250px]">
                <div class="relative flex justify-end items-end cursor-pointer">
                    <p class="absolute text-black py-7 mx-7 ">簡餐</p>
                    <p class="absolute text-black py-1 mx-2 ">light meal</p>
                    <router-link to="/meal"><img src="../assets/background/咖啡圖片4.png" alt="" class=""></router-link>
                </div>
              </div>

          </div>
          
        </main>
        
        

        <footer>
          <div class="flex justify-center items-center text-white md:pt-16 pt-16">
            <p class="text-2xl ">© 2022 cafe Rights Reserved.</p>
          </div>
        </footer>
        
      </div>
    </div>



</template>

<script>
import header_1 from '../components/header_1.vue'
import footer_1 from '../components/footer_1.vue'
export default {
  
  components:{
   header_1,
   footer_1
  }
};
</script>

<style scoped>

</style>
