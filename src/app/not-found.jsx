"use client";
import Image from "next/image";
import Img404 from "../../public/404.svg";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [timeCount, setTimeCount] = useState(0);


//   redirecting  back
  useEffect(() => {
    const time = setInterval(() => {
      setTimeCount((pre) => pre + 1);
    }, 1000);

    if (timeCount > 5) {
      clearInterval(time);
      // router.back()
    }
    return () => {
      clearInterval(time);
    };
  }, [router, timeCount]);



  return (
    <div className={style.container__404}>
        {/* 404 svg */}
      <div className={style.img__404_container}>
        <Image src={Img404.src} width={100} height={50} alt="logo" />
      </div>
      <div className={style.home__page}>
        {/* home page button */}                                                                         
        <Link href="/">
          <h1>Return TO Home</h1>
        </Link>
        {/* show coundown */}
        <p>redirecting to back {timeCount}</p>
      </div>
    </div>
  );
};

export default NotFound;
