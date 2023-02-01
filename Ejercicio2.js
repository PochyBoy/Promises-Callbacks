
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

/* Ejercicio 1*/

let getEmpoyee = (ide)=> { 
    return new Promise((resolve,reject)=>{
      let prueba = employees.find(item => item.id == ide)
     if(prueba != undefined){
       resolve(`El nombre del empleado es ${prueba.name}`)
     }else{
          reject(new Error('No existe este empleado'))
      } 
    })   
  }
  getEmpoyee(5).then(res => {
    console.log(res)
  })
  .catch(error => console.log(error.message))

/* Ejercicio 2*/

