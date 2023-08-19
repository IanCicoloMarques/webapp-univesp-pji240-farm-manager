import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../../Product';
import { Grid, Button } from "@mui/material";
import  Select  from "react-select";


export default function AddOrderPage(){

    const [ customers, setCustomers ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ selectedCustomer, setSelectedCustomer ] = useState({});

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/customer/GetCustomerList`);
        request.then((response) => {
          setCustomers(response.data);
          console.log(customers);
        })
        .catch((e) => {
            console.log(e);
        })
      }, []);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/products`);
        request.then((response) => {
          setProducts(response.data);
          console.log(products)
        })
        .catch((e) => {
            console.log(e);
        })
      }, [])

      const setSelected = (index, counter) => {
            products[index].selected = counter;
            console.log(products)
      }


    function saveOrder(){
      console.log("Pedido Salvo", selectedCustomer, products)
    }


    return(
      <div>
        <h1><b>Fazer Pedido</b></h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((product, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Product
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  setSelected={setSelected}
                  index={index}
                />
             </Grid>
            ))}
        </Grid>
        <h1><b>Selecionar Cliente:</b></h1>
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="color"
          options={customers.map( (c, index) => ({value: c, label: c.name}))}
          onChange={ (e) => {setSelectedCustomer(e.value)}}
        />
        <Button
          onClick={ saveOrder() }
        >
          Salvar Pedido
        </Button>
      </div>
    );
}