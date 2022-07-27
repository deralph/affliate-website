import React from 'react'
import img from './IMG_1658 (1).jpeg'
import './about.css'

const About = () => {
  return (
    <section className='container'> 
      <div className="div1">
          <h3>about us</h3>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, harum? Repellendus, veniam animi culpa ut vitae,
              tenetur quasi quam recusandae officia consequuntur possimus,
              voluptas temporibus quae? In alias laborum exercitationem eius.
              Alias fugit vero distinctio ratione atque illo voluptatibus autem beatae eligendi adipisci,
              quod consectetur temporibus inventore tempora odio nemo veniam impedit rerum necessitatibus
              magni consequatur illum? Sit, ex deleniti<a href="#">read more</a>...
             </p>
      </div>
      <img src={img} alt="" className='img'/>

    </section>
  )
}

export default About
