import './App.css';
import { useState } from "react";
import type { Order, Position } from "./types.ts";
import OrderDetails from "./components/OrderDetails/OrderDetails.tsx";
import { PRODUCT_POSITIONS } from "./constants.ts";
import Positions from "./components/Positions/Positions.tsx";

const App = () => {

  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const positions: Position[] = PRODUCT_POSITIONS;

  const addOrder = (position: Position) => {
    setOrdersList((prevList) => {
      const isExist = prevList.find(item => item.name === position.name);
      if (isExist) {
        return prevList.map(item => (
            item.name === position.name
              ? {...item, count: item.count + 1}
              : item
          )
        );
      }

      return [...prevList,
        {
          name: position.name,
          price: position.price,
          count: 1
        }];
    });
  };

  const removeOrder = (name: string) => {
    setOrdersList((prevList) => {
      const existingOrder = prevList.find(item => item.name === name);

      if (existingOrder && existingOrder.count > 1) {
        return prevList.map(item =>
          item.name === name
            ? {...item, count: item.count - 1}
            : item
        );
      }
      return prevList.filter(item => item.name !== name);
    });
  };

  const removeOrderItem = (name: string) => {
    setOrdersList((prevList) => {
      return prevList.filter(item => item.name !== name);
    });
  };

  const getTotalPrice = ordersList.reduce((acc, item) => {
    return acc + (item.price * item.count);
  }, 0);

  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">
          FastFood order App
        </h1>

        <div className="content">
          <div className="content-left">
            <OrderDetails
              totalPrice={getTotalPrice}
              orderList={ordersList}
              removeOrder={removeOrder}
              removeOrderItem={removeOrderItem}
            />
          </div>

          <div className="content-right">
            <Positions
              positions={positions}
              ordersChangeHandler={addOrder}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
