import React, { useState } from 'react'

const TodoItem = (props) => {
   // Declarar state para mostrar/ocultar descripcion

   return (
      <div className="TodoItem">
         <div>
            <div>
               <div>
                  {props.title}
               </div>
               {/* Span para ver mas u ocultar */}
            </div>
            {/* Validar si el state es verdadero y renderizar descripcion */}
         </div>
         <div className="TodoItem-Delete" onClick={() => props.deleteTodo(props.id)}>
            Borrar
         </div>

      </div>
   )
}

export default TodoItem