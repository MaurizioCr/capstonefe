import './App.css'
// importiamo il foglio CSS di bootstrap, UNA VOLTA SOLA in App.js
import 'bootstrap/dist/css/bootstrap.min.css'

// importiamo i componenti da noi scritti
// senza { } perchè tutti i miei componenti li esporto come "default"

import Home from './Components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Login from './Components/Login'
import Register from './Components/Register'
import Feedback from './Components/Feedback'


function App() {
  return (
    
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
      
        {/* voglio aggiungere un sottotitolo alla mia navbar, personalizzato! */}

        {/* ora è il momento di inserire il contenuto principale della landing page! */}
        <div className="flex-grow-1">
          <Routes>
            {/* cosa deve contenere una Route? deve contenere COSA montare (che componente) e DOVE montarlo (la rotta) */}
            {/* il path "/" indica la homepage, es. localhost:3000, www.sitodistefano.com */}
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Feedback/>} path="/feedback"/>
            
            {/* questa qui sopra è una rotta PARAMETRICA, che sfrutta l'operatore : per dare un nome generico
            a tutto quello che verrà dopo /detail/ */}

            {/* la rotta con path "*" cattura tutti i match non dichiarati nelle rotte precedenti */}
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
        <footer className="text-center" >
          LastWorld {new Date().getFullYear()}
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App

