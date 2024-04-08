import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './shifts.module.css';
import { deleteTimeSlot } from '../../redux/actions/deleteTimeSlots';

const Shifts = () => {
  const confirmedSlots = useSelector(state => state.confirmedTimeSlots);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTimeSlot(id));
  };

  // Verificar si hay turnos confirmados
  if (!confirmedSlots || confirmedSlots.length === 0) {
    return <div className={style.turns}>No se han confirmado ningún turno</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>Turnos confirmados</h2>
        {confirmedSlots.map((slot, index) => (
          <div key={index} className={style.shift}>
  <div className={style.shiftInfo}>
    <p>Servicio: <b>{slot.serviceName}</b></p>
    <p>Fecha: <b>{slot.date}</b></p>
    <p>Hora: <b>{slot.selectedTimeSlot}</b></p>
  <div className={style.contentButton}> <button className={style.button1}onClick={() => handleDelete(slot.serviceName)}>Eliminar</button></div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

export default Shifts;
