import React from 'react'
import img from './esther_pics-removebg-preview.png'
import './intro.css'
import { FaArrowRight } from 'react-icons/fa';


const Intro = () => {
  return (
    <section className='intro container'>
        <div className="div1">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Explicabo fuga corrupti deleniti, accusamus consectetur 
                dolorem eaque ipsa est totam neque voluptates cumque accusantium,
                 tempore voluptas quas ducimus assumenda animi architecto.
                 Ducimus, quibusdam id corrupti non quis nisi at optio fugiat!</p>
                 <button>check courses <FaArrowRight className='icon' /></button>
        </div>
        <div className="div2">
            <img src={img} alt="" />
            <p>Founder  <br />Esther John</p>
        </div>
    </section>
  )
}

export default Intro
