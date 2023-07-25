import Swal, { SweetAlertIcon } from 'sweetalert2';
import { dtmResponse } from '../Types/types';


export const mostrarAlerta = (arg: dtmResponse , toast = true) => {

  if(!window.localStorage.getItem('alertQueue') ||  Number(window.localStorage.getItem('alertQueue')) == 0){
    window.localStorage.setItem('alertQueue' , String(1))
    lanzarAlerta(arg, toast)
    setTimeout(()=>{
      window.localStorage.setItem('alertQueue' , String(Number(window.localStorage.getItem('alertQueue'))-1))
    }, 2010 )

  }else{
      setTimeout(()=>{
        lanzarAlerta(arg, toast)
        window.localStorage.setItem('alertQueue' , String(Number(window.localStorage.getItem('alertQueue'))-1))
      }, 2010 *  Number(window.localStorage.getItem('alertQueue')))
      window.localStorage.setItem('alertQueue' , String(Number(window.localStorage.getItem('alertQueue'))+1))
  }

  
  
}


const lanzarAlerta = (arg: dtmResponse , toast = true) => {
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
    timer: 2000,
    toast ,
    position: 'top-right' 
  });
};


