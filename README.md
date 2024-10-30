# Portfólio Pessoal

Este é o repositório do meu portfólio pessoal, desenvolvido para exibir minhas habilidades, projetos, e experiências de forma organizada e visualmente agradável. O projeto foi criado com **React** para construir uma interface interativa e é executado em um ambiente **Docker** para garantir consistência e facilidade de implementação.

## Tecnologias Utilizadas

### Front-End
- **React**: Usado para criar uma interface de usuário responsiva e modular.
- **JavaScript (ES6+)**: Principal linguagem para interatividade e manipulação de dados.
- **CSS com Tailwind CSS**: Biblioteca de utilitários CSS para estilização rápida e eficiente.
- **HTML5**: Marcações semânticas para uma estrutura organizada.

### Back-End & Integrações
- **NestJS**: Usado para criar uma API que armazena e gerencia mensagens enviadas pelo usuário em um banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados para armazenar as mensagens e feedbacks enviados pelo formulário de contato.
- **GitHub API**: Consumida no front-end para exibir automaticamente projetos hospedados no GitHub, mantendo a seção de projetos sempre atualizada.
- **Docker**: Para criação de containers e gerenciamento do ambiente de desenvolvimento.
- **Docker Compose**: Facilita a orquestração de containers para uma execução simplificada.

## Funcionalidades do Portfólio

- **Seção Sobre Mim**: Apresentação com breve descrição das minhas experiências e interesses.
- **Habilidades e Tecnologias**: Lista visualmente organizada das tecnologias com as quais tenho experiência.
- **Projetos**: Integração com a **GitHub API** para listar automaticamente os projetos públicos.
- **Contato**: Formulário de contato que envia mensagens para um **backend em NestJS**, onde são armazenadas no banco de dados PostgreSQL.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/LucasAro/portfolio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd portfolio
   ```
3. Suba o ambiente com Docker Compose:
   ```bash
   docker-compose up
   ```
4. Acesse o portfólio em `http://localhost:3000`.

## Estrutura do Projeto

- **/src**: Contém o código-fonte principal em React.
- **/public**: Arquivos públicos, como ícones e imagens.
- **docker-compose.yml**: Configuração para execução em containers Docker.

## Integrações Detalhadas

### Consumo da API do GitHub
O front-end utiliza a **GitHub API** para buscar e exibir automaticamente meus repositórios públicos na seção de projetos. Isso permite que o portfólio esteja sempre atualizado com os projetos mais recentes, mantendo uma exibição dinâmica e integrada ao meu GitHub.

### Backend em NestJS com PostgreSQL
Desenvolvi um backend em **NestJS** para gerenciar as mensagens enviadas pelo formulário de contato. As mensagens são enviadas para uma API que as armazena no **PostgreSQL**, permitindo fácil acesso e visualização dos feedbacks.

## Contribuição

Contribuições são bem-vindas! Para propor melhorias, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE), permitindo uso livre e modificação.
