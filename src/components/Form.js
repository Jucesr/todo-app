import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

   const submitForm = () => {
      props.onSubmit({
         title,
         description,
      })
      setTitle('')
      setDescription('')
   }

   return (
      <div className="Form">
         <div>
            <input
               placeholder="Titulo"
               value={title}
               onChange={(e) => {
                  setTitle(e.target.value)
               }}>
            </input>
         </div>
         <div>
            <textarea
               placeholder="Descripción"
               value={description}
               onChange={(e) => {
                  setDescription(e.target.value)
               }}>
            </textarea>
         </div>
         <div className="Form-Button" onClick={submitForm}>
            Agregar
         </div>
      </div>
   )
}

Form.propTypes = {

}

export default Form