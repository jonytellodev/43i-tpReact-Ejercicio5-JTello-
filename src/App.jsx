import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdministrarColores from "./components/AdministrarColores";
import SumatoriaColores from "./components/SumatoriaColores";

function App() {
  return (
    <>
      <AdministrarColores></AdministrarColores>
      <SumatoriaColores></SumatoriaColores>
      <footer className="text-center py-3">
        <p className="textRemFormat2">&copy;2023 - Desarrollado por JonyTelloDEV</p>
        <p className="textRemFormat3">Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
