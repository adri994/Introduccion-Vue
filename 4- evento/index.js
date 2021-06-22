const app = new Vue({
  el:'#main',
  data:{
    task:null,
    tasks:[
      'Aprender HTML'
    ],
    
  },
  methods:{
    addTask(){
      this.tasks.unshift(this.task);
    }
  }
})