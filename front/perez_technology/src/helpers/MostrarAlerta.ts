import Swal, { SweetAlertIcon } from 'sweetalert2';
import { dtmResponse } from '../Types/types';

export const mostrarAlerta = (arg: dtmResponse , toast = true) => {
  const {msg , status} = arg
  let tipo: SweetAlertIcon = 'info'

  switch(status){
    case 200:
      tipo='success' 
    break; 
    case 400:
      tipo = 'warning'
      break; 
    case 401:
      tipo = 'info'
      break ; 
    case 500:
      tipo ='error'
      break ;
    default: 
    tipo = 'info'
  }
  
  Swal.fire({
    icon: tipo,
    title: msg,
    showConfirmButton: false,
    timer: 3000,
    toast ,
    position: 'top-right' 
  });
};