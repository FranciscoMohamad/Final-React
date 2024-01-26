import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {

  const contador = 0

  return (
    <>
      <nav>
        <Link to='/'><div className="name">Mohamad Ecommerce</div></Link>
        <ul>
          <Link to='/'><button><strong>Home</strong></button></Link>
          <Link to='/categoria/ropa'><button><strong>Ropa</strong></button></Link>
          <Link to='/categoria/joyeria'><button><strong>Joyeria</strong></button></Link>
          <Link to='/categoria/electronica'><button><strong>Electronica</strong></button></Link>
          <Link to='/contacto'><button><strong>Contacto</strong></button></Link>
          <Link to='/cart'>
            <CartWidget
              contador={contador} />
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default NavBar