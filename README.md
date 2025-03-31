GitHub Profile Search
Este projeto é uma aplicação React que permite buscar perfis de usuários do GitHub e exibir informações detalhadas, como nome, foto, bio, seguidores, e outros dados públicos. Ele utiliza a API pública do GitHub para buscar os dados e exibi-los de forma simples e intuitiva.

Funcionalidades
Busca de Perfis: Você pode pesquisar perfis de usuários do GitHub pelo nome de usuário.

Exibição de Dados: Ao realizar a busca, a aplicação exibe informações como nome, foto, bio, seguidores, e seguindo do usuário.

Design Responsivo: O layout foi projetado para ser simples e responsivo, utilizando o Tailwind CSS para facilitar a estilização.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construir interfaces de usuário.

Axios: Cliente HTTP para realizar requisições à API do GitHub.

Tailwind CSS: Framework CSS para criação de layouts modernos e responsivos.

API do GitHub: Utilizada para buscar informações públicas sobre os perfis de usuários.

Requisitos
Node.js: Você precisa ter o Node.js instalado no seu computador.

NPM: O npm é instalado automaticamente com o Node.js, e será usado para gerenciar as dependências do projeto.

Instalação
Siga os passos abaixo para configurar e rodar o projeto localmente:

Clonar o repositório: Primeiro, clone o repositório para o seu computador. No terminal, execute:

bash
Copiar
Editar
git clone https://github.com/SEU_USUARIO/github-profile-search.git
Instalar as dependências: Navegue até a pasta do projeto e instale as dependências necessárias usando o NPM:

bash
Copiar
Editar
cd github-profile-search
npm install
Configurar o Tailwind CSS: Certifique-se de que o Tailwind CSS está configurado corretamente. Caso o projeto tenha sido gerado usando o Create React App, o arquivo tailwind.config.js já estará configurado, mas você pode verificar e garantir que o conteúdo está no arquivo:

js
Copiar
Editar
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
E no arquivo src/index.css, você deve ter as diretrizes do Tailwind:

css
Copiar
Editar
@tailwind base;
@tailwind components;
@tailwind utilities;
Rodar o servidor de desenvolvimento: Após a instalação das dependências, inicie o servidor de desenvolvimento com o seguinte comando:

bash
Copiar
Editar
npm start
A aplicação será iniciada em http://localhost:3000 e você poderá acessar o aplicativo no seu navegador.
