import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from './components/ListGroup'

function App() {
  const lists = ["北京","上海","广州","深圳"];
  const handleClick = (name: string) => (console.log(name));
  return (
    <div>
      <ListGroup lists={lists} heading='ListGroup1' onSelectItem={handleClick}/>
      <ListGroup lists={lists} heading='ListGroup2' onSelectItem={handleClick}/>
    </div>
    )
  }


export default App
