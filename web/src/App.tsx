import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { Router } from './router'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
