const pessoaVelha = prompt("Informe o nome da pessoa mais velha:");
const idadeVelha = prompt("Informe a idade da pessoa mais velha:");

const pessoaNova = prompt("Informe o nome da pessoa mais nova:");
const idadeNova = prompt("Informe a idade da pessoa mais nova:");

let calculoIdade = idadeVelha - idadeNova;

let result = alert(
  "Pessoa mais Velha:\n" +
    "Nome: " +
    pessoaVelha +
    "\nIdade: " +
    idadeVelha +
    " anos" +
    "\n\nPessoa mais nova:\n" +
    "Nome: " +
    pessoaNova +
    "\nIdade: " +
    idadeNova +
    " anos" +
    "\n\nDiferença de idade entre as duas pessoas: " +
    calculoIdade +
    " anos"
);
