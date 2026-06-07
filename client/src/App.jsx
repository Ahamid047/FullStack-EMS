import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/Layout'
import Login from './pages/LoginLanding'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Attandance from './pages/Attandance'
import Leave from './pages/Leave'
import PaySlips from './pages/PaySlips'
import PrintSlips from './pages/PrintSlips'
import Settings from './pages/Settings'

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route  path ="/login" element ={<Login/>}/>
        <Route element = {<Layout/>}>
          <Route path ="/dashboard" element ={<Dashboard/>}/>
          <Route path ="/employee" element ={<Employee/>}/>
          <Route path ="/attandance" element ={<Attandance/>}/>
          <Route path ="/leave" element ={<Leave/>}/>
          <Route path ="/pay-slips" element ={<PaySlips/>}/>
          <Route path ="/print-slips" element ={<PrintSlips/>}/>
          <Route path ="/settings" element ={<Settings/>}/>  
        
        </Route>
      </Routes>
    </>
  )
}

export default App