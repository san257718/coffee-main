<template>
<router-link to="/Shopping">
    <div class="w-64 h-64 relative group overflow-hidden">
      <img class="w-full h-full object-cover" :src="`/image/${img}`" @click="addMeal()">
      <div @click="cartData()"></div>
      
      <div class="flex w-full h-16 flex-col items-center absolute -bottom-16 text-white bg-black/50 py-2 group-hover:opacity-100 group-hover:bottom-0 opacity-0 transition-all duration-300" >
        <span>{{name}}</span>
        <span>$ {{price}}</span>
      </div>
    </div>
</router-link>

</template>

<script>

export default {
    props:[
        "id",
        "name",
        "price",
        "img",
        
        
    ],
    data() {
        return {
           count: 1
        }
    },
    methods:{
      addMeal(){
        const Meal = JSON.parse(window.localStorage.getItem("coffee.Meal")) ?? []

        if(Meal.some(c => c.id === this.id)){
          Meal.forEach(c => {
           if(c.id == this.id){
             c.count = Number(c.count) + this.count
           }
        })

        }else{
          Meal.push({
            id: this.id,
            count: this.count
          })
        }

         window.localStorage.setItem("coffee.Meal", JSON.stringify(Meal))
         this.$router.push("/Shopping/")
      }
    }
    
    
      
};
</script>

<style>
</style>