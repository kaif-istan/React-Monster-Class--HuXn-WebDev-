import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
import './Navigation.css'

const Nav = () => {
  return (
    <nav>
        <div className="container">
          <div className="nav-container">
            <input type="text" placeholder="Find products" className="search-input"/>
          </div>
        </div>

        <div className="profile-container">
          <a href="#">
            <FiHeart className='nav-icons' />
          </a>

          <a href="">
            <AiOutlineShoppingCart className='nav-icons' />
          </a>
          <a href="">
            <AiOutlineUserAdd className='nav-icons ' />
          </a>
        </div>

    </nav>
  )
}

export default Nav