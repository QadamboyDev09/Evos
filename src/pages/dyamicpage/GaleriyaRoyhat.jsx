import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "../../basketContext";

const GaleriyaRoyhat = () => {
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
        `https://ce1a1e26cf80d56c.mokky.dev/GalriyaRoyhati/${params.id}`
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
      <div className="w-full container px-14 py-[60px] border mx-auto mb-[30px] m-[40px]">
        {errMasg.length > 0 ? (
          <h1>{errMasg}</h1>
        ) : (
          <div>
            <div className="h-[500px] w-[700px] text-center mx-auto">
              {obj.length === 0 ? (
                <img
                  src="https://www.msha.gov/sites/default/files/images/loading2.gif"
                  alt=""
                />
              ) : (
                <div>
                  <img className="w-full h-[500px]" src={data.img} alt="" />
                </div>
              )}
            </div>
         
          </div>
        )}
      </div>
      <Link to={"/bizhaqimizda"}>
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

export default GaleriyaRoyhat;
