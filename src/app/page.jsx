"use client";
import { use, useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_LOCAL } from "@/store/action/actionType";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [error, setError] = useState(false);

  // chack if login or logout and set data in store
  useEffect(() => {
    const data = localStorage.getItem("login");
    if (!data) {
      router.replace("/login");
    } else {
      const user = localStorage.getItem("user");
      if (user) {
        dispatch({ type: SIGNUP_LOCAL, payload: JSON.parse(user) });
      }
    }
  }, [router, isAuthenticated, dispatch]);

  if (error) throw new Error("Intentional error triggere!");

  return (
    <div>
      <Header />
      <main>
        <Link className="button" href="/sum/10/20">
          sum page
        </Link>

        <p
          className="button"
          onClick={() => {
            setError(true);
          }}
        >
          create error
        </p>

        {/* Parallel */}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
