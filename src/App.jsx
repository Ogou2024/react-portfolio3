import Navbar from "./components/Navbar"
import { Home } from './pages/Home'
import { Resume } from './pages/Resume'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import {Route, Routes} from "react-router-dom"

function App() {   
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>         
    </>
  )
}
export default App
