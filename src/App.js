import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./Redux/UserSlice";
import Users from "./Components/Users.jsx";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
