import React from 'react'
import RoutesPage from './Routes/Routes'

import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Sign/Login'
import ExpectedIncome from './Components/Spendings/ExpectedIncome'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth/sign' element={<Login />} />
        <Route path='/expected-spendings' element={<ExpectedIncome />} />
      </Routes>
      <RoutesPage />
    </React.Fragment>
  )
}

export default App
