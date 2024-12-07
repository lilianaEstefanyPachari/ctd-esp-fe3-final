import React from "react";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: ""
  });

  const [formValidacionMsg, setFormValidacionMsg] = useState({
    valido: false,
    error: false
  });

  const handleSubmitForm = (ev) => {
    ev.preventDefault();
    const regexEmail = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (
      user.nombre.trim().length > 5 &&
      regexEmail.test(user.email)
    ) {
      console.log(user)
      setFormValidacionMsg({valido: true, error: false} );
    } else {
      setFormValidacionMsg({valido: false, error: true} );
    }
  };

  return (
    <div className="form-container">
      {formValidacionMsg.valido ? (
        <div className="form-valid">
          <p className="form-valid-icon">📩</p>
          <p >
            Gracias {user.nombre}, te contactaremos cuanto antes vía mail.
          </p>
        </div>
      ) : (
        <>
          <h1>🗒️ Formulario de contacto</h1>
          <p>
            Deja tus datos y nos pondremos en contacto contigo.
          </p>
          <form onSubmit={handleSubmitForm}>
            <label>Nombre: </label>
            <input
              type="text"
              onChange={(event) =>
                setUser({ ...user, nombre: event.target.value })
              }
            />
            <label>email: </label>
            <input
              type="email"
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <button className="submit-btn" type="submit">
              Enviar
            </button>
            <p className="form-error">
              {formValidacionMsg.error
                ? "Por favor verifique su información nuevamente"
                : ""}
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
