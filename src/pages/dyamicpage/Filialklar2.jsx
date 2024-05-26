import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "../../basketContext";

const Filiallar2 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const { addBasket } = useContext(BasketContext);
  let tolocal = data.price ? parseInt(data.price) : 0;
  const obj = Object.keys(data);
  const [errMasg, seterrorMesg] = useState("");

  const getData = async () => {
    try {
      const respons = await axios.get(
        `https://ce1a1e26cf80d56c.mokky.dev/faillarim/${params.id}`
      );
      setData(respons.data);
    } catch (error) {
      seterrorMesg(error.respons.data);
    }
  };
  const onAdd = (product) => {
    addBasket(product);
  };

  useEffect(() => {
    getData();
  }, [params]);
  return (
    <div>
      <div className="w-full container px-14 py-[60px] border mx-auto h-[600px] mb-[30px] m-[40px]">
        {errMasg.length > 0 ? (
          <h1>{errMasg}</h1>
        ) : (
          <div className=" justify-evenly gap-[50px] items-center">
            <div className="h-[300px]">
              {obj.length === 0 ? (
                <img
                  src="https://www.msha.gov/sites/default/files/images/loading2.gif"
                  alt=""
                />
              ) : (
                <div>
                  <h1 className="font-bold text-[40px]">{data.title}</h1>
                  <h1 className="w-[400px] text-[20px] text-[#6E7C87]">
                    {data.text}
                  </h1>
                  <p className="text-[#747474] text-[30px]">{data.price}</p>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.63710772435!2d69.27261661738753!3d41.360240818219324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0d84545907%3A0x2a68f566a97a164f!2sEvos!5e0!3m2!1suz!2s!4v1715676988492!5m2!1suz!2s"
                    width="100%"
                    height="350"
         
                  ></iframe>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => onAdd(data)}
                className="w-[200px] h-[40px] bg-[#309B42] text-white flex justify-evenly align-center items-center mt-[40px]"
              >
                {" "}
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center"></div>
      </div>
      <Link to={"/"}>
        <button
          onClick={() => onAdd(products)}
          className=" m-[80px] flex justify-center items-center text-center mx-auto w-[200px] bg-blur-700 bg-green-700 text-white px-2 py-2 active:bg-green-500 transition-all"
        >
          Orqaga
        </button>
      </Link>
    </div>
  );
};

export default Filiallar2;
