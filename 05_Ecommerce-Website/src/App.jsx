import React from 'react'
import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
const App = () => {
  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended />
      {/* <Products /> */}
    </div>
  )
}

export default App