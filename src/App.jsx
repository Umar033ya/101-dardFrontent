import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Section1 from './components/main/section1/section1'
import Section2 from './components/main/section2/section2'
import Section3 from './components/main/section3/section3'
import Section4 from './components/main/section4/section4'
import Section5 from './components/main/section5/section5'
import Section6 from './components/main/section6/section6'
import Section7 from './components/main/section7/section7'

function App() {

  return (
    <div className='body'>
       <Header/>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Section7/>
       <Footer/>
    </div>
  )
}

export default App
