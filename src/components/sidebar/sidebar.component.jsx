import './sidebar.styles.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoA from '../../assets/images/Vector.png'
import LogoAFull from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faInstagramSquare, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoA} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome}/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser}/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/projects'>
                <FontAwesomeIcon icon={faFolderOpen}/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope}/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://t.me/spaghetttti'>
                    <FontAwesomeIcon icon={faTelegram} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/spaghetttti/'>
                    <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/spaghetttti_/'>
                    <FontAwesomeIcon icon={faInstagramSquare} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;