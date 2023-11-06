import { useMemo, useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";

import dateFormat from "dateformat";
import OrderCard from "../../OrderCard";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/orders`);
    request
      .then((response) => {
        setOrders(response.data);
        console.log("o", orders);
      })
      .catch((e) => {});
  }, []);

  const formatBoolean = (cell, row, rowIndex, formatExtraData) => {
    return <>{row === 0 ? "Sim" : "Não"}</>;
  };

  const formatList = (cell, row, rowIndex, formatExtraData) => {
    return (
      <>
        {cell.map((p) => {
          return (
            <div>
              {p.amount} {p.name}
            </div>
          );
        })}
      </>
    );
  };

  const formatTotal = (cell) => {
    var total = 0;
    cell.map((p) => {
      total += p.amount * p.price;
    });
    return <>{total.toFixed(2)}</>;
  };

  const columns = useMemo(
    () => [
      {
        dataField: "orderId",
        text: "No. Pedido",
        size: 150,
      },
      {
        dataField: "customerName",
        text: "Cliente",
        size: 150,
      },
      {
        dataField: "isPaid",
        text: "Pago",
        size: 200,
        formatter: formatBoolean,
      },
      {
        dataField: "productList",
        text: "Produtos",
        size: 200,
        formatter: formatList,
      },
      {
        dataField: "productList",
        text: "Total",
        size: 200,
        formatter: formatTotal,
      },
    ],
    []
  );

  return (
    <div class="max-w-7xl mx-auto p-6 ">
      {console.log("o2", orders)}
      {orders.map((order, index) => (
        <OrderCard
          id={order.orderId}
          products={order.productList}
          isPaid={order.isPaid}
          customerName={order.customerName}
          totalAmount={formatTotal(order.productList)}
          fullAddress={order.fullAddress}
          estimatedDelivery={order.estimatedDelivery}
          orderDate={order.orderedAt}
          orderStatus={order.statusDescription}
        />
      ))}
    </div>
  );
}

// {orders.map((o, index) => {
//   console.log("o2", o);
//   <OrderCard
//     id={55}
//     products={[]}
//     totalAmount={75}
//     orderStatus={"Aprovado"}
//     customerName={"Maria"}
//     fullAddress={"Rua Larga, 15"}
//   />;
// })}
