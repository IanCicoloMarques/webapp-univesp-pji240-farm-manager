export default function OrderCard(props) {
  const {
    id,
    products,
    totalAmount,
    orderStatus,
    isPaid,
    customerName,
    fullAddress,
  } = props;

  const RenderList = () => {
    return (
      <div class="mb-6 w-full">
        <div class="product mb-6 flex pr-6 w-full">
          <div class="w-1/8 ">
            <a href="#" alt="{{ order.item.name }}" class="">
              <img
                class="h-12 w-12 object-cover hover:shadow-lg rounded-xl"
                src="https://via.placeholder.com/150"
              />
            </a>
          </div>

          <div class="w-7/8 pl-6 w-full">
            <div class="flex justify-between">
              <a href="#" class="font-semibold ">
                placeholder
              </a>
              <p class="mb-6 pt-1 text-gray-600">R$ 55.00</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div class="order w-full mb-6 p-6 flex flex-wrap bg-gray-100 rounded-xl">
      <div class="mb-6 flex justify-between w-full">
        <a href="#">
          Pedido no: {id} - {customerName}{" "}
        </a>
      </div>

      {RenderList()}
      <div class="mb-2 w-full">
        <strong>Total:</strong>{" "}
        <span class="text-gray-600">R$ {totalAmount}</span>
        <br />
        <strong>Situação do pedido:</strong>
        <span class="text-emerald-600"> {orderStatus}</span>
        <br />
        <strong>Data do pedido:</strong> <span class="text-gray-600">Hoje</span>
        <br />
        <strong>Data de entrega:</strong>{" "}
        <span class="text-gray-600">Não Hoje</span>
        <br />
        <strong>Pago:</strong>
        <span class="text-gray-600"> {isPaid ? "Sim" : "Não"} </span>
        <br />
        <strong>Endereço de entrega: </strong>
        <span class="text-gray-600">{fullAddress}</span>
        <br />
      </div>
    </div>
  );
}
