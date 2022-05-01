<template>
  

    <header class="flex flex-wrap justify-around">
      <img class=" flex justify-center items-center" src="../assets/background/Logo-咖啡.png" alt=""/>
        <div class="flex flex-wrap md:flex-wrap justify-center items-center px-16 text-white">
            <router-link to="/" class="text-xl mx-16">首頁</router-link>
            <router-link to="/About" class="text-xl mx-16">關於我們</router-link>
            <!-- <a href="/" class="text-xl mx-16"></a> -->
             <router-link to="/Coffee_bag" class="text-xl mx-16">線上購物</router-link>
             <router-link to="/Shopping" class="text-xl mx-16">購物車</router-link>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>