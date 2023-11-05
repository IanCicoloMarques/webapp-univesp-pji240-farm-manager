import { useMemo, useEffect, useContext } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";

import CustomersContext from "../../../contexts/CustomersContext";

export default function CustomerSearchPage() {
  const { customers, setCustomers } = useContext(CustomersContext);

  useEffect(() => {
    const request = axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/customer/GetCustomerList`,
      { rejectUnauthorized: false }
    );
    request
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((e) => {});
  }, []);

  const updateCustometList = () => {
    const request = axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/customer/GetCustomerList`,
      { rejectUnauthorized: false }
    );
    request
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((e) => {});
  };

  const removeCustomer = (row) => {
    const request = axios.delete(
      `${process.env.REACT_APP_BACKEND_URI}/customer/` + row.id
    );

    request
      .then((response) => {
        updateCustometList();
      })
      .catch((e) => {});
  };

  const removeButton = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
          removeCustomer(row);
        }}>
        Remover
      </Button>
    );
  };

  const columns = useMemo(
    () => [
      {
        dataField: "firstName",
        text: "Nome",
        size: 150,
      },
      {
        dataField: "lastName",
        text: "Sobrenome",
        size: 150,
      },
      {
        dataField: "address1",
        text: "Endereço",
        size: 200,
      },
      {
        dataField: "address3",
        text: "Complemento",
        size: 200,
      },
      {
        dataField: "address2",
        text: "CEP",
        size: 200,
      },
      {
        dataField: "phone",
        text: "Telefone",
        size: 150,
      },
      {
        dataField: "email",
        text: "E-Mail",
        size: 200,
      },
      {
        dataField: "delete",
        text: "Remover",
        formatter: removeButton,
        sort: true,
      },
    ],
    []
  );

  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={customers}
        columns={columns}
      />
    </div>
  );
}
