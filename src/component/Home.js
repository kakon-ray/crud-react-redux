import React, { useEffect } from "react";
import { GetApiAction } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Form from "./Form";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);

  console.log("==========", responseData);

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  const result = responseData?.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.country}</td>

        <td>
          <Link to={`update/${item.id}`}>
            <button className="btn btn-warning mx-2">Update </button>
          </Link>

          <button className="btn btn-danger mx-2">Delete </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Manage User</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </Table>
    </div>
  );
};

export default Home;
