/*
EXEMPLO#5

o que vai diferenciar a página entre uma página comum e um WebApp é o 
fato do Webapp mostrar páginas dinâmicas, que são criadas no momento
que o usuário carrega a página. É a parte de código ou script do site.

Para o primeiro exemplo, existe uma variável guardada no código, com
um valor inicial. Para colocarmos essa variável no HTML, apenas substituimos
o texto que seria inserido pela variavel dentro de um {} para que o código
saiba que aquilo é uma parte não-fixa do HTML a ser gerado.

Agora, mude o nome que está na variável, pelo próprio código, a aperte Ctrl+S
para salvar o código e a tela atualizar.

Continua em baixo no sexto exemplo
*/

const fixedName = "Troy";
let toChangeName = "Abbed";
const changedName = "Vince";
const changeViaButton = "Carlos";
const n1 = 5.87415;
const n2 = 3.14;

export default function HtmlVariablePage() {
  /*Uma função que irá fazer algum processamento, como mudar o nome*/
  const changeName = () => {
    toChangeName = changedName;
  };

  const changeNameWithValue = () => {
    toChangeName = changeViaButton;
  };

  const multiply = (n, m) => {
    /*Uma função que retorna um valor, como uma multiplicação*/
    return n * m;
  };

  return (
    <>
      <div>Nome Fixo: {fixedName}</div>
      <div>Nome inicial: {toChangeName}</div>
      <button onClick={() => changeNameWithValue()}>Mudar nome</button>
      <div>{changeName()}</div>
      <div>Nome inicial após função: {toChangeName}</div>
      <div>Nome final: {toChangeName}</div>
      <div>Multiplicar dois números: {multiply(n1, n2)}</div>
    </>
  );
}

/* 
Caso queira, mude os valores acima e de ctrl+s para ver funcionar com outros valores.

Como foi visto, os valores foram alterados. Mesmo fora de "ordem" no HTML,
o nome mudou na varíavel antes da função. Isso acontece porque estamos
usando o StrictMode (exemplo 0), que renderiza duas vezes em sequencia.
Caso removido, o nome inicial não ira mudar.

Por outro lado, mesmo apertando no botão e chamando a função, o nome não mudou, independente do StrictMode.
Para o react, o HTML só é refeito quando existe um "estado" que mudou.
Veremos isso no próximo exemplo (6).
*/
