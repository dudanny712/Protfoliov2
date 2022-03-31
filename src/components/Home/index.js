import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
// import LogoTitle from "../../assets/images/logo-s.png";
import './index.scss';
import Logo from './Logo'



const Home = () => {
  const [letterClass, setLetterClass]= useState('text-animate')
  const nameArray = [' ', 'D', 'a', 'n', 'i', 'e', 'l', ' ', 'A', 'n', 't', 'h', 'o',   'n', 'y']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
        <div className="text-zone">

            <h1>
              
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>

            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            index={15}/>
            {/* <img src={LogoTitle} alt="developer"/> */}
             
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            index={22}/>
            </h1>
            <h2>Full Stack Web Developer</h2>
            <Link to="/contact" className="flat-button"> CONTACT ME</Link>
        </div>
      <Logo/>
    </div>
  )
}

export default Home
