import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const userIsEmployee = () => {
    return (
      <div>
        <ul className="flex items-center space-x-6">
          <li>
            <a
              onClick={() => navigate("/")}
              href=""
              className="py-4 text-lg font-semibold text-emerald-800 hover:text-emerald-800">
              Inicio
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/add-order")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Fazer Pedido
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/order-list")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Pedidos Em Aberto
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/next-delivery")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Entregas Agendadas
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/customer-list")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Procurar Cliente
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/customer-list")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Cadastrar Cliente
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const userIsNotLogged = () => {
    return (
      <div>
        <ul className="flex items-center space-x-6">
          <li>
            <a
              onClick={() => navigate("/")}
              href=""
              className="py-4 text-lg font-semibold text-emerald-800 hover:text-emerald-800">
              Inicio
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/add-order")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Fazer Pedido
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/order-list")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Pedidos Em Aberto
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/next-delivery")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Entregas Agendadas
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/customer-list")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Procurar Cliente
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/customer-list")}
              href=""
              className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
              Cadastrar Cliente
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const loginStatusOut = () => {
    return <div></div>;
  };

  const loginStatusIn = () => {
    return (
      <div className="menu-right flex items-center space-x-6">
        <a
          href="{% url 'myaccount' %}"
          className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
        <a
          href="{% url 'logout' %}"
          className="py-4 text-lg font-semibold text-gray-500 hover:text-emerald-800">
          Logout
        </a>

        <div
          hx-get="{% url 'hx_menu_cart' %}"
          hx-trigger="update-menu-cart from:body"
          hx-swap="innerHTML"></div>
      </div>
    );
  };

  const CheckUserType = () => {
    return userIsEmployee();
  };

  const CheckLoginStatus = () => {
    return loginStatusIn();
  };

  return (
    <div>
      <nav className="w-full bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto py-2 px-6 xl:px-0 flex items-center justify-between">
          <div className="menu-left flex items-center space-x-6">
            <a
              href=""
              onClick={() => navigate("/")}
              className="py-4 text-lg font-bold text-emerald-500 hover:text-emerald-800">
              Sítio Nova Esperança
            </a>
            {CheckUserType()}
          </div>
          {CheckLoginStatus()}
        </div>
      </nav>
    </div>
  );
}
