import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "../../basketContext";

const CoruselImg1 = () => {
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
        `https://ce1a1e26cf80d56c.mokky.dev/jumpcard1/${params.id}`
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
      <div className="w-full container px-14 py-[60px] border mx-auto mb-[30px]  m-[40px]">
        {errMasg.length > 0 ? (
          <h1>{errMasg}</h1>
        ) : (
          <div className="flex w-full justify-evenly gap-[50px] items-center">
            <div className="h-[300px]">
              {obj.length === 0 ? (
                <img
                  src="https://www.msha.gov/sites/default/files/images/loading2.gif"
                  alt=""
                />
              ) : (
                <div>
                  <img className="w-[300px]" src={data.img} alt="" />
                </div>
              )}
            </div>
            <div>
              <h1 className="font-bold text-[40px]">{data.title}</h1>
              <h1 className="w-[400px] text-[20px] text-[#6E7C87]">
                {data.text}
              </h1>
              <button
                onClick={() => onAdd(data)}
                className="w-[200px] h-[40px] bg-[#309B42] text-white flex justify-evenly align-center items-center mt-[40px]"
              >
                {" "}
                Karzinkaga
                <p className="text-white">{tolocal.toLocaleString("ru")}$</p>
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center"></div>
      </div>
      <Link to={"/"}>
        <button
          onClick={() => onAdd(products)}
          className=" m-[40px] flex justify-center items-center text-center mx-auto w-[200px] bg-blur-700 bg-green-700 text-white px-2 py-2 active:bg-green-500 transition-all"
        >
          Orqaga
        </button>
      </Link>
    </div>
  );
};

export default CoruselImg1;
