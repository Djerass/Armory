import React from "react";
import heart from "../../assets/heart.png";
import shield from "../../assets/shield.png";
import sword_ico from "../../assets/sword.png";
const ShopOutput = ({
  avatar,
  name,
  health,
  armor,
  attack,
  sword,
  helmet,
  gloves,
  boots,
  chest
}) => {
  return (
    <React.Fragment>
      <img src={avatar} alt="" className="character" />
      <img src={helmet.img} alt="" className="helmet item" />
      <img src={chest.img} alt="" className="chest item" />
      <img src={gloves.img} alt="" className="gloves item" />
      <img src={boots.img} alt="" className="boots item" />
      <img src={sword.img} alt="" className="sword item" />
      <div className="name-group">
        <div className="name-label">Name:</div>
        <div className="name-value">{name}</div>
      </div>
      <div className="stats-group">
        <div className="stats-label">Stats:</div>
        <div className="stats-value">
          <div className="health value">
            <div className="health-value">{health.toString()}</div>
            <img src={heart} alt="health" />
          </div>
          <div className="armor value">
            <div className="armor-value">{armor.toString()}</div>
            <img src={shield} alt="armor" />
          </div>
          <div className="attack value">
            <div className="attack-value">{attack.toString()}</div>
            <img src={sword_ico} alt="attack" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopOutput;
