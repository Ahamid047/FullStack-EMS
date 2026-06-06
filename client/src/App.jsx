import { Layout } from 'lucide-react'
import {Toaster} from 'react-hot-toaster'
import { Routes } from 'react-router-dom'

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