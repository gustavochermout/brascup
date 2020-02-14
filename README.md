# BrasCup! 
O seu gerenciador de torneios!

## 1. Como usar a aplicação
A aplicação foi desenvolvida com .Net Core + React. O banco de dados utilizado foi o Postgres, antes de utilizar a aplicação execute as migrations! :) `dotnet ef database update` 

Caso seja necessário apontar o frontend para um servidor diferente de "localhost:5000", o apontamento pode ser feito no arquivo: "src/services/api.js".

### 1.1 Torneios
A página principal é responsável por listar os torneios cadastrados, permitir gerenciar e criar novos torneios. Atráves do ícone da bola de futebol é possível visualizar a classificação do torneio, inscrever times e lançar partidas. Os outros dois ícones são para editar e excluir o torneio.

![Torneios](https://user-images.githubusercontent.com/23001482/74528032-f6119680-4f05-11ea-80ff-2c3a956e1e17.png) 

Na tela de classificação é possível ver as estatísticas do torneio. Para que os times entrem no torneio é necessário realizar o cadastro em "Inscrição".

![Classificacao](https://user-images.githubusercontent.com/23001482/74527973-d7130480-4f05-11ea-9d49-134817647b99.png)

Ao clicar em "Partida" é possível fazer o lançamento de um jogo.

![Partida](https://user-images.githubusercontent.com/23001482/74527992-e1350300-4f05-11ea-9928-c6f6d50d51eb.png)

Atráves do menu é possível acessar os cadastros "Times" e "Jogadores".

![Times](https://user-images.githubusercontent.com/23001482/74528008-ec882e80-4f05-11ea-88d7-c895d0ae1791.png)