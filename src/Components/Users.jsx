import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Users = ({ user }) => {
  return (
    <Card style={{ width: "18rem", backgroundColor: "black", color: "white" }}>
      <Card.Body>
        <Card.Title className="mb-4 mt-2">Username : {user.name}</Card.Title>
        <Card.Text>Email : {user.email} </Card.Text>
        <Card.Text style={{ color: "blueviolet" }}>{user.website} </Card.Text>
        <Card.Text>Contact : {user.phone} </Card.Text>
        <Card.Text>
          Company : <br />
          {user.company.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Users;
