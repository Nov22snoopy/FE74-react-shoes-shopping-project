import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import { DataContext } from "./context";
export default class Home extends Component {
  data = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  state = {
    isShowDetail: false,
    isShowCart: false,
    selectedProduct: null,
    cart: [],
  };
  setSelectedProduct = (product) => {
    console.log(product);
    this.setState({
      selectedProduct: product,
    });
  };
  hanldeShowDetail = () => {
    this.setState({
      isShowDetail: true,
    });
  };
  handleShowCart = () => {
    this.setState({
      isShowCart: true,
    });
  };
  handleCloseDetail = () => {
    this.setState({
      isShowDetail: false,
    });
  };
  handldeCloseCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  handleAddToCart = (product) => {
    const clone = [...this.state.cart];
    //1 add khi chua co
    const foundProduct = clone.find((prod) => {
      return prod.item.id === product.id;
    });
    if (!foundProduct) {
      const cartItem = {
        item: product,
        quantity: 1,
      };
      clone.push(cartItem);
    } else {
      foundProduct.quantity += 1;
    }
    this.setState(
      {
        cart: clone,
      },
      () => {
        console.log(this.state.cart);
      }
    );
    //2 tang so luong
  };
  handleDeleteCartItem = (id) => {
    const clone = [...this.state.cart];
    for (let i in clone) {
      if (clone[i].item.id === id) {
        clone.splice(i, 1);
      }
    }

    this.setState(
      {
        cart: clone,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  handleIncreaseQuantity = (id) => {
    const clone = [...this.state.cart];
    for (let i in clone) {
      if (clone[i].item.id === id) {
        clone[i].quantity += 1;
        if (clone[i].quantity > clone[i].item.quantity) {
          clone.splice(i, 1);
          break;
        }
      }
    }
    this.setState(
      {
        cart: clone,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  handleDecreaseQuantity = (id) => {
    const clone = [...this.state.cart];
    for (let i in clone) {
      if (clone[i].item.id === id) {
        clone[i].quantity--;
        if (clone[i].quantity === 0) {
          clone.splice(i, 1);
          break;
        }
      }
    }
    this.setState(
      {
        cart: clone,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };
  handleTotalCount = () => {
    let total = 0;
    this.state.cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };
  handleTotal = () => {
    let total = 0;

    this.state.cart.forEach((product) => {
      total += product.item.price * product.quantity;
      console.log(total);
    });
    return total;
  };
  handlePurchase = () => {
    if (this.state.cart.length === 0) {
      alert("Your cart is empty");
    } else {
      alert("Purchase successfully");
      this.setState({
        cart: [],
      });
    }
  };
  render() {
    return (
      <DataContext.Provider value="123">
        <div>
          <div className="d-flex justify-content-center text-center">
            <h1 className="display-3 ">Shopping Online</h1>
            <div className="">
              <button className="btn btn-success" onClick={this.handleShowCart}>
                Cart({this.handleTotalCount()})
              </button>
            </div>
            <div></div>
          </div>
          <ProductList
            data={this.data}
            onAddToCart={this.handleAddToCart}
            setSelectedProduct={this.setSelectedProduct}
            onShowDetail={this.hanldeShowDetail}
          />
          {this.state.isShowDetail
            ? this.state.selectedProduct && (
                <ProductDetail
                  selectedProduct={this.state.selectedProduct}
                  onCloseDetail={this.handleCloseDetail}
                />
              )
            : null}
          {this.state.isShowCart ? (
            <Cart
              onCloseCart={this.handldeCloseCart}
              onDelete={this.handleDeleteCartItem}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onTotal={this.handleTotal}
              onPurchase={this.handlePurchase}
              data={this.state.cart}
            />
          ) : null}
        </div>
      </DataContext.Provider>
    );
  }
}
/**
 * 1. Xoá sản phẩm trong giỏ hàng
 * 2. Tăng giảm số lương sản phẩm
 * 3. Tỉnh tổng tiền sản phẩm
 * 4. Thanh toán
 */
