import { useMemo, useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";

import dateFormat from "dateformat";
import OrderCard from "../../OrderCard";
import { setRef } from "@mui/material";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/orders`);
    request
      .then((response) => {
        setOrders(response.data);
      })
      .catch((e) => {});
  }, [refresh]);

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

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div class="max-w-7xl mx-auto p-6 ">
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
          handleRefresh={handleRefresh}
        />
      ))}
    </div>
  );
}
