/*
EXEMPLO#9
Uma parte importante do projeto será consumir nossas APIs internas para recuperar e guardar
os dados que são utilizados na WebApi. Para Nodejs (o ambiente que o React usa), a biblioteca
mais comum é a Axios, que faz requests HTTP no formato REST.

Para o exemplo, vamos usar a api do ViaCEP, a api publica para retorno de endereços
através do CEP.

https://viacep.com.br
Olhando a documentação da ViaCEP, vemos que precisamos fazer uma requisição do tipo GET
para o seguinte endereço:
https://viacep.com.br/ws/{NUMERO_DO_CEP_NUMERICO_COM_8_CARACTERES}/json/
E o retorno será um JSON com os campos pré definidos na documentação, então podemos
utilizar um array para representa-lo

Vamos criar um campo na página para pegar o numero do cep e fazer a requisição.
Lembrando que, para atualizarmos a página conforme a informação muda, devemos usar o
useState.
*/

import { useState } from "react";
import axios from "axios";

export default function ApiAxiosPage() {
  /*Variável que irá guardar as informações do CEP, inicializada como um array vazio*/
  const [informacoes, setInformacoes] = useState([]);
  /*Variável que irá guardar o CEP inserido*/
  const [cep, setCep] = useState("");
  /*Variável para podermos exibir algum erro*/
  const [erro, setErro] = useState("");

  /* As funções console.log() ajudam a ver, pelo navegador, o que está acontecendo*/
  const makeRequest = (e) => {
    e.preventDefault();
    /* Vamos criar a url de requisição com o cep inserido */
    const url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log("URL de chamada: ", url);

    /*Essa é a nossa chamada para a API. Ela é uma função assíncrona, ou seja, ela
    continua sendo executada em segundo plano, sem travar o resto do programa, enquanto
    espera a resposta.*/
    axios
      .get(url)

      /*Por ser assíncrono, usamos o metodo .then() para instruirmos o programa o que fazer
    quando tivermos nosso resultado, que vamos chamar de resposta.*/
      .then((resposta) => {
        /* Como o metodo then pega o resultado de sucesso, então podemos setar a data
        da resposta como o no */
        console.log("resposta sucesso: ", resposta);
        setInformacoes(resposta.data);
        setErro("");
      })

      /* Catch faz o mesmo que then, mas para casos de erro. Para simplificar, vamos
    considerar que qualquer erro nesse caso será um "CEP inválido", e logar no console
    para vermos o que aconteceu.
    Para visualização, vamos chamar uma outra variável de 'erro', para mostrarmos na tela
    qual o erro encontrado */
      .catch((resposta) => {
        console.log("resposta com erro: ", resposta);
        setErro("CEP inválido");
      });
  };

  return (
    <>
      <form>
        <label>
          CEP: <input value={cep} onChange={(e) => setCep(e.target.value)} />
        </label>
        <hr />
        <button onClick={(e) => makeRequest(e)}>Pesquisar</button>
      </form>
      <div>
        Erro: <span style={{ color: "red" }}>{erro}</span>
      </div>
      <hr />
      <div>Bairro: {informacoes.bairro}</div>
      <div>CEP: {informacoes.bairro}</div>
      <div>Complemento: {informacoes.complemento}</div>
      <div>DDD: {informacoes.ddd}</div>
      <div>GIA: {informacoes.gia}</div>
      <div>IBGE: {informacoes.ibge}</div>
      <div>Localidade: {informacoes.localidade}</div>
      <div>Logradouro: {informacoes.logradouro}</div>
      <div>SIAFI: {informacoes.siafi}</div>
      <div>UF: {informacoes.uf}</div>
    </>
  );
}

/* Dica importante:
As vezes, se torna bem dificil entender se o erro está no código, no tratamento do retorno,
na url de chamada ou na API.

Recomendo instalar o Postman e sempre tentar primeiro chamar a API por ele, para entender
como funciona o request e o response, caso tenha problema de implementar no front.

Precisa de cadastro, mas é gratuito. A versão PRO/paga é só para ter funcionalidade de
compartilhar as coleções de API
https://www.postman.com/downloads/
*/
