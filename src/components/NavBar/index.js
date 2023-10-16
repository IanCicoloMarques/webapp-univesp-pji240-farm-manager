import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/add-order")}>
              Adicionar Pedidos
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/order-list")}>
              Todos os Pedidos
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/next-delivery")}>
              Próximas Entregas
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/customer-list")}>
              Procurar Clientes
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/customer-register")}>
              Cadastrar Cliente
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
