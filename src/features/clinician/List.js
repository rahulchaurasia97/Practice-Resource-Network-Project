import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup, Table } from "react-bootstrap";
import { listOfClinicianThunk } from "./listSlice";
import axios from "axios";
export const List = () => {
  const dispatch = useDispatch();

  const { list, status, loading } = useSelector(
    (store) => store.listOfClinicians
  );

  useEffect(() => {
    console.log("inside useffect");
    dispatch(listOfClinicianThunk());
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://23.21.204.21:8080/api/v1/admins/${id}`, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => dispatch(listOfClinicianThunk()));
  };
  console.log(list);
  return (
    <>
      <section className="section">
        <Link to="create" className="btn">
          Create Clinician
        </Link>
      </section>
      <h2>Clinician List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>

            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName + item.lastName}</td>

              <td>{<Link to={`details/${item.id}`}>Details</Link>}</td>
              <td>{<Link to={`edit/${item.id}`}>Edit</Link>}</td>
              <td>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
