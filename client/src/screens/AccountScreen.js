import React from "react";
import { useSelector } from "react-redux";

const AccountScreen = () => {
  const userInfo = useSelector((state) => state.userInfo.value);
  const { name, username, email } = userInfo;
  console.log(userInfo);
  return (
    <div>
      <h1>Account</h1>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default AccountScreen;
