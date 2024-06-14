import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
function App() {


  return (
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact me" element={<Contact />} />
      </Routes>
</Router>
  )
}

export default App
