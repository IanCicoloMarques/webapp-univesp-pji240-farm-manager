import axios from "axios";
import { useEffect, useContext, useState } from "react";
import Product from "../../Product";
import { Button, Modal, Stack, Form } from "react-bootstrap";
import CategoryContext from "../../../contexts/categoryContext";
import ProductsContext from "../../../contexts/productsContext";
import CustomersContext from "../../../contexts/CustomersContext";
import CartContext from "../../../contexts/cartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerListSearch from "../../CustomerListSearch";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddOrderPage() {
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoryContext);
  const { customers } = useContext(CustomersContext);
  const { cart, setCart } = useContext(CartContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [show, setShow] = useState(false);
  const [paid, setPaid] = useState(false);
  const [productFilter, setProductFilter] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProductFilter(
      products
        .filter((products) =>
          products.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((products) =>
          products.category.toLowerCase().includes(categoryQuery.toLowerCase())
        )
    );
  }, [products, searchQuery, categoryQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategory = (event) => {
    setCategoryQuery(event);
  };

  const DisplayCategory = (category) => {
    return (
      <ul className="space-y-2">
        <li
          className="block p-2 {% if not active_category%}text-emerald-600 text-xl {% else %} text-gray-600 {% endif %} hover:bg-emerald-500 hover:text-white transition duration-300"
          style={{ cursor: "pointer" }}
          onClick={() => handleCategory(category.name)}>
          {category.name}
        </li>
      </ul>
    );
  };

  const DisplayAllCategory = () => {
    return (
      <ul className="space-y-2">
        <li
          className="block p-2 {% if not active_category%}text-emerald-600 text-xl {% else %} text-gray-600 {% endif %} hover:bg-emerald-500 hover:text-white transition duration-300"
          style={{ cursor: "pointer" }}
          onClick={() => handleCategory("")}>
          Todos os produtos
        </li>
      </ul>
    );
  };

  const handleOrder = () => {
    setShow(true);
  };

  const DisplaySideMenu = () => {
    return (
      <div className="ml-10 flex flex-wrap items-start py-6 px-6 xl:px-0">
        <div className="filters w-full">
          <Button
            variant="outline-success"
            size="lg"
            onClick={handleOrder}
            disabled={cart.length < 1}>
            Realizar Pedido
          </Button>
          <h3 className="mb-3 text-xl uppercase font-bold text-gray-900">
            Buscar
          </h3>

          <form method="get" action=".">
            <div className="flex">
              <input
                type="text"
                name="query"
                placeholder="Buscar"
                className="w-full rounded p-4 border-t mr-0 border text-gray-800 border-gray-200 bg-white"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </form>
          <h3 className="my-6 text-xl uppercase font-bold text-gray-900">
            Categorias
          </h3>
          {DisplayAllCategory()}
          {categories.map((category, index) => {
            return DisplayCategory(category);
          })}
        </div>
      </div>
    );
  };

  const DisplayProducts = () => {
    return (
      <div className="max-w-6xl mx-auto py-6 px-6 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {productFilter.map((product) => (
            <Product
              productId={product.productId}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    );
  };

  const RenderList = () => {
    return (
      <div class="mb-6 w-full">
        {cart.map((cartProduct, index) => (
          <div class="product mb-6 flex pr-6 w-full">
            <div class="w-1/8 ">
              <img
                class="h-12 w-12 object-cover hover:shadow-lg rounded-xl"
                src={cartProduct.image}
              />
            </div>

            <div class="w-7/8 pl-6 w-full">
              <div
                class="flex justify-between"
                style={{ display: "inline-grid" }}>
                {cartProduct.amount} x {cartProduct.name}
                <p class="mb-6 pt-1 text-gray-600">
                  R${(cartProduct.price * cartProduct.amount).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ShowPayment = () => {
    return (
      <Stack style={{ alignItems: "center" }} h>
        <Form.Check
          reverse
          type="radio"
          id="radio-paid"
          label="Pago"
          name="isPaid"
          onChange={() => setPaid(true)}
        />
        <Form.Check
          defaultChecked
          reverse
          label="Não Pago"
          name="isPaid"
          type="radio"
          id="radio-paid-2"
          onChange={() => setPaid(false)}
        />
      </Stack>
    );
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleConfirm = () => {
    var customer = customers.find((c) => c.id === selectedCustomer);
    var products = cart;
    console.log(cart);
    var data = {
      customerId: selectedCustomer,
      productList: cart,
      isPaid: paid,
      orderedAt: "",
      fullAddress: "",
      customerName: "",
      estimatedDelivery: "",
      statusDescription: "",
    };

    console.log("data", data);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/orders/AddOrder`, data)
      .then(function (response) {
        setShow(false);
        setCart([]);
        navigate("/order-list");
      })
      .catch(function (response) {
        //handle error
      });
  };

  const ShowConfirmButton = () => {
    if (selectedCustomer > 0) {
      return (
        <Stack>
          <Button variant="outline-success" onClick={handleConfirm}>
            Confirmar pedido
          </Button>
        </Stack>
      );
    } else {
      return (
        <Stack>
          <Button variant="outline-warn">
            Selecione o Cliente Antes de Continuar
          </Button>
        </Stack>
      );
    }
  };

  const GetTotal = () => {
    var total = 0;
    cart.map((p) => {
      total += p.amount * p.price;
    });
    return total.toFixed(2);
  };

  const DisplayModal = () => {
    return (
      <div>
        <Modal show={show} fullscreen onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Realizar Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Stack gap={2}>
              {RenderList()}
              <>Total: RS{GetTotal()}</>
              <CustomerListSearch handleSelectCustomer={handleSelectCustomer} />
              {ShowPayment()}
              {ShowConfirmButton()}
              <Button variant="outline-danger" onClick={() => setShow(false)}>
                Cancelar
              </Button>
            </Stack>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
      }}>
      {DisplaySideMenu()}

      {DisplayProducts()}

      {DisplayModal()}
    </div>
  );
}
