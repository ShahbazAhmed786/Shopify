import React from 'react'
import { Navbar } from './components/Navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import {Shop} from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './components/Footer';
import men_banner from './images/banner_mens.png'
import women_banner from './images/banner_women.png'
import kids_banner from './images/banner_kids.png'
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/login' element={<LoginSignup/>}/>
         <Route path='/cart' element={<Cart/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
 
   
      </>
  )
}

export default App