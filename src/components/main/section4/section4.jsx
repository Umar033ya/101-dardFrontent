import React from 'react'
import './section4.css'
import sect4Img from"./Group 122.png"

function Section4() {

  return (
    <div className='body'>
<div className="section4">
  <div className="sect4-text">
  <h3>Our <span>Features</span></h3>
  <p>This very extraordinary feature, can make learning activities more efficient</p>
  </div>
  <div className="sect4-next">
<div className="sect4-next-t">
<h3><span>Tools</span> For Teachers And Learners</h3>
    <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
    Teachers can handout assignments in real-time for students to complete and submit.</p>
</div>
<div className="sect4-next-img">
<img src={sect4Img} alt="rasm" />
</div>
  </div>
</div>
    </div>
  )
}

export default Section4
