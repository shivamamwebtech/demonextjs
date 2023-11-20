import Image from "next/image";
import logo from "../../../../public/logo.webp";
import style from "./style.css";

const page = () => {
  return (
    <div className={style.photo__page__container}>
      <div className={style.product__full__Image__page}>
        <Image
          src={logo.src}
          width={"500px"}
          height={"500px"}
          alt="product img"
        />
      </div>
    </div>
  );
};

export default page;
