/* Ejercicio 1*/

let Alumno = false

const aula = new Promise ((resolve,reject)=>{
    let mensaje=''
    if(Alumno){
        mensaje = 'Existe al menos un alumno en el salon'
        resolve(mensaje)
    } else{
        reject(new Error('No existe alumnos en el salon'))
    }
    
})

aula.then(res =>{
    console.log(res)
}
)
.catch(error => console.log(error.message))


/*Ejercicio2 */

function consologiar(parametro){
    console.log(`El area del cuadrado es ${parametro*parametro}`)
  }
  
  let area = (numero, callback) => {
    callback(numero)
  }
  
  area(6,consologiar)
