import React from 'react'
import './Header.css'
import Container from '../../UI/container'

function Header(props) {
  return (
    <header className='header'>
        <Container>
           <div className='header__inner'>
          <div className='header__left'>
              <h1 className="header__title">ReactMeals</h1>
          </div>
          <div className='header__right'>
          <button className='header__btn' onClick={props.yourCardClicked}> 
          <i className='bx bx-cart-add'></i>
          Your cart 
          <p className='header__count' >{props.itemCount}</p>
          </button>
          </div>
       </div>
       </Container>
    </header>
  )
}

export default Header