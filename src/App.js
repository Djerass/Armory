import React from "react";
import axios from "axios";
// import "./App.css";

import Wrapper from "./components/wrapper/Wrapper";
import Rectangle from "./components/wrapper/Rectangle";
import ShopInput from "./components/ShopInput/ShopInput";
import ShopOutput from "./components/ShopOutput/ShopOutput";

class App extends React.Component {
  state = {
    totalCost: 0,
    avatar: "",
    defaultPerson: {},
    person: {},
    equipment: {},
    selectedItems: {
      sword: {
        price: "0",
        img: "",
        armor: "0",
        attack: "0",
        health: "0",
        id: "-1"
      },
      helmet: {
        price: "0",
        img: "",
        armor: "0",
        attack: "0",
        health: "0",
        id: "-1"
      },
      gloves: {
        price: "0",
        img: "",
        armor: "0",
        attack: "0",
        health: "0",
        id: "-1"
      },
      boots: {
        price: "0",
        img: "",
        armor: "0",
        attack: "0",
        health: "0",
        id: "-1"
      },
      chest: {
        price: "0",
        img: "",
        armor: "0",
        attack: "0",
        health: "0",
        id: "-1"
      }
    }
  };
  componentDidMount = async () => {
    const response = await axios.get("api/test");
    const avatar =
      Math.random() > 0.5
        ? response.data.person.img
        : response.data.person["alt-img"];
    this.setState({
      avatar,
      person: response.data.person,
      equipment: response.data.equipment
    });
  };
  selectChangeHandler = (label, data) => {
    let selector;
    switch (label) {
      case "Helmet":
        selector = "helmets";
        break;
      case "Chest":
        selector = "chests";
        break;
      case "Gloves":
        selector = "gloves";
        break;
      case "Boots":
        selector = "boots";
        break;
      case "Sword":
        selector = "swords";
        break;
      default:
        selector = "";
    }
    label = label.toLowerCase();
    this.setState(prevState => {
      return {
        selectedItems: {
          ...prevState.selectedItems,
          [label]: prevState.equipment[selector][data.id]
        }
      };
    });
  };
  resetHandler = () => {
    this.setState({
      selectedItems: {
        sword: {
          price: "0",
          img: "",
          armor: "0",
          attack: "0",
          health: "0",
          id: "-1"
        },
        helmet: {
          price: "0",
          img: "",
          armor: "0",
          attack: "0",
          health: "0",
          id: "-1"
        },
        gloves: {
          price: "0",
          img: "",
          armor: "0",
          attack: "0",
          health: "0",
          id: "-1"
        },
        boots: {
          price: "0",
          img: "",
          armor: "0",
          attack: "0",
          health: "0",
          id: "-1"
        },
        chest: {
          price: "0",
          img: "",
          armor: "0",
          attack: "0",
          health: "0",
          id: "-1"
        }
      }
    });
  };
  render() {
    const { person } = this.state;
    let armor = Number.parseInt(person.armor);
    let attack = Number.parseInt(person.attack);
    let health = Number.parseInt(person.health);
    let totalPrice = 0;
    // eslint-disable-next-line
    for (let i in this.state.selectedItems) {
      armor += Number.parseInt(this.state.selectedItems[i].armor);
      health += Number.parseInt(this.state.selectedItems[i].health);
      attack += Number.parseInt(this.state.selectedItems[i].attack);
      totalPrice += Number.parseInt(this.state.selectedItems[i].price);
    }
    return (
      <React.Fragment>
        <Wrapper>
          <Rectangle>
            <ShopInput
              totalCost={totalPrice}
              changeEvent={this.selectChangeHandler}
              resetEvent={this.resetHandler}
              {...this.state.equipment}
              selectedItems={this.state.selectedItems}
            />
          </Rectangle>
          <Rectangle>
            <ShopOutput
              avatar={this.state.avatar}
              name={person.name}
              attack={attack}
              armor={armor}
              health={health}
              {...this.state.selectedItems}
            />
          </Rectangle>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
