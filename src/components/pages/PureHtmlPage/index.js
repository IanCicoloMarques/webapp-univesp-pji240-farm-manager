/* Lembrando que todos os componentes, seja página, elemento ou objeto,
devem ter, no mínimo, o seguinte:

export default function NOME_DO_COMPONENTE() {
    return (<></>);
}

EXEMPLO#4
Exemplo com HTML simples, apenas para exemplificar o que todas as paginas,
no fundo, fazem. Apenas retornam para o nosso 'esqueleto' o HTML a ser
exibido.

*/

export default function PureHtmlExamplePage() {
  return (
    <div>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <input type="submit" value="Submit" />
      <br />
      <input type="color" value="#ff0000" />
      <br />
      <input type="date" value="2017-06-01" min="1980-04-01" max="2099-04-30" />
      <br />
      <input type="radio" name="gender" value="male" /> Male
    </div>
  );
}
