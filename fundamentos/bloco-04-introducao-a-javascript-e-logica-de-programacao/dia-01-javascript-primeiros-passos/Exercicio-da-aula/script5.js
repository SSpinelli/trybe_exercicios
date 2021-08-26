let situacaoDoCandidato = "aprovado";

switch (situacaoDoCandidato) {
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