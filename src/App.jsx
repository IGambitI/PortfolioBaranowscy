import { BrowserRouter } from 'react-router-dom'
import { Header, About, Skills, Projects, Experience, Contact, Footer } from './components'

const App = () => {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-main-background bg-cover bg-no-repeat bg-center'>
            <Header/>
            <About/>
          </div>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>
          <div className='relative z-0'>
              <Footer/>
          </div>
        </div>        
      </BrowserRouter>
  )
}

export default App
