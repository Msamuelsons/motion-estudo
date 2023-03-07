import './App.css'
import Aula01 from './aula01'
import Aula02 from './aula02'
function App() {
  return (
    <section>
      <div className="content">
        <Aula01 />
      </div>
      <div className="content">
        <Aula02 title="Scroll Motion" />
      </div>
    </section>
  )
}

export default App
