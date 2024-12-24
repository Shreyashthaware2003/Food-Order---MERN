// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home"
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
