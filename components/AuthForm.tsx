"use client";

import { useState } from "react";
import axios from "axios";
const AuthForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          className="bg-red-500 text-black"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          className="bg-red-500 text-black"
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AuthForm;
