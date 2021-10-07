// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'),
    id2: hiredPerson('Luiza Drumond'),
    id3: hiredPerson('Carla Paiva'),
  }
  return employees;
};

const hiredPerson = (nomeCompleto) => {
  const nameArray = nomeCompleto.toLowerCase().split(' ');
  let email = `${nameArray[0]}_${nameArray[1]}@trybe.com`

  return {
    nome: nomeCompleto,
    email: email,
  }
}

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const didYouWin = (number, sortedNumber) => number === sortedNumber;

const prizeDraw = (number, winnerOrLoser) => {
  const sortedNumber = Math.floor((Math.random() * 5) + 1);

  return winnerOrLoser(number, sortedNumber) ? `O número sorteado foi ${sortedNumber} Parabéns você ganhou` : `O número sorteado foi ${sortedNumber} Tente novamente`; 
}

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkingAwnsers = (correctAwnsers, yourAwnsers) => {
  let score = 0;
  for (let index = 0; index < correctAwnsers.length; index += 1) {
    if (correctAwnsers[index] === yourAwnsers[index]) {
      score += 1;
    } else if (yourAwnsers[index] === 'N.A') {
      score += 0;
    } else {
      score -= 0.5;
    } 
  }
  return score;
}

const testScore = (correctAwnsers, yourAwnsers, finalScore) => finalScore(correctAwnsers, yourAwnsers);




console.log(testScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkingAwnsers))
