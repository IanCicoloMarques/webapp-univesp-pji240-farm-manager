/* EXEMPlO#6
Vamos repetir o exato mesmo exemplo anterior. Mas desta vez,
iremos utilizar o hook do react chamado useState.

Também é possível usar:
import React from "react";
Mas é uma boa prática especificar o que estiver usando. Os dois são válidos, entretanto.
*/

import { useState } from "react";

const initialName = "Abbed";
const changedName = "Troy";

export default function DynamicHtmlPage() {
  /*Usar esse esquema para definir um estado.
  Primeira posição (name) é a sua variavel
  Segunda posição (setName) é a função que irá atualizar o estado e a página
  useState() o valor inicial. Pode ser qualquer coisa, numero, nome, vazio, array vazio, array preenchido*/
  const [name, setName] = useState(initialName);

  const changeNameWithValue = () => {
    /*O importante é que na hora de mudar o valor, use a função que você
    definiu ali em cima, e não a atribuição normal name=changedName.
    Isso avisa pro programa que tá na hora de atualizar a página*/
    setName(changedName);
  };

  return (
    <>
      <div>Nome inicial: {name}</div>
      <div>Nome inicial função: {name}</div>
      <button onClick={() => changeNameWithValue()}>Mudar nome</button>
    </>
  );
}
