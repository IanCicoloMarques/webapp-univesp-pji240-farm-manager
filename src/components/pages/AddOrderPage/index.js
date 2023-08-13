import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../../Product';
import { Grid } from "@mui/material";
import { CurtainsOutlined } from '@mui/icons-material';

export default function AddOrderPage(){

    const [ customers, setCustomers ] = useState([]);
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/customer/GetCustomerList`);
        request.then((response) => {
          setCustomers(response.data);
          console.log(customers)
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
        <select>
            {customers.map((customer, index) => (
                <option value = {customer.name}> {customer.name} </option>
            ))}
        </select>

      </div>
    );
}