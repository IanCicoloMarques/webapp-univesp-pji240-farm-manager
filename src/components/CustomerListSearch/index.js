import { useEffect, useRef, useState, useContext } from "react";

import CustomersContext from "../../contexts/CustomersContext";

import { ListGroup, InputGroup, Form, Stack } from "react-bootstrap";

const CustomerListSearch = (props) => {
  const { handleSelectCustomer } = props;
  const { customers } = useContext(CustomersContext);
  const [customerFilter, setCustomerFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState();
  const formRef = useRef(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  const GetCustomerData = (customer) => {
    return [
      customer.firstName,
      customer.lastName,
      customer.phone,
      customer.address1,
      customer.address3,
      customer.address2,
    ].join(" ");
  };

  useEffect(() => {
    if (searchQuery === "") {
      setCustomerFilter([]);
    } else {
      setCustomerFilter(
        customers.filter((customer) =>
          GetCustomerData(customer)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [customers, searchQuery]);

  const selectOption = (option) => {
    console.log(option);
    setSearchQuery("");
    formRef.current.value = "";
    setSelectedCustomer(option);
    handleSelectCustomer(option);
  };

  const isActive = (id) => {
    return id === selectedCustomer;
  };

  const RenderSelectedCustomer = () => {
    if (selectedCustomer > 0) {
      var customer = customers.find((c) => c.id === selectedCustomer);
      return (
        <Stack gap={2} className="col-md-5 mx-auto">
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">Nome</div>
            <div className="p-2 ms-auto">
              {[customer.firstName, customer.lastName].join(" ")}
            </div>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">Endereço</div>
            <div className="p-2 ms-auto">
              {[customer.address1, customer.address3, customer.address2].join(
                " "
              )}
            </div>
          </Stack>

          <Stack direction="horizontal" gap={3}>
            <div className="p-2">Telefone</div>
            <div className="p-2 ms-auto">{customer.phone}</div>
          </Stack>

          <Stack direction="horizontal" gap={3}>
            <div className="p-2">E-mail</div>
            <div className="p-2 ms-auto">{customer.email}</div>
          </Stack>
        </Stack>
      );
    } else {
      return (
        <Stack style={{ alignItems: "center" }}>Selecione um Cliente</Stack>
      );
    }
  };

  return (
    <Stack gap={2}>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-customer">Pesquisar</InputGroup.Text>
        <Form.Control
          ref={formRef}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleSearch}
        />
      </InputGroup>

      <ListGroup>
        {customerFilter.map((customer, index) => {
          return (
            <ListGroup.Item
              action
              active={isActive(customer.id)}
              onClick={() => selectOption(customer.id)}>
              {customer.firstName} {customer.lastName} - {customer.phone} -{" "}
              {customer.address1} {customer.address3} {customer.address2}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {RenderSelectedCustomer()}
    </Stack>
  );
};

export default CustomerListSearch;
