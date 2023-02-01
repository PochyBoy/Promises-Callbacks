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

/*Ejercicio 3 */

const getEmployee = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let employee = employees.find(employee => employee.id === id);
            if (employee) {
                resolve(employee);
            } else {
                reject(`No se ha encontrado el trabajador con el ID: ${id}`);
            }
        }, 1000);
    });
};
 
const getSalary = employee => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let salary = salaries.find(salary => salary.id === employee.id);
            if (salary) {
                resolve({
                    Nombre: employee.name,
                    Salario: salary.salary
                });
            } else {
                reject(`No se ha encontrado dato alguno sobre el ID: ${employee.id}`);
            }
        }, 1000);
    });
};
 
getEmployee(5)
    .then(employee => getSalary(employee))
    .then(result => console.log(`El nombre del empleado es ${result.Nombre} y su salario es ${result.Salario}`))
    .catch(error => {console.error(`Ha ocurrido un error: ${error}`);})