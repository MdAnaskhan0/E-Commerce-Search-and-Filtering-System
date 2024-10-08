import React from 'react'
import './Products.css'
import Cart from '../Components/Cart'




export default function Products({result}) {
    return (
        <>
            <section className='cart-container'>{result}</section>
        </>
    )
}
