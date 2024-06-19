import "./App.css";
import UseState from "./hooks/useState";
import UseReducer from "./hooks/useReducer";
import UseEffect from "./hooks/useEffect";
import UseLayoutEffect from "./hooks/useLayoutEffect";
import UseContext from "./hooks/useContext";
import UseRef from "./hooks/UseRef";
import UseImperativeHandle from "./hooks/UseImperativeHandle";

function App() {
  return (
    <>
      {/* <UseState />
      <UseReducer />
      <UseEffect />
      <UseLayoutEffect />
      <UseContext />
      <UseRef/> */}
      <UseImperativeHandle/>
    </>
  );
}

export default App;
