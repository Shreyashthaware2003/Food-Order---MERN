// import './App.css'
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home"
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
function App() {

  return (
    <>
      <ToastContainer />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
