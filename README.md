# Projeto de Blog Interativo

Este projeto é um blog interativo que permite aos usuários visualizar e interagir com diferentes postagens. O objetivo é fornecer uma interface amigável, onde os visitantes podem filtrar postagens por categorias e visualizar o número de acessos a cada post. O sistema utiliza localStorage para armazenar e gerenciar contagens de visualizações.

## Funcionalidades

1. Filtragem de Categorias
Os usuários podem filtrar as postagens com base em diferentes categorias. Ao clicar em uma categoria específica, apenas os posts que pertencem a essa categoria serão exibidos. Há também uma opção de destaque para mostrar todos os posts.

2. Contador de Visualizações
Cada post possui um contador de visualizações que é incrementado sempre que um usuário acessa a postagem. Este contador é mantido no localStorage, permitindo que a contagem persista entre as sessões do navegador.

3. Exibição de Contadores
Na página inicial, cada card de postagem exibe a contagem de visualizações correspondente. Quando um usuário clica em um card, o contador de visualizações é atualizado na página do post completo, refletindo a mesma contagem que foi exibida no card.

## Estrutura do Código

### HTML
Os cards de postagem são estruturados em HTML, cada um contendo um link para o post completo. Abaixo de cada card, há um elemento destinado a exibir a contagem de visualizações.

### CSS
O estilo do blog é definido por um arquivo CSS que utiliza práticas modernas de design para garantir uma interface responsiva e agradável. 

Aqui estão alguns pontos principais sobre o CSS:

Estilo Básico: O estilo padrão utiliza a fonte 'Roboto' e um esquema de cores suave com um fundo branco, garantindo uma boa legibilidade e conforto visual.

Responsividade: Media queries são usadas para adaptar a exibição em diferentes tamanhos de tela, tornando o blog acessível em dispositivos móveis. Por exemplo, o tamanho do cabeçalho e a disposição dos elementos de navegação mudam em telas menores.

Efeitos Visuais: Animações sutis são aplicadas nos cards de postagem para melhorar a experiência do usuário. Ao passar o mouse sobre um card, ele muda de cor e exibe uma sombra mais intensa, indicando que é interativo.

### JavaScript

O código JavaScript gerencia a lógica de interação do usuário com o blog. As principais funções incluem:

* Filtragem de categorias: Controla a exibição de cards com base na categoria selecionada.
* Contagem de visualizações: Atualiza e exibe o número de visualizações de cada post, tanto na página inicial quanto na página de detalhes do post.
* Persistência de dados: Utiliza localStorage para armazenar e recuperar a contagem de visualizações, garantindo que as informações sejam preservadas entre sessões.

# Principais Funções #

* getPostKeyFromHref(href): Extrai a chave do post da URL.
* getViews(postKey): Recupera o número de visualizações de um post específico.
* incrementViews(postKey): Incrementa a contagem de visualizações ao acessar um post.
* updateCardViews(): Atualiza a contagem de visualizações exibida nos cards na página inicial.
* exibirContadorVisualizacoes(): Exibe a contagem de visualizações na página do post completo.

## Como Executar o Projeto

* Clone este repositório para sua máquina local.
* Abra o arquivo index.html em um navegador da sua escolha.
* Interaja com o blog, filtrando categorias e acessando postagens para ver as contagens de visualizações em ação.
