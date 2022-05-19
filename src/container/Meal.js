import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Aux from '../hoc/Aux';
import Hero from '../components/Hero/Hero';
import Shop from '../components/shop/Shop';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import '../components/shop/Shop.css';



class Meal extends Component{
    constructor() {
     
        super();
        this.state = {
       
             productArr : [
                {
                  id: 1,
                  meal: "Sushi",
                  desc: "Finest fish and veggies",
                  price: 22,
                  count: 0,
                },
                {
                  id: 2,
                  meal: "Schnitzel",
                  desc: "A german speciality",
                  price: 16,
                  count: 0,
                },
                {
                  id: 3,
                  meal: "Barbecue Burger",
                  desc: "American, raw, meaty",
                  price: 12,
                  count: 0,
                },
                {
                  id: 4,
                  meal: "Green Bowl",
                  desc: "Healthy...and green...",
                  price: 18,
                  count: 0,
                }
              ],
            newMeals: [],
            purchasing: false,
            allCount: 0,
            shopBtn: 0,
            sortArr: [],
        }
      
    }
    purchasingHandler =()=> {
        this.setState({purchasing: true})
    }
    purchasingHandlerClose =()=> {
        this.setState({purchasing: false})
    }
    purchasingHandlerOrder =()=> {
        alert("Thank you for your purchase")
    }
    addCount =(e)=> {
        e.preventDefault()
     
        let value = e.target[0].value
        let idd = e.target.id
        console.log(value);
        let newArr = []
        let arr = []
    
    this.state.productArr.map((item, i)=> {
        return newArr.push(item)
    })

    newArr.map((item)=> {
        if(+idd === item.id) {
            this.setState({count: this.state.count+1})
            item.count= value
            arr.push(item)
            
        }
    })
  

    this.setState({newMeals: [...this.state.newMeals, ...arr]})
    this.setState({productArr: [...newArr]})
    console.log(this.state.newMeals);

    this.state.sortArr = this.state.productArr.filter((elem, inex, obj) => obj.indexOf(elem) === inex);



    }
    render() {

        // allCount
    let itemCount =0
    this.state.productArr.map(item=> (
        itemCount += +item.count
    ))
//  totalprice

    let totalPrice = 0
    this.state.newMeals.map(priceSum => {
    let price = 0
    let coun = 0

    price += +priceSum.price
    coun += +priceSum.count
    let allPrice = coun * price

    totalPrice += allPrice

    })



    // let minusBtn = (e) => {
    //     let idd = e.nativeEvent.path[1].id
    //     arr.map(item => {
    //       if(item.id === +idd) {
    //         item.count -= 1
    //         if(item.count === 0) {
    //          arr = arr.filter( el => el.id !== +idd);
    //         }
    //       }
    //     })
    //     this.setState({newProuct: [...arr]})
    //   }
  
    //   let plusBtn = (e) => {
    //     let idd = e.nativeEvent.path[1].id
    //     arr.map(item => {
    //       if(item.id === +idd) {
    //         item.count += 1
    //       }
    //     })
    //     this.setState({newProuct: [...arr]})
    //   }

        return (
            < Aux>
                <Header yourCardClicked={this.purchasingHandler}
                itemCount={itemCount}/>
                <Hero>Meal Controls</Hero>
                <div className='Shop'>
                {this.state.productArr.map((item, i)=> {
                    return   <Shop
                     meal={item.meal}
                     desc={item.desc} 
                     price={item.price} 
                     key={i}
                     id={item.id}
                     clickCount={this.addCount}
                     >
                      </Shop>
                })}
                </div>
                <Modal show={this.state.purchasing}
                       modalClose ={this.purchasingHandlerClose} >

                <OrderSummary 
                    purchaseOrder={this.purchasingHandlerOrder}
                    purchaseClose={this.purchasingHandlerClose}
                    product={this.state.sortArr}
                    totalPrice={totalPrice}
                 >
                    

                </OrderSummary>

                </Modal>
            </Aux>
          )
    }

}

export default Meal;