import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div style={{ border: "solid green 2px" }}>
      <button onClick={() => navigate("/")}>Inicio</button>
      <button onClick={() => navigate("/add-order")}>Adicionar Pedidos</button>
      <button onClick={() => navigate("/order-list")}>Todos os Pedidos</button>
      <button onClick={() => navigate("/next-delivery")}>
        Próximas Entregas
      </button>
      <button onClick={() => navigate("/customer-list")}>
        Procurar Clientes
      </button>
    </div>
  );
}
