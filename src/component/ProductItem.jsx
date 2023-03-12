import React, { Component } from "react";
import { DataContext } from "./context";

export default class ProductItem extends Component {
  static contextType = DataContext;
  render() {
    const { image, name, price } = this.props.data;

    return (
      <div>
        <div className="card p-3 mb-4">
          <img src={image} alt="" className="card-img" />
          <div className="card-body">
            <h4 className="card-tilte">Name: {name}</h4>
            <p className="card-text">Price: ${price}</p>
          </div>
          <button
            className="btn btn-success mb-2"
            onClick={() => {
              this.props.onShowDetail()
              this.props.setSelectedProduct(this.props.data);
            }}
          >
            Detail
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              this.props.onAddToCart(this.props.data);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
