import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/index.vue"
import Login from "../views/login/index.vue"
import Home from "../views/home/home.vue"


const Projuct = ()=>import('@/views/product/index.vue')
const List = ()=>import('@/views/product/list/index.vue')
const Category = ()=>import('@/views/product/category/index.vue')
const Order = ()=>import('@/views/order/index.vue')
const OrderList = ()=>import('@/views/order/list/index.vue')
const Collect = ()=>import('@/views/order/collect/index.vue')
const Advert = ()=>import('@/views/advert/index.vue')
const AdvertList = ()=>import('@/views/advert/list/index.vue')



Vue.use(VueRouter);

const routes = [
   {
      path:'/',
      component:Layout,
      children:[
         {
            path:'/', 
            name:"home",
            component:Home
         },
         {
            path:'/product', //产品管理
            name:"product",
            component:Projuct,
            children:[
               {
                  path:'list', //这里加斜线和不加斜线是有区别的
                  name:"list",
                  component:List
               },
               {
                  path:'category', //这里加斜线和不加斜线是有区别的
                  name:"category",
                  component:Category
               }
            ]
         },
         {
            path:'/order',  //订单管理
            name:"order",
            component:Order,
            children:[
               {
                  path:'order-ist', 
                  name:"order-ist",
                  component:OrderList
               },
               {
                  path:'collect', 
                  name:"collect",
                  component:Collect
               }
            ]
         },
         {
            path:'/advert', //广告管理
            name:"advert",
            component:Advert,
            children:[
               {
                  path:'advert-list', 
                  name:"advert-list",
                  component:AdvertList
               },
            ]
         }
      ]
   },
   {
      path:'/login', //是在网页上的地址后面的网址
      name:'login', //路由跳转好容易找到
      component:Login
   }
];
const router = new VueRouter({
   mode: 'history',
   base:process.env.BASE_URL,
   routes
})

export default router;