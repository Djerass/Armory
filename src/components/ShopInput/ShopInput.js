import React from "react";
import Selector from "../Selector/Selector";
import HL from "../HL/HL";

const ShopInput = ({
  totalCost,
  boots,
  chests,
  gloves,
  helmets,
  swords,
  changeEvent,
  resetEvent,
  selectedItems
}) => {
  return (
    <React.Fragment>
      <div className="header">SHOP</div>
      <div className="item-wrapper">
        <Selector
          label="Helmet"
          list={helmets}
          change={changeEvent}
          selectedId={selectedItems.helmet.id}
        />
        <Selector
          label="Chest"
          list={chests}
          change={changeEvent}
          selectedId={selectedItems.chest.id}
        />
        <Selector
          label="Gloves"
          list={gloves}
          change={changeEvent}
          selectedId={selectedItems.gloves.id}
        />
        <Selector
          label="Boots"
          list={boots}
          change={changeEvent}
          selectedId={selectedItems.boots.id}
        />
        <Selector
          label="Sword"
          list={swords}
          change={changeEvent}
          selectedId={selectedItems.sword.id}
        />
        <HL />
        <div className="total-cost">Equiepment cost: {totalCost}</div>
        <div className="reset-wrapper">
          <button onClick={resetEvent} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopInput;
