import React, { useState } from 'react'

const TodoItem = (props) => {
   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
   return (
      <div className="TodoItem">
         <div>
            <div>
               <div>
                  {props.title}
               </div>
               <span className="TodoItem-Show" onClick={() => {
                  setIsDescriptionVisible(!isDescriptionVisible)
               }}>{!isDescriptionVisible ? 'Ver más' : 'Ocultar'}</span>
            </div>
            {isDescriptionVisible && <div className="TodoItem-Description">
               {props.description}
            </div>
            }
         </div>
         <div className="TodoItem-Delete" onClick={() => props.deleteTodo(props.id)}>
            Borrar
         </div>

      </div>
   )
}

export default TodoItem