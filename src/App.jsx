import './App.css'
import Blog from './Components/Blog'
import Button from './Components/Button'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import Projetos from './Components/Projetos'
import Footer from './Components/Footer'

function App() {

  return (
       <div>
        <Navbar />
        <Presentation />
        <Button />
        <Blog />
        <Projetos />
        <Footer />
      </div>
    
  )
}

export default App
