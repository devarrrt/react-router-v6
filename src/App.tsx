import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const App = () => {

  const publicRoutes = [
    { path: "/login", component: <LoginPage />, exact: true }
  ]

  return (
    <div>
      <Routes>
        {publicRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  )
}

export default App
