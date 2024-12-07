import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../../reducers/reducer.js";

const ContextGlobal = createContext();

const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos"));
const temaGuardado = JSON.parse(localStorage.getItem("tema"));

const initialState = {
  tema: temaGuardado || "light",
  dentistas: [],
  favs: favoritosGuardados || [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(apiUrl).then((res) => {
      dispatch({ type: "GET_DENTISTS", payload: res.data });
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(state.favs))
    localStorage.setItem("tema", JSON.stringify(state.tema))
  }, [state])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider


export const useGlobalState = () => useContext(ContextGlobal)

