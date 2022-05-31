import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostApiAction } from "../redux/action/action";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const addValue = { name, email, phone, country };

    dispatch(PostApiAction(addValue));
  };
  return (
    <div className="mx-5">
      <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEamil(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <input
              type="phone"
              name="phone"
              className="form-control"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Country"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
