import type { Order } from "../../types.ts";
import type { FC } from "react";
import "./OrderItem.css";
import Button from "../Button/Button.tsx";

interface OrderItemProps {
  order: Order;
  clickHandler: () => void;
  deleteItemHandler: () => void;
}

const OrderItem: FC<OrderItemProps> = (props) => {
  const {order, clickHandler, deleteItemHandler} = props;
  return (
    <div className="order-item">
      <span className="order-name">{order.name}</span>
      <b className="order-count"> X {order.count}</b>
      <span className="order-price"><b>{order.price} KGS</b></span>
      <Button
        className="delete-btn"
        clickHandler={clickHandler}
      >
        <img
          className="icon"
          src="/assets/icons/trash-bin.svg"
          alt="trash"
        />
      </Button>
      <Button
        className="remove-btn"
        clickHandler={deleteItemHandler}
      >
        <img
          className="icon"
          src="/assets/icons/cross-mark.svg"
          alt="cross"
        />
      </Button>
    </div>
  );
};

export default OrderItem;