import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-[#EBEDF8]">
          <div className="flex justify-between items-center container mx-auto px-14">
            <Link to={"/"}>
              <div>
                <img className="w-[150px] h-[100px]" src="/evos.png" alt="" />
              </div>
            </Link>
            <nav className="hidden gap-[40px] xl:flex">
              <Link to={"/"}>Asosiy</Link>
              <Link to={"/products"}>Filiallar</Link>
              <Link to={"/vakentlar"}>Vakantlar</Link>
              <Link to={"/yangiliklar"}>Yangiliklar</Link>
              <Link to={"/bizhaqimizda"}>Biz haqimizda</Link>
            </nav>
            <div className=" justify-center items-center hidden lg:flex ">
              <a
                className="w-[148px]"
                href="https://apps.apple.com/us/app/evos-uz/id1595897228"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
                  alt=""
                />
              </a>
              <a
                className="w-[168px] overflow-hidden "
                href="https://play.google.com/store/apps/details?id=uz.makfood.service.evos&hl=ru&gl=US"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="flex justify-between flex-col gap-2 container mx-auto px-14 sm:flex-row">
            <div>
              <h1>© Evos 2006 - 2024 All rights reserved</h1>
              <Link to={"/"}>
                <p className="text-[16px] text-green-700">Публичная оферта</p>
              </Link>
            </div>
            <div className="flex text-green-700 gap-3 text-[32px]">
              <a href="https://www.instagram.com/evosuzbekistan/">
                <h3>
                  <FaInstagramSquare />
                </h3>
              </a>
              <a href="https://www.facebook.com/evosuzbekistan/">
                <h3>
                  <FaFacebook />
                </h3>
              </a>
              <a href="https://t.me/evosdeliverybot">
                <h3>
                  <FaTelegram />
                </h3>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
