import React from 'react'
import './Sidebar.css'
import { FaShopify } from "react-icons/fa6";
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'



export default function Sidebar({handleChange}) {
    
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1><FaShopify /></h1>
                </div>

            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>

            </section>
        </>
    )
}
