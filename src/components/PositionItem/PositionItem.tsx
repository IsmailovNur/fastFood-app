import type { Position } from "../../types.ts";
import type { FC } from "react";
import "./PositionItem.css";

interface PositionItemProps {
  position: Position;
  clickHandler: () => void;
}

const PositionItem: FC<PositionItemProps> = ({position, clickHandler}) => {
  return (
    <div
      className="position-item"
      onClick={clickHandler}
    >
      <img
        className="position-image"
        src={position.image}
        alt={position.name}
      />
     <div className="position-info">
       <h6 className="position-name">{position.name}</h6>
       <span className="position-price"><b>{position.price}</b> KGS</span>
     </div>
    </div>
  );
};

export default PositionItem;