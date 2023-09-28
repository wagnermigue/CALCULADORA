//console.log("está funcionando");

/*let anoDeNascimento = window.prompt("em que ano voce nasceu?");
console.log(anoDeNascimento);
let idade = 2023 - anoDeNascimento;
alert("quem nasceu em "+anoDeNascimento+" vai fazer "+idade+" anos em 2023");
*/

let nota1 = parseFloat(window.prompt("Nota o primeiro trimestre"));
console.log(nota1);
let nota2 = parseFloat(window.prompt("Nota segundo trimestre"));
console.log(nota2);
let nota3 = parseFloat(window.prompt("Nota terceiro trimestre:"));
console.log(nota3);
let resultado = nota1 + nota2 + nota3;
if (resultado >= 180){
alert("nota dos trimestres: "+resultado+" APROVADO");
} else {
    alert("nota dos trimestres: "+resultado+" REPROVADO");
};
