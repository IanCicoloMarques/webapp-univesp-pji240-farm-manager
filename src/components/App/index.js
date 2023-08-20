//HOOKS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavHeader from "../NavHeader";
import NavBar from "../NavBar";

// PAGES
import FirstPage from "../pages/FirstPage";
import HtmlPuroPage from "../pages/PureHtmlPage";
import HtmlVariablePage from "../pages/HtmlVariablePage";
import ApiAxiosPage from "../pages/ApiAxiosPage";
import MapPage from "../pages/MapPage";
import GridPage from "../pages/GridPage";
import DynamicHtmlPage from "../pages/DynamicHtmlPage";
import ObjectComponentPage from "../pages/ObjectcComponentPage";
import StyleCssPage from "../pages/StyleCssPage";
import UiFrameworkPage from "../pages/UIFrameworkPage";
import UseContextPage from "../pages/UseContextPage";
import UseEffectPage from "../pages/UseEffectPage";
import PropDrillingPage from "../pages/PropDrillingPage";

import "./App.css";

/*
EXEMPLO#1
Esse é nosso componente principal, uma página que contém todas as outras páginas.
Cada componente é um objeto HTML no site/aplicação, que pode conter outros objetos dentro.
Nosso componente App é o maior de todos. Iremos mexer nele apenas uma vez, para definir o formato do site.
Cada componente vai seguir um padrão, não obrigatório, mas para organizamos melhor o código:
1. Criar uma pasta dentro de /src/components com o nome do Componente
2. Criar um arquivo chamado index.js (Exemplo 2)
3. Se for preciso, criar um arquivo style.css (Exemplo opcional 1)

Nesse exemplo, temos o webapp dividido em 3 partes, todas dentro da pasta "components":
- NavHeader, onde podemos colocar um cabeçalho para o site. Deixei marcado como uma caixa
vermelha, apenas para visualização. É opcional para o site, mas deixei o próximo exemplo lá.
Alteramos ela ao alterar o componente <NavHeader>

- NavBar, nossa barra de navegação para as diversas páginas. Seu componente é o <NavBar>, e vou deixar uma borda verde.

- As páginas em si. No React, nós usamos um componente já pronto chamado BrowserRouter para definir que links
vão levar para qual página. Nesse componente, nós definimos todas as "Rotas", e dentro de cada componente usamos uma função
useNavigate para mudarmos as páginas, como o hiperlink no HTML normal. O exemplo disso (Exemplo 3) está no NavBar.
Para as páginas, seguimos:
1. Criar uma pasta dentro de /src/components/pages com o nome da Página
2. Criar o arquivo index.js
3. Se preciso, criar o arquivo style.css
4. Adicionar a Rota/Link para a página abaixo, criando uma nova linha do tipo <Route path>.
  a. não esqueça de adicionar a pasta da página lá em cima, em um novo import

*/

function App() {
  return (
    <div className="App">
      <NavHeader />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/html-puro" element={<HtmlPuroPage />} />
          <Route path="/html-codigo" element={<HtmlVariablePage />} />
          <Route path="/html-dinamico" element={<DynamicHtmlPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/api-axios" element={<ApiAxiosPage />} />
          <Route path="/components" element={<ObjectComponentPage />} />
          <Route path="/style-css" element={<StyleCssPage />} />
          <Route path="/prop-drilling" element={<PropDrillingPage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/use-context" element={<UseContextPage />} />
          <Route path="/ui-framework" element={<UiFrameworkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
