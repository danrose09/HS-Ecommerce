import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../features/userSlice";

const SignInScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userState, setUserState] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = userState;

  const handleUserState = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const submitUserState = (e) => {
    e.preventDefault();
    dispatch(
      signIn({ name: name, username: username, email: email, cart: [] })
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={submitUserState}>
        <label>Name</label>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="name"
          onChange={handleUserState}
        ></input>
        <label>Username</label>
        <input
          name="username"
          value={username}
          type="text"
          placeholder="name"
          onChange={handleUserState}
        ></input>
        <label>Email</label>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="name"
          onChange={handleUserState}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInScreen;
