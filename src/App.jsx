import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


const App = () => {

  const name = "Mohamad Ecommerce"
  const home = "HOME"
  const ropa = "ROPA"
  const joyeria = "JOYERIA"
  const electronica = "ELECTRONICA"
  const bienvenidos = "Bienvenidos a mi Ecommerce"
  return (
    <>

      <NavBar
        name={name}
        home={home}
        ropa={ropa}
        joyeria={joyeria}
        electronica={electronica}/>
      <ItemListContainer
        bienvenidos={bienvenidos}/>
    </>
  )
}

export default App