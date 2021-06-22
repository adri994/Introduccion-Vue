const app = new Vue({
  el:'#main',
  data:{
    task:null,
    tasks:[
      {title:'Aprender HTML',completed:false},
      {title:'Aprender css',completed:true},
      {title:'Aprender js',completed:false},
      {title:'Aprender Vue',completed:false}
    ],
    
  },
  methods:{
    completedTask(task){
      task.completed = !task.completed
    }
  }
  // methods:{
  //   addTask(){
  //     this.tasks.unshift({task: this.task, completed:false});
  //   }
  // },
  // computed: {
  //   filterCompleted(){
  //     return this.tasks.filter(task=>task.completed)
  //   },
  //   // Filtrado
  //   filterTitle(){
  //     return this.tasks.filter(task=>task.title.includes(this.task))
  //   }
  // }
})