import React from "react";
import Card from "../Components/Card";
import { useGlobalState } from "../Components/utils/global.context";


const Favs = () => {
  const {state} = useGlobalState()
  return (
    <>
      <h1>❤️ Mis favoritos</h1>
      <div className="card-grid">
      {state.favs && state.favs.length ? 
        ( state.favs.map((dentista) => (
          <Card key={dentista.id}  dentista={dentista} tipoFavorita={true}>            
          </Card>
        ))) 
        : 
        <p>Aquí podrás ver a tus dentistas favoritos.</p>
      }      
      </div>
    </>
  );
};

export default Favs;
