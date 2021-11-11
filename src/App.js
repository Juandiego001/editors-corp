import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Index from './pages/Index/Index';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import Registrarse from './pages/Registrarse/Registrarse';
import PerfilEditor from './pages/PerfilEditor/PerfilEditor';
import TiposEditores from './pages/TiposEditores/TiposEditores';
import MisionVision from './pages/MisionVision/MisionVision';
import Terminos from './pages/Terminos/Terminos';
import Contacto from './pages/Contacto/Contacto';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Trato from './pages/Trato/Trato';
import MetodosPagos from './pages/MetodosPagos/MetodosPagos';

function App() {
  return (
    <>
      <main className="space_header">
        <Router>
          <Switch>
            {/* Pages */}
            <Route exact path='/' component={InicioSesion} />
            <Route exact path='/index' component={Index} />
            <Route exact path='/perfil-editor' component={PerfilEditor} />
            <Route exact path='/registrarse' component={Registrarse} />
            <Route exact path='/tipos-editores' component={TiposEditores} />
            <Route exact path='/mision-vision' component={MisionVision} />
            <Route exact path='/terminos' component={Terminos} />
            <Route exact path='/contacto' component={Contacto} />
            <Route exact path='/quienes-somos' component={QuienesSomos} />
            <Route exact path='/trato' component={Trato} />
            <Route exact path='/metodos-pagos' component={MetodosPagos} />
          </Switch>
        </Router>
      </main>

    </>
  );
}

export default App;
