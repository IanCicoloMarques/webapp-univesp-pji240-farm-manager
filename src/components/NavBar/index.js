import { useNavigate } from "react-router-dom";
import "./NavBar.css";

/* */

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div style={{ border: "solid green 2px" }}>
      <button className="button" onClick={() => navigate("/")}>
        Primeira Página
      </button>
      <button className="button" onClick={() => navigate("/html-puro")}>
        HTML Puro
      </button>
      <button className="button" onClick={() => navigate("/html-codigo")}>
        HTML Via Código
      </button>
      <button className="button" onClick={() => navigate("/html-dinamico")}>
        HTML Dinâmico e useState
      </button>
      <button className="button" onClick={() => navigate("/grid-map")}>
        Iteração e Conteudo Escalonável
      </button>
      <button className="button" onClick={() => navigate("/api-axios")}>
        APIs via Axios
      </button>
      <button className="button" onClick={() => navigate("/components")}>
        Extra: Objeto-Componente
      </button>
      <button className="button" onClick={() => navigate("/style-css")}>
        Extra: style.css
      </button>
      <button className="button" onClick={() => navigate("/prop-drilling")}>
        Em breve: Prop Drilling
      </button>
      <button className="button" onClick={() => navigate("/use-effect")}>
        Em breve: useEffect
      </button>
      <button className="button" onClick={() => navigate("/use-context")}>
        Em breve: useContext
      </button>
      <button className="button" onClick={() => navigate("/ui-framework")}>
        <b style={{ color: "#AA0000" }}>IMPORTANTE PARA VOTAÇÃO</b> UI Framework
      </button>
    </div>
  );
}
