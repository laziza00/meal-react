import React from 'react'
import './Modal.css'
import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {
  return (
      <Aux>
          <Backdrop show={props.show} clicked={props.modalClose}/>
        <div className='modal' 
                    style={{
                        transition: "all 0.5s ease",
                        transform:props.show ? "translateY(0)":"translateY(-100vh)",
                        opacity: props.show ? "1": "0"      
                        }}>
                {props.children}
      </div>
      </Aux>
  )
}

export default Modal