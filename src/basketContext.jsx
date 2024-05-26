import { useState, createContext, useEffect } from "react";

// const { createContext } = require("react");

export const BasketContext = createContext({});

const BasketProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("product" )) 
  const [basketData, setBasketData] = useState(storage || []);
  const addBasket = (data) => {
    const isExist = basketData.some((item) => item.id === data.id)
    if(!isExist){
      setBasketData([...basketData, data])
    }
  };

  const deletProduck=(id)=>{
    const nevData =basketData.filter((item)=>item.id!==id)
    setBasketData(nevData)
  }

  useEffect(()=>{
    localStorage.setItem("product", JSON.stringify(basketData ||[]))
  },[basketData])
  return (
    <BasketContext.Provider value={{ basketData,addBasket,deletProduck }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
