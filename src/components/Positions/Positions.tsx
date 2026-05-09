import type { Position } from "../../types.ts";
import type { FC } from "react";
import PositionItem from "../PositionItem/PositionItem.tsx";
import "./Positions.css";

interface PositionProps {
  positions: Position[];
  ordersChangeHandler: (position: Position) => void;
}

const Positions: FC<PositionProps> = ({positions, ordersChangeHandler}) => {

  return (
    <div className="positions">
      {
        positions.map(position => (
          <PositionItem
            clickHandler={() => ordersChangeHandler(position)}
            key={position.name}
            position={position}
          />
        ))
      }
    </div>
  );
};

export default Positions;