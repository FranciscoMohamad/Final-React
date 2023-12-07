import CartWidget from "./CartWidget"

const NavBar = ({ home, ropa, joyeria, electronica, name}) => {

  const contador = 0

  return (
    <>
        <nav>
            <div className="name">{name}</div>
            <ul>
              <button>{home}</button>
              <button>{ropa}</button>
              <button>{joyeria}</button>
              <button>{electronica}</button>
              <CartWidget
              contador={contador}/>
            </ul>
        </nav>
    </>
  )
}

export default NavBar