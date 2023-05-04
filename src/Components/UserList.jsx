import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/UserSlice";
import Users from "./Users";

const UserList = () => {
  const { isLoading, users } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h2 className="m-3">Users</h2>
      <div className="d-flex flex-wrap p-2 gap-3 justify-content-center">
        {isLoading
          ? "loading...."
          : users.map((e) => {
              return <Users key={e.id} user={e} />;
            })}
      </div>
    </>
  );
};

export default UserList;
