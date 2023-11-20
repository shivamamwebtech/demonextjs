"use client";
import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "@/store/action/actionType";

export default function Page() {

  // init router and dispatch 
  const router = useRouter();
  const dispatch = useDispatch();

  // get isAuthenticated value from store 
  const { isAuthenticated } = useSelector((state) => state.auth);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // if user is auth then page replace to home 
  useEffect(() => {
    if (isAuthenticated) {
      setEmail("");
      setPassword("");
      router.push("/");
    }
  }, [isAuthenticated, router]);

  

  const onLogin = (e) => {
    e.preventDefault();

    console.log("gjfdk")
    // dispach login action and passing email and password
    dispatch({ type: LOGIN_SUCCESS, password, email });

    // const user = localStorage.getItem("user");

    // if (user) {
    //   const userData = JSON.parse(user);
    //   if (userData.email === email && userData.password === password) {
    //     localStorage.setItem("login", true);
    //     router.replace("/");
    //   } else {
    //     alert("please enter vaild details");
    //   }
    // }
  };

  return (
    <div className="login__container">
      <form action="" onSubmit={onLogin}>
        {/* form heading */}
        <div className="login__heading__container">
          <h1 className="login__heading">Login</h1>
        </div>
        {/* input fild */}
        <div>
          <label htmlFor="email" className="user__name__label"></label>
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
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
            id="password"
          />
        </div>
        {/* links for registration  */}
        <div className="link__container">
          <p className="account__creation__text">
            Don&#x27;t have an account yet?
            <Link href={"/registration"}> Sign Up</Link>
          </p>
          <p>
            <Link href={"/registration"}>forgot password</Link>
          </p>
        </div>
        {/* button */}
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
