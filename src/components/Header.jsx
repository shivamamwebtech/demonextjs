"use client";
import Link from "next/link";
import logo from "../../public/logo.webp";
import Image from "next/image";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_SUCCESS } from "@/store/action/actionType";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const path = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);

// chack if login or logout and set data in store 
  useEffect(() => {
    const data = localStorage.getItem("login");
    if (!data) {
      router.replace("/login");
    }
  }, [router, isAuthenticated]);


  return (
    <>
      <header>
        <div className="header__logo__container">
          <Link href="/" >
            <Image src={logo.src} width={100} height={50} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            {/* <Link href="/">
              <li
                className={`header__link ${
                  path === "/" ? "active" : "deactivate"
                }`}
              >
                home
              </li>
            </Link> */}
            <Link href="/profile/shivam">
              <li
                className={`header__link ${
                  path === "/profile/shivam" ? "active" : "deactivate"
                }`}
              >
                profile
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`header__link ${
                  path === "/about" ? "active" : "deactivate"
                }`}
              >
                about
              </li>
            </Link>
            <li
              onClick={() => {
                dispatch({ type: LOGOUT_SUCCESS });
              }}
            >
              logout
            </li>
          </ul>
        </nav>
        <div></div>
      </header>
    </>
  );
}
 