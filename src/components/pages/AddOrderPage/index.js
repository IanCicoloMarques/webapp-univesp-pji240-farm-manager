import axios from "axios";
import { useEffect, useContext, useState } from "react";
import Product from "../../Product";
import Select from "react-select";
import { Container } from "react-bootstrap";
import CategoryContext from "../../../contexts/categoryContext";
import ProductsContext from "../../../contexts/productsContext";
import CustomersContext from "../../../contexts/CustomersContext";

export default function AddOrderPage() {
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoryContext);
  const { customers } = useContext(CustomersContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState({});

  const [productFilter, setProductFilter] = useState([]);

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

  const setSelected = (index, counter) => {
    products[index].selected = counter;
  };

  function saveOrder() {
    var productList = [];
    products.map((p) => {
      if (p.selected > 0) {
        p.amount = p.selected;
        productList.push(p);
      }
    });

    const obj = {
      customerId: selectedCustomer.id,
      productList: productList,
    };

    var json = JSON.stringify(obj);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/orders/AddOrder`, json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        //handle success
      })
      .catch(function (response) {
        //handle error
      });
  }

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

  const DisplaySideMenu = () => {
    return (
      <div className="ml-10 flex flex-wrap items-start py-6 px-6 xl:px-0">
        <div className="filters w-full">
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
              id={product.id}
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

  return (
    <div
      style={{
        display: "flex",
      }}>
      {DisplaySideMenu()}

      {DisplayProducts()}
    </div>
    // <div>
    //   <Container>
    //     <h1>
    //       <b>Fazer Pedido</b>
    //     </h1>
    //     <Grid
    //       container
    //       spacing={{ xs: 2, md: 3 }}
    //       columns={{ xs: 4, sm: 8, md: 12 }}>
    //       {products.map((product, index) => (
    //         <Grid item xs={2} sm={4} md={4} key={index}>
    //           <Product
    //             id={product.id}
    //             name={product.name}
    //             price={product.price}
    //             image={product.image}
    //             setSelected={setSelected}
    //             index={index}
    //           />
    //         </Grid>
    //       ))}
    //     </Grid>
    //     <h1>
    //       <b>Selecionar Cliente:</b>
    //     </h1>
    //     <Select
    //       className="basic-single"
    //       classNamePrefix="select"
    //       name="color"
    //       options={customers.map((c, index) => ({
    //         value: c,
    //         label: `${c.firstName} ${c.lastName} ${c.phone} ${c.address1}`,
    //       }))}
    //       onChange={(e) => {
    //         setSelectedCustomer(e.value);
    //       }}
    //     />
    //     <Button onClick={saveOrder}>Salvar Pedido</Button>
    //   </Container>
    // </div>
  );
}
