import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Container } from "react-bootstrap";

export default function CustomerRegisterPage() {
  function FormFormat(label, type, placeholder, controlId) {
    return (
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    );
  }

  const registerCustomer = (event) => {
    event.preventDefault();
    var data = {
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      address1: event.target.elements.address1.value,
      address2: event.target.elements.address2.value,
      address3: event.target.elements.address3.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
    };

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URI}/customer/RegisterCustomer`,
        data
      )
      .then(function (response) {
        navigate("/customer-list");
      })
      .catch(function (response) {
        navigate("/customer-list");
      });
  };

  const navigate = useNavigate();

  return (
    <Container style={{ padding: 10 }}>
      <Form onSubmit={registerCustomer} id="customerForm">
        {FormFormat("Nome", "text", "Nome", "firstName")}
        {FormFormat("Sobrenome", "text", "Sobrenome", "lastName")}
        {FormFormat("Endereço", "text", "Rua A, 100", "address1")}
        {FormFormat("Complemento", "text", "Apartamento 2", "address3")}
        {FormFormat("CEP", "text", "01234-100", "address2")}
        {FormFormat("E-Mail", "text", "email@dominio.com", "email")}
        {FormFormat("Telefone", "text", "11 9 1234 5678", "phone")}

        <Button variant="outline-primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
