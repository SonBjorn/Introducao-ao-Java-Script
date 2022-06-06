
/*var nome = "Steffan Dristig";
var idade = 29;
var idade2 = 10;
var frase = "Eu odeio Heavy Metal";
//alert(nome + " Tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
//se idade estiver com aspas, ele não considera como número 
console.log(frase.replace("odeio", "amo"));
//console.log(frase.toLocaleUpperCase());
//console.log(frase.toLocaleLowerCase())
//alert(frase.replace("odeio", "amo")); */

/* var lista = ["maçã", "pêra", "banana"]
//console.log(lista)
//console.log(lista[1]);
//alert(lista[1]);
//lista.push("uva");
//console.log(lista)
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());

console.log(lista[0])
//console.log(lista.toString()[0]);
console.log(lista.toString());
console.log(lista.join(" - ")); */

/*var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta);
//console.log(fruta.nome);*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
}else {
    alert("Menor de idade");
}; */

/*var count = 0; 
while (count <= 5) {
    console.log(count);
    alert(count)
    //count = count + 1; igual a count++;
};*/

/*var count;
for(count=0; count <= 5.; count++){
    alert(count);
}*/

/*var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getMinutes())
alert(d.getHours())
*/

/*function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Suécia", "Suécia", "Brasil"))*/

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade?");
console.log(validaIdade(idade));