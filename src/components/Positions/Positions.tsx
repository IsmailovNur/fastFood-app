import type { Position } from "../../types.ts";
import type { FC } from "react";
import PositionItem from "../PositionItem/PositionItem.tsx";

interface PositionProps {
  positions: Position[];
}

const Positions: FC<PositionProps> = ({positions}) => {
  return (
    <div>
      {
        positions.map(position => (
          <PositionItem
            key={position.id}
            position={position}
          />
        ))
      }
    </div>
  );
};

export default Positions;