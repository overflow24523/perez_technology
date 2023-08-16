import Swal from 'sweetalert2';
import { mostrarAlerta } from './MostrarAlerta';

export const P2PSystem = (prompt: string, callbackYes: ()=>void) =>{
    Swal.fire({
        icon: 'question',
        title: prompt,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          callbackYes()
        } else {
          mostrarAlerta({status: 500 , msg: 'Se ha cancelado la operación'})
        }
      });
}
