import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProduct;
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container card">
          <span
            style={{
              width: 40,
              height: 40,
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
            className=" border rounded-circle d-flex justify-content-center align-items-center cursor-pointer"
            onClick={()=>{this.props.onCloseDetail()}}
          >
            X
          </span>
          <div className="row d-flex align-items-center">
            <div className="col-5">
              <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="col-7">
              <h4>Name:{name} </h4>
              <h4>Price:{price} </h4>
              <p>Description:{description} </p>
              <p>Inventory:{quantity} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
