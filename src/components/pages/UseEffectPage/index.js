/*
Esse vai ficar pra depois, é um pouco mais avançado e iria confundir
as coisas por enquanto. Se surgir a necessidade eu explico antes,
se não, quando todo mundo tiver mais confortável eu coloco o exemplo.

Em resumo do resumo: o useEffect te permite
tanto fazer a atualização da página em mais situações do que a mudança de
uma varíavel (useState), quanto rodar outras funções quando for disparado
*/

import { useState, useEffect } from "react";

export default function UseEffectPage() {
  return (
    <>
      Em resumo do resumo: o useEffect te permite tanto fazer a atualização da
      página em mais situações do que a mudança de uma varíavel (useState),
      quanto rodar outras funções quando for disparado
    </>
  );
}
