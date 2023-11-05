//HOOKS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

// COMPONENTS
import NavBar from "../NavBar";
import HomePage from "../pages/HomePage";
import CustomerRegisterPage from "../pages/CustomerRegisterPage";
import CustomerSearchPage from "../pages/CustomerSearchPage";
import NextDeliveryPage from "../pages/NextDeliveryPage";
import OrdersPage from "../pages/OrdersPage";
import AddOrderPage from "../pages/AddOrderPage";
import LoginPage from "../pages/LoginPage";
import Footer from "../Footer";

// CONTEXTS
import ProductsContext from "../../contexts/productsContext";
import CartContext from "../../contexts/cartContext";
import UserContext from "../../contexts/userContext";
import CategoryContext from "../../contexts/categoryContext";
import CustomersContext from "../../contexts/CustomersContext";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [userLogin, setUserLogin] = useState(null);
  const [categories, setCategories] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/products`);
    request.then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    const request = axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/products/GetCategories`
    );
    request.then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    const request = axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/customer/GetCustomerList`
    );
    request.then((response) => {
      setCustomers(response.data);
    });
  }, []);

  function addProductToCart(item) {
    item.amount = 1;
    setCart([...cart, item]);
  }

  function removeProductFromCart(id) {
    const auxCart = cart.filter((cart) => id != cart.id);
    setCart(auxCart);
  }

  function updateProductOnCart(id, value) {
    const auxCart = [...cart];

    const index = auxCart.findIndex((item) => item.id == id);
    auxCart[index].amount = value;

    setCart([...auxCart]);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        <ProductsContext.Provider value={{ products, setProducts }}>
          <CartContext.Provider
            value={{
              cart,
              setCart,
              addProductToCart,
              removeProductFromCart,
              updateProductOnCart,
            }}>
            <CategoryContext.Provider value={{ categories, setCategories }}>
              <CustomersContext.Provider value={{ customers, setCustomers }}>
                <BrowserRouter>
                  <div className="page-container">
                    <div className="content-wrapper">
                      <NavBar />
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                          path="/customer-list/"
                          element={<CustomerSearchPage />}
                        />
                        <Route
                          path="/customer-register"
                          element={<CustomerRegisterPage />}
                        />
                        <Route path="/add-order" element={<AddOrderPage />} />
                        <Route path="/order-list" element={<OrdersPage />} />
                        <Route
                          path="/next-delivery"
                          element={<NextDeliveryPage />}
                        />
                        <Route path="/login" element={<LoginPage />} />
                      </Routes>
                    </div>
                    <Footer />
                  </div>
                </BrowserRouter>
              </CustomersContext.Provider>
            </CategoryContext.Provider>
          </CartContext.Provider>
        </ProductsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
