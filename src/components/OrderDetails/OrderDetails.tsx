import type { Order } from "../../types.ts";
import type { FC } from "react";
import "./OrderDetails.css";
import OrderItem from "../OrderItem/OrderItem.tsx";

interface OrderDetailsProps {
  orderList: Order[];
  removeOrder: (name: string) => void;
  removeOrderItem: (name: string) => void;
  totalPrice: number;
}

const OrderDetails: FC<OrderDetailsProps> = (props) => {
  const {orderList, removeOrder, totalPrice, removeOrderItem} = props;

  return (
    <div className="order-details">
      {orderList.length ?
        (<div className="orders-list">
          {
            orderList.map(order => (
              <OrderItem
                clickHandler={() => removeOrder(order.name)}
                key={order.name}
                order={order}
                deleteItemHandler={() =>removeOrderItem(order.name)}
              />
            ))
          }
          <h3 className="orders-price">Total price: {totalPrice} KGS</h3>
        </div>) :
        <h2 className="orders-title">Orders List is Empty!</h2>
      }
    </div>
  );
};

export default OrderDetails;