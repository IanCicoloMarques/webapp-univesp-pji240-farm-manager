import { useMemo, useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import axios from "axios";
import dateFormat from 'dateformat';

export default function OrdersPage(){
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/orders`);
        request.then((response) => {
            setOrders(response.data);
            console.log("posapi", orders)
        })
        .catch((e) => {
            console.log(e);
        })
      }, [])


    const columns = useMemo(
        () => [
            {
                accessorKey: 'customer.name', 
                header: 'Cliente',
                size: 150,
              },
              {
                accessorKey: 'date', 
                header: 'Data',
                size: 100,
                accessorFn: (row) => dateFormat(row.date, "dd/mm/yyyy")
              },
              {
                accessorKey: 'price', 
                header: 'Valor',
                size: 80,
                accessorFn: (row) => 'R$' + row.price
              },
              {
                accessorKey: 'isPaid', 
                header: 'Pago',
                size: 80,
                accessorFn: (row) => row.isPaid ? 'Sim' : 'Não',
              },
              {
                accessorKey: 'customer.address', 
                header: 'Endereço',
                size: 150,
              },
              
        ]
      );
    
    return <MaterialReactTable columns={columns} data={orders} />;
}