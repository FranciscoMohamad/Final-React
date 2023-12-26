import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'


const App = () => {


  return (
    <BrowserRouter>

      <NavBar/>
      
        <Routes>
          <Route exact path='/' element={
              <ItemListContainer />}>
          </Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/categoria/:categoriaId' element ={<ItemListContainer/>}></Route>
          <Route exact path='/producto/:id' element ={<ItemDetailContainer/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App