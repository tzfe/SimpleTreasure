import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:0,
<<<<<<< HEAD
       api:"https://www.guqinjiujiang.xyz:8444/guqinzhen",
        //api:'http://192.168.2.208/1875',
        // api:"https://www.guqinjiujiang.xyz:8444/guqinzhen",
       //api:'http://192.168.2.131/1875',
       imgapi:"https://shop.guqinet.com/html/images/shanquan/",
       
=======
<<<<<<< HEAD
        //api:"https://www.guqinjiujiang.xyz:8444/guqinzhen",
        //api:'http://192.168.2.208/1875',
        api:'http://192.168.2.131/1875',
        imgapi:"https://shop.guqinet.com/html/images/shanquan/",
=======
       // api:"https://www.guqinjiujiang.xyz:8444/guqinzhen",
       api:'http://192.168.2.208/1875',
        imgapi:"https://shop.guqinet.com/html/images/shanquan/",
        // api:"https://www.guqinjiujiang.xyz:8444/guqinzhen",
       // api:'http://192.168.2.131/1875'
>>>>>>> c30aba4b7eea5f90919a9ced7b32e24d30b5457c
>>>>>>> d2e686c5f99d83dcdb9d185c0f8a0a9fb1bd0d24
    },
    mutations:{
    //   increment:(state)=>{
    //      state.count+=1
    //   },
    //   decrement:(state)=>{
    //       state.count-=1
    //   }
    },
})
