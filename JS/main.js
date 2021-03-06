import zh_TW from './zh.js';

//input驗證
Vue.component('ValidationProvider',VeeValidate.ValidationProvider);
//表單驗證
Vue.component('ValidationObserver',VeeValidate.ValidationObserver);

VeeValidate.localize('tw', zh_TW);


// Class 設定檔案
VeeValidate.configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
    }
  });

new Vue({
    el:"#app",
    data:{
        form:{
            username:'',
            email:'',
            tel:'',
            address:'',
            payment:'',
            message:'',
        },
        api:{
            path:'https://course-ec-api.hexschool.io/api/',
            uuid:'0651180d-9a32-4622-8af7-cd0265f7aa39',
        }
    },
    methods: {
        submitData(){
            alert("1");
            // let api =`${this.api.path}${this.api.uuid}/ec/orders`;
            // axios.post(api, this.form).then(res =>{
            //     console.log(res);
            // }).catch(function(error){
            //     console.log(error);
            // })
        }
    },
})