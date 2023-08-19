/*
EXEMPLO#2
Depois do componente App, todos os outros componantes serão os objetos que irão preencher o nosso webapp.
Todos os componantes são funções que vão exportar um HTML.
Esse HTML vai ser lido pelo componente anterior, e isso que faz com que ele apareça na tela.

Para esse exemplo, coloquei um HTML simples, sem nada de script/dinamismo, apenas HTML e CSS.

Todos os componantes vão seguir esse padrão:
export default fuction NOME_DO_COMPONENTE () {
    return(
        <div>
            O CÓDIGO HTML, MESMO QUE VAZIO
        <div>
    );
}

Para o header, estamos retornando um HTML vazio, apenas com a borda colorida de vermelho.
Para isso, usamos o componente HTML <div>
E dentro dele, vamos adicionar um style=={{Definições do CSS}}
*/

export default function NavHeader() {
  return (
    <div
      style={{
        border: "solid red 5px",
      }}>
      <div>EU SOU O NAVHEADER</div>
    </div>
  );
}
