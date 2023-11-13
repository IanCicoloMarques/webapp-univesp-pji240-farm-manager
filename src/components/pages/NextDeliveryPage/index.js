import { useMemo, useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";
import dateFormat from "dateformat";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function NextDeliveryPage() {
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const requestDate = dateFormat(date, "yyyy-mm-dd");
    const request = axios.post(
      `${process.env.REACT_APP_BACKEND_URI}/orders/GetOrderByDate?date=${requestDate}`
    );
    request
      .then((response) => {
        setOrders(response.data);
      })
      .catch((e) => {});
  }, []);

  function updateDate(updatedDate) {
    setDate(updatedDate);

    const requestDate = dateFormat(date, "yyyy-mm-dd");
    const request = axios.post(
      `${process.env.REACT_APP_BACKEND_URI}/orders/GetOrderByDate?date=${requestDate}`
    );

    request
      .then((response) => {
        setOrders(response.data);
      })
      .catch((e) => {});
  }

  const columns = useMemo(() => [
    {
      accessorKey: "customer.name",
      header: "Cliente",
      size: 150,
    },
    {
      accessorKey: "date",
      header: "Data",
      size: 100,
      accessorFn: (row) => dateFormat(row.date, "dd/mm/yyyy"),
    },
    {
      accessorKey: "price",
      header: "Valor",
      size: 80,
      accessorFn: (row) => "R$" + row.price,
    },
    {
      accessorKey: "isPaid",
      header: "Pago",
      size: 80,
      accessorFn: (row) => (row.isPaid ? "Sim" : "Não"),
    },
    {
      accessorKey: "customer.address",
      header: "Endereço",
      size: 150,
    },
  ]);

  return (
    <div>
      <div>
        <DatePicker
          selected={date}
          onChange={(updatedDate) => updateDate(updatedDate)}
        />
      </div>
      <div>
        <MaterialReactTable columns={columns} data={orders} />
      </div>
    </div>
  );
}
