<template>

<div class="flex flex-wrap justify-evenly py-14">
    <div class="">
      <div>
          <svg class="-mx-6"  @click="$emit('delone',id)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        <img :src="`/image/${img}`" alt="">
      </div>
      <div class="flex justify-center py-5">
        {{name}}
      </div>
    </div>
    <div class="flex-row py-2">
      <div class="flex py-8 my-4 border-t">
        <p class="flex justify-center items-center md:w-full">數量</p>
        <div class="flex items-center px-6 pl-16 cursor-pointer">
          <div @click="$emit('subone',id)">-</div>
        </div>

        <div class="flex px-4">
          <input type="text" size="1" v-model="count" />
        </div>

        <div class="flex items-center px-2 cursor-pointer">
          <div @click="$emit('addone',id)">+</div>
        </div>
      </div>

      <div class="flex justify-between pt-4 border-t">
        <p>小計</p>
        <p>{{count * price}}</p>
        <p>TWD</p>
      </div>
      
    </div>
  </div>



</template>

<script>
export default {
    props:[
        "id",
        "name",
        "price",
        "count",
        "img"
    ],
    data() {
        return {
            
        }
    },
};
</script>

<style>
</style>