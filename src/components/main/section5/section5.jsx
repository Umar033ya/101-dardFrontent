import React from 'react'
import './section5.css'
import sect5 from"./Group 92.png"

function Section5() {

  return (
    <div className='body'>
<div className="section5">
  <div className="sect5-left">
    <img src={sect5} alt="rasm" />
  </div>
  <div className="sect5-right">
    <h3>Assessments, <span>Quizzes</span>, Tests</h3>
    <p>Easily launch live assignments, quizzes, and tests.
    Student results are automatically entered in the online gradebook.</p>
  </div>
</div>
    </div>
  )
}

export default Section5
