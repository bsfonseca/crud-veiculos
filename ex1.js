const listaDeVeiculos = [
  {
    id: 1,
    marca: "VW",
    modelo: "Fusca",
    ano: 2020,
    preco: 12000,
    cor: "Preto",
  },
];

alert(
  "Bem vindo ao sistema de cadastro de veículos. Atualmente você possui " +
    listaDeVeiculos.length +
    " veículos cadastrados."
);
let comando = "";
let contadorId = 2;
let veiculo = {};

do {
  comando = prompt(
    "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
  );
  console.log(comando);

  switch (comando) {
    case "1":
      //-> Ao entrar nesta opção o sistema deve pedir os seguintes
      //dados: modelo, marca, ano, cor e preco.

      veiculo = {};
      veiculo.modelo = prompt("Digite o modelo do veículo: ");
      veiculo.marca = prompt("Digite o marca do veículo: ");
      veiculo.ano = prompt("Digite o ano do veículo: ");
      veiculo.preco = prompt("Digite o preco do veículo: ");
      veiculo.id = contadorId;

      listaDeVeiculos.push(veiculo);
      contadorId += 1;

      //-> O veículo deve ser adicionado na lista de veículos que
      //armazena todos os veículos cadastrados
      //-> Todo veículo deve ter um identificador único. Este
      //identificador deve ser gerado de forma automática
      console.log("1 - Cadastrar veículo");
      break;

    case "2":
      //         /*2 - Listar todos os veículos
      // -> Ao entrar nesta opção o sistema deve listar os veículos
      // com o seguinte layout:
      // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
      // Preço: R$40.000
      // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
      // Preço: R$40.000*/

      listaDeVeiculos.forEach((veiculo) => {
        console.log(
          `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`
        );
      });

      console.log("2 - Listar todos os veículos");
      break;
    case "3":
      // 3 - Filtrar veículos por marca
      // -> Ao entrar nesta opção o sistema deve pedir para o
      // usuário digitar a marca que quer filtrar
      // -> Deve ser listado os veículos que forem da mesma marca
      // -> A lista deve ter o seguinte layout:
      // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
      // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

      const marca = prompt("Digite a marca a ser filtrada: ");

      // Opção 1
      //   const listaFiltrada = listaDeVeiculos.filter((veiculo) => {
      //     return marca === veiculo.marca;
      //   });

      //   listaFiltrada.map((veiculo) => {
      //     console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`);
      //   });

      // Opção 2
      //   listaDeVeiculos.map((veiculo) => {
      //     if (marca === veiculo.marca) {
      //       console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`);
      //     }
      //   });

      // Opção 3
      for (let veiculo of listaDeVeiculos) {
        if (marca === veiculo.marca) {
          console.log(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`);
        }
      }

      console.log("3 - Filtrar veículos por marca");
      break;
    case "4":
      // -> Ao entrar nesta opção o sistema deve pedir para o
      // usuário digitar o IDENTIFICADOR do veículo
      // -> O Sistema deve verificar se o veículo existe ou não e
      // mostrar a seguinte mensagem caso o veículo não exista:
      // "Veículo, não encontrado." O usuário deve voltar para o menu
      // inicial depois
      // -> Se o veículo existir, o sistema deve permitir que o usuário
      // atualize somente a cor e o preço.

      const id = prompt("Digite o ID do veiculo a ser atualizado: ");

      const veiculoFind = listaDeVeiculos.find((veiculo) => id == veiculo.id);

      // Find:
      // veiculo => caso encontre
      // undefined => caso nao encontre

      if (!veiculoFind) {
        console.log("Veículo não encontrado");
        break;
      }

      const cor = prompt("Digite a cor: ");
      const preco = prompt("Digite o preço: ");

      veiculoFind.cor = cor;
      veiculoFind.preco = preco;

      console.log("4 - Atualizar veículo");
      break;
    case "5":
      // -> Ao entrar nesta opção o sistema deve pedir para o
      // usuário digitar o IDENTIFICADOR do veículo
      // -> O Sistema deve verificar se o veículo existe ou não e
      // mostrar a seguinte mensagem caso o veículo não exista:
      // "Veículo, não encontrado. O usuário deve voltar para o menu
      // inicial depois"
      // -> Se o veículo existir, o sistema deve remover o veículo

      const idDelete = prompt("Digite o ID do veiculo a ser atualizado: ");

      const veiculoIndex = listaDeVeiculos.findIndex((veiculo) => idDelete == veiculo.id);

      // ["Teste", "Daphne", "Bruna"]
      //     0        1         2

      // Find:
      // veiculo => caso encontre
      // undefined => caso nao encontre

      if (veiculoIndex == -1) {
        console.log("Veículo não encontrado");
        break;
      }

      listaDeVeiculos.splice(veiculoIndex, 1);

      console.log("5 - Remover veículo");
      break;
    case "6":
      console.log("sair do programa");
      break;
    default:
      console.log("comando invalido");
      break;
  }
} while (comando !== "6");
