import { Outlet } from 'react-router-dom'
 
const Layout = () => {
  return (
    <div className='flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30'>
      <p> Sidebar</p>
      <main className='flex-1 overflow-y-auto'>
        <div>
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default Layout