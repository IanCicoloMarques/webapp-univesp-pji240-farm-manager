import { useMemo, useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";
import https from "https";

export default function CustomerSearchPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const request = axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/customer/GetCustomerList`,
      { httpsAgent: agent }
    );
    request
      .then((response) => {
        setCustomers(response.data);
        console.log(customers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nome",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Endereço",
        size: 200,
      },
      {
        accessorKey: "phone",
        header: "Telefone",
        size: 150,
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={customers} />;
}
