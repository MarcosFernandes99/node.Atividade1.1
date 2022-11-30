const readXlsxFile = require('read-excel-file/node')

readXlsxFile("./Alunos.xlsx").then((rows) => {

    for (let i = 1; i < rows.length; i++) {

        let validator = require('validator');

        // VERIFICANDO NOME
        if (rows[i][0] == null){
            console.log('nome inválido')}
        else{
            !validator.isEmpty(rows[i][0]) ? console.log(rows[i][0]) : console.log('nome inválido')
        }         
            
        // VERIFICANDO EMAIL
        validator.isEmail(rows[i][1]) ? console.log(rows[i][1]) : console.log('email inválido')

        // VERIFICANDO IDADE
        rows[i][2] > 0 ? console.log(rows[i][2]) : console.log('idade inválida')

        // VERIFICANDO MATRÍCULA
        validator.isAlphanumeric(rows[i][3]) ? console.log(rows[i][3]) : console.log('matrícula inválida')

        console.log('')
    }
})

