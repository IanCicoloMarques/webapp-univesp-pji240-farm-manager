/*
EXEMPLO#7
Uma das grandes vantagens de páginas dinâmicas é a possibilidade de
trabalhar com infinitos items repetidos para o site. Por exemplo,
fazer mostrar todos os itens do banco de produtos ou a lista
de cliente sem precisar saber de antemão quantos são.

Para isso, temos dois conceitos importantes, o visual e o código.

Em questão de código, precisamos organizar isso em um objeto que possua
uma estrutura que permite a repetição de itens, um array. Com esse array
no código, precisamos iterar sobre ele, repetindo os mesmos elementos HTML
que serão reutilizados

Trataremos a parte visual no próximo exemplo.
*/

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

export default function MapPage() {
  /*Por questão de organização, vamos separar a função que fará a
  iretação aqui em cima, para ficar mais fácil de ler. Mas é possível
  colocar direto no return lá embaixo também.
  
  A função array.map funciona como um for,foreach, for x in array e etc.
  Ela itera sobre todos os itens do array, e devolve o item (filme) e, 
  opcionalmente, a posição (index). Ambos os nomes podem ser qualquer coisa,
  o importante é a posição. Com isso, podemos construir o elemento HTML
  que será repetido.
  */
  const listMovies = movies.map((filme, index) => (
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
  ));

  return (
    <>
      <div>{listMovies}</div>
    </>
  );
}
