import React from 'react'
import './section1.css'
import person from '../../../../public/person.png'
function Section1() {

  return (
    <div className='body'>
   <section className='section1'>
    <div className="start">
      <h1><span>Studying</span> Online is now much easier</h1>
      <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
      <div className="btns">
        <button>Join for free</button>
        <button><i class="fa-solid fa-play"></i></button>
        <button><a href="#">Watch how it works</a></button>
      </div>
    </div>
    <img src={person} alt="" />
   </section>
    </div>
  )
}

export default Section1
