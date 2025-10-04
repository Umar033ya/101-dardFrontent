import React from 'react'
import './section2.css'
import img77 from '../../../assets/juh.png'
import img87 from '../../../assets/qiz.png'
import img97 from '../../../assets/toma.png'
function Section2() {

  return (
    <div className='body'>
<section className='chopar' >
  <h3 className='kow' >Trusted by 5,000+ Companies Worldwide</h3>
<div className='imgla' >
  <img src={img77} alt="" />
<img src={img77} alt="" />
<img src={img77} alt="" />
<img src={img77} alt="" />
<img src={img77} alt="" />
<img src={img77} alt="" />
</div>
<h3 className='kj' >What is <span> Skilline?</span></h3>
<p className='po' >Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>



<div className='ui'>  
  <div className='kima' style={{
  backgroundImage: `url(${img87})`,
  backgroundSize: "cover",
  backgroundPosition:"center",
  height: "20vh"
}} >

<h3>FOR INSTRUCTORS</h3>
<button>Start a class today</button>
</div>

<div className='ij'  style={{
  backgroundImage: `url(${img97})`,
  backgroundSize: "cover",
  backgroundPosition:"center",
  height: "20vh"
}}  >
  
<h3>FOR INSTRUCTORS</h3>
<button>Start a class today</button>
</div>
</div>







</section>



    </div>
  )
}

export default Section2
