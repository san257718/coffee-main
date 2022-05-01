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

            <div>
                <div class="text-3xl font-bold px-20 py-6">
                    <p>Sopping Cart</p>
                </div>
                <div class="text-3xl font-bold px-20">
                    <p class=" border-b pb-12">購物車</p>
                </div>
            </div>

            <cart v-for="item in cartData" :key="item.id" v-bind="item" @add="add($event)" @sub="sub($event)" @del="del($event)" />
            

            <meal_cart v-for="item in MealData" :key="item.id" v-bind="item" @addone="addone($event)" @subone="subone($event)" @delone="delone($event)" />


            


            
            <footer>
                <div class="flex justify-center items-center md:pt-16 pt-16">
                    <p class="text-2xl ">© 2022 cafe Rights Reserved.</p>
                </div>
            </footer>
        </div>
    </div>


</template>

<script>
import cart from '../components/cart.vue'
import meal_cart from '../components/meal_cart.vue'
import footer_1 from '../components/footer_1.vue'
import Coffee_items from '../assets/coffee.json'
import light_meal from '../assets/light_meal.json'

export default {
    
    data() {
        return {
            items: Coffee_items,
            items1: light_meal,
            cart:[],
            meal_cart:[],
            light_meal:[]
            
        }
    },
    components:{
        footer_1,
        cart,
        meal_cart
        
    },
    
    
    computed:{
        cartData() {
            return this.cart.map(c => {
                const temp = this.items.filter(item => item.id==c.id)[0]
                return Object.assign({},c, temp)
            })
        },
        MealData() {
            return this.meal_cart.map(c => {
                const temp = this.items1.filter(item => item.id==c.id)[0]
                return Object.assign({},c, temp)
            })
        },
        
    },

        
    
    methods:{
        add(id){
            this.cart.forEach(c =>{
                if(c.id == id){
                    c.count++
                }
            })
            window.localStorage.setItem("coffee.carts",JSON.stringify(this.cart))
        },
        sub(id) {
            var delIndex = -1
            
            this.cart.forEach((e,index) => {
                if(e.id == id){
                    e.count--

                if(e.count <= 0){
                    delIndex = index
                    }
                }
            })
        
            if(delIndex !== -1){
                this.cart.splice(delIndex, 1)
            }
            window.localStorage.setItem("coffee.carts",JSON.stringify(this.cart))
        },
        addone(id){
            this.meal_cart.forEach(c =>{
                if(c.id == id){
                    c.count++
                }
            })
            window.localStorage.setItem("coffee.Meal",JSON.stringify(this.meal_cart))
        },
        subone(id) {
            var delIndex = -1
            
            this.meal_cart.forEach((e,index) => {
                if(e.id == id){
                    e.count--

                if(e.count <= 0){
                    delIndex = index
                    }
                }
            })
        
            if(delIndex !== -1){
                this.meal_cart.splice(delIndex, 1)
            }
            window.localStorage.setItem("coffee.Meal",JSON.stringify(this.meal_cart))
        },
        delone(id) {
            
            var delIndex = -1

            this.meal_cart.forEach((e,index) => {
                if(e.id == id){
                    delIndex = index
                }
                
                if(delIndex != -1){
                    this.meal_cart.splice(delIndex, 1)
                }
            })

            window.localStorage.setItem("coffee.Meal",JSON.stringify(this.meal_cart))
        },
        del(id) {
            
            var delIndex = -1
            
            

            this.cart.forEach((e,index) => {
                if (e.count <= 0){
                    delIndex = index
                }
            })

            if(delIndex < 0){
                this.cart.splice(delIndex, 1)
            }

            window.localStorage.setItem("coffee.carts",JSON.stringify(this.cart))
        },
        
        
    },
    mounted(){
         this.cart = JSON.parse(window.localStorage.getItem("coffee.carts")) ?? []
         this.meal_cart = JSON.parse(window.localStorage.getItem("coffee.Meal")) ?? []
    },
    
    
    
}
</script>

<style>

</style>