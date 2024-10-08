import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

export default function Cart({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <>
      <section className="cart">
        <img className='cart-img' src={img} alt="Shoe" />
        <div className="cart-details">
          <h3 className="cart-title">{title}</h3>
          <section className="cart-review">
            {star}{star}{star}{star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="cart-price">
            <div className="price">
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className="bag">
              <IoBagHandle className='bag-icon' />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
