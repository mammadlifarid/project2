import React, { Component } from "react";
import Item from "./Item";
import Cart from "./Cart";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      // ...other states
    };
    // ...other methods
  }

  render() {
    const { category } = this.state;
    return (
      <React.Fragment>
        <div className="categories"> {/* Category buttons */} </div>{" "}
        <div className="home_container">
          {" "}
          {this.state[category].map((item) => (
            <Item
              key={item.model} // Add a key prop
              img_url={item.img_url}
              brand={item.brand}
              model={item.model}
              price={item.price}
              description={item.description}
            />
          ))}{" "}
        </div>{" "}
        <Cart />
      </React.Fragment>
    );
  }
}
n;
