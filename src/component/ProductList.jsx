import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.data.map((item) => {
      return (
        <div className="col-3">
          <ProductItem
            key={item.id}
            data={item}
            onAddToCart ={this.props.onAddToCart}
            setSelectedProduct={this.props.setSelectedProduct}
            onShowDetail = {this.props.onShowDetail}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {this.renderProduct()}
          </div>
        </div>
      </div>
    );
  }
}
