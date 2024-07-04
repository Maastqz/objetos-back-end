const carro = {
    marca: "bmw",
    cor: "preto",
    modelo: "suv",
    acessorios: [
        "insulfilm", 
        "estribos", 
        "suporte-celular"
    ] //array dentro do objeto

};

carro.especificacoes = {
    motor: "M TwinPower Turbo V8",
    potencia: "530 cv",
    peso: 2000,
};

carro.placa = "12345678" //nova chave

console.log("---------------------------------------");

console.log(carro.marca) //com ponto

console.log(carro["cor"]) //com colchete

console.log(carro.placa) //mostrar nova chave

carro.cor = "preto fosco" //chave alterada

console.log(carro["cor"]) //mostrar chave alterada

console.log(carro.acessorios) //array dentro do objeto

console.log(carro.especificacoes) //objeto dentro de objeto

console.log("---------------------------------------");

carro.descrever = function(){
    console.log(`A marca do carro é ${this.marca}, o modelo é ${this.modelo}, a cor é ${this.cor} e o peso é ${this.especificacoes.peso}`);
    }

console.log("---------------------------------------");

for (let chave in carro) {
    let tipo = typeof carro[chave]
        if (tipo !== "object" && tipo !== "function") {
                console.log(`A chave ${chave} tem o valor ${carro[chave]}`);
        }
}

console.log("---------------------------------------");

const proprietario = {
    nome: "João",
    idade: 40,
    categoriaCNH: "B",
    ...carro
}

console.log(proprietario)
 
