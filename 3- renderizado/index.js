const app = new Vue({
  el:'#main',
  data:{
    nombres: ['adrian','antonio','roberto'],
    listadoPersonas: [
      { nombre:'Adrian', edad: 15 },
      { nombre:'Jose', edad: 25 },
      { nombre:'Kevin', edad: 35 },
      { nombre:'Antonio', edad: 45 },
      { nombre:'Roberto', edad: 55 }
    ]
  }
})