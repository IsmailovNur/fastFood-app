import type { Order } from "../../types.ts";
import type { FC } from "react";
import "./OrderItem.css";

interface OrderItemProps {
  order: Order;
  clickHandler: () => void;
}

const OrderItem: FC<OrderItemProps> = ({order, clickHandler}) => {
  return (
    <div className="order-item">
      <span className="order-name">{order.name}</span>
      <b className="order-name"> X {order.count}</b>
      <span className="order-price"><b>{order.price} KGS</b></span>
      <button
        className="delete-btn"
        onClick={clickHandler}
      >delete
      </button>
    </div>
  );
};

export default OrderItem;