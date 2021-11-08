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

//Nivell 1 Exercici 1


const getEmployee= (newID) => {
    let found = employees.find( empleat => empleat.id === newID )
    return new Promise(function(resolve, reject) {
        if(found != undefined)
        resolve (found);
        else
        reject (new Error(`La ID: "${newID}" no esta a la llista d'empleats`));
        });
};


const getSalary = (employee) => { 
    return new Promise(function(resolve, reject) {
        let salari = (salaries.find( empleat => empleat.id === employee.id )).salary
        if(salari != undefined)
        resolve (salari);
        else
        reject(new Error(`No hi ha la ID seleccionada`));
        });

}


getEmployee(ID)
    .then(employee => getSalary(employee))
    .then(salary => console.log(salary))
    .catch(err=> console.log(err.message))

module.exports ={
    getEmployee

}

