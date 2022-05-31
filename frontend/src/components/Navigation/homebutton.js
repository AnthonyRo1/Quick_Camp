import { NavLink } from "react-router-dom";
import './Navigation.css'
import logo from '../../images/logo/quickcamp-logo.png'
const HomeButton = () => {
  return (
    <NavLink className='home' exact to="/"><img src={logo} className='home-btn'></img></NavLink>
  )
}

export default HomeButton;