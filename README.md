# Store Manager API :convenience_store:

Uma API para um sistema de gerenciamento de estoque e vendas. Sendo possível realizar leitura, cadastro, alterações, e deletar dados. Como banco de dados, foi utilizado o MySql e toda estruturação da aplicação seguiu a arquiterura de software MSC, model-service-controller.

## :computer: Tecnologias utilizadas:

- Node JS
- Express 
- Docker
- MySQL
- Mocha
- Chai
- Sinon

## :hammer_and_wrench: Como executar 

Primeiro, será necessaŕio efetuar o clone do repositório. Execute o comando:

```bash
git clone git@github.com:MychelAlbuquerque/store-manager-api.git
```

Depois, acesse a pasta para onde o repositório foi clonado e execute o docker compose:
```bash
docker-compose up -d
```

Acesse o terminal do container docker que está rodando a aplicação:
```bash
docker exec -it store_manager bash
```

Instale as dependências:
```bash
npm install
```
Agora é só subir o servidor:
```bash
npm start
```
#### :green_circle: Tudo pronto! A API estará rodando na porta 3000.

## :electric_plug: Endpoints:

/products

- GET **/products**  :arrow_right:  retorna a lista de todos os produtos cadastrados.

- GET **/products/:id**  :arrow_right:  retorna o produto correspondente ao Id informado.

- POST **/products**  :arrow_right:  cadastra um novo produto.

- PUT **/products/:id**  :arrow_right:  atualiza um produto já cadastrado.

- DELETE **/products/:id**  :arrow_right:  remove um produto.

- GET **/sales**  :arrow_right:  retorna a lista de todas as vendas.

- GET **/sales/:id**  :arrow_right:  retorna a venda correspondente ao Id informado.

## Obrigado por visitar meu repositório! 

Caso tenha qualquer sugestão ou algum comentário, vou ficar muito feliz em saber!

Mychel Albuquerque

mychelalbu@gmail.com
