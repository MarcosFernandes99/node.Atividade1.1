// console.log("Olá mundo")
// let validator = require('validator');
// console.log(validator.isEmail('foo@bar.com'));

const readXlsxFile = require('read-excel-file/node')

readXlsxFile("./Alunos.xlsx").then((rows) => {

    for (let index = 1; index < rows.length; index++) {
        
        console.log(`Nome: ${rows[index][0]} Email: ${rows[index][1]} Idade: ${rows[index][2]} Matrícula: ${rows[index][3]}`)

    }

})

