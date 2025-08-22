import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
// import Logout from './components/Logout'
// import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          {/* <Route path='/user' element={<ProtectedRoutes />}> */}
            <Route path="dashboard" element={<Dashboard />}/>
          {/* </Route> */}
          {/* <Route path='/logout' element={<Logout />} /> */}
        </Routes>
      <Footer />  
    </>
  )
}

export default App
