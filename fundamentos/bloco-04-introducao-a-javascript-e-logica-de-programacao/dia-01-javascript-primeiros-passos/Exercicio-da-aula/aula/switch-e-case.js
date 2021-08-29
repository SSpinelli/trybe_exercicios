// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser "aprovada", "lista" ou "reprovada";
let candidateSituation = "lista";
//Crie uma estrutura condicional com o switch/case que irá imprimir mensagens a depender do estado da pessoa candidata.
switch (candidateSituation) {
    case "aprovado":
        console.log("Parabéns você foi aprovado no processo seletivo");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovado":
        console.log("Não foi dessa vez, ");
        break;

    default:
        console.log("Inserir um valor válido")
}