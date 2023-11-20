"use client";
const { useEffect } = require("react");
import { SIGNUP_SUCCESS } from "@/store/action/actionType";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Layout({ children }) {
  const dispatch = useDispatch();


  useEffect(() => {
    const data = localStorage.getItem("login");
    if (data) {
      const user = localStorage.getItem("user");
      if (user) {
        dispatch({ type: SIGNUP_SUCCESS, payload: JSON.parse(user) });
        // router.replace("/");
      }
    }
  }, [ dispatch]);

  return (
    <>
      <main>{children}</main>
    </>
  );
}
