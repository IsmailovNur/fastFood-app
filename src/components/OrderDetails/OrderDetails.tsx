import type { Order } from "../../types.ts";
import type { FC } from "react";

interface OrderDetailsProps {
  orderList: Order[];
  setOrderList: () => void;
}

const OrderDetails: FC<OrderDetailsProps> = ({orderList}) => {
  return (
    <div>
      {
        orderList.map(order => (
          <div>{order.name}</div>
        ))
      }
    </div>
  );
};

export default OrderDetails;