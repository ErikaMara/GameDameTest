# Projeto Trainee de Front End - Game Dame

O projeto "Game Dame" é uma aplicação web desenvolvida como parte do processo de Trainee de Front End na Emakers Jr. Trata-se de um modelo de site voltado para jogos, que visa proporcionar uma experiência interativa e envolvente para os usuários. A aplicação é construída utilizando a biblioteca React, com HTML e CSS para estruturação e estilização.

Oferece uma estrutura para um site de jogos, com funcionalidades de login, registro, navegação entre páginas e interação com o usuário. Ele representa um ponto de partida sólido para o desenvolvimento de uma aplicação web mais robusta e complexa, garantindo uma experiência agradável e intuitiva para os usuários.

## Estrutura do Projeto 

O projeto consiste em oito páginas principais, cada uma com funcionalidades específicas:

- **Login:** Página de login onde os usuários podem acessar suas contas.
- **Registro (Register):** Permite que novos usuários se cadastrem na plataforma.
- **Recuperar Conta (Forgot Password):** Funcionalidade para recuperação de contas por meio do envio de e-mail.
- **Tela de Jogo (GameScreen):** Exibe o jogo em questão para os usuários.
- **HomePage:** Página inicial do site, com informações e destaques.
- **Perfil (Profile):** Mostra informações e configurações do perfil do usuário.
- **Carrinho de Compras (ShoppingCart):** Permite que os usuários visualizem e gerenciem os itens selecionados para compra.
- **Tela de Administrador (Admin):** Acesso para administradores, com funcionalidades de gerenciamento do site.

Além disso, há diversos componentes adicionais integrados em várias páginas:

- **Adquiridos (em Profile):** Mostra os itens adquiridos pelo usuário.
- **Carousel (em HomePage):** Um carrossel de destaques na página inicial.
- **Carrinho (em ShoppingCart):** Exibe os itens selecionados para compra.
- **Lançamentos (em HomePage):** Destaques de novos lançamentos na página inicial.
- **NavBar (em todas as páginas):** Barra de navegação presente em todas as páginas.
- **Pagamento (em ShoppingCart):** Funcionalidade para pagamento dos itens selecionados.
- **SearchBar (em NavBar):** Barra de pesquisa na barra de navegação.

As páginas são conectadas para navegação entre elas no arquivo `App.jsx`, utilizando a biblioteca `react-router-dom` .

O projeto foi desenvolvido utilizando como base o pré-modelo `vite@latest` e utiliza o framework React.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando o pré-modelo `vite@latest`, e está escrito em JavaScript, CSS e HTML, utilizando o framework React para a construção da interface.