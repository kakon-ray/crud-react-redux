import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateApiAction, GetApiActionById } from "../redux/action/action";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UpdateDetails = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setAddress] = useState("");

  const { id } = useParams();

  // useEffect(() => {
  //   fetch("http://localhost:3000/details/" + id)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name);
  //       setEmail(data.email);
  //       setPhone(data.phone);
  //       setAddress(data.country);
  //     });
  // }, []);

  // get data spesific id by redux actiona and axios
  useEffect(() => {
    dispatch(GetApiActionById(id));
  }, [dispatch]);

  const responseDataById = useSelector((state) => state.Reducer.detailsById);

  console.log("==========", responseDataById);

  useEffect(() => {
    if (responseDataById) {
      setName(responseDataById.name);
      setEmail(responseDataById.email);
      setPhone(responseDataById.phone);
      setAddress(responseDataById.country);
    }
  }, [responseDataById]);

  const updateResponse = useSelector((state) => state.Reducer.updateResponse);

  console.log(updateResponse);
  if (updateResponse) {
    Swal.fire({
      icon: "success",
      title: "Update Successd",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const country = e.target.country.value;

    const addValue = { name, email, phone, country };
    console.log(addValue);

    dispatch(UpdateApiAction(addValue, id));
  };

  return (
    <div className="mx-5">
      <h1 className="py-4">Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <input
              type="phone"
              name="phone"
              className="form-control"
              defaultValue={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="country"
              defaultValue={country}
              className="form-control"
              placeholder="Country"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UpdateDetails;
