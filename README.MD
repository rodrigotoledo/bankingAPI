# API de Estudo TypeScript: CRUD de Clientes

## Descrição

Esta API RESTful foi desenvolvida para estudo de TypeScript e implementa as funcionalidades básicas de CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar clientes.

## Funcionalidades

* **Publicar cliente:** Cria um novo cliente na base de dados.
* **Listar clientes:** Retorna uma lista de todos os clientes cadastrados.
* **Atualizar clientes:** Atualiza os dados do cliente na base de dados pelo seu ID.
* **Deletar cliente:** Remove um cliente da base de dados pelo seu ID.

## Instalação

**Pré-requisitos:**

* Node.js

**Passos:**

1. **Instalar o Node.js:** Acesse o site oficial https://nodejs.org/en e baixe a versão mais recente para o seu sistema operacional.
2. **Clonar o projeto:** Utilize o comando `git clone https://github.com/igordmouraa/apiTest.git` para clonar o projeto para o seu computador.
3. **Instalar as dependências:** Navegue até a pasta do projeto e execute o comando `npm install`.

## Uso

**Iniciar a API:**

1. Execute o comando `npm run dev` no terminal.
2. A API estará disponível na porta `3333`.

**Consumir a API no Postman:**

1. Abra o Postman e crie uma nova requisição.
2. Selecione o método HTTP desejado (POST, GET, PUT ou DELETE).
3. Insira a URL da API: `http://localhost:3333/customer`.
4. Para o método POST, inclua o corpo da requisição com os dados do cliente no formato JSON.
5. Clique em "Enviar" para executar a requisição.

## Observações

* A API utiliza o Prisma para gerenciar a base de dados, o TypeScript para garantir a tipagem estática e o Fastify como framework web.
* Para mais informações sobre como utilizar a API, consulte a documentação completa no arquivo `README.md` do projeto.

## Exemplo de requisição POST

```json
{
    "name": "Nome do Cliente",
    "email": "cliente@email.com"
}
```

## Exemplo de requisição PUT

```json
{
    "id": "65dd2ee58a597330156be912",
    "name": "Nome do Cliente",
    "email": "cliente@email.com"
}
