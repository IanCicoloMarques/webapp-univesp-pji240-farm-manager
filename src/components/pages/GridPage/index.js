/*
EXEMPLO#8
Como vimos no exemplo anterior (7), podemos criar infinitos elementos na
página, mas isso geralmente a sobrecarrega de informação.
um dos conceitos para frontend é a criação de layouts, a divisão de espaços
e o posicionamento dos itens na tela.

Uma das formas mais comuns de organizar é usar o Grid, uma estrutura
que monta o HTML como uma planilha, com colunas e linhas pré definidos
e uniformes.

Uma nota importante é que o Grid é só uma maneira de organizar esses dados,
e dependendo da UI Framework (visto mais a frente) que vamos usar,
a aplicação é diferente, então isso é apenas um exemplo contextual

E adiantando para não assustar ninguém, UI Framework são códigos já prontos
de frontend. Eles facilitam MUITO na hora de desenvolver pois já dão os
pedaços de HTML prontos, e costumam ser bem fáceis de usar. Na página
sobre UX Frameworks vou tentar colocar o exemplo de alguns para escolhermos
qual usar, para facilitar o trabalho. Muita coisa que teriamos que fazer
manualmente já estão prontas neles. O ponto negativo é que costumam ser pesadas

Vamos utilizar o mesmo exmeplo de map de antes, apenas aplicando ao conceito
de grid
*/

import { Grid } from "@mui/material"; /*Material UI é um UI Framework*/

const movies = [
  { genre: "action", year: 1978, name: "Howling With The Wind" },
  { genre: "comedy", year: 2005, name: "Laughing All the Way" },
  { genre: "drama", year: 2010, name: "Tears of Tomorrow" },
  { genre: "adventure", year: 1992, name: "Journey to the Unknown" },
  { genre: "horror", year: 1987, name: "Nightmare at Midnight" },
  { genre: "romance", year: 2018, name: "Love in Bloom" },
  { genre: "sci-fi", year: 2003, name: "Galactic Odyssey" },
  { genre: "thriller", year: 2015, name: "Unseen Danger" },
  { genre: "mystery", year: 1999, name: "Enigma of the Shadows" },
];

export default function GridPage() {
  const listMovies = movies.map((filme, index) => (
    /* Nova tag <Grid> inclusa para passarmos as opções de layout */
    <Grid item xs={2} sm={4} md={4} key={index}>
      <div style={{ margin: "10px" }}>
        <div style={{ margin: "5px" }}>
          <b>#{index + 1}</b>
        </div>
        <div style={{ border: "red solid 2px", margin: "2px" }}>
          Nome: {filme.name}
        </div>
        <div style={{ border: "blue solid 2px", margin: "2px" }}>
          Ano: {filme.year}
        </div>
        <div style={{ border: "green solid 2px", margin: "2px" }}>
          Genero: {filme.genre}
        </div>
      </div>
    </Grid>
  ));

  return (
    <div>
      <h1>
        <b>Filmes:</b> {movies.length}
      </h1>
      {/* O componente Grid veio da UI Framework MUI. Ele já vem
      pronto para usar, com a vantagem de não ter que se preocupar
      em fazer contas de quantos itens cabem na tela ou a criação
      visual das caixas. Ao invés disso, temos que definir apenas
      as opções que vem nele e incluirmos o nosso mapa, apenas adicionando
      uma tag nova nele*/}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {listMovies}
      </Grid>
    </div>
  );
}

/* Um ponto legal de se observar é que esse componente do MUI é 100% responsivo, ou seja,
ele se adapta a tela do usuario, não só no tamanho dos elementos, mas também
na quantidade de itens por coluna.
Tente diminuir e aumentar o tamanho da tela para ver a mágica acontecendo. */
