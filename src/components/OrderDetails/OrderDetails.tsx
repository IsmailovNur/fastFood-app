import type { Order } from "../../types.ts";
import type { FC } from "react";
import "./OrderDetails.css";
import OrderItem from "../OrderItem/OrderItem.tsx";

interface OrderDetailsProps {
  orderList: Order[];
  removeOrder: (name: string) => void;
}

const OrderDetails: FC<OrderDetailsProps> = ({orderList, removeOrder}) => {

  return (
    <div className="order-details">
      {orderList.length ?
        <div className="orders-list">
          {
            orderList.map(order => (
              <OrderItem
                clickHandler={() => removeOrder(order.name)}
                key={order.name}
                order={order}
              />
            ))
          }
        </div> :
        <h2 className="orders-title">Orders List is Empty!</h2>
      }
    </div>
  );
};

export default OrderDetails;