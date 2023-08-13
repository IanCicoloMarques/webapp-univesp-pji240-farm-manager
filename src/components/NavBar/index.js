import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

export default function NavBar(){

    const navigate = useNavigate();

    return (
        <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                    <ul className="nav navbar-nav navbar-right">
                        <Button onClick={() => navigate("/")}>Inicio</Button>
                        <Button onClick={() => navigate("/add-order")}>Adicionar Pedidos</Button>                    
                        <Button onClick={() => navigate("/order-list")}>Todos os Pedidos</Button>                    
                        <Button onClick={() => navigate("/next-delivery")}>Próximas Entregas</Button>
                        <Button onClick={() => navigate("/customer-list")}>Procurar Clientes</Button>
                        <Button onClick={() => navigate("/customer-register")}>Cadastrar Cliente</Button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}