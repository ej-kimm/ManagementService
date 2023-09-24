import './styles/main.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import UserHome from './pages/UserHome'
import NotFound from './pages/NotFound'

function BaseRouter() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<AdminHome />} />
        <Route path="/user/*" element={<UserHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  )
}

export default App
