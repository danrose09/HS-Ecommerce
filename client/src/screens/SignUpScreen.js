import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signUp } from "../features/userSlice";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userState, setUserState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const { name, username, email, password, confPassword } = userState;
  const handleUserState = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const submitUserState = async (e) => {
    if (password === confPassword) {
      try {
        e.preventDefault();
        dispatch(
          signUp({
            name: name,
            username: username,
            email: email,
            password: password,
          })
        );
        await axios.post("http://localhost:5000/api/users/signup", {
          name: name,
          username: username,
          email: email,
          password: password,
          confPassword: confPassword,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      SignUpScreen
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
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={handleUserState}
        ></input>
        <input
          name="confPassword"
          value={confPassword}
          type="password"
          placeholder="confirm password"
          onChange={handleUserState}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignUpScreen;
