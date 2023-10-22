import 'bootstrap/dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import { useState } from 'react'

function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      {visibility === true && <Alert onClickClose={() => setVisibility(false)}>DissMissing显示</Alert>}
      <Button color='info' onClickButton={()=>setVisibility(true)}>点击显示</Button>
    </div>
    )
  }


export default App
