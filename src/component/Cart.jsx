import React, { Component } from "react";

export default class Cart extends Component {
  render() {
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
        <div className=" bg-light shadow rounded-lg w-75 position-relative py-5">
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
            onClick={this.props.onCloseCart}
          >
            X
          </span>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>INX</th>
                  <th>NAME</th>
                  <th>IMAGE</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>TOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map((product, i) => {
                  return (
                    <tr className="">
                      <td>{i + 1}</td>
                      <td>{product.item.name}</td>
                      <td>
                        <img src={product.item.image} alt="" className="w-25" />
                      </td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            this.props.onDecreaseQuantity(product.item.id);
                          }}
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            this.props.onIncreaseQuantity(product.item.id);
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td>${product.item.price}</td>
                      <td>${product.item.price * product.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.onDelete(product.item.id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="7">
                    <h4 className="text-end">Total: $
                      {
                        this.props.onTotal()
                      }
                      </h4>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-info" onClick={this.props.onPurchase}>Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}
