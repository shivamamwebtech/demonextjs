import Image from "next/image";
import logo from "../../public/logo.webp";
import "./footer.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="fo">
      <div>
        <div>
          <div className="footer__logo__cantainer">
            <Image src={logo.src} width={100} height={50} alt="logo" />
          </div>
          <div>
            <p className="footer__about__cantainer">
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quisquam, facere. sit amet consectetur
              adipisicing elit. Sit, quis?
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="footer__heading">Links</p>
          </div>
          <div>
            <ul className="footer__menu">
              <Link href={"/home"}>
                <li>home</li>
              </Link>
              <Link href={"/profile"}>
                <li>profile</li>
              </Link>
              <Link href={"/about"}>
                <li>about</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="footer__heading">policy links</p>
          </div>
          <div>
            <ul className="footer__menu">
              <Link href={"/privacy_policy"}>
                <li>privacy policy</li>
              </Link>
              <Link href={"/contact_us"}>
                <li>contact us</li>
              </Link>
              <Link href={"/return_policy"}>
                <li>return policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
