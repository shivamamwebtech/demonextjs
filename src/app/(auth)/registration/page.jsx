"use client";
import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

// action types
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_TO_LOGIN,
} from "@/store/action/actionType";

const Page = () => {

  // init router and dispatch
  const router = useRouter();
  const dispatch = useDispatch();
  const { isRegister } = useSelector((state) => state.auth);

  // state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isRegister) {

      setName(""), setEmail("");
      setPassword("");
      router.push("/login");
      dispatch({ type: SIGNUP_TO_LOGIN });
    }
  }, [isRegister, dispatch, router]);

  // on submit click
  const onSingup = (e) => {
    e.preventDefault();

    // if name email not empty
    
    if (name && email && password) {
      dispatch({ type: SIGNUP_REQUEST });
      dispatch({ type: SIGNUP_SUCCESS, payload: { name, email, password } });

      // localStorage.setItem("user", JSON.stringify({ name, email, password }));
      // alert("registration successful");
      // setName(""), setEmail("");
      // setPassword("");
      // router.push("/login");
    }
  };

  return (
    <div className="registration__container">
      <form action="" onSubmit={onSingup}>
        <div className="registration__heading__container">
          <h1 className="registration__heading">Sign up</h1>
        </div>
        <div>
          <label htmlFor="name" className="name__label"></label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Full name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="email__label"></label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="user__password__label"></label>
          <input
            type="password"
            required
            placeholder="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p className="account__creation__text">
            I have an account
            <Link href={"/login"}> login Up</Link>
          </p>
        </div>
        <div>
          <input type="submit" value="Sign up" />
        </div>
      </form>
    </div>
  );
};

export default Page;
