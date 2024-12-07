import React from "react";
import { Link } from "react-router-dom";
import doctorImage from "/images/girl-doctor.jpg"
import { useGlobalState } from '../Components/utils/global.context'

const Card = ({ dentista, tipoFavorita}) => {
  const {state, dispatch} = useGlobalState();

  const agregarFavorito = (dentista)=>{
    if (!verificarFavoritos(dentista.id)) {
      dispatch({type: "ADD_FAVORITES", payload: dentista}) 
    };
  };

  const verificarFavoritos = (idDentista) => {
    return state.favs.some(el => el.id === idDentista);
  };

  const quitarFavorito = (idDentista) => {
    const favoritos = state.favs.filter(el => el.id !== idDentista);
    dispatch({type: "DELETE_FAVORITES", payload: favoritos})
  };


  return (
    <div  className={state.tema == "dark" ? "card card-dark" : "card card-light"}>
        <Link to={`/dentist/${dentista.id}`}>
          <img src={doctorImage} alt="foto del dentista"className="card-image" />
          <p>Username: {dentista.username}</p>
          <h3>{dentista.name}</h3>
        </Link>
        {tipoFavorita 
          ? 
          <button onClick={() => {quitarFavorito(dentista.id)}}  className="delete-btn">Quitar</button>  
          :  
          <button onClick={() => {agregarFavorito(dentista)}}  className="fav-btn">Agregar a favorito ❤️</button>
        }
    </div>
  );
};

export default Card;
