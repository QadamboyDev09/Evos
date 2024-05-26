import axios from "axios"
import { useState, createContext, useEffect } from "react"



export const UserContext = createContext()

const deleteItem = (id) => {
  fetch(`https://ce1a1e26cf80d56c.mokky.dev/cardsyangiliklar/${id}`, {
    method: "DELETE",
  })
}



const UserProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [counter,setCounter]=useState(1)


  useEffect(() => {
    axios
      .get('https://ce1a1e26cf80d56c.mokky.dev/cardsyangiliklar')
      .then((result) => setData(result.data))
  }, [])

  return (
    <UserContext.Provider value={{data,counter, deleteItem, setData,setCounter}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
