import React from 'react'
import './Shop.css'

function Shop(props) {
   let  {meal, desc, price, id} =props
  return (
    <div className='menu__box '>
        <div className='hero__shop'>
                <ul className='hero__list'>
                    <li className='hero__item'>
                     
                        <div className='hero__title-box'>
                            <h3 className='hero__title-inner'>{meal}</h3>
                            <h3 className='hero__price-info'>{desc}</h3>
                            <h3 className='hero__price'>${price}</h3>
                    
                        </div>
                        <div className='hero__price-box'>
                            
                        <form id={id} onSubmit={props.clickCount}>
                            <div className='hero__amount-box'>
                                <h3  className='hero__amount'>Amount</h3>
                                <input type="number" className='hero__amount-count' placeholder="1" max={5} min={1}/>
                            </div>
                            <button className='hero__price-btn' type="submit">
                                <i className='bx bx-plus'></i> Add 
                            </button>
                        </form>

                        </div>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Shop