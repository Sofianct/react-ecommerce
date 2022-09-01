import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
import { CartContext } from "../../context/Cartcontext";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const Checkout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    province: "",
    country: "",
    cardFirstName: "",
    cardLastName: "",
    cardDetails: "",
    cardDate: "",
    cardCvc: "",
  });
  const toHomepage = () => {
    navigate("/", { replace: true });
  };
  const buyNow = () => {
    //toast
    Swal.fire("Good job!", "You clicked the button!", "success");

    setTimeout(() => {
      resetForm();
      toHomepage();
    }, 5000);
  };
  const openModal = () => {
    if (details.cardCvc !== "") {
      setShow(true);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(details);
  };
  const resetForm = () => {
    setDetails({
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      postalCode: "",
      province: "",
      country: "",
      cardFirstName: "",
      cardLastName: "",
      cardDetails: "",
      cardDate: "",
      cardCvc: "",
    });
    let cartCopy = [...cart];
    cartCopy = [];
    setCart(cartCopy);
  };
  const total = (arr) => {
    const itemsPrice = arr.reduce((a, c) => a + c.qty * c.price, 0);
    return "$" + itemsPrice.toFixed(2);
  };
  const itemPrice = (price) => {
    return "$" + price.toFixed(2);
  };
  const roundPrice = (price, qty) => {
    const itemPrice = price * qty;
    return "$" + itemPrice.toFixed(2);
  };

  return (
    <div className="container" style={{ width: "75%", minHeight: "80%" }}>
      <h3 className="text-center mt-5 mb-3 font-weight-bold">Checkout</h3>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, firstName: e.target.value })
                    }
                    value={details.firstName}
                    required
                  />
                  <label className="form-label" htmlFor="firstName">
                    First name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, lastName: e.target.value })
                    }
                    value={details.lastName}
                    required
                  />
                  <label className="form-label" htmlFor="lastName">
                    Last name
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                    required
                  />
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="address1"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, address1: e.target.value })
                    }
                    value={details.address1}
                    required
                  />
                  <label className="form-label" htmlFor="address1">
                    Address 1
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="address2"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, address2: e.target.value })
                    }
                    value={details.address2}
                  />
                  <label className="form-label" htmlFor="address2">
                    Address 2
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, city: e.target.value })
                    }
                    value={details.city}
                    required
                  />
                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="postalCode"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, postalCode: e.target.value })
                    }
                    value={details.postalCode}
                    required
                  />
                  <label className="form-label" htmlFor="postalCode">
                    Postal Code
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="province"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, province: e.target.value })
                    }
                    value={details.province}
                    required
                  />
                  <label className="form-label" htmlFor="province">
                    Province
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="country"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, country: e.target.value })
                    }
                    value={details.country}
                    required
                  />
                  <label className="form-label" htmlFor="country">
                    Country
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, cardFirstName: e.target.value })
                    }
                    value={details.cardFirstName}
                    required
                  />
                  <label className="form-label" htmlFor="firstName">
                    First name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    onChange={(e) =>
                      setDetails({ ...details, cardLastName: e.target.value })
                    }
                    value={details.cardLastName}
                    required
                  />
                  <label className="form-label" htmlFor="lastName">
                    Last name
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    placeholder="1111-2222-3333-4444"
                    onChange={(e) =>
                      setDetails({ ...details, cardDetails: e.target.value })
                    }
                    value={details.cardDetails}
                    maxLength="16"
                    required
                  />

                  <label className="form-label" htmlFor="email">
                    Card Number
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="cardDate"
                    className="form-control"
                    placeholder="01/23"
                    onChange={(e) =>
                      setDetails({ ...details, cardDate: e.target.value })
                    }
                    value={details.cardDate}
                    maxLength="5"
                    required
                  />
                  <label className="form-label" htmlFor="cardDate">
                    Date
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="cvc"
                    className="form-control"
                    placeholder="123"
                    maxLength="3"
                    onChange={(e) =>
                      setDetails({ ...details, cardCvc: e.target.value })
                    }
                    value={details.cardCvc}
                    required
                  />
                  <label className="form-label" htmlFor="cvc">
                    CVC
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ width: "25%" }} scope="col">
                      Item
                    </th>
                    <th style={{ width: "25%" }} scope="col">
                      Price
                    </th>
                    <th style={{ width: "25%" }} scope="col">
                      Quantity
                    </th>
                    <th style={{ width: "25%" }} scope="col">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(({ id, title, description, price, qty }) => {
                    return (
                      <tr key={id}>
                        <td>
                          {title}, {description}
                        </td>
                        <td>{itemPrice(price)}</td>
                        <td>{qty}</td>
                        <td>{roundPrice(qty, price)}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={3}>You are about to pay:</td>
                    <td>
                      <span> {total(cart)}</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="row mb-2 mt-3 justify-content-center">
          <button
            onClick={buyNow}
            type="submit"
            className="btn btn-success btn-lg"
          >
            Buy Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
