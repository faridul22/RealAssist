
import './App.css'
import Crime from './components/Crime/Crime'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='w-1/2 mx-auto'>
      <Header></Header>
      <Crime></Crime>
      <Footer></Footer>
    </div>
  )
}

export default App
