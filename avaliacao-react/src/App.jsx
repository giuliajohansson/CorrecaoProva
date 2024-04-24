import './App.css'
import Cabecalho from './components/Cabecalho'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <Cabecalho/>
      <Evento
      titulo={'Evento SENAI'}
      descricao={'Descricao do evento'}
      horario={'Dia 24 as 12h'}
      local={'Sala de aula'}
      />
      <Galeria/>
      <Rodape/>
    </>
  )
}
export default App
