const app = {
    data() {
        return {
            items: [
                { message: 'KoreaTown 1',Love:true,img:"./images/1.jpg"}, 
            {  message: 'KoreaTown 2',Love:true,img:"./images/2.jpg"  },
            {  message: 'KoreaTown 3',Love:false,img:"./images/3.jpg"  }]
        }},
        methods:{
            toogleLove(index){
                this.items[index].Love = !this.items[index].Love}
        }
        ,
        computed:{
            countUnLove(){
                return this.items.filter( t => t.Love ).length
            }

        }   
        }
        
    


Vue.createApp(app).mount('#app')