import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoA from '../../assets/images/Vector.svg' //A.png
import AnimatedLetters from '../animated-letters/animated-letter.component'
import Logo from './logo/logo.component'
import Loader from 'react-loaders'

import './home.styles.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['s', 'i', 'l', ',']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>e</span> 
          <span className={`${letterClass} _13`}>l</span> 
          <span className={`${letterClass} _14`}>l</span> 
          <span className={`${letterClass} _15`}>o,</span> 
          <br /> 
          <span className={`${letterClass} _13`}>I</span> 
          <span className={`${letterClass} _14`}>'m</span> 
          <img src={LogoA} alt="A" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/><br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19}/>
        </h1>
        <h2> Full Stack Developer | Student </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
