import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import { BsFillBootstrapFill } from "react-icons/bs";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [buttonSuccess, setButtonSuccess] = useState(false);
  return (
    <>
      <div>
        {visibility === true && (
          <Alert
            onClickClose={() => (setVisibility(false), setButtonSuccess(false))}
          >
            DissMissing显示
          </Alert>
        )}
        {buttonSuccess === true && (
          <Button
            color="success"
            onClickButton={() => (
              setVisibility(false), setButtonSuccess(false)
            )}
          >
            点击关闭
          </Button>
        )}
        {buttonSuccess === false && (
          <Button
            color="info"
            onClickButton={() => (setVisibility(true), setButtonSuccess(true))}
          >
            点击显示
          </Button>
        )}
        <span>
          <BsFillBootstrapFill size={50} color="green" />
        </span>
      </div>
    </>
  );
}

export default App;
