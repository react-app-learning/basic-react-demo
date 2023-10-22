import 'bootstrap/dist/css/bootstrap.css'
import ListGroup1 from './components/ListGroup1'
import ListGroup from './components/ListGroup'

function App() {
  const lists = ["北京","上海","广州","深圳"];
  return (
    <div>
      <ListGroup lists={lists} heading='ListGroup'/>
      <ListGroup1/>
    </div>
    )
  }


export default App
