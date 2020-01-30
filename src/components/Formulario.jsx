import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";




const Formulario = ({ crearCita }) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false)

    const hanbleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const onSubmitCita = e => {
        e.preventDefault()

        //validar
        if (mascota.trim() === ''
            || propietario.trim() === ''
            || fecha.trim() === ''
            || hora.trim() === ''
            || sintomas.trim() === ''
        ) {
            setError(true)
            return
        }
        if (error) setError(false)

        //Asignar Id
        cita.id = uuid()
        //crear Obj
        crearCita(cita)
        // Limpiar From
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error'>Todos los campos son Obligatorios</p> : null}
            <form onSubmit={onSubmitCita}>
                <label>Nombre de la mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={hanbleChange}
                    value={mascota}
                ></input>
                <label>Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre del Dueño de la Mascota'
                    onChange={hanbleChange}
                    value={propietario}
                ></input>
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={hanbleChange}
                    value={fecha}
                ></input>
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={hanbleChange}
                    value={hora}
                ></input>
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    className='u-full-width'
                    onChange={hanbleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className='u-full-width button-primary'
                >Agregar Citas</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario