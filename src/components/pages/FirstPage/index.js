/*
EXEMPLO#3

Criação de um componente qualquer. No caso, a nossa primeira página.
Veja que essa página é um arquivo chamado index.js na pasta
src/components/pages/FirstPage

Vamos seguir esse padrão para qualquer componente. Após isso, adicionar

export default function NOME_DO_COMPONENTE(){
  return (<div></div>);
}

Toda vez que esse componente for chamado em outro lugar, ele irá carregar
e acoplar o código html definito no return.

Por exemplo, substitua o [return <></>;] nessa página por

  return (
    <div>
      <b>Primeira página</b>
    </div>
  );

Após, aperte Ctrl+S para salvar e olhe a página "Primeira Pagina",
ela irá atualizar automaticamente com a nova parte
*/

export default function FirstPage() {
  return <></>;
}
