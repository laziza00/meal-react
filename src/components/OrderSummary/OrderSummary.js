import React from 'react'
import Aux from '../../hoc/Aux'
import Button from '../../UI/Button/Button'
import './OrderSummary.css'

function OrderSummary(props) {
let allPrice =0
  return (
<Aux>
        <div>
            <div className='modal__hidden'>
            <ul className='modal__list'>
                {props.product.map((item,i)=> (
                            
                    // allPrice = allPrice + {+item.price} 
                    
                    <li className='modal__item' key={i}>
                    <div>
                    <h3 className='modal__title'>{item.meal}</h3>
                    <p className='modal__price'>${item.price}</p>
                    </div>
                    <p className='modal__count'>{item.count}x</p>
                    <div className='modal__btns'>
                        <button className='modal__btn'><i className='bx bx-plus'></i></button>
                        <button className='modal__btn'><i className='bx bx-minus'></i></button>
                    </div>
                </li>
                ))}
            </ul>
            </div>
           
                <div className='modal__amount'>
               <div>
               <h3 className='modal__amout-price'>Total Amount</h3>
           
               </div>
               <div className='modal__price-btns'>
               <h3 className='modal__price-amount'>${props.totalPrice}</h3>
                   <Button btnType="modal__close" clicked={props.purchaseClose}>Close</Button>
                   <Button btnType="modal__order" clicked={props.purchaseOrder}>Order</Button>
               </div>
           </div>
        </div>   
  </Aux>     
  )
}

export default OrderSummary