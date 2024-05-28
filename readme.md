## Adapt Control - Frontend 🚀

<div align="center">

  ![Static Badge](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/typescript-0B88F7?style=for-the-badge&logo=typescript&logoColor=0B88F7&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/axios-000000?style=for-the-badge&logo=axios&logoColor=FFFFFF&labelColor=000000)
  ![Static Badge](https://img.shields.io/badge/ZOD-0822A2?style=for-the-badge&logo=zod&logoColor=%23000&labelColor=1481FC)
  ![Static Badge](https://img.shields.io/badge/styled%20components-F58381?style=for-the-badge&logo=styled-components&logoColor=FFF&labelColor=000)
  ![Static Badge](https://img.shields.io/badge/yarn-0B80BB?style=for-the-badge&logo=yarn&logoColor=white&labelColor=0B80BB)

</div>

Este é o Frontend de uma aplicação Fullstack, que está comunicando com sua própria [API](https://github.com/victorgenari/adapt-control-api), desenvolvido utilizando **[React](https://react.dev/), [React-Query](https://tanstack.com/query/v4/docs/framework/react/devtools), [Typescript](https://www.typescriptlang.org/), [Axios](https://axios-http.com/), [Styled-components](https://styled-components.com/) and [ZOD](https://zod.dev/).** 

A Aplicação simula as funcionalidades para controlar um comércio, seja um Mercado, Loja ou equivalente. Usuários podem registrar produtos, categorias, vendas e verificar como está fluindo o estoque de produtos.

#### Tabela de conteúdo

- [Instalação](#instalação)
- [Usabilidade](#usabilidade)
- [Autenticação](#autenticação)

#### Instalação

1. Clone o repositório:

    - `git clone https://github.com/victorgenari/adapt-control-front`

2. Instale as dependências com yarn

    - `yarn`

3. Configurando Variáveis de Ambiente

    - Note que há um arquivo .env-example na raiz
    - Apenas crie outro arquivo na raiz com o nome `.env` preenchendo as variáveis do .env-example

#### Usabilidade

1. Inicie a aplicação com yarn -> `yarn dev`

2. A Aplicação ficará acessível em `http://localhost:5173/`
    - Caso tenha colocado outra porta, apenas altere `5173` para sua porta;

#### Autenticação
O sistema está lidando com permissões de usuários. Ao criar um usuário, é definido também o nível de permissão. Dependendo do nível de rotas sendo acessadas, apenas níveis de ADMIN/GESTOR estão autorizados.

  - `ADMIN` -> Consegue realizar todas operações do sistema;
  - `GESTOR` -> Consegue realizar parte das operações;
  - `FUNCIONÁRIO` -> Consegue realizar somente atividades de leitura;