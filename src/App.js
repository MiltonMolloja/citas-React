import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = [];

  if (JSON.parse(localStorage.getItem('citas'))) {
    citasIniciales = JSON.parse(localStorage.getItem('citas'))
  }

  const [citas, setCita] = useState(citasIniciales)

  const crearCita = ci => {
    setCita([...citas, ci])
  }

  const eliminarCita = id => {
    const citasTemp = citas.filter(cita => cita.id !== id)
    setCita(citasTemp)
  }

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', [])
    }
  }, [citas, citasIniciales])


  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administa tus Citas'
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              crearCita={crearCita}
            ></Formulario>
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}



export default App;
