/*
Esse vai ficar pra depois, é um pouco mais avançado e iria confundir
as coisas por enquanto. Se surgir a necessidade eu explico antes,
se não, quando todo mundo tiver mais confortável eu coloco o exemplo.

Em resumo do resumo: useContext é parecido com o useState mas funciona
para o programa inteiro, como uma variável global, e permite atualizar
variáveis sem a necessidade de Prop Drilling.
*/

import { useContext } from "react";

export default function UseContextPage() {
  return (
    <>
      Em resumo do resumo: useContext é parecido com o useState mas funciona
      para o programa inteiro, como uma variável global, e permite atualizar
      variáveis sem a necessidade de Prop Drilling. É útil para guardar
      informações do usuário ao longo da app
    </>
  );
}
