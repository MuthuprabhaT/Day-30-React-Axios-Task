import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './Components/Create'
import Read from './Components/Read'
import Edit from './Components/Edit'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Read />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
