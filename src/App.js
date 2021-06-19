import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div className="App-container">      
      <ItemListContainer title={"Bienvenidos a"} subtitle={"Global Cupon"}/>
      </div>
    </>
    
  );
}

export default App;
