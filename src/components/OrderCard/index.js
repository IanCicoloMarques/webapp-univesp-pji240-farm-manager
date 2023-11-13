import { Modal, Button, Row, Col, Container, Stack } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function OrderCard(props) {
  const {
    id,
    products,
    totalAmount,
    orderStatus,
    isPaid,
    customerName,
    fullAddress,
    estimatedDelivery,
    orderDate,
    handleRefresh,
  } = props;

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleConfirmPayment = () => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URI}/orders/ChangePayment`, null, {
        params: { orderId: id, paymentStatus: true },
      })
      .then(function (response) {
        handleRefresh();
        handleShow();
      })
      .catch(function (response) {
        //handle error
      });
  };
  const handleChangeStatus = (status) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URI}/orders/UpdateOrder`, null, {
        params: { orderId: id, statusId: status },
      })
      .then(function (response) {
        handleRefresh();
        handleShow();
      })
      .catch(function (response) {
        //handle error
      });
  };

  const handleConfirmDelivery = () => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URI}/orders/ConfirmDelivery`,
        null,
        {
          params: { orderId: id },
        }
      )
      .then(function (response) {
        handleRefresh();
        handleShow();
      })
      .catch(function (response) {
        //handle error
      });
  };

  const RenderList = (products) => {
    return (
      <div class="mb-6 w-full">
        {products.map((product, index) => (
          <div class="product mb-6 flex pr-6 w-full">
            <div class="w-1/8 ">
              <img
                class="h-12 w-12 object-cover hover:shadow-lg rounded-xl"
                src={product.image}
              />
            </div>

            <div class="w-7/8 pl-6 w-full">
              <div class="flex justify-between">
                {product.amount} x {product.name}
                <p class="mb-6 pt-1 text-gray-600">
                  R${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div class="order w-full mb-6 p-6 flex flex-wrap bg-gray-100 rounded-xl">
      <div class="mb-6 flex justify-between w-full">
        <>
          Pedido no: {id} - {customerName}{" "}
        </>
      </div>

      {RenderList(products)}
      <div class="mb-2 w-full">
        <strong>Total:</strong>{" "}
        <span class="text-gray-600">R$ {totalAmount}</span>
        <br />
        <strong>Situação do pedido:</strong>
        <span class="text-emerald-600"> {orderStatus}</span>
        <br />
        <strong>Data do pedido:</strong>{" "}
        <span class="text-gray-600">{orderDate}</span>
        <br />
        <strong>Data de entrega:</strong>{" "}
        <span class="text-gray-600">{estimatedDelivery}</span>
        <br />
        <strong>Pago:</strong>
        <span class="text-gray-600"> {isPaid ? "Sim" : "Não"} </span>
        <br />
        <strong>Endereço de entrega: </strong>
        <span class="text-gray-600">{fullAddress}</span>
        <br />
        <div className="d-flex align-items-center justify-content-center" s>
          <Button variant="outline-success" onClick={handleShow}>
            Alterar Status
          </Button>
        </div>
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Alterar Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              <Stack gap={3}>
                <Button
                  variant="outline-primary"
                  onClick={handleConfirmPayment}>
                  Confirmar Pagamento
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handleChangeStatus(3)}>
                  Inciar Separação
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handleChangeStatus(6)}>
                  Iniciar Entrega
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={handleConfirmDelivery}>
                  Confirmar Entrega
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => handleChangeStatus(2)}>
                  Cancelar Pedido
                </Button>
              </Stack>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleShow}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
