import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

/*
EXEMPLO#0 Somente teórico, podem ignorar

Não vamos precisar mexer aqui.

Aqui é entry point, onde o programa irá começar a execução.
A função root.render() é a que controla toda a parte de transformar o código em um HTML.
Tudo o que mudar dinamicamente dentro dos componentes (como <App>), faz com que o código seja
transformado em um HTML novo, atualizando o que aparece na tela do navegador.

<App /> é apenaso nosso componente principal, onde iremos montar o aplicativo em si.
Ele é importado mais pra cima, na linha 4, e podemos selecionar qualquer componente com
qualquer nome para isso.

<React.StrictMode> é uma ferramenta para ajudar a achar erros.
Por exemplo, ela renderiza todas as mudanças duas vezes, apenas em ambiente de desenvolvimento.
Se vocês estiverem com algum problema, deletem as duas linhas do StrictMode para ver se o
problema aconteceria em produção/lançamento/versão pra valer do app.

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
