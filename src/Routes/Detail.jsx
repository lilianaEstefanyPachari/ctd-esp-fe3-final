import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import doctorImage from "/images/girl-doctor.jpg"


const Detail = () => {
 
  const params = useParams();

  const apiUrl = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  const [dentista, setDentista] = useState({});
  
  useEffect(() => {
    axios(apiUrl).then((res) => {
      setDentista(res.data)
    }).catch((error) => {
      console.log(error)
    })
    }, []);
 
  return (
    <div className='detail-page'>
      <h1>📑 Detalle del dentista: </h1>
      <section className='detail'>
        <div>
          
          <img src={doctorImage} alt="imagen doctor" className='img-detail'/>
        </div>
        <div>
          <p> <b>Nombre: </b> {dentista.name}</p>
          <p> <b>Username: </b> {dentista.username}</p>
          <p><b>Email: </b> {dentista.email}</p>
          <p><b>Teléfono: </b> {dentista.phone}</p>
          <p><b>Sitio web: </b> {dentista.website}</p>
        </div>
      </section>
    </div>
  )
}

export default Detail