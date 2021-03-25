import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import CheckOutProduct from './CheckOutProduct';
 

function Checkout() {
    const [{ basket,user}, dispatch] = useStateValue();
    return (
        
        <div className="checkout">
            <div classname='checkout__left'>
                <img className='img__ad' src ='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter-20/EventsPage/BBoffer1500x150.jpg'
                 alt=''></img>
              
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className='checkout__title'>
                    Your Shopping Basket:     
                    </h2>   
                    {basket.map(item => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
                </div>  
            </div>  
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>

    )
}

export default Checkout
