import './App.css';
import { useState } from "react";
import type { Order, Position } from "./types.ts";
import OrderDetails from "./components/OrderDetails/OrderDetails.tsx";
import { PRODUCT_POSITIONS } from "./constants.ts";
import Positions from "./components/Positions/Positions.tsx";

const App = () => {

  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const positions: Position[] = PRODUCT_POSITIONS;

  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">
          FastFood order App
        </h1>
        <div className="content">
          <OrderDetails
            orderList={ordersList}
            setOrderList={() => setOrdersList}
          />

          <Positions
            positions={positions}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
